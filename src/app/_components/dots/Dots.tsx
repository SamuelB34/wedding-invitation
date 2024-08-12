"use client"
import { useEffect, useState } from "react"
import styles from "./dots.module.scss"
import Image from "next/image"
import { pages } from "../../../../shared/variables"

interface Params {
	active: number
	dark: boolean
	click: (text: string) => void
}

export const Dots = ({ active, dark, click }: Params) => {
	const [dots, setDots] = useState(pages)

	useEffect(() => {
		let dots_value = dots.map((dot) => {
			return { id: dot.id, active: false, name: dot.name }
		})
		dots_value[active].active = true
		setDots(dots_value)
	}, [active])

	return (
		<div className={styles["dots"]}>
			{dots.map((dot) =>
				dot.id === 0 ? (
					<Image
						src={"/dots/home.svg"}
						alt={"home"}
						width={13}
						height={13}
						key={dot.id}
						className={!dark ? styles.light_icon : ""}
						onClick={() => {
							click(dot.name)
						}}
					/>
				) : (
					<div
						className={
							styles[
								`dots--${dot.active ? "active" : "inactive"}${dark ? "__dark" : ""}`
							]
						}
						key={dot.id}
						onClick={() => {
							click(dot.name)
						}}
					>
						{dot.active && <div className={styles.inner_circle}></div>}
					</div>
				)
			)}
		</div>
	)
}
