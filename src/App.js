import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import FormCard from "./Components/FormCard";

function App() {
  const [form, setForm] = useState([
    {
      id: 1,
      name: "david hennig",
      email: "david@hennig.com ",
      role: "Dev"
    }
  ]);

  const addNewCard = card => {
    const newCard = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role
    };
    setForm([...form, newCard]);
  };
  return (
    <div className="App">
      <h1>My Form</h1>
      <Form addNewCard={addNewCard} />
      <FormCard form={form} />
    </div>
  );
}

export default App;
