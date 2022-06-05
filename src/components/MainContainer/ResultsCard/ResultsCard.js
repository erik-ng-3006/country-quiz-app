import React from 'react';
import Card from '../../UI/Card';
import classes from './ResultsCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from '../../../store/quiz-slice';
const ResultsCard = () => {
	const point = useSelector((state) => state.quiz.point);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const restartBtnHandler = () => {
		dispatch(quizActions.resetPoint());
		dispatch(quizActions.setGameOver(false));
		navigate('/');
	};
	return (
		<Card className={classes['results-card']}>
			<img src='/undraw_winners.svg' alt='' />
			<h2>Results</h2>
			<p>
				You got <span>{point}</span> correct answers
			</p>
			<button onClick={restartBtnHandler}>Try again</button>
		</Card>
	);
};

export default ResultsCard;
