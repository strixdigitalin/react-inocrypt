import React from "react";
import { useState } from "react";

function ReactForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    number: "",
    fullname: "",
  });

  const submit = () => {
    console.log(formData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setFormData({ ...formData, [name]: e.target.value });
  };

  const FormInputs = [
    {
      name: "name",
    },
    {
      name: "age",
    },
    {
      name: "gender",
    },
  ];

  console.log(formData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1%" }}>
        {FormInputs.map((item, key) => {
          return (
            <input
              key={key}
              name={item.name}
              type="text"
              placeholder={item.name}
              //   value={item.value}
              value={formData[item.name]}
              onChange={(e) => handleChange(e)}
            />
          );
        })}

        <button style={{ marginTop: "10px" }} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReactForm;
