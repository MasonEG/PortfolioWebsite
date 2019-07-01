import React, { Component } from "react";
import { Image, Grid, Heading, Button, Box, Text } from "grommet";
import { grommet } from "grommet/themes";
import InitialWebsite from "./InitialWebsite.PNG"

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
            gridArea="content"
            background="light-1"
            round="medium"
            overflow={{"vertical": "scroll"}}
            >
                <Heading
                    margin="medium"
                >
                    I made this website with React
                </Heading><br />
                <Text>
                    This entire website is styled with the Grommet React CSS framework,
                     not with some lame website builder (I'm looking at you wordpress "developers"). 
                     I did use a simple template but that's about it.
                </Text>
                <Image src={InitialWebsite} />
            </Box>
            </Grid>
        );
    }
}

export default AboutWebsite;