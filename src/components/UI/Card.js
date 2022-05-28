import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	const cssClasses = `${classes.card} ${props.className}`;

	return <div className={cssClasses}>{props.children}</div>;
};

export default Card;
