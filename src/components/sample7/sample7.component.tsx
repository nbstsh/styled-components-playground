import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 3rem;
`;

const Paragraph = styled.p`
	color: palevioletred;
	font-size: 1.6rem;
	padding: 0 1rem;
`;

const Button = styled.button`
	padding: 0.5rem;
	border: none;
	background-color: papayawhip;
	outline: none;
	margin: 0.1rem;
`;

const Counter: React.FC = () => {
	const [counter, setCounter] = useState(0);

	return (
		<StyledCounter>
			<Paragraph>{counter}</Paragraph>
			<Button onClick={() => setCounter(counter + 1)}>+</Button>
			<Button onClick={() => setCounter(counter - 1)}>-</Button>
		</StyledCounter>
	);
};

const Sample7: React.FC = () => {
	return (
		<div>
			<Counter />
		</div>
	);
};

export default Sample7;
