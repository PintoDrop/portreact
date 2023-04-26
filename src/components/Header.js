import React from "react";

function Header(props) {
  return (
    <header className="flex-row text-center">
      <h1>Welcome to Michael's Portfolio!</h1>
      {/* <img className="banner" src="./images/headerImg.jpg" alt="coding background"></img> */}
      {/* {props.children} */}
    </header>
  );
}



export default Header;