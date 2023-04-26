import React from "react";
import Card from "react-bootstrap/Card";
// import self from "../../src/images/image.pro.jpg"



function Aboutme() {
  return (
 
    
    <section className="card aboutme">
      <div className="text-center ">
        <h2>About Me</h2>
        <p>
          I began coding in 2022 and have been able to attend a UCI bootcamp
          that allowed me to gain some skills in web development. Thanks to this
          bootcamp I have been able to learn and create several applications. I 
          am interested in working in web development to use my skills to create applications
          and collaborate with other coders.
        </p>
        <Card className="aboutmecard flex-row" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h2>Background</h2>
            </Card.Title>
            <Card.Text>
              I have a background in music and have graduated with a B.A. in
              music technology in 2010. I have worked as an audio engineer and
              talent scout at several record studios and a music label. I
              recently have been working in health care in drug and alcohol
              treatment where I was able to find rewarding work helping others
              that struggle with addiction.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="aboutmecard2 flex-row" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h2 className="card1">Passions</h2>
            </Card.Title>
            <Card.Text>
              Since I was young I was always interested in computers and how
              they work. I am highly motivated and have an interest in working on 
              video games on a coding level.
              I also enjoy creating music and always wanted to work with video 
              games with creating sound tracks. 
            </Card.Text>
          </Card.Body>
        </Card>
        {/* ))} */}

        <img
          className="selfie"
          src={require("../images/image.pro.jpg")}
          alt="Michael Selfie"
          ></img>
        {/* {props.children} */}
      </div>
    </section>
        
  );
}

export default Aboutme;