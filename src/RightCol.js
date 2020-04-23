import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import useMounted from './hooks/useMounted';
import colors from './colors';

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Title = styled(Typography)`
  color: ${colors.bluma};
  margin-top: 4rem;
`;

const StyledLinearProgress = styled(LinearProgress)`
    background: transparent;
    width: 30rem;
    height: 1rem;
    transition: transform 2s ease-out;
    transform-origin: left;
    transform: scaleX(${(props) => props.mounted ? '1' : '0'});

    & .MuiLinearProgress-bar {
        background: ${colors.bluma};
    }
`;

const I = styled.i`
    font-size: 3rem;
    color: white;
    margin-right: 2rem;
`;

const Span = styled.span`
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
`;

const programmingLanguages = [
    ['devicon-javascript-plain', 90],
    ['devicon-java-plain', 70],
    ['devicon-php-plain', 60],
    ['devicon-csharp-line', 50],
    ['devicon-c-plain', 40],
    ['devicon-cplusplus-plain', 30]
];

const dataQueryLanguages = [
    ['devicon-postgresql-plain-wordmark', 70],
    ['devicon-mongodb-plain-wordmark', 70],
    ['devicon-mysql-plain-wordmark', 40],
];

const oms = [
    ['devicon-sequelize-plain-wordmark', 70],
    ['devicon-dot-net-plain-wordmark', 50],
    ['devicon-doctrine-plain-wordmark', 40],
];

const frontEndFrameworks = [
    ['devicon-react-original', 90],
    ['devicon-angularjs-plain', 30],
    ['devicon-vuejs-plain', 30]
];

function RightCol() {
    const mounted = useMounted();

    return (
        <ColDiv>
            <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                PROGRAMMING LANGUAGE EXPERIENCE
            </Title>
            {programmingLanguages.map(([className, value]) => (
                <Span key={className}>
                    <I className={className} />
                    <StyledLinearProgress mounted={mounted} value={value} variant="determinate" />
                </Span>
            ))}
            <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                DATA QUERY LANGUAGE EXPERIENCE
            </Title>
            {dataQueryLanguages.map(([className, value]) => (
                <Span key={className}>
                    <I className={className} />
                    <StyledLinearProgress mounted={mounted} value={value} variant="determinate" />
                </Span>
            ))}
            <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                ORM/ODM EXPERIENCE
            </Title>
            {oms.map(([className, value]) => (
                <Span key={className}>
                    <I className={className} />
                    <StyledLinearProgress mounted={mounted} value={value} variant="determinate" />
                </Span>
            ))}
            <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                FRONT-END FRAMEWORK EXPERIENCE
            </Title>
            {frontEndFrameworks.map(([className, value]) => (
                <Span key={className}>
                    <I className={className} />
                    <StyledLinearProgress mounted={mounted} value={value} variant="determinate" />
                </Span>
            ))}
        </ColDiv>
    );
}

export default RightCol;
