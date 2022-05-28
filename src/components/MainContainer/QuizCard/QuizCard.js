import React from 'react';
import Card from '../../UI/Card';
import classes from './QuizCard.module.css';
const QuizCard = () => {
	return (
		<Card className={classes['quiz-card']}>
			<h2>Kuala Lumpur is the capital of</h2>
			<div>
				<span>A</span>
				<p>Vietnam</p>
			</div>
			<div>
				<span>B</span>
				<p>Malaysia</p>
			</div>
			<div>
				<span>C</span>
				<p>Sweden</p>
			</div>
			<div>
				<span>D</span>
				<p>Austria</p>
			</div>
			<button>Next</button>
		</Card>
	);
};

export default QuizCard;
