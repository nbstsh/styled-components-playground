import React from 'react';
import styled from 'styled-components';

interface IInput {
	sizeStr?: string;
}

const Input = styled.input.attrs<IInput>(props => ({
	type: 'password',
	size: props.sizeStr || '1rem'
}))`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	margin: ${(props: IInput) => props.sizeStr};
	padding: ${(props: IInput) => props.sizeStr};
`;

const Sample10: React.FC = () => {
	return (
		<div>
			<Input placeholder='A small text input' />
			<br />
			<Input placeholder='A bigger text input' sizeStr='2rem' />
		</div>
	);
};

export default Sample10;
