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

const Sample8: React.FC = () => {
	return (
		<div>
			<StyledButton>click me!!!!</StyledButton>
		</div>
	);
};

export default Sample8;
