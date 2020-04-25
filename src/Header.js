import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import medias from './medias';
import colors from './colors';

const WebSiteLink = styled(Typography)`
    font-family: 'Baloo Paaji 2';
    color: white;
    position: absolute;
    top: 2rem;
    right: 2rem;

    ${medias.leS} {
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }
`;

const Title = styled(Typography)`
    font-family: 'Baloo Paaji 2';
    color: white;
    padding-left: 26.5rem;
    padding-top: 5rem;

    ${medias.leS} {
        font-size: 2rem;
        display: block;
        padding: 20rem 0 0 0;
        text-align: center;
    }
`;

const SubTitle = styled(Typography)`
    width: 100%;
    background: ${colors.bluma};
    color: white;
    margin-top: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 26.5rem;

    ${medias.leS} {
        padding: 0.2rem 0;
        text-align: center;
    }
`;

const Img = styled.img`
    border-radius: 2rem;
    position: absolute;
    top: 2em;
    left: 4rem;
    width: 20rem;

	${medias.leS} {
        left: 50%;
        width: 80%;
        transform: translateX(-50%);
    }
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
