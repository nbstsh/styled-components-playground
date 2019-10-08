import React from 'react';
import styled from 'styled-components';
import Theming from '../theming/theming.component';

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
		</Wrapper>
	);
};

export default Advanced;
