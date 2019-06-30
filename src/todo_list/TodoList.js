import React, {Component} from "react";
import Todo from "./Todo";
import AddItemBar from "./AddItemBar";
import {Box, Heading, InfiniteScroll, Grommet } from "grommet";
import { grommet } from "grommet/themes";



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
		console.log(this.state.todos);
		if(this.state.todos.includes(msg)) { //TODO fix the logic for this!
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
					pad="small" 
					background={{"color": "brand"}} 
					width="medium" 
					round="small"
					overflow={{"vertical": "auto"}}
					gap="small">
						<AddItemBar addTodo={this.addTodo} />
						<InfiniteScroll items={this.state.todos} step={5}>
							{item => (
								<Todo key={item.msg} msg={item.msg} isDone={item.isDone} delete={this.removeTodo.bind(this, item)} handleCheck={this.handleTodoCheck.bind(this, item)} />
							)}
						</InfiniteScroll>
					</Box>
				</Box>
			</Grommet>
		)
	}
}

export default App;
