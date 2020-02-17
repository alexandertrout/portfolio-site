import React, { Component } from "react";
import { Router } from "@reach/router";
import CenterHome from "./CenterHome";
import CenterAbout from "./CenterAbout";
import CenterPortfolio from "./CenterPortfolio";
import CenterContact from "./CenterContact";

import SkillCard from "./SkillCard";
// sidebar Left icons
import gitHub from "./images/gitHub.png";
import dev2 from "./images/dev2.png";
import LI from "./images/linkedIn.png";
import IG from "./images/instagram.png";
import FB from "./images/facebook.png";
// skills icons
import javascript from "./images/javascript.png";
import nodejs from "./images/node-js.png";
import react from "./images/React.png";
import css from "./images/css.png";
import postgres from "./images/postgresql.png";
import golang from "./images/golang.png";
import html from "./images/HTML.png";
import knex from "./images/knex.png";
import tdd from "./images/TDD.png";

// portfolio pics
import form from "./images/form.png";
import toDoList from "./images/todo.png";
import SongGame from "./images/SongGame.png";
import comingSoon from "./images/comingSoon.png";

class Main extends Component {
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
    skills: [
      { picture: javascript, name: "Javascript" },
      { picture: nodejs, name: "Node.js" },
      { picture: css, name: "CSS" },
      { picture: html, name: "HTML" },
      { picture: react, name: "React" },
      { picture: golang, name: "Golang" },
      { picture: postgres, name: "Postgres SQL" },
      { picture: knex, name: "Knex.js" },
      { picture: tdd, name: "TDD" }
    ]
  };

  render() {
    const { portfolio } = this.state;
    return (
      <div id="main">
        <div class="sidebar">
          <a href="https://github.com/alexandertrout">
            <img src={gitHub} alt="gitHub" class="v" />
          </a>
          <a href="https://dev.to/alexandertrout">
            <img src={dev2} alt="dev" class="v" />
          </a>
          <a href="https://www.linkedin.com/in/alexandertrout/">
            <img src={LI} alt="LI" class="v" />
          </a>
          <a href="https://www.instagram.com/alexandertrout/">
            <img src={IG} alt="IG" class="v" />
          </a>
          <a href="https://www.facebook.com/alex.trout.988">
            <img src={FB} alt="FB" class="v" />
          </a>
        </div>
        <Router>
          <CenterHome path="/" />
          <CenterAbout path="/about" />
          <CenterPortfolio path="/portfolio" />
          <CenterContact path="/contact" />
          {/* <CenterBlog path="/blog" /> */}
        </Router>
        <div id="rightSidebar">
          {/* <p class="centerTitle"> SKILLS</p> */}
          {this.state.skills.map(skill => {
            return (
              <SkillCard
                key={portfolio}
                picture={skill.picture}
                name={skill.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
