import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import colors from './colors';

const WebSiteLink = styled(Typography)`
    font-family: 'Baloo Paaji 2';
    color: white;
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

const Title = styled(Typography)`
    font-family: 'Baloo Paaji 2';
    color: white;
    padding-left: 26.5rem;
    padding-top: 5rem;
`;

const SubTitle = styled(Typography)`
    width: 100%;
    background: ${colors.bluma};
    color: white;
    margin-top: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 26.5rem;
`;

const Img = styled.img`
    border-radius: 2rem;
    position: absolute;
    top: 2em;
    left: 4rem;
    width: 20rem;
`;

const StyledHeader = styled.header`
    position: relative;
    background: ${colors.oiledIron};
`;

function Header() {
    return (
        <StyledHeader>
            <Img src="./me.jpeg" />
            <Title variant="h2" component="h1">
                João Lopes
            </Title>
            <SubTitle variant="h5" component="h2">
                Software engineer
            </SubTitle>
            <WebSiteLink variant="subtitle1">
                https://jpl-dev.herokuapp.com/
            </WebSiteLink>
        </StyledHeader>
    )
};

export default Header;
