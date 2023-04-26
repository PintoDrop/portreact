import React from "react";
import Button from "react-bootstrap/Button";

function Footer() {
  const social = [
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
    <footer className="text-center ">
      {/* add css to fix up */}
      {social.map((social) => (
        <a
          className="link-item"
          href={social.link}
          key={social.name}
          target="_blank"
        >
          <Button className="link-button" variant="danger">
            <i className={social.name}>{social.name}</i>
          </Button>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
