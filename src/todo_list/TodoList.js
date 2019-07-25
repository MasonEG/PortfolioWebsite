import React, {Component} from "react";
import Todo from "./Todo";
import AddItemBar from "./AddItemBar";
import {Box, Heading, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import GithubLink from "../GithubLink";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		}
	}

	removeTodo(todo) { //good
		let paramIndex = this.state.todos.findIndex(element => {return (todo === element)}); //find index of todo we're looking for
		let nextTodos = this.state.todos;
		nextTodos.splice(paramIndex, 1);
		this.setState({todos: nextTodos});
	}

	handleTodoCheck(todo) {
		let paramIndex = this.state.todos.findIndex(element => {return (todo === element)}); //find index of todo we're looking for
		let replace = this.state.todos;
		replace[paramIndex].isDone = !replace[paramIndex].isDone;
		this.setState({todos: replace});
	}

	addTodo = (msg) => { //good
		//make a todo item with this.state.inputText as the msg
		console.log(this.state.todos.filter(todo => (todo.msg == msg)));
		if(this.state.todos.filter(todo => (todo.msg == msg)).length > 0) { //TODO fix the logic for this!
			alert("You can't write duplicate todo items!");
			return;
		}
		let replace = this.state.todos;
		replace.push({msg: msg, isDone: false});
		this.setState({todos: replace});
	}

	render() {
		return (
			<Grommet theme={grommet}>
				<Box 
				pad="none" 
				fill="vertical"
				align="center" 
				background="dark-2">
					<Heading
					margin={{
						"vertical": "xsmall"	
					}}
					>
						Your Todo List
					</Heading>
					<Box 
					pad="none" 
					background={{"color": "brand"}} 
					width="600px" 
					round="small"
					pad="xsmall"
					overflow={{"vertical": "auto"}}
					gap="small">
						<AddItemBar addTodo={this.addTodo} />
						{this.state.todos.map(item => (
							<Todo key={item.msg} msg={item.msg} isDone={item.isDone} delete={this.removeTodo.bind(this, item)} handleCheck={this.handleTodoCheck.bind(this, item)} />
						))}
					</Box>
					<GithubLink link="https://github.com/MasonEG/ReactTodoList"/>
				</Box>

			</Grommet>
		)
	}
}

export default App;
