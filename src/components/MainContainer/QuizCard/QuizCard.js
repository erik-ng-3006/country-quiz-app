import React from 'react';
import Card from '../../UI/Card';
import Answer from './Answer/Answer';
import classes from './QuizCard.module.css';
const QuizCard = () => {
	return (
		<Card className={classes['quiz-card']}>
			<img src='/undraw_adventure.svg' alt='' />
			<h2>Kuala Lumpur is the capital of</h2>
			<Answer order='A' answer='Vietnam' />
			<Answer order='B' answer='Malaysia' />
			<Answer order='C' answer='Sweden' />
			<Answer order='D' answer='Austria' />
			<button>Next</button>
		</Card>
	);
};

export default QuizCard;
