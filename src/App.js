import { useCallback, useState } from "react";

import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";

import "./App.css";
import "./fonts/font.css";

const result = "هیچ!";

function App() {
  const [data, setData] = useState({});

  const handle = useCallback((item) => {
    console.log(item);
    setData(item);
  }, []);

  console.log("App");

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown handler={handle} />
        </div>
        <button className="result">{data?.name || result}</button>
      </DGXContainer>
    </div>
  );
}

export default App;
