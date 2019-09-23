import React from 'react';

import styled from 'styled-components';

export interface Sample1Props {}

const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	color: palevioletred;
`;

const Wrapper = styled.section`
	padding: 4rem;
	background: papayawhip;
`;

const Sample1: React.SFC<Sample1Props> = () => {
	return (
		<Wrapper>
			<Title>Hello World</Title>
		</Wrapper>
	);
};

export default Sample1;
