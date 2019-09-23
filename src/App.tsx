import React from 'react';

import styled from 'styled-components';

import Sample1 from './components/sample1/sample1.component';

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const App: React.FC = () => {
	return (
		<Wrapper>
			<Sample1 />
		</Wrapper>
	);
};

export default App;
