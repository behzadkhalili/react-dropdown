import { memo } from "react";

const DGXLogo = memo(() => {
  console.log("DGXLogo rendered!");

  return (
    <img
      className="logo"
      alt="Express logo"
      src={"/assets/pixel-arts/pixel-express.png"}
    />
  );
});

export default DGXLogo;
