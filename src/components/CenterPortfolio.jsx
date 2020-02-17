import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
// portfolio pics
import feNcNews from "./images/feNcNews.png";
import beNcNews from "./images/be-nc-news.png";
import SongGame from "./images/SongGame.png";
import form from "./images/form.png";
import toDoList from "./images/todo.png";
import comingSoon from "./images/comingSoon.png";
//

const ProjectContainer = styled.section`
  margin: 0.5vw 1vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1vw;
`;

class CenterPortfolio extends Component {
  state = {
    portfolio: [
      {
        picture: feNcNews,
        name: "News Website Front End (React)",
        link: "https://alex-trout-nc-news.netlify.com/",
        GitHub: "https://github.com/alexandertrout/fe-nc-news",
        description:
          "The hosted front end single-page application built using react, for desktop and mobile web. The aim for this project was to build an app similar to reddit, which allows users to post articles as well as like, comment and vote on other users articles."
      },
      {
        picture: beNcNews,
        name: "News Website Backend Server",
        link: "https://alex-be-nc-news.herokuapp.com/api",
        GitHub: "https://github.com/alexandertrout/alex-be-nc-news",
        description: `A Server built using express.js, postgreSQL and knex, contacted by the front end app of Nc News. RESTful endpoints avaliable are detailed in the README for this repo on my GitHub.`
      },
      {
        picture: SongGame,
        name: "Song Guessing Game",
        link: "https://pickthefakesong.herokuapp.com/",
        GitHub: "https://github.com/alexandertrout/songgame",
        description:
          "A Game hosted on heroku, runs using an express server backend to contact the apple music API with a query. The aim is to guess the fake song out of the line up of songs returned to the user."
      },
      {
        picture: form,
        name: "Validation Form",
        link: false,
        GitHub: false,
        description:
          "A html form that uses DOM manipulation to check if conditions for input fields are met before submitting."
      },
      {
        picture: toDoList,
        name: "To Do List",
        link: false,
        GitHub: false,
        description:
          "Another DOM maniuplation exercise, using event listeners to add functionality to a simple to do list."
      },
      {
        picture: comingSoon,
        name: "Next Project ... ",
        link: false,
        GitHub: false,
        description: "Check Back for my next project soon!"
      }
    ]
  };
  render() {
    return (
      <section id="centerBorder">
        <section class="center">
          <p class="centerTitle"> PORTFOLIO</p>
          <ProjectContainer>
            {this.state.portfolio.map(piece => {
              return (
                <ProjectCard
                  key={piece}
                  picture={piece.picture}
                  name={piece.name}
                  link={piece.link}
                  GitHub={piece.GitHub}
                  description={piece.description}
                />
              );
            })}
          </ProjectContainer>
          <p id="bottom"></p>
        </section>
      </section>
    );
  }
}

export default CenterPortfolio;
