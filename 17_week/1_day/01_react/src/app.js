// Clinet Side 

// const App=() => {
//   return React.createElement(
//     "div",
//     {class:"text-3xl text-red-500 font-bold underline", id:"ok"},
//     React.createElement("h1", {}, "Hello Chai Chill - React - 18 ")
//   );
// }

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));


// Server side Rendering 
import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"
const App=() => {
  return React.createElement(
    "div",
    {class:"text-3xl text-red-500 font-bold underline", id:"ok"},
    React.createElement("h1", {}, "Hello Chai Chill - React - 18 ")
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
