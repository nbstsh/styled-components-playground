import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Thing = styled.div`
	&& {
		color: blue;
	}
`;

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red
  }
`;

const Sample9 = () => {
	return (
		<div>
			<GlobalStyle />
			<Thing>Hello world!!!!</Thing>
		</div>
	);
};

export default Sample9;
