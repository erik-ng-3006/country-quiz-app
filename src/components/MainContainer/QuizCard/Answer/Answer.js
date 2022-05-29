import React from 'react';
import classes from './Answer.module.css';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const Answer = (props) => {
	return (
		<div className={classes.answer}>
			<span>{props.order}</span>
			<p>{props.answer}</p>
			<CheckCircleOutlineRoundedIcon className={classes.icon} />
			<HighlightOffRoundedIcon className={classes.icon} />
		</div>
	);
};

export default Answer;
