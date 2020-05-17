import React, { useState } from 'react';
import styled from 'styled-components';

import colors from './colors';

const Span = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const TriangleSpan = styled.span`
    display: inline-flex;
    color: ${colors.bluma};
    font-size: 1.5rem;
    transition: transform 0.5s linear;
    transform: rotate(${(props) => props.open ? '90deg' : '0'});
    margin-right: 1rem;
`;

const WrapperDiv = styled.div`
    margin-top: 2rem;
`;

const CompanySpan = styled.span`
    color: ${colors.bluma};
    margin-left: 2rem;
		font-weight: bold;
		display: inline-block;
		margin-bottom: 1rem;
`;

function Accordion({ summary, details, company }) {
	const [open, setOpen] = useState(true);

	return (
		<WrapperDiv>
			<Span onClick={() => setOpen(open => !open)}>
				<TriangleSpan open={open}>▶</TriangleSpan>
				{summary}
			</Span>

			<CompanySpan>{company}</CompanySpan>

			{open && details}
		</WrapperDiv>
	)
}

export default Accordion;
