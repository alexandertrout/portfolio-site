import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as utils from "../utils/utils";
import form from "./images/form.png";
import toDoList from "./images/todo.png";
import SongGame from "./images/SongGame.png";
import comingSoon from "./images/comingSoon.png";

const keyFrameOne = keyframes`
   0% {
    left: 0;
  }
  50% {
    left: -110% ;
  }
  100% {
    left: 0;
  }
`;

const Body = styled.section`
  height: 60vh;
  position: relative;
  overflow: hidden;
  margin: 0.5vw 1vw 0.5vw;
  padding: 0vw 2vw 4vw;
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  font-size: 1vw;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  align-items: center;
`;

const InstagramFeed = styled.div`
  position: absolute;
  left: 0;
  bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3vw;
  justify-items: center;
  justify-content: middle;
  align-items: center;
  animation: ${keyFrameOne} 50s alternate;
`;

const Image = styled.img`
  height: auto;
  width: 12vw;
  border-radius: 3px;
  box-shadow: -1px 1px 2px -2px rgba(54, 53, 54, 1);
`;

class CenterHome extends Component {
  state = {
    portfolio: [
      {
        picture: form,
        name: "Validation Form",
        description:
          "A html form that uses DOM manipulation to check if conditions for input fields are met before submitting."
      },
      {
        picture: toDoList,
        name: "To Do List",
        description:
          "Another DOM maniuplation exercise, using event listeners to add functionality to a simple to do list."
      },
      {
        picture: SongGame,
        name: "Song Guessing Game",
        description:
          "A Game hosted on heroku, runs using an express server backend to contact the apple music API with a query. The aim is to guess the fake song out of the line up returned to the user."
      },
      {
        picture: comingSoon,
        name: "Next Project ... ",
        description: "Check Back for my next project soon!"
      }
    ],
    images: []
  };

  componentDidMount = () => {
    utils.getInfo("alexandertrout").then(response => {
      this.setState({ images: response });
    });
  };

  render() {
    console.log(this.state);
    return (
      <section id="centerBorder">
        <section class="center">
          <p class="centerTitle"> HOME</p>
          <Body>
            <p>
              Hey, welcome to my online portfolio website. <br></br>
              <br></br>Have a look over on the About me tab to see a little bit
              about my background and how I ended up in coding. On the Portfolio
              tab there are some examples of my recent work, and links to the
              corresponding repos on GitHub. If you have any questions or Job
              opportunites please do not hesitiate to contact me either by phone
              or email.
            </p>
            <InstagramFeed>
              {this.state.images.map(image => {
                return <Image src={image} alt="Alex" class="img" />;
              })}
            </InstagramFeed>
          </Body>
          <p id="bottom"></p>
        </section>
      </section>
    );
  }
}

export default CenterHome;
