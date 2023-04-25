import React from "react";

function Footer() {
  const icons = [
    {
      name: "Github",
      link: "https://github.com/PintoDrop",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/michael-b-4612732b/",
    },

    {
      name: "Twitter",
      link: "https://twitter.com/MichaelJBenzer",
    },
  ];

  return (
    <footer className="text-center">
      <p>Footer</p>
      
      {/* {icons.map((icon) => (
        <a href={icon.link} key={icon.name} target="_blank">
          <i className={icon.name}></i>
        </a>
      ))} */}
      
    </footer>
  );
}

export default Footer;
