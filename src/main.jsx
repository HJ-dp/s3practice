import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

//스타일
import { Global } from "@emotion/react";
import { globalCss, globalFont } from "./styles/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={[globalCss, globalFont]} />
      <Router />
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);
