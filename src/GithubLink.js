//this is a styled Github link component

import React, { Component } from "react";
import { Grommet, Image, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import githublogo from "./githublogo.png"

class GithubLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Box
                flex={false}
				width="medium"
				height="xsmall"
                background="light-3"
                margin="small"
                padding="xsmall"
                round="medium"
                border={{
                    "color": "dark-2",
                    "size": "medium",
                    "style": "solid",
                    "side": "all"
                }}
                >

					<Button
					plain={true}
                    href={this.props.link}
                    target="_blank"
					>
						<Box
						align="center"
						direction="row"
						>
							<Box width="xsmall" height="xsmall" margin="0px">
								<Image src={githublogo} fit="contain" />
							</Box>
							<Text>Check this project out on Github!</Text>
						</Box>
					</Button>
                </Box>
        );
    }
}

export default GithubLink;