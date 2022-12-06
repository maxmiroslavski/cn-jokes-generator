import React from 'react';

import { useState } from 'react';

import styled from 'styled-components';

import logo from '../assets/chuck.png';

const JokeGeneratorSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 50rem;
	margin: 2rem auto;
	padding: 3rem;
	text-align: center;
	border-radius: 20px;

	@media (max-width: 800px) {
		border-radius: 0;
	}

	p {
		margin-top: 1.5rem;
		color: #ffffff;
		border: 2px solid #ce0e2d;
		padding: 1rem;
		font-size: 1.6rem;
	}

	button {
		background-color: #ce0e2d;
		color: #ffffff;
		border: none;
		padding: 1rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		/* font-family: 'Barlow Condensed', sans-serif; */
		font-family: 'Graduate', cursive;
		font-weight: 100;
	}

	button:hover {
		background-color: #ffffff;
		color: #ce0e2d;
		transition-duration: 0.3s;
		cursor: pointer;
	}

	img {
		width: 50%;
		margin: 1.5rem 0;
	}

	h1 {
		color: #ffffff;
		font-family: 'Graduate', cursive;
		font-size: 3rem;
		letter-spacing: 0.1rem;
	}
`;

export const JokeGenerator = () => {
	const [joke, setJoke] = useState('');

	const jokeGeneratorHandler = async () => {
		const response = await fetch('https://api.chucknorris.io/jokes/random');

		const data = await response.json();

		setJoke(data.value);
	};

	return (
		<JokeGeneratorSection>
			<h1>CHUCK NORRIS JOKES GENERATOR</h1>
			<img src={logo} alt="Chuck Norris" />
			<button onClick={jokeGeneratorHandler}>Generate some joke</button>
			{joke && <p>"{joke}"</p>}
		</JokeGeneratorSection>
	);
};
