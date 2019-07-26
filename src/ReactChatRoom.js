import React from "react";
import { Image, Box, Text } from "grommet";
import BlogBox from "./BlogBox";
import ChatClient from "./ChatClient.PNG";
import GithubLink from "./GithubLink";

const ReactChatRoom = props => {
	return (
		<BlogBox>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			When I was pushing for React development while working at ISU Webdev, I was asked to prove we could write React apps that could access our MySQL database. I decided to build a simple chat room in React that could access that MySQL database by building and accessing an API I would build with Zend Framework 2 - the PHP framework Iowa State’s website network runs on. Then after finishing the React app and API, I wrote a tutorial on how to build APIs in ZF2 (Zend Framework 2) on our Confluence wiki (which I’m probably not allowed to share).  I originally wrote the API in vanilla PHP 5 but then after finishing it one of the lead devs said to build it in ZF2 so I scrapped that and we won’t talk about it.The API was simple POST JSON stuff, it was meant as a proof of concept so I didn’t build it up to REST spec.
			</Text>
			<Box
			flex={false}
			width="large"
			height="medium"
			background="dark-6"
			round="medium"
			elevation="medium"
			>
				<Image fit="contain" src={ChatClient} margin="small"/>
				<Text size="small" margin="small" alignSelf="center">
					What the chatroom interface looked like once the user was logged in
				</Text>
			</Box>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			ZF2 turned out to be a great tool for building APIs for a few reasons. ZF2 has a solid MVC framework, router and HTTP response tools which makes things very abstract but easy to understand (once you actually knew what the methods did; we used a very custom version of ZF2 which meant asking lots of questions around the office over googling). I say this as a benefit because I had none of that when building the API in vanilla PHP 5. We also had this awesome library running in ZF2 called Doctrine, which allowed for converting PHP entities into MySQL tables.
			</Text>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			For this project I learned numerous things about HTTP request/response, CORS, and the JS api basics such as Fetch, Axios (apparently more used than fetch because its complete-er), Promises, and Async/Await via banging my head against errors. The JS part was most likely the biggest challenge since trying to understand what’s going on in the .then statement without understanding promises/callbacks/async first is a big no no. I also had to learn about ZF2’s AbstractRestController and how ZF2 sends HTTP responses from it’s sparse internet documentation, since less than a handful of people at ISU webdev had dealt with APIs and had little to say about it. I’m not listing everything I learned doing this since I’m already running the risk of putting people to sleep.
			</Text>
			<Text margin={{"vertical": "medium", "horizontal": "200px"}}>
			If you’re a recruiter with an hour to kill feel free to ask me about it.
			</Text>
			<GithubLink link="https://github.com/MasonEG/ReactChatClient-ZF2API" />
		</BlogBox>
	)
}

export default ReactChatRoom;