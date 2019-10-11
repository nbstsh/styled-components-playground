import React from 'react';
import styled from 'styled-components';
import Theming from '../theming/theming.component';
import FunctionTheming from '../function-theming/function-theming.component';
import GetTheme from '../get-theme/get-theme.component';
import ThemeProps from '../theme-props/theme-props.component';

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	padding: 10rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Advanced = () => {
	return (
		<Wrapper>
			<Theming />
			<FunctionTheming />
			<GetTheme />
			<ThemeProps />
		</Wrapper>
	);
};

export default Advanced;
