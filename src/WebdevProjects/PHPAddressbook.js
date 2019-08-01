import React from "react";
import { Image, Box, Text } from "grommet";
import BlogBox from "../BlogBox";
import GithubLink from "../GithubLink";
import ImageBox from "../ImageBox";
import PHPEdit from "./PHPEdit.PNG";
import PHPIndex from "./PHPIndex.PNG";
import PHPView from "./PHPView.PNG";

const PHPAddressbook = props => {
	return (
		<BlogBox>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			In order to prove I learned how to write HTML and PHP while working with a MySQL db at Iowa State webdev, I had to build an address book using those technologies. The project allowed me to learn a lot about dealing with MySQL and properly querying it. The hardest thing I remember about it was debugging while writing it in VIM, the bug turned out to be PHP lacking read/write permissions; something that had nothing to do with the code.
			</Text>
			<ImageBox height="medium" width="large" image={PHPIndex} caption="what you see at the front page" />
			<br />
			<ImageBox height="medium" width="large" image={PHPView} caption="what you see when viewing a profile" />
			<br />
			<ImageBox height="medium" width="large" image={PHPEdit} caption="what you see when editing a profile" />
			<br />
		</BlogBox>
	);
}

export default PHPAddressbook;