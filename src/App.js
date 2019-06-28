import React, { Component } from "react";
import { Grommet, Grid, Heading, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import { FormDown, FormPrevious, Menu} from 'grommet-icons'
import TodoList from "./todo_list/TodoList";
import GameOfLife from "./game_of_life/GameOfLife";


class App extends Component {
	state = { 
		sidebar: true,
		mainContent: (<Text>main</Text>),
	};

	updateMain = num => {
		switch(num) {
			case 0:
				this.setState({mainContent: <Text>About Me</Text>});
				break;
			case 1:
				this.setState({mainContent: <GameOfLife />});
				break;
			case 2:
				this.setState({mainContent: <TodoList />});
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
          {this.state.sidebar && (
			// This outer box is so the background isn't white while the sidebar box slides in
			<Box 
			background="dark-2"
			gridArea="sidebar"

			>
			<Box
				background="neutral-2"
				width="small"
				fill="vertical"
				animation={[
					{ type: "fadeIn", duration: 1000 },
					{ type: "slideRight", size: "xlarge", duration: 500 }
				]}
			>
				{/* all sidebar content goes in this box */}
				{/* {['About Me', 'Projects', 'Contact'].map(name => (
					<Button key={name} href="#" hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>{name}</Text>
						</Box>
					</Button>
				))} */}
				<Button key={'About Me'} onClick={this.updateMain(0)} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>About Me</Text>
					</Box>
				</Button>
				<Button key={'About Me'} onClick={this.updateMain(1)} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Game of life</Text>
					</Box>
				</Button>
				<Button key={'About Me'} onClick={this.updateMain(2)} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>todo list</Text>
					</Box>
				</Button>
			</Box>
			</Box>
		  )}
			<Box 
			gridArea="main" 
			justify="center"
			align="center"
			background="dark-2"
			>
				
			</Box>
        </Grid>
      </Grommet>
    );
  }
}


export default App
