import React from "react";

function Comp14() {
  const name = " this is my name";

  const callthisFunction = () => {
    if (4 > 5) {
      return <h1>Call this function</h1>;
    } else {
      return <h1>4 is less than 5</h1>;
    }
  };

  return (
    <div>
      <div>hello</div>
      {callthisFunction()}
      <div>hello 22 </div>
      <p>hello 33 </p>
      <h2>hello 44</h2>
    </div>
  );
}

export const NotDefaults = () => {
  return <div>not a default</div>;
};

export default Comp14;
