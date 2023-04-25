import React from "react";
import self from "../../src/images/image.pro.jpg"

function Aboutme() {
  return (
    <section className="card aboutme">
      <div className="text-center">
        <p>
          My name is Michael and I started getting into coding this past year. I
          attended a UCI bootcamp that allowed me to gain some skills in web
          development. Prior to coding I was working in the health care field. I
          have several projects I was able to create thanks to the teachings of
          the UCI course.
        </p>
        <img
          src={self}
          alt="Michael Selfie" 
          // style="width:350px;height:185px"
        ></img>
        {/* {props.children} */}
      </div>
    </section>
  );
}

export default Aboutme;