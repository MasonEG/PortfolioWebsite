//this file is the main website component

import React, { Component } from "react";
import { Grommet, Grid, Heading, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import { FormDown, FormPrevious, Menu} from 'grommet-icons';
//import { CrosswordGeneratorProject, LEDCubeProject, RoombaProject, StoplightProject, TicTacToeProject } from "./SchoolProjects";
import AboutMe from "./AboutMe";
import TodoList from "./todo_list/TodoList";
import GameOfLife from "./game_of_life/GameOfLife";
import Sidebar from "./Sidebar";
import AboutWebsite from "./AboutWebsite";
import ReactChatRoom from "./ReactChatRoom";


class App extends Component {
	constructor(props) {
		super(props);
		setInterval(this.modifyHue, 500);
	}
	state = { 
		hue: 0,
		sidebar: true,
		header: 'Mason Gil',
		mainContent: (<AboutMe />),
	};

	updateMain = pageName => {
		switch(pageName) {
			case "About":
				this.setState({mainContent: <AboutMe />, header: "Mason Gil"});
				break;
			case "GOL":
				this.setState({mainContent: <GameOfLife key="game_of_life" />, header: "John Conway's Game of Life"});
				break;
			case "TL":
				this.setState({mainContent: <TodoList key="todo_list" />, header: 'To-Do list'});
				break;
			case "RCR":
				this.setState({mainContent: <ReactChatRoom key="rcr baybbyyyy" />, header: "a simple chat room"});
				break;
			case "WS":
				this.setState({mainContent: <AboutWebsite key="about_website" />, header: "What you're viewing"});
				break;
			case "SSL":
				this.setState({mainContent: <StoplightProject />, header: "Stop light project"});
				break;
			case "SRP":
				this.setState({mainContent: <RoombaProject />, header: "Roomba project"});
				break;
			case "STTT":
				this.setState({mainContent: <TicTacToeProject />, header: "Tic Tac Toe in JavaFX"});
				break;
			case "SLEDC":
				this.setState({mainContent: <LEDCubeProject />, header: "LED Cube"});
				break;
			case "SCG":
				this.setState({mainContent: <CrosswordGeneratorProject />, header: "Crossword Generator"});
				break;
			default:
				this.setState({mainContent: <Text>🚨 ERR 🚨</Text>});
		}
	}


	modifyHue = () => {
		if(this.state.hue < 357) {
			this.setState({hue: this.state.hue + 3});
		}
		else {
			this.setState({hue: 0});
		}
	}

  render() {
    return (
      <Grommet full theme={grommet}>
        <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1]},
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{horizontal: "medium", vertical: "5px"}}
            background="dark-1"
          >
			  {/* all header content goes in this box */}

			<Button
				icon={(this.state.sidebar) ? <FormDown color={"hsl(" + this.state.hue + ", 70%, 50%)"} />: <FormPrevious color={"hsl(" + this.state.hue + ", 70%, 50%)"} />}
				label={<Menu color={"hsl(" + this.state.hue + ", 70%, 50%)"} />}
				onClick={() => this.setState({ sidebar: !this.state.sidebar })} 
			/>
			<Heading color={"hsl(" + this.state.hue + ", 70%, 50%)"} size="25px" margin="xsmall">{this.state.header}</Heading>
            <Text color={"hsl(" + this.state.hue + ", 70%, 50%)"}>megil@iastate.edu</Text>
          </Box>
          {this.state.sidebar && <Sidebar updateMain={this.updateMain} />}
			<Box 
			gridArea="main" 
			align="center"
			background="dark-2"
			>
				{this.state.mainContent}
			</Box>
        </Grid>
      </Grommet>
    );
  }
}


export default App
