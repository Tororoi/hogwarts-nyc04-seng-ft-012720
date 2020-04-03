import React, { Component } from 'react'

export default class Hog extends Component {

    state={
        showing: false
    }

    handleClick = (e) => {
        this.setState({
            showing: !this.state.showing
        })
    }

    render() {

        let {name, specialty, greased, weight} = this.props.hog
        const modName = name.toLowerCase().replace(/\s/g, "_")
        const image = require(`../hog-imgs/${modName}.jpg`)

        return (
          <li className="pigTile" onClick={this.handleClick}>
            <h3>{name}</h3>
            <div className="pigDetails" style={{display: (this.state.showing ? 'block' : 'none')}}>
            <h3>Weight: {weight}</h3>
            <h3>Specialty: {specialty}</h3>
            <h3>Greased: {greased.toString()}</h3>
            <h3>Medal: {this.props.hog["highest medal achieved"]}</h3>
            </div>
    
            <div className="h-wrap" style={{display: (this.state.showing ? 'none' : 'block')}}>
              <img src={image} style={{height: `200px`}} alt="MasterBlasterJrJr" />
            </div>
            
          </li>
        )
      }
}