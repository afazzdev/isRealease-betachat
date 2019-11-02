import React from "react";
import Logo from "./logo";
import Wave1P1 from "./svgs/wave1p1";
import Wave2P1 from "./svgs/wave2p1";

const Page1 = () => {
  return (
    <>
      <div className="page1">
        <span className="h1">
          <div>Share your</div>
          <div className="anim-2">beautiful</div>
          <div>world with</div>
          <div>
            <Logo />
          </div>
        </span>
      </div>
      <Wave1P1
        style={{
          zIndex: 10,
          position: "absolute",
          width: "100vw",
          height: "15rem",
          bottom: 0,
          right: 0,
          padding: 0,
          margin: 0
        }}
      />
      <Wave2P1
        style={{
          zIndex: 9,
          position: "absolute",
          width: "100vw",
          height: "15rem",
          bottom: 0,
          right: 0,
          padding: 0,
          margin: 0
        }}
      />
    </>
  );
};

export default Page1;
