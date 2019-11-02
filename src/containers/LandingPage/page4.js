import React from "react";
import Wave1P4 from "./svgs/wave1p4";
import Wave2P4 from "./svgs/wave2P4";

const Page4 = () => {
  const [cards, changecards] = React.useState([
    { name: "Muhammad Sidik", motto: "No error no life", division: "Backend" },
    { name: "Syofyan Zuhad", motto: "Source code", division: "Backend" },
    { name: "Ibnu Hibban", motto: "Don't smoking", division: "Mobile" },
    { name: "Andri Yani", motto: "lorem ipsum", division: "Frontend" },
    { name: "Ahmad Faizi", motto: "Coding? what's that?", division: "Frontend" }
  ]);

  return (
    <>
      <div className="page4">
        <div className="dev-label">
          <h2>About devs</h2>
        </div>
        <div className="dev-cards">
          {cards.map(dat => (
            <div className="dev-card">
              <span className="card-division">{dat.division}</span>
              <h2 className="card-name">{dat.name}</h2>
              <p className="card-motto">{dat.motto}</p>
            </div>
          ))}
        </div>
        <Wave1P4
          style={{
            zIndex: 10,
            position: "absolute",
            width: "100vw",
            height: "110%",
            bottom: 0,
            right: 0,
            padding: 0,
            margin: 0
          }}
        />
        <Wave2P4
          style={{
            zIndex: 8,
            position: "absolute",
            width: "100vw",
            height: "100%",
            bottom: 0,
            right: 0,
            padding: 0,
            margin: 0
          }}
        />
      </div>
    </>
  );
};

export default Page4;
