/*
	This renders the sidebar in all its WET glory
	Desperately needs helper components
	I'll refactor this if I decide to keep this website and not move on to some cooler UI framework
*/

import React, { Component } from "react";
import {  Button, Box, Text } from "grommet";
import { FormDown, FormPrevious } from 'grommet-icons';

class Sidebar extends Component {
    state = {
		reactProjectsDropdown: false,
		schoolProjectsDropdown: false,
		workProjectsDropdown: false
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
				<Button key="react chatt rooooooomm" onClick={() => {this.props.updateMain("RCR")}} hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Chat Room</Text>
				    </Box>
				</Button>
    	    </Box>
		)
		}
		
	}

	renderSchoolProjects = () => { //renders the dropdown menu for shool project links
		if (this.state.schoolProjectsDropdown) {
			return (
				<Box
				fill="horizontal"
				background="brand"
				animation={[
					{ type: "fadeIn", duration: 1000 },
					{ type: "slideRight", size: "xlarge", duration: 500 }
				]}
				>
					<Button key="stahplite" onClick={() => {this.props.updateMain("SSL")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>Stoplight Circuit</Text>
						</Box>
					</Button>
					<Button key="roomba python" onClick={() => {this.props.updateMain("SRP")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>Roomba Project</Text>
						</Box>
					</Button>
					<Button key="jfx thing" onClick={() => {this.props.updateMain("STTT")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>JFX TicTacToe</Text>
						</Box>
					</Button>
					<Button key="Game of Life" onClick={() => {this.props.updateMain("SLEDC")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>LED Cube</Text>
						</Box>
					</Button>
				</Box>
			)
		}
	}

	renderWorkProjects = () => { //renders the dropdown menu for work project links
		if (this.state.workProjectsDropdown) {
			return (
				<Box
				fill="horizontal"
				background="brand"
				animation={[
					{ type: "fadeIn", duration: 1000 },
					{ type: "slideRight", size: "xlarge", duration: 500 }
				]}
				>
					<Button key="php addressbook" onClick={() => {this.props.updateMain("WPA")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>PHP Addressbook</Text>
						</Box>
					</Button>
					<Button key="zf2 addressbook ver neat" onClick={() => {this.props.updateMain("WZA")}} hoverIndicator>
						<Box pad={{horizontal: "medium", vertical: "small"}}>
							<Text>ZF2 Addressbook</Text>
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
   				onClick={() => this.setState({reactProjectsDropdown: !this.state.reactProjectsDropdown, schoolProjectsDropdown: false, workProjectsDropdown: false})}
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
				<Button  //School projects dropdown toggle
    			key="School Projects Dropdown" 
   				onClick={() => this.setState({schoolProjectsDropdown: !this.state.schoolProjectsDropdown, reactProjectsDropdown: false, workProjectsDropdown: false})}
    			hoverIndicator
    			>
					<Box 
					pad={{horizontal: "small", vertical: "small"}}
					direction="row"
					>
            			{this.state.schoolProjectsDropdown ? <FormDown color="accent-1" /> : <FormPrevious color="accent-1" />}
            			<Text>School Projects</Text>
        			</Box>
    			</Button>
				{ this.renderSchoolProjects() }
				<Button  //Work projects dropdown toggle
    			key="Work Projects Dropdown" 
   				onClick={() => this.setState({workProjectsDropdown: !this.state.workProjectsDropdown, reactProjectsDropdown: false, schoolProjectsDropdown: false})}
    			hoverIndicator
    			>
					<Box 
					pad={{horizontal: "small", vertical: "small"}}
					direction="row"
					>
            			{this.state.workProjectsDropdown ? <FormDown color="accent-1" /> : <FormPrevious color="accent-1" />}
            			<Text>Webdev Projects</Text>
        			</Box>
    			</Button>
				{ this.renderWorkProjects() }
				<Button key="githuuuub" href="https://github.com/MasonEG" target="_blank" hoverIndicator>
					<Box pad={{horizontal: "medium", vertical: "small"}}>
						<Text>Github</Text>
					</Box>
				</Button>
			</Box>
			</Box>
        );
    }
}

export default Sidebar;