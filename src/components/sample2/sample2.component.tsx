import React from 'react';

import styled, { StyledComponent } from 'styled-components';

export interface ISample2Props {}

interface IButtonProps {
	primary?: boolean;
}

// const Button = styled.button<IButtonProps>`
// 	/* Adapt the colors based on primary prop */
// 	background: ${props => (props.primary ? 'palevioletred' : 'white')};
// 	color: ${props => (props.primary ? 'white' : 'palevioletred')};

// 	font-size: 1em;
// 	margin: 1em;
// 	padding: 0.25em 1em;
// 	border: 2px solid palevioletred;
// 	border-radius: 3px;
// `;

const StyledButton = styled.button<IButtonProps>`
	background: ${props => (props.primary ? 'palevioletred' : 'white')};
	color: ${props => (props.primary ? 'white' : 'palevioletred')};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Sample2: React.FC<ISample2Props> = () => {
	return (
		<div>
			<StyledButton>without primary</StyledButton>
			<StyledButton primary>with primary</StyledButton>
		</div>
	);
};

export default Sample2;
