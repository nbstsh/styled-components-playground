import React, { useRef } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

const Form: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<Input
			ref={inputRef}
			placeholder='Hover to focus!'
			onMouseEnter={() => {
				inputRef.current && inputRef.current.focus();
			}}
		/>
	);
};

const Refs = () => {
	return (
		<div>
			<Form />
		</div>
	);
};

export default Refs;
