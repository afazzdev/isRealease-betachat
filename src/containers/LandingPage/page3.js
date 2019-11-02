import React from "react";
import Wave1P3 from "./svgs/wave1P3";
import Wave2P3 from "./svgs/wave2p3";
import Wave3P3 from "./svgs/wave3p3";

class Page3 extends React.Component {
  state = {};
  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.handleClick(e);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <h2 className="input-label">
            Have some idea to improve our application?
          </h2>
          <h3 className="input-label">Let us now!</h3>
          <textarea
            type="text"
            className="input-text"
            placeholder="Type your idea here"
          />
          <button
            className="input-button"
            type="submit"
            onKeyPress={this.handleKeyPress}
          >
            Submit your idea!
          </button>
        </form>
        <Wave1P3
          className="wave1p3"
          style={{
            zIndex: 10,
            position: "absolute",
            width: "100vw",
            height: "15rem",
            top: 0,
            right: 0,
            padding: 0,
            margin: 0
          }}
        />
        <Wave2P3
          className="wave2p3"
          style={{
            zIndex: 11,
            position: "absolute",
            width: "100vw",
            height: "11.5rem",
            bottom: 0,
            right: 0,
            padding: 0,
            margin: 0
          }}
        />
        <Wave3P3
          className="wave3p3"
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
      </>
    );
  }
}

export default Page3;
