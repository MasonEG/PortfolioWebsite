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
            <Grommet theme={grommet}>

                    <Box
                    width="medium"
                    height="small"
                    align="center"
                    direction="row"
                    background="light-3"
                    border={{
                        "color": "dark-2",
                        "size": "medium",
                        "style": "groove",
                        "side": "all"
                    }}
                    >
                        <Button
                        href={this.props.link}
                        >
                        <Box width="small" height="small">
                            <Image src={githublogo} fit="contain" />
                        </Box>
                        <Text>Check this project out on Github!</Text>
                        </Button>
                    </Box>
                
            </Grommet>
        );
    }
}

export default GithubLink;