"use client"
import styles from "./cover.module.scss"
import Image from "next/image"
import { Counter } from "@/app/_components/counter/Counter"

interface Props {
	scrollToView: () => void
	id: string
}

export const Cover = ({ id, scrollToView }: Props) => {
	return (
		<section className={styles.cover} id={id}>
			<div className={styles.cover__content}>
				<Image
					src={"/cover/letters-2.svg"}
					alt={"letters"}
					width={4500}
					height={3200}
					className={styles["letters-desktop"]}
				/>
				<Image
					src={"/cover/letters-mobile.svg"}
					alt={"letters"}
					width="351"
					height="225"
					className={styles["letters-mobile"]}
				/>

				<div className={styles.bottom}>
					<Counter />
					<span className={styles.days_text}>DAYS ‘TIL THE BIG DAY</span>
				</div>

				<Image
					src={"/cover/arrow-down.svg"}
					alt={"arrow"}
					width={24}
					height={24}
					className={styles.icon}
					onClick={scrollToView}
				/>

				{/*<div className={styles.btn}>*/}
				{/*	<WedButton onClick={openForm}>*/}
				{/*		<>CONFIRMA TU ASISTENCIA</>*/}
				{/*	</WedButton>*/}
				{/*</div>*/}
			</div>
		</section>
	)
}
