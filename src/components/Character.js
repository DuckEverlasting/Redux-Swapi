import React from "react";

const Character = props => {
  return (
  <div className="Character">
    <h1>{props.character.name}</h1>
      <p>Born: {props.character.birth_year}</p>
      <p>Eyes: {props.character.eye_color}</p>
      <p>Hair: {props.character.hair_color}</p>
  </div>
  );
};

export default Character;
