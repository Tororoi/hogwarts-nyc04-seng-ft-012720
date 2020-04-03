import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hog from "./Hog"
import data from "../porkers_data";

class App extends Component {

  state = {
    hogs: data
  }

  resetData = () => {
    this.setState({
      hogs: data
    })
  }

  filterGreased = () => {
    let greasedHogs = this.state.hogs.filter((hogObj) => {
      return hogObj.greased === true;
    })
    if (this.state.hogs.length < data.length) {
      this.setState({
        hogs: data
      })
    } else {
      this.setState({
        hogs: greasedHogs
      })
    }
  }

  sortByName = () => {
    function compareName(a, b) {
      const hogA = a.name
      const hogB = b.name
    
      let comparison = 0;
      if (hogA > hogB) {
        comparison = 1;
      } else if (hogA < hogB) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedHogs = this.state.hogs.concat().sort(compareName)
    this.setState({
      hogs: sortedHogs
    })
  }

  sortByWeight = () => {
    function compareWeight(a, b) {
      const hogA = a.weight
      const hogB = b.weight
    
      let comparison = 0;
      if (hogA > hogB) {
        comparison = 1;
      } else if (hogA < hogB) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedHogs = this.state.hogs.concat().sort(compareWeight)
    this.setState({
      hogs: sortedHogs
    })
  }

  generateHogs = () => {
    
    return this.state.hogs.map(hogObj =>
      <Hog key={hogObj.name} hog={hogObj} />
      )
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div name="Greasy Hogs" onClick = {this.filterGreased}>
          Greasy Hogs
        </div>
        <div name="Hogs By Name" onClick = {this.sortByName}>
          Sort By Name
        </div>
        <div name="Hogs By Weight" onClick = {this.sortByWeight}>
          Sort By Weight
        </div>
        <div name="reset" onClick = {this.resetData}>
          Reset Data
        </div>
        <ul className="hoglist">
          {this.generateHogs()}
        </ul>
      </div>
    );
  }
}

export default App;
