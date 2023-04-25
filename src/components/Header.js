import React from "react";
import headerImg from "../../src/images/headerImg.jpg"

function Header(props) {
  return (
    <header className="flex-row text-center">
      <h1>Welcome to Michael's Portfolio!</h1>
      <img src={headerImg} alt="coding background"></img>
      {props.children}
    </header>
  );
}



export default Header;