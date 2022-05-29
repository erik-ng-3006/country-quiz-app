import React from 'react';
import Card from '../../UI/Card';
import classes from './ResultsCard.module.css';
const ResultsCard = () => {
	return (
		<Card className={classes['results-card']}>
			<img src='/undraw_winners.svg' alt='' />
			<h2>Results</h2>
			<p>
				You got <span>4</span> correct answers
			</p>
			<button>Try again</button>
		</Card>
	);
};

export default ResultsCard;
