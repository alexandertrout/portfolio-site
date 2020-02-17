import React, { Component } from "react";
import styled from "styled-components";
// about me pictures
import NC from "./images/NorthCoders.png";
import Alex from "./images/Alex.png";
import ManMet from "./images/ManMet.png";
// portfolio pics
import form from "./images/form.png";
import toDoList from "./images/todo.png";
import SongGame from "./images/SongGame.png";
import comingSoon from "./images/comingSoon.png";

const About = styled.section`
  margin: 0.5vw 1vw 0.5vw;
  padding: 0vw 2vw;
  font-size: 2vh;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  align-items: center;
`;

const AboutText = styled.section`
  margin: 0.5vw 1vw 0.5vw;
  padding: 0vw 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
`;

class CenterAbout extends Component {
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
    ]
  };
  render() {
    return (
      <section id="centerBorder">
        <section class="center">
          <p class="centerTitle"> ABOUT ME</p>
          <About>
            <AboutText>
              Currently attending a 12 week software developer bootcamp designed
              to provide me with the necessary skills to start work as a junior
              developer. Learning to program in JavaScript, it covers
              test-driven development, pair programming, object-oriented
              programming, and both front and back end development. <br />
              <br />I am experienced dealing with asynchronous programming,
              using APIs and databases, Express, SQL, and React using styled
              components. Due to graduate early March 2020 Ill be looking for
              positions immediately.
            </AboutText>
            <div id="welcomeBodyPics">
              <p id="m">
                <img src={NC} alt="Alex" class="img" />
              </p>
              <p id="n">
                <img src={Alex} alt="Alex" class="img" />
              </p>
              <p id="q">
                <img src={ManMet} alt="Alex" class="img" />
              </p>
            </div>
            <AboutText>
              I graduated from Manchester metropolitan university in June 2019
              with a first in Environmental Science. My key interests included;
              data analysis and statistics, applied GIS & remote sensing and
              sustainable production methods. My dissertation was on how
              climactic factors can influence air quality in cities.
              <br />
              <br />
              My most recent experience is as a national account manager. I have
              experience effectively communicating and developing relationships
              with businesses from a wide range of industries, with a focus on
              sustainability and transparent waste management.
            </AboutText>
          </About>
        </section>
      </section>
    );
  }
}

export default CenterAbout;
