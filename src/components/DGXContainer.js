import { memo } from "react";

const DGXContainer = memo(({ children }) => {
  console.log("DGXContainer rendered!");

  return <div className="container">{children}</div>;
});

export default DGXContainer;
