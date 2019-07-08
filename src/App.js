//this file is the main website component

import React, { Component } from "react";
import { Grommet, Grid, Heading, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import { FormDown, FormPrevious, Menu} from 'grommet-icons'
import TodoList from "./todo_list/TodoList";
import GameOfLife from "./game_of_life/GameOfLife";
import Sidebar from "./Sidebar";
import AboutWebsite from "./AboutWebsite";
import GithubLink from "./GithubLink";


class App extends Component {
	state = { 
		sidebar: true,
		mainContent: (<GithubLink link={"www.google.com"} />),
	};

	updateMain = pageName => {
		switch(pageName) {
			case "About":
				this.setState({mainContent: <Text key="about_me" >About Me</Text>});
				break;
			case "GOL":
				this.setState({mainContent: <GameOfLife key="game_of_life" />});
				break;
			case "TL":
				this.setState({mainContent: <TodoList key="todo_list" />});
				break;
			case "WS":
				this.setState({mainContent: <AboutWebsite key="about_website" />});
				break;
			default:
				this.setState({mainContent: <Text>🚨 ERR 🚨</Text>});
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
				icon={(this.state.sidebar) ? <FormDown />: <FormPrevious />}
				label={<Menu/>}
				onClick={() => this.setState({ sidebar: !this.state.sidebar })} 
			/>
			<Heading color="light-1" size="25px" margin="xsmall">Mason Gil</Heading>
            <Text>masonegil@gmail.com</Text>
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
