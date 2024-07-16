"use client"
import styles from "./cover.module.scss"
import Image from "next/image"
import { Counter } from "@/app/_components/counter/Counter"

interface Props {
	openForm: () => void
}

export const Cover = ({ openForm }: Props) => {
	return (
		<div className={styles.cover}>
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

				<Counter />

				{/*<div className={styles.btn}>*/}
				{/*	<WedButton onClick={openForm}>*/}
				{/*		<>CONFIRMA TU ASISTENCIA</>*/}
				{/*	</WedButton>*/}
				{/*</div>*/}
			</div>
		</div>
	)
}
