import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	/* Color the border and text with theme.main */
	color: ${props => props.theme.main};
	border: 2px solid ${props => props.theme.main};
`;

const theme = {
	main: 'mediumseagreen'
};

const ThemeProps = () => {
	return (
		<>
			<Button>without theme prop outside ThemeProvider</Button>
			<Button theme={{ main: 'darkorange' }}>
				with theme props outside ThemeProvider
			</Button>
			<ThemeProvider theme={theme}>
				<div>
					<Button>without theme prop inside ThemeProvider</Button>
					<Button theme={{ main: 'royalblue' }}>
						with theme props outside ThemeProvider
					</Button>
				</div>
			</ThemeProvider>
		</>
	);
};

export default ThemeProps;
