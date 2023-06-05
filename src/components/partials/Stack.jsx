import React from "react";

// SVG Import
import skills from "../../assets/icons/skills.svg";
// Front End
import js from "../../assets/icons/javascript.svg";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import react from "../../assets/icons/react.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import graphql from "../../assets/icons/graphql.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import hubspot from "../../assets/icons/hubspot.svg";
import photoshop from "../../assets/icons/photoshop.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import aftereffects from "../../assets/icons/ae.svg";
import dimension from "../../assets/icons/dimension.svg";
import next from "../../assets/icons/next.svg";
import handlebars from "../../assets/icons/handlebars.svg";
// Back End
import mysql from "../../assets/icons/mysql.svg";
import express from "../../assets/icons/express-white.svg";

// TODO: Add icons for stacks not yet caught in the switch statement.

function Stack({ stack }) {
  return (
    <div>
      <div className="flex flex-row justify-evenly">
        {stack.map((tech, index) => {
          let stackIcon;
          let stackAlt;

          // SVG Icons that are currently used in the project cards.

          switch (tech) {
            case "React":
              stackIcon = react;
              stackAlt = "React.js";
              break;
            case "JavaScript":
              stackIcon = js;
              stackAlt = "JavaScript";
              break;
            case "CSS":
              stackIcon = css;
              stackAlt = "CSS";
              break;
            case "Tailwind":
              stackIcon = tailwind;
              stackAlt = "Tailwind";
              break;
            case "Express":
              stackIcon = express;
              stackAlt = "Express.js";
              break;
            case "Handlebars":
              stackIcon = handlebars;
              stackAlt = "Handlebars";
              break;
            case "Bootstrap":
              stackIcon = bootstrap;
              stackAlt = "Bootstrap";
              break;
            case "Mongo":
              stackIcon = mongo;
              stackAlt = "Mongodb";
              break;
            case "SQL":
              stackIcon = mysql;
              stackAlt = "MySQL";
              break;
            case "GraphQL":
              stackIcon = graphql;
              stackAlt = "GraphQL";
              break;
            case "Node":
              stackIcon = node;
              stackAlt = "Node";
              break;
            case "HTML":
              stackIcon = html;
              stackAlt = "HTML";
              break;
            case "Next":
              stackIcon = next;
              stackAlt = "Next";
              break;
            case "Hubspot":
              stackIcon = hubspot;
              stackAlt = "Hubspot";
              break;
            case "Photoshop":
              stackIcon = photoshop;
              stackAlt = "Photoshop";
              break;
            case "Illustrator":
              stackIcon = illustrator;
              stackAlt = "Illustrator";
              break;
            case "AfterEffects":
              stackIcon = aftereffects;
              stackAlt = "AfterEffects";
              break;
            case "Dimension":
              stackIcon = dimension;
              stackAlt = "Dimension";
              break;

            default:
              stackIcon = skills;
              stackAlt = "Skills";
          }

          return (
            <div key={index}>
              {/* Tooltip wraps the svg */}

              <img
                className="w-6   aspect-square"
                src={stackIcon}
                alt={stackAlt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stack;
