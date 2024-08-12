"use client"
import styles from "./page.module.scss"
import { Loader } from "@/app/_components/loader/Loader"
import { useEffect, useState } from "react"
import { Cover } from "@/app/_pages/cover/Cover"
import { Nosotros } from "@/app/_pages/nosotros/Nosotros"
import { Invitamos } from "@/app/_pages/invitamos/Invitamos"
import { NoNinos } from "@/app/_pages/no-ninos/NoNinos"
import { Vestimenta } from "@/app/_pages/vestimenta/Vestimenta"
import { End } from "@/app/_pages/end/End"
import { Itinerario } from "@/app/_pages/itinerario/Itinerario"
import { Ubicaciones } from "@/app/_pages/ubicaciones/Ubicaciones"
import { Regalos } from "@/app/_pages/regalos/Regalos"
import { Header } from "@/app/_components/header/Header"

export default function Home() {
	const [loading, setLoading] = useState(false)
	const [section, setSection] = useState("")

	useEffect(() => {
		const sections = document.querySelectorAll("section") // Suponiendo que tus secciones están en etiquetas <section>
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setSection(entry.target.id) // Guarda el id de la sección visible
						console.log(entry.target.id)
					}
				})
			},
			{ threshold: 0.6 } // Ajusta el umbral según lo que necesites
		)

		sections.forEach((section) => {
			observer.observe(section)
		})

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section)
			})
		}
	}, [])

	const dark_pages = ["nosotros", "ubicaciones", "itinerario", "regalos"]

	return (
		<main className={styles.main}>
			{loading ? (
				<Loader />
			) : (
				<>
					<Header dark={dark_pages.includes(section)} />
					<Cover
						openForm={() => {
							console.log("Hola mundo")
						}}
						id={"cover"}
					/>
					<Nosotros id={"nosotros"} />
					<Invitamos id={"invitamos"} />
					<Ubicaciones id={"ubicaciones"} />
					<Vestimenta id={"vestimenta"} />
					<NoNinos id={"no-ninos"} />
					<Itinerario id={"itinerario"} />
					<Regalos id={"regalos"} />
					<End id={"end"} />
				</>
			)}
		</main>
	)
}
