import React from 'react';
import styled from 'styled-components';

interface IStyledInputProps {
	inputColor?: string;
}

const StyledInput = styled.input<IStyledInputProps>`
	padding: 0.5em;
	margin: 0.5em;
	color: ${props => props.inputColor || 'palevioletred'};
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

const Sample6: React.FC = () => {
	return (
		<div>
			<StyledInput defaultValue='default color' type='text' />
			<StyledInput
				defaultValue='with inputColor prop'
				type='text'
				inputColor='rebeccapurple'
			/>
		</div>
	);
};

export default Sample6;
