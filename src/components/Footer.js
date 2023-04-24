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
  ];

  return (
    <footer className="text-center">
      {icons.map((icon) => (
        <a href={icon.link} key={icon.name}></a>
      ))}
    </footer>
  );
}

export default Footer;
