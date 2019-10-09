import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// Define our button, but with the use of props.theme this time
// const Button = styled.button`
//   color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   background: ${props => props.theme.bg};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

const Button = styled.button`
	color: ${props => props.theme.fontColor};
	border: 2px solid ${props => props.theme.fontColor};
	background: ${props => props.theme.bgColor};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;

//palevioletred

interface ITheme {
	fontColor: string;
	bgColor: string;
}

const theme = {
	fontColor: 'palevioletred',
	bgColor: 'white'
};

const invertTheme = (theme: ITheme): ITheme => {
	const { fontColor, bgColor } = theme;
	return {
		fontColor: bgColor,
		bgColor: fontColor
	};
};

const FunctionTheming = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<>
					<Button>First Theme Context</Button>
					<ThemeProvider theme={invertTheme}>
						<Button>Second Theme Context</Button>
					</ThemeProvider>
				</>
			</ThemeProvider>
		</div>
	);
};

export default FunctionTheming;
