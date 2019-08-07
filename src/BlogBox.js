import React from "react";
import { Box } from "grommet";
import ContentBox from "./ContentBox";

const BlogBox = props => {
	return (
		<Box
		fill="vertical"
		background="#444444"
		width="80%"
		pad="small"
		>
			<ContentBox>
				{props.children}
			</ContentBox>
		</Box>
	);
}

export default BlogBox;