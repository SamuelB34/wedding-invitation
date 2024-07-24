"use client"
import styles from "./page.module.scss"
import { Loader } from "@/app/_components/loader/Loader"
import { useState } from "react"
import { Cover } from "@/app/_components/cover/Cover"
import { Nosotros } from "@/app/_components/nosotros/Nosotros"
import { Invitamos } from "@/app/_components/invitamos/Invitamos"
import { NoNinos } from "./_components/no-ninos/NoNinos"

export default function Home() {
	const [loading, setLoading] = useState(false)

	return (
		<main className={styles.main}>
			{loading ? (
				<Loader />
			) : (
				<>
					<Cover
						openForm={() => {
							console.log("Hola mundo")
						}}
					/>
					<Nosotros />
					<Invitamos />
					<NoNinos />
				</>
			)}
		</main>
	)
}
