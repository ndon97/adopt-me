import ReactDOM from 'react-dom';
import React from 'react';


const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(pet, {
      name: "Meow",
      animal: "Cat",
      breed: "Catanese",
    }),
    React.createElement(pet, {
      name: "Roger",
      animal: "Rabit",
      breed: "Rabitenese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
