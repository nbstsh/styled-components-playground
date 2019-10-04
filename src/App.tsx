import React from 'react';

import styled from 'styled-components';

import Sample1 from './components/sample1/sample1.component';
import Sample2 from './components/sample2/sample2.component';
import Sample3 from './components/sample3/sample3.component';
import Sample4 from './components/sample4/sample4.component';
import Sample5 from './components/sample5/sample5.component';
import Sample6 from './components/sample6/sample6.component';
import Sample7 from './components/sample7/sample7.component';
import Sample8 from './components/Sample8/sample8.component';
import Sample9 from './components/sample9/sample9.component';

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
			<Sample4 />
			<Sample5 />
			<Sample6 />
			<Sample7 />
			<Sample8 />
			<Sample9 />
		</Wrapper>
	);
};

export default App;
