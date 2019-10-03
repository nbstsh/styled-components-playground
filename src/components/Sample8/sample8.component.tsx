import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: blue;
	border: 1px solid grey;
	background-color: #fff;

	::before {
		content: '🚀🚀🚀🚀🚀🚀';
	}

	::after {
		content: '🚀🚀🚀🚀🚀🚀';
	}

	:hover {
		color: red;
	}
`;

const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
	color: blue;

	&:hover {
		color: red;
	}

	& ~ & {
		background: tomato;
	}

	& + & {
		background: lime;
	}

	&.orange {
		background: orange;
	}

	.border & {
		border: 1px solid;
	}

	.child {
		background: grey;
	}
`;

const Sample8: React.FC = () => {
	return (
		<div>
			<StyledButton>click me!!!!</StyledButton>
			<div>
				<Thing>Hello world!</Thing>
				<Thing>Hello world!</Thing>
				<Thing className='orange'>Hello world!</Thing>
				<div>Hello world!</div>
				<Thing>Hello world!</Thing>
				<div className='border'>
					<Thing>Hello world!</Thing>
				</div>
				<Thing className='child'>Hello world!</Thing>
				<Thing>
					<p className='child'>Hi!!!!!!!</p>
				</Thing>
			</div>
		</div>
	);
};

export default Sample8;
