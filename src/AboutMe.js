import React from "react";
import {Box, Anchor, Text, Image, Paragraph } from "grommet";
import ContentBox from "./ContentBox";
import MyPic from "./MyPic.jpg";
import ImageBox from "./ImageBox";
import { DocumentNotes } from "grommet-icons";

const AboutMe = props => {
	return (
		<Box
		fill="vertical"
		background="dark-2"
		width="80%"
		pad="small"
		>
			<ContentBox>
				<br/>
				<Box
				flex={false}
				width="medium"
				height="420px"
				round="medium"
				background="dark-6"
				elevation="medium"
				>
					<Image fit="contain" margin="small" src={MyPic} />
				</Box>
				<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
					I'm a 3rd year software engineering student currently studying and working as a web developer
					at Iowa State University. My passions include JavaScript, playing guitar, rock climbing, longboarding, and running. 
					Check out some of the projects I've done in the sidebar! 
				</Text>
				<Box
				margin="small"
				background="dark-3"
				round="small"
				pad="small"
				elevation="medium"
				flex={false}
				>
					<Text size="medium">Contact me by:</Text>
					<Anchor size="small" href="tel:6698884602" target="_top" primary label="Phone #: 669-888-4602" />
					<Anchor size="small" href="mailto:megil@iastate.edu" target="_top" primary label="Email: megil@iastate.edu" />
					<Anchor size="small" href="https://www.linkedin.com/in/mason-gil-229b81172/" target="_blank" primary label="LinkedIn" />
				</Box>
			</ContentBox>
		</Box>
	);
}

export default AboutMe;