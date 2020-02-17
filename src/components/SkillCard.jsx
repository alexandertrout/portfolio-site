import React from "react";

const SkillCard = props => {
  return (
    <section class="skillCard">
      <img class="skillPicture" src={props.picture} alt={props.name} />
      <div> {props.name} </div>
    </section>
  );
};

export default SkillCard;
