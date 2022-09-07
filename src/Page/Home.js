import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("default");
  const [list, setList] = useState([]);
  const [show, setShow] = useState("");

  const getValue = (e) => {
    setList([...list, name]);
  };

  const deleteThis = (item) => {
    const filteredList = list.filter((value) => {
      if (value != item) return true;
      else return false;
    });
    setList(filteredList);
  };

  return (
    <div>
      <input type="text" name="age" onChange={(e) => setName(e.target.value)} />
      <button onClick={getValue}>Submit</button>
      {list.map((item) => {
        return (
          <div>
            {item}

            <button onClick={() => deleteThis(item)}>Delete</button>
          </div>
        );
      })}
      <div>{show}</div>
    </div>
  );
}
