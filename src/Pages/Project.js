import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  const [works] = useState([
    {
      name: "Weather Tracker",
      description:
        "This is an application where the user is able to get a 5 day weather forcast by searching the desired city.",
      link: "https://pintodrop.github.io/weather-/",
      github: "https://github.com/PintoDrop/weather-",

      image: require("../images/weathertrack.JPG"),
      // {props.children}
    },
    {
      name: "Auto Self Help",
      description:
        "This application allows the user to post issues about their vehicle and other users can respond with possible solutions.",
      link: "https://agile-ocean-74686.herokuapp.com/",
      github: "https://github.com/PintoDrop/autoselfhelp",

      image: require("../images/autoselfhelp.JPG"),
    },
    {
      name: "Coding Quiz",
      description:
        "With this application the user can test their knowledge of coding with an interactive quiz. The user will be timed and for incorrect answers the timer takes away 5 seconds.",
      link: "https://pintodrop.github.io/codequiz/",
      github: "https://github.com/PintoDrop/codequiz",

      image: require("../images/codequiz.JPG"),
    },
    {
      name: "JATE",
      description:
        "This application is a text editor designed to write test code in. The user will be able to download the application and use it offline if need be and follows the formatting of code.",
      link: "https://hidden-hamlet-64843.herokuapp.com/",
      github: "https://github.com/PintoDrop/textedit",

      image: require("../images/jate.JPG"),
    },
    {
      name: "Hotels On Demand",
      description:
        "The application here allows a user to search a city they are travelling to and see what hotels are nearby. The user will also be presented with the resturants that are nearby that hotel as well and both will load onto the same page. This will give the user a good way to find food options for when they are travelling.",
      link: "https://thandyn.github.io/Hotels-on-Demand/",
      github: "https://github.com/thandyn/Hotels-on-Demand",

      image: require("../images/hotelsondemand.JPG"),
    },

    {
      name: "Password Generator",
      description:
        "This application allows the user to randomly generate a password. The user is given prompts for the desired criteria and a password is created in the box below.",
      link: "https://pintodrop.github.io/Challenge-3/",
      github: "https://github.com/PintoDrop/Challenge-3",

      image: require("../images/passwordGen.JPG"),
      // src={require("../images/image.pro.jpg")}
    },
  ]);

  return (
    <div>
        <h2>Portfolio</h2>
      <div className="cards project flex col-auto mb-3 ">
        {works.map((work, idx) => (
          <Card className="myWork" style={{ width: "18rem" }}>
            <Card.Img variant="top" className="workImg" src={work.image} />
            <Card.Body>
              <Card.Title className="projectName">
                <h2>{work.name}</h2>
              </Card.Title>
              <Card.Text className="projectDesc">{work.description}</Card.Text>
              <a href={work.link}>
                <Button variant="warning text-center" className="projectBtn">
                  View My Project
                </Button>
              </a>
              <a href={work.github}>
                <Button variant="info text-center" className="projectBtn">
                  View My Code
                </Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project;
