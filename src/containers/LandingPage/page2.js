import React from "react";
import { Link } from "react-router-dom";
import Wave1P2 from "./svgs/wave1P2";

const Page2 = () => {
  // const [hover, changeHover] = React.useState({ phoneSS: false, pcSS: false });
  // const [invisible, changeInvisibility] = React.useState(false);

  // const onPointerEvent = e => {
  //   e.preventDefault();
  //   if (e.target.name === "web") {
  //     changeHover({ phoneSS: false, pcSS: true });
  //   } else {
  //     changeHover({ phoneSS: true, pcSS: false });
  //   }
  // };

  // const handlePointerOut = e => {
  //   e.preventDefault();
  //   changeHover({ phoneSS: false, pcSS: false });
  // };
  return (
    <>
      <div className="page2">
        <div className="input-group page2-label">
          <div className="input-group">
            <span className="page2-label-start">
              Start your wonderful chat!
            </span>{" "}
          </div>
          <span>
            <Link to="/login">
              <button className="input-button">
                <i className="fas fa-desktop"></i> Web
              </button>
            </Link>
            <Link to="/">
              <button className="input-button">
                <i className="fas fa-mobile"></i> Phone
              </button>
            </Link>
          </span>
        </div>
        <Wave1P2
          style={{
            zIndex: 10,
            position: "absolute",
            width: "100vw",
            height: "100%",
            top: "100px",
            right: 0,
            padding: 0,
            margin: 0
          }}
        />
      </div>
    </>
  );
};

export default Page2;
