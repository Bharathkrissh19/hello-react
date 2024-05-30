import react from "react";
import reactDom from "react-dom/client";
import Header from "./Components/Header";
import Body from "./components/Body"; 
import {Body }from "./components/Body"; 






const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("boot"));
root.render(<AppLayout />);
