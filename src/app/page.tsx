"use client"
import styles from "./page.module.scss"
import { Loader } from "@/app/_components/loader/Loader"
import { useState } from "react"
import { Cover } from "@/app/_pages/cover/Cover"
import { Nosotros } from "@/app/_pages/nosotros/Nosotros"
import { Invitamos } from "@/app/_pages/invitamos/Invitamos"
import { NoNinos } from "@/app/_pages/no-ninos/NoNinos"
import { Vestimenta } from "@/app/_pages/vestimenta/Vestimenta"
import { End } from "@/app/_pages/end/End"
import { Itinerario } from "@/app/_pages/itinerario/Itinerario"
import { Ubicaciones } from "@/app/_pages/ubicaciones/Ubicaciones"
import { Regalos } from "@/app/_pages/regalos/Regalos"

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
					<Ubicaciones />
					<Vestimenta />
					<NoNinos />
					<Itinerario />
					<Regalos />
					<End />
				</>
			)}
		</main>
	)
}
