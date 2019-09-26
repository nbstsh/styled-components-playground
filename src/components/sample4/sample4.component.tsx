import React from 'react';

import styled from 'styled-components';

interface IButton {
	as?: string;
	href?: string;
}

const Button = styled.button<IButton>`
	display: inline-block;
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	display: block;
`;

const TomatoButton = styled(Button)`
	color: tomato;
	border-color: tomato;
`;

const Sample4 = () => {
	return (
		<div>
			<Button>Normal Button</Button>
			<Button as='a' href='/'>
				Link with Button styles
			</Button>
			<TomatoButton as='a' href='/'>
				Link with Tomato Button styles
			</TomatoButton>
		</div>
	);
};

export default Sample4;
