import React, { Component } from "react";
import { Grommet, Grid, Heading, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import { FormDown, FormPrevious, Menu} from 'grommet-icons';

class Sidebar extends Component {
    state = {
        reactProjectsDropdown: false,
    }

	renderReactProjects = () => { //renders the dropdown menu for displaying my react creations
		if(this.state.reactProjectsDropdown) {
		return (
    	    <Box
			fill="horizontal"
			background="brand"
			animation={[
				{ type: "fadeIn", duration: 1000 },
				{ type: "slideRight", size: "xlarge", duration: 500 }
			]}
    	    >
				<Button key="dis website" onClick={() => {this.props.updateMain("WS")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>This Website</Text>
					</Box>
				</Button>
				<Button key="Todo List" onClick={() => {this.props.updateMain("TL")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Todo list</Text>
					</Box>
				</Button>
    	        <Button key="Game of Life" onClick={() => {this.props.updateMain("GOL")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Game of life</Text>
				    </Box>
				</Button>
    	    </Box>
		)
		}
		
	}

    render() {
        return (
            <Box //this is the dark background the sidebar slides into
			background="dark-2"
			gridArea="sidebar"

			>
			<Box //this is the actual sidebar box
				background="neutral-2"
				width="small"
				fill="vertical"
				animation={[
					{ type: "fadeIn", duration: 1000 },
					{ type: "slideRight", size: "xlarge", duration: 500 }
				]}
			>
				{/* all sidebar content goes in this box */}
				<Button key="About Me" onClick={() => {this.props.updateMain("About")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>About Me</Text>
					</Box>
				</Button>
				<Button  //react projects dropdown toggle
    			key="React Projects Dropdown" 
   				onClick={() => this.setState({reactProjectsDropdown: !this.state.reactProjectsDropdown})}
    			hoverIndicator
    			>
					<Box 
					pad={{horizontal: "small", vertical: "small"}}
					direction="row"
					>
            			{this.state.reactProjectsDropdown ? <FormDown color="accent-1" /> : <FormPrevious color="accent-1" />}
            			<Text>React Creations</Text>
        			</Box>
    			</Button>
				{ this.renderReactProjects() }
				<Button key="Contact Me" onClick={() => {alert("nothing here yet")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Contact</Text>
					</Box>
				</Button>
			</Box>
			</Box>
        );
    }
}

export default Sidebar;