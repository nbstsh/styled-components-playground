import React from 'react';
import styled from 'styled-components';

const style = {
	background: 'palevioletred',
	height: '50px',
	width: '50px'
};

const Box = styled.div(style);

const PropsBox = styled.div<{ background: string }>(props => ({
	...style,
	background: props.background
}));

const StyleObjects = () => {
	return (
		<div>
			<Box />
			<PropsBox background='blue' />
		</div>
	);
};

export default StyleObjects;
