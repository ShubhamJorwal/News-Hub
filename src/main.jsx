import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import router from "./Rconfig/Router";
import { RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <React.StrictMode>
      <LoadingBar color="blue" height={3} progress={100} />
      <RouterProvider setProgress={setProgress} router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
