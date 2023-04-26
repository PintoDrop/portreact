import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



function Resume() {
  return (
    <div className="cards resume flex col-auto mb-3 ">
      <Card style={{ width: "18rem" }} className="resume">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Skills & Languages</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. 
          </Card.Text>
          <a href="https://my.indeed.com/p/michaelb-140gjwd">
            <Button variant="primary">Download my resume</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Resume;



