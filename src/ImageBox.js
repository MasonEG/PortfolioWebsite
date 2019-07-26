import React from "react";
import { Box, Image, Text } from "grommet";

const ImageBox = props => {
	return (
		<Box
		flex={false}
		{...props}
		round="medium"
		background="dark-6"
		elevation="medium"
		>
			<Image fit="contain" margin="small" src={props.image} />
			<Text size="small" margin="small" alignSelf="center">
					{props.caption}
			</Text>
		</Box>
	);
}

export default ImageBox;