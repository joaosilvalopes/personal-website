import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Accordion from './Accordion';
import colors from './colors';

const Title = styled(Typography)`
  color: ${colors.bluma};
`;

const P = styled(Typography)`
  color: white;
  text-align: justify;
`;

const ContactSpan = styled.span`
  display: flex;
  color: white;
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

const experiences = [
    {
        summary: 'Feb 2020 – Present',
        company: 'Recistone',
        details: `
            Building an informative website for a stone selling business, links:
            <br />
            <br />
            <a style="color: white;" href="www.recistone.com/sandbox">www.recistone.com/sandbox</a>
            <a style="color: white;" href="www.recistone.com/sandbox/calacatta">www.recistone.com/sandbox/calacatta</a>
        `
    },
    {
        summary: 'Feb 2020 – Apr 2020',
        company: 'Upwork',
        details: `
            Mainly building miscellanious scripts for bots or google suite automations
        `
    },
    {
        summary: 'Aug 2018 – Jan 2020',
        company: 'Mindera',
        details: 'Building the front-end of e-commerce web applications with a professional team of very experienced developers using the scrum methodology.'
    },
    {
        summary: 'Jan 2017 – Jul 2018',
        company: 'Knowledge Forever',
        details: `
        Mainly working with React and Redux on a web app with the following main concepts:
        <br />
        <br />
        - An app for teachers to use in their classrooms and control their students computer screen in real time
        - A complex backoffice for the teacher to prepare their classes(sessions), and their individual exercises(sequences)
        <br />
        <br />
        Some tools i used for this project:
        <br />
        <br />
        Client Side:
        <br />
        <br />
        - ES6 Javascript, babel transpiler, webpack, React.JS
        - Redux and Redux thunk
        - npm and yarn for dependency management
        - CSS/SCSS
        - HTML5
        - Material-UI Framework
        <br />
        <br />
        Server Side:
        <br />
        <br />
        - PHP
        - Doctrine ORM
        - Composer
        - MySQL
        - Firebase ( for information that needed real time access )`
    }
]

function LeftCol() {
    return (
        <ColDiv style={{ marginTop: '6rem' }}>
            <section style={{ marginTop: '2rem' }}>
                <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                    ABOUT ME
                </Title>
                <P variant="subtitle1">
                    I am a 22 year old software engineer and i enjoy developing all kinds of tech products from graphical user interfaces to back-end services and automation scripts/bots, although i have more professional experience on web development.
                </P>
            </section>
            <section style={{ marginTop: '2rem' }}>
                <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                    Contacts
                </Title>
                <ContactSpan>
                    <Link target="_blank" href="tel:+351 916 619 926"> <PhoneAndroidIcon style={{ marginRight: '2rem' }} /> +351 916 619 926</Link>
                </ContactSpan>
                <ContactSpan>
                    <Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jpgsl@gmail.com"> <MailIcon style={{ marginRight: '2rem' }} /> jpgsl@gmail.com</Link>
                </ContactSpan>
                <ContactSpan>
                    <Link target="_blank" href="https://github.com/joaosilvalopes/"> <GitHubIcon style={{ marginRight: '2rem' }} /> joaosilvalopes</Link>
                </ContactSpan>
                <ContactSpan>
                    <Link target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-paulo-lopes-917727166/"> <LinkedInIcon style={{ marginRight: '2rem' }} /> João Paulo Lopes</Link>
                </ContactSpan>
            </section>
            <section style={{ marginTop: '2rem' }}>
                <Title variant="h5" style={{ marginBottom: '1.5rem' }}>
                    PROFESSIONAL EXPERIENCE
                </Title>
                <P variant="subtitle1">
                    {experiences.map(experience => <Accordion {...experience} />)}
                </P>
            </section>
        </ColDiv>
    )
}

export default LeftCol;
