import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Accordion from './Accordion';
import medias from './medias';
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
    margin-top: 6rem;

    ${medias.leS} {
        margin-top: 0;
        width: 100%;
    }
`;

const experiences = [
	{
		summary: 'Feb 2020 – April 2020',
		company: 'Recistone',
		details: (
			<div>
				Building an informative website for a stone selling business, links:
				<br />
				<br />
				<a style={{ color: 'white' }} href="www.recistone.com/sandbox">www.recistone.com/sandbox</a>
				<br />
				<a style={{ color: 'white' }} href="www.recistone.com/sandbox/calacatta">www.recistone.com/sandbox/calacatta</a>
				<br />
				<br />
            Some tools used:
				<br />
						 - React
				<br />
						 - HTML/CSS
				<br />
						 - PHP
			</div>
		)
	},
	{
		summary: 'Feb 2020 – Apr 2020',
		company: 'Upwork',
		details: (
			<div>
				Mainly building miscellanious scripts for bots or google suite automations
				<br />
				<br />
						Some tools used:
						 - Google apps scripts
				<br />
						 - Mineflayer
				<br />
						 - React
				<br />
						 - Styled components
				<br />
						 - Node.js
				<br />
						 - Express
				<br />
						 - Sequelize ORM
				<br />
						 - PostgreSQL
			</div>
		)
	},
	{
		summary: 'Aug 2018 – Jan 2020',
		company: 'Mindera',
		details: (
			<div>
				Building the front-end of e-commerce web applications with a professional team of very experienced developers using the scrum methodology.
				<br />
				<br />
					Some tools used:
				<br />
						- React
				<br />
						- HTML/CSS
			</div>
		)
	},
	{
		summary: 'Jan 2017 – Jul 2018',
		company: 'Knowledge Forever',
		details: (
			<div>
				Mainly working with React and Redux on a web app with the following main concepts:
				<br />
				<br />
				- An app for teachers to use in their classrooms and control their students computer screen in real time
				<br />
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
				<br />
				- Redux and Redux thunk
				<br />
				- npm and yarn for dependency management
				<br />
				- CSS/SCSS
				<br />
				- HTML5
				<br />
				- Material-UI Framework
				<br />
				<br />
				Server Side:
				<br />
				<br />
				- PHP
				<br />
				- Doctrine ORM
				<br />
				- Composer
				<br />
				- MySQL
				<br />
				- Firebase ( for information that needed real time access )
			</div>
		)
	}
];

function LeftCol() {
	return (
		<ColDiv>
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
					<Link target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jpgdsl@gmail.com"> <MailIcon style={{ marginRight: '2rem' }} /> jpgsl@gmail.com</Link>
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
					{experiences.map(experience => (
						<Accordion
							key={experience.summary}
							summary={experience.summary}
							details={experience.details}
							company={experience.company} />
					))}
				</P>
			</section>
		</ColDiv>
	)
}

export default LeftCol;
