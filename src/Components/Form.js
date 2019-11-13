import React, { useState } from "react";

const Form = props => {
  const [card, setCard] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewCard(card);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={card.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={card.email}
      />

      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={card.role}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
