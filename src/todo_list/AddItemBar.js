import React, {Component} from "react";
import {Box, Button, TextInput, Grid } from "grommet";
import { Add } from 'grommet-icons';

class AddItemBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	handleSubmit = (e) => {
		/* 
			This prevents the page from redirecting to itself;
			forms redirect pages on submit. Since our app is a 
			single page that loses state on reload: we need
			e.preventDefault().
		*/
		e.preventDefault();
		if(this.state.title.length == 0 || this.state.title.length > 35) {
			alert("message must be between 0 and 35 characters !");
			this.setState({title: ''})
			return;
		}
		this.props.addTodo(this.state.title);
		this.setState({ title: '' }); //reset the state
	}

	onChange = (e) => this.setState({title: e.target.value});
	
	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<Box
			align="center"
			justify="center"
			direction="row"
			background="light-3"
			round="small"
			gap="small"
			>
				<TextInput placeholder="add something to do" gridArea="inputText" value={this.state.title} onChange={this.onChange} plain={true}/>
				<Button icon={<Add />} gridArea="add" label="" alignSelf="end" hoverIndicator={true} type="submit" />
			</Box>
		</form>
		)
	}
}

export default AddItemBar;
