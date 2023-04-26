import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Resume() {
  return (
    <div className="cards resume flex col-auto mb-3 ">
      <Card style={{ width: "18rem" }} className="resume">
        <Card.Body>
          <Card.Title><h2>Proficiencies</h2></Card.Title>
          <Card.Text className="resume1">
            {/* <ul> */}
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Handle Bars</li>
            <li>React</li>
            <li>APIs</li>
            <li>MySQL</li>
            <li>jQuery</li>

            {/* </ul> */}
          </Card.Text>
          <a href="https://my.indeed.com/p/michaelb-140gjwd">
            <Button variant="info" className="resumeBtn">
              Download my resume
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Resume;

