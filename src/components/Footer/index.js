import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        {" "}
        <span>
          &copy; Beta Team 2019 -{" "}
          <a
            target="_blank"
            href="https://github.com/afazzdev/isRealease-betachat"
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-github" style={{ color: "white" }}></i>{" "}
            <span
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              Github
            </span>
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
