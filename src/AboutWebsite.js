//about page for my website

import React, { Component } from "react";
import { Image, Grid, Heading, Box, Text } from "grommet";
import InitialWebsite from "./InitialWebsite.PNG"
import GithubLink from "./GithubLink";

class AboutWebsite extends Component {
    render() {
        return (
            <Grid
            fill
            rows={['3%', 'flex', '3%']}
            columns={['10%', '80%', '10%']}
            areas={[
                { name: 'content', start: [1, 1], end: [1, 1] }
            ]}
            >
            <Box
            flex={true}
            align="center"
            gridArea="content"
            background="light-1"
            round="medium"
            overflow={{"vertical": "scroll"}}
            > {/* inner content goes here */}
                <Heading
                    margin="medium"
                >
                    I made this website with React
                </Heading><br />
                <Text margin="small">
                    This entire website is styled with the Grommet React component library,
                     not with some lame website builder. 
                     I did use a simple template but that's about it.
                </Text>
                <Box
                width="48em"
                height="27em"
                >
                <Image src={InitialWebsite} fit="contain" />
                </Box>
                <Text margin="small">
                    Most of the work I put into this website went into tweaking the styling, which I quickly learned is hard to be satisied with. 
                    I can honestly say after dealing with all the styling crazyness that I can work with CSS.
                    If I had to go back and make it again I would go with either another styled react component library (React-Bootstrap, React Material Theme, Microsoft's thing)
                    paired with Gatsby or ditch React and use Svelte JS; which
                    sounds very interesting and will definitely pave the way in the future. My biggest regret with this 
                    website is not building it in Gatsby, which has a lot of efficient built in tools to take advantage of.

                </Text>
                <GithubLink link="https://github.com/MasonEG/PortfolioWebsite"/>
            </Box>
            </Grid>
        );
    }
}

export default AboutWebsite;