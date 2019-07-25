import React from "react";
import { Box } from "grommet";

const ContentBox = props => {
	return (
		<Box
		align="center"
		background="light-1"
		round="medium"
		fill={true}
		overflow={{"vertical": "scroll"}}
		{...props}
		>
			{props.children}
		</Box>
	);
}

export default ContentBox;