import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ min }) => {
	const [minutes, setMinutes] = useState(min);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timer = (
			minutes > 0 || seconds > 0
		) && setInterval(() => {
			setSeconds(seconds - 1);
			if (seconds === 0 && minutes > 0) {
				setSeconds(59);
				setMinutes(minutes - 1)
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [minutes, seconds]);

	return <div className="timer">
		{minutes}:{seconds}
	</div>
}

export default Timer;