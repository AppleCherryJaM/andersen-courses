import React from "react";
import { Link } from "react-router-dom";

import classes from "./ButtonInput.module.css"

const ButtonInput = props => {
	if (props.to) {
		return(
			<Link
				to={props.to}
				exact={props.exact}
				className={`${classes.default} ${props.className}`}
					onClick={props.onClick}
					disabled={props.disabled}>
				{props.children}
			</Link>
		);
	} else {
		return (
			<a
				className={`${classes.default} ${props.className}`}
				href={props.href}>
				{props.children}
			</a>
		);
	}
}

export default ButtonInput;