import React, { useContext } from 'react';
import { withTheme, ThemeProvider, ThemeContext } from 'styled-components';

const theme = {
	primaryColor: 'red',
	secondaryColor: 'blue'
};

const PrintTheme1 = withTheme(props => {
	return (
		<div>
			<h2>with Theme</h2>
			<pre>{JSON.stringify(props.theme, null, 4)}</pre>
		</div>
	);
});

const PrintTheme2 = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div>
			<h2>useContext</h2>
			<pre>{JSON.stringify(themeContext, null, 4)}</pre>
		</div>
	);
};

const GetTheme: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<PrintTheme1 />
				<PrintTheme2 />
			</div>
		</ThemeProvider>
	);
};

export default GetTheme;
