import { memo, useEffect, useState, useTransition } from "react";

const initialData = {
  key: 0,
  name: "یک مورد را انتخاب کنید",
};

const defaultItem = {
  key: 2,
  name: "پاترول",
};

const listData = [
  {
    key: 1,
    name: "کامارو",
  },
  {
    key: 2,
    name: "پاترول",
  },
];

const DGXDropdown = memo(({ handler }) => {
  console.log("DGXDropdown rendered!");

  const [showList, setShowList] = useState(false);
  const [data, setData] = useState(initialData);
  const [list, setList] = useState(listData);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (defaultItem) {
      handler(defaultItem);
      setData(defaultItem);
    }
  }, [handler, setData]);

  const handleClick = () => {
    setShowList(true);
  };

  const selectItem = (item) => {
    startTransition(() => {
      handler(item);
      setShowList(false);
    });
    setData(item);
  };

  return (
    <>
      <div className="drop-down">
        <div
          className={`input size text color ${showList && "active"}`}
          onClick={() => handleClick()}
        >
          {data.name}
        </div>
        {showList && (
          <div className="list size color">
            {list?.map((item) => (
              <div
                key={item?.key}
                className="item size text"
                onClick={() => selectItem(item)}
              >
                {item?.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
});

export default DGXDropdown;
