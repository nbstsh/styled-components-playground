import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../sample2/sample2.component';

const TomatoButton = styled(StyledButton)`
	color: tomato;
	border-color: tomato;
`;

const Sample3 = () => {
	return (
		<div>
			<TomatoButton>tomato button</TomatoButton>
		</div>
	);
};

export default Sample3;
