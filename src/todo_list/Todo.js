import React, {Component} from "react";
import {Box, Button, CheckBox, Grid, Paragraph } from "grommet";
import { Trash } from 'grommet-icons';

class Todo extends Component {

	render() {
		let tag;
		if(this.props.isDone) {
			tag = <span><Paragraph><del>{this.props.msg}</del></Paragraph></span>
		}
		else {
			tag = <span><Paragraph>{this.props.msg}</Paragraph></span>
		}
		return (
			<Box
			direction="row"
			justify="between"
			elevation="xsmall"
			pad={{"left": "small"}}
			round="small"
			margin="small"
			background="accent-1"
			>
				<CheckBox label={tag} checked={this.props.isDone} onChange={this.props.handleCheck}/>
				<Button icon={<Trash />} margin="none"  label="" hoverIndicator={true} onClick={this.props.delete} />
			</Box>
		);
	}
}

export default Todo;