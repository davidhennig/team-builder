import React from "react";

const FormCard = props => {
  console.log(props);
  return (
    <div>
      {props.form.map(card => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          <p>{card.email}</p>
          <p>{card.role}</p>
        </div>
      ))}
    </div>
  );
};

export default FormCard;
