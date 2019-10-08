import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	color: ${props => props.theme.main};
	border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
	theme: {
		main: 'palevioletred'
	}
};

const them = {
	main: 'mediumseagreen'
};

const Theming = () => {
	return (
		<div>
			<Button>button outside theme provider</Button>

			<ThemeProvider theme={them}>
				<Button>button inside theme provider</Button>
			</ThemeProvider>
		</div>
	);
};

export default Theming;
