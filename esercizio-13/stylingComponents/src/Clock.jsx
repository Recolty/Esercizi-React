import { useEffect, useState } from "react"
import classes from "./Clock.module.scss"


export function Clock() {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<p className={classes.clock}>
			Current time: <span>{date.toLocaleTimeString()}</span>
		</p>
	)
}
