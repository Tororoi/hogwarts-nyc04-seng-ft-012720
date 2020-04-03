import piggy from "../porco.png";
import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>

      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="hoggyText" name="Greasy Hogs" onClick = {this.filterGreased}>
          Greasy Hogs
      </span>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
