import React from 'react';
import styled from 'styled-components';

// className needs to be passed as argument to implement styled-component with it
const Link: React.FC<{ className?: string; href?: string }> = ({
	className,
	href = '',
	children
}) => {
	return (
		<a className={className} href={href}>
			{children}
		</a>
	);
};

const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`;

const Sample5 = () => {
	return (
		<div>
			<Link>default link</Link>
			<br />
			<StyledLink>styled link</StyledLink>
		</div>
	);
};

export default Sample5;
