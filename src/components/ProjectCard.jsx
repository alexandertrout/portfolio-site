import React from "react";
import styled from "styled-components";

const Project = styled.section`
  height: 25vw;
  background-color: whitesmoke;
  color: black;
  display: grid;
  grid-template-rows: 1.5fr 3fr 1fr 0.5fr 1fr;
  padding: 0.5vw;
  font-size: 1vw;
  align-items: center;
  align-content: center;
  text-align: center;
`;
const ProjectPictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const ProjectPicture = styled.img`
  height: 12vw;
  width: 18vw;
`;

const Title = styled.div`
  font-size: 1.7vw;
`;

const ProjectCard = props => {
  return (
    <Project>
      <Title> {props.name} </Title>
      <ProjectPictureContainer>
        <ProjectPicture src={props.picture} alt={props.name} />
      </ProjectPictureContainer>
      {props.link ? (
        <a href={props.link}> Click Here to View</a>
      ) : (
        <div>No Link Yet!</div>
      )}
      <div> {props.description} </div>
      {props.GitHub ? (
        <a href={props.GitHub}> Click Here for GitHub</a>
      ) : (
        <div></div>
      )}
    </Project>
  );
};

export default ProjectCard;
