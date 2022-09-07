import React, { Component, useState } from "react";

function Calculator() {
  return <div></div>;
}

const Value = (props) => {
  if (true) {
    return <h2 style={{ color: "red" }}> {props.value} </h2>;
  }
};

const Add = () => {
  const [state, setState] = useState(1);
  return <h1>addition {state}</h1>;
};

const Sub = (props) => {
  console.log(props);
  return (
    <h1>
      substraction is
      <Value value={props.first - props.second} />
    </h1>
  );
};
const MyComponent = () => {
  return <h1>my component</h1>;
};

// class MyComponent extends Component {
//   render() {
//     return <h1>my component</h1>;
//   }
// }

const Mul = () => {
  return <h1>mul </h1>;
};
const Division = () => {
  return <h1>division </h1>;
};

// export { Add, Sub, Mul, Division, MyComponent };

export { Mul, Sub, Division };
const SendThis = { Multiplication: Mul, Sub: Sub, Division: Division };
export default { Multi: Mul, Sub: Sub, Division: Division };
