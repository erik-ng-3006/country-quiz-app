import React from 'react';
import classes from './LoadingRoller.module.css';
const LoadingRoller = () => {
	return (
		<div className={classes['lds-roller']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default LoadingRoller;
