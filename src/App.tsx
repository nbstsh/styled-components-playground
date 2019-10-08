import React from 'react';

import Basic from './components/basic/basic.component';
import Advanced from './components/advanced/advanced.component';

const App: React.FC = () => {
	return (
		<div>
			<Basic />
			<Advanced />
		</div>
	);
};

export default App;
