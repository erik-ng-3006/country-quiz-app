import React, { useRef } from 'react';
import classes from './Answer.module.css';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from '../../../../store/quiz-slice';

const Answer = (props) => {
	const isCorrectAnswer = useSelector((state) => state.quiz.isCorrectAnswer);
	const dispatch = useDispatch();
	const questionCountryName = props.questionCountry.name;
	const answerRef = useRef('');
	//console.log(questionCountryName);

	const onCheckAnswerHandler = (e) => {
		if (props.answer === questionCountryName) {
			dispatch(quizActions.setIsCorrectAnswer(true));
			dispatch(quizActions.setPoint());
		} else {
			dispatch(quizActions.setIsCorrectAnswer(false));
			dispatch(quizActions.setGameOver(true));
		}
	};

	let styleClasses;

	if (
		(isCorrectAnswer !== null && props.answer === questionCountryName) ||
		(isCorrectAnswer === false && props.answer === questionCountryName)
	) {
		styleClasses = `${classes.answer} ${classes['correct-answer']}`;
	} else if (isCorrectAnswer === false) {
		styleClasses = `${classes.answer} ${classes['incorrect-answer']}`;
	} else {
		styleClasses = classes.answer;
	}
	return (
		<div
			className={styleClasses}
			onClick={onCheckAnswerHandler}
			ref={answerRef}
		>
			<span>{props.order}</span>
			<p>{props.answer}</p>
			{isCorrectAnswer && (
				<CheckCircleOutlineRoundedIcon className={classes.icon} />
			)}
			{isCorrectAnswer === false &&
				props.answer === questionCountryName && (
					<CheckCircleOutlineRoundedIcon className={classes.icon} />
				)}
			{isCorrectAnswer === false &&
				props.answer !== questionCountryName && (
					<HighlightOffRoundedIcon className={classes.icon} />
				)}
		</div>
	);
};

export default Answer;
