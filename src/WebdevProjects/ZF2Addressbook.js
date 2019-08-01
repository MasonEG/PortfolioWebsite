import React from "react";
import { Image, Box, Text } from "grommet";
import BlogBox from "../BlogBox";
import GithubLink from "../GithubLink";
import ImageBox from "../ImageBox";
import ZF2Edit from "./ZF2Edit.PNG";
import ZF2Index from "./ZF2Index.PNG";
import ZF2View from "./ZF2View.PNG";

const ZF2Addressbook = props => {
	return (
		<BlogBox>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>	
			In order to prove I learned from the webdev tutorial at Iowa State Webdev, I had to build an Addressbook using their backend PHP framework: ZF2 (Zend Framework 2). ZF2 is a fairly old MVC framework with a lot of handy tooling available such as a router and a library called Doctrine which maps PHP entities into our MySQL database system. Our version of ZF2, configured by Composer, also had Bootstrap and Font Awesome for some fancy styling. The only guide we were given on this was how to use all the essential tooling in ZF2, such as getting entities, views, and controllers working together. There were also some composer modules documented on our Confluence so I added a text editor module and an excel spreadsheet module. 
			</Text>
			<ImageBox height="medium" width="large" image={ZF2Index} caption="The front page of the addressbook" />
			<br />
			<ImageBox height="medium" width="large" image={ZF2View} caption="what you see when viewing a profile" />
			<br />
			<ImageBox height="medium" width="large" image={ZF2Edit} caption="what you see when editing a profile" />
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			The biggest problems I ran into while building this were caused by lack of understanding ZF2, as the tutorial would often explain things in a very simple manner without details. This turned out to be a plus since it helped me build my skills on figuring things out on my own. 
			</Text>
		</BlogBox>
	);
}

export default ZF2Addressbook;