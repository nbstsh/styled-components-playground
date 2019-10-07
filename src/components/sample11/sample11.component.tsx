import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
	animation: ${rotate} 2s linear infinite;
`;

const Sample11 = () => {
	return (
		<div>
			<Rotate>sample11</Rotate>
		</div>
	);
};

export default Sample11;
