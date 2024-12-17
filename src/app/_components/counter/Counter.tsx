"use client"
import styles from "./counter.module.scss"

import { useEffect, useState } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

const targetDate = dayjs.tz("2025-11-23T17:00:00", "America/Los_Angeles")

export const Counter = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: "0",
		hours: "0",
		minutes: "0",
		seconds: "0",
	})
	const formatNumber = (num: number): string => {
		return num < 10 ? `0${num}` : `${num}`
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const now = dayjs()
			const difference = targetDate.diff(now)

			const days = formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24)))
			const hours = formatNumber(
				Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			)
			const minutes = formatNumber(
				Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
			)
			const seconds = formatNumber(
				Math.floor((difference % (1000 * 60)) / 1000)
			)

			setTimeLeft({ days, hours, minutes, seconds })
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.count_down}>
			<div className={styles.count_down__content}>
				<div className={styles.labels}>
					<span className={styles.label}>DÍAS</span>
					<span className={styles.number}>{timeLeft.days}</span>
				</div>

				<div className={styles.separator}></div>

				<div className={styles.labels}>
					<span className={styles.label}>HR.</span>
					<span className={styles.number}>{timeLeft.hours}</span>
				</div>

				<div className={styles.labels}>
					<span className={styles.label}>MIN.</span>
					<span className={styles.number}>{timeLeft.minutes}</span>
				</div>

				<div className={styles.labels}>
					<span className={styles.label}>SEG.</span>
					<span className={styles.number}>{timeLeft.seconds}</span>
				</div>
			</div>
		</div>
	)
}
