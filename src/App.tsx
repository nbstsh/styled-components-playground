import React from 'react';

import styled from 'styled-components';

import Sample1 from './components/sample1/sample1.component';
import Sample2 from './components/sample2/sample2.component';
import Sample3 from './components/sample3/sample3.component';

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const App: React.FC = () => {
	return (
		<Wrapper>
			<Sample1 />
			<Sample2 />
			<Sample3 />
		</Wrapper>
	);
};

export default App;
