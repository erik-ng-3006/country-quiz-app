import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getRandomCountries,
	getRandomCountry,
	quizActions,
	questions,
} from '../../../store/quiz-slice';
import Card from '../../UI/Card';
import Answer from './Answer/Answer';
import classes from './QuizCard.module.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

/* const questions = {
	capital: 'is the capital of',
	flag: 'Which country does this flag belong to?',
};

const getRandQuestion = (questions) => {
	const keys = Object.keys(questions);
	return questions[keys[Math.floor(Math.random() * keys.length)]];
}; */

const QuizCard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const countriesData = useSelector((state) => state.quiz.countriesData);
	const randCountries = useSelector((state) => state.quiz.randCountries);
	const isCorrectAnswer = useSelector((state) => state.quiz.isCorrectAnswer);
	const isGameOver = useSelector((state) => state.quiz.isGameOver);
	const questionCountry = useMemo(() => {
		return getRandomCountry(randCountries, 4) || {};
	}, [randCountries]);
	let questionElement;
	const randQuestion = useSelector((state) => state.quiz.randQuestion);

	if (randQuestion === questions.capital) {
		questionElement = (
			<h2>{questionCountry.capital + ' ' + randQuestion}</h2>
		);
	} else {
		questionElement = (
			<>
				<div
					style={{
						fontSize: '4rem',
						position: 'absolute',
						top: '1rem',
					}}
				>
					{questionCountry.flag}
				</div>
				<h2 style={{ marginTop: '2rem' }}>{randQuestion}</h2>
			</>
		);
	}

	const nextButtonHandler = () => {
		if (isGameOver) {
			navigate('/results');
		}
		dispatch(quizActions.setIsCorrectAnswer(null));
		dispatch(
			quizActions.setRandCountries(getRandomCountries(countriesData))
		);
	};
	return (
		<Card className={classes['quiz-card']}>
			<img src='/undraw_adventure.svg' alt='' />
			{questionElement}
			{randCountries.map((c, i) => {
				return (
					<Answer
						key={c.name}
						order={String.fromCharCode(65 + i)}
						answer={c.name}
						questionCountry={questionCountry}
					/>
				);
			})}
			{isCorrectAnswer !== null && (
				<button onClick={nextButtonHandler}>
					{isCorrectAnswer ? 'Next' : 'Result'}
				</button>
			)}
		</Card>
	);
};

export default QuizCard;
