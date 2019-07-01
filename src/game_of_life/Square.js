import React, { Component } from "react";
import './square.css';

class Square extends Component { //renders a square given a prop value
	
	render() {
		let className = "Dead";
		if(this.props.isAlive) {
			className = "Alive";
		}
		return (
			<button onClick={this.props.handleClick} className={className}></button>
		);
	}
}

export default Square;