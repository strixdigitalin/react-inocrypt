import React from "react";

function Heading(props) {
  console.log(props);
  return <span>{props.text}</span>;
}

export default Heading;
