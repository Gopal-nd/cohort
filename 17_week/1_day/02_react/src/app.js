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

const AtherBikes = (props) =>{
  return (
    React.createElement(
      'li',
        {},
      `${props.name} - ${props.price}` 
    )
  )
}
const App=() => {
  return React.createElement(
    "div",
    {class:"text-3xl text-red-500 font-bold underline", id:"ok"},
    React.createElement("h1", {}, "Best Ather Bikes"),
    React.createElement(AtherBikes , {name:"Ather 450x", price:"Rs. 1.5 Lakhs"}),
    React.createElement(AtherBikes , {name:"Ather 450s", price:"Rs. 1.5 Lakhs"}),
    React.createElement(AtherBikes , {name:"Ather Riztha", price:"Rs. 1.5 Lakhs"}),
    React.createElement(AtherBikes , {name:"Ather 450", price:"Rs. 1.5 Lakhs"}),
    React.createElement(AtherBikes , {name:"Ather 450 apex", price:"Rs. 1.5 Lakhs"}),

  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
