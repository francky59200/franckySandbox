import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const [clients, setClients] = useState([]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handelAdd = () => {
    setClients([...clients, inputValue]);
    setInputValue("");
  };

  const handleEdit = (key, item) => {
    setClients([...clients, clients.splice(key, 1, item)]);
  };

  const handleDelete = key => {
    setClients([...clients, clients.splice(key, 1)]);
  };
  return (
    <div>
      <h2>My Form is starting</h2>
      {clients.map((item, key) => (
        <li key={key}>
          <input value={item} onChange={e => handleEdit(key, e.target.value)} />
          <button onClick={() => handleDelete(key)}>X</button>
        </li>
      ))}

      <input value={inputValue} onChange={handleChange} />

      <button onClick={handelAdd}>Add Item</button>
    </div>
  );
};

export default Form;
