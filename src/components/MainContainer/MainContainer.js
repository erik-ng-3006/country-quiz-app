import React from 'react';
import QuizCard from './QuizCard/QuizCard';
import classes from './MainContainer.module.css';
const MainContainer = (props) => {
	return (
		<main className={classes.main}>
			<h1>Country quiz</h1>
			{props.children}
		</main>
	);
};

export default MainContainer;
