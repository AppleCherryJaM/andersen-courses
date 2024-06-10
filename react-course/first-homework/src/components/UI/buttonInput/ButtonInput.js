import React from "react";
import { Link } from "react-router-dom";

import "./ButtonInput.css"

const ButtonInput = props => {
	if (props.href) {
		return (
			<a
				className={`button button-${props.size || "default"} 
					${props.inverse 
						&& "button--inverse"} 
					${props.danger && 'button--danger'}`}
				href={props.href}>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return(
			<Link
				to={props.to}
				exact={props.exact}
				className={`button button-${props.size || "default"} 
					${props.inverse
					&& "button--inverse"} 
					${props.danger && 'button--danger'}`}
					onClick={props.onClick}
					disabled={props.disabled}>
			</Link>
		);
	}
}

export default ButtonInput;