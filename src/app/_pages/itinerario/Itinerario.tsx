import styles from "./itinerario.module.scss"
import Image from "next/image"
import { useEffect, useRef } from "react"

export const Itinerario = ({ id }: { id: string }) => {
	const itinerario: { name: string; hour: string }[] = [
		{
			name: "Ceremonia",
			hour: "5:00 P.M.",
		},
		{
			name: "Recepción",
			hour: "5:00 P.M.",
		},
		{
			name: "Baile",
			hour: "5:00 P.M.",
		},
		{
			name: "Cena",
			hour: "5:00 P.M.",
		},
	]

	const cardRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (cardRef.current) {
						cardRef.current.classList.add(styles["card__animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (cardRef.current) {
			observer.observe(cardRef.current)
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current)
			}
		}
	}, [])

	return (
		<section className={styles.container} id={id}>
			<div className={styles.card} ref={cardRef}>
				<div className={styles.content}>
					<div className={styles.content__top}>
						<Image
							src={"/itinerario/leaf.svg"}
							alt={"leaf"}
							width={64}
							height={31}
							className={styles.leaf}
						/>
						<div className={styles["content__top--texts"]}>
							<span className={styles.programa}>PROGRAMA DE BODA</span>
							<span className={styles.itinerario}>Itinerario</span>
						</div>
					</div>
					<div className={styles.events_box}>
						{itinerario.map((evento: { hour: string; name: string }) => {
							return (
								<div key={evento.name} className={styles.events}>
									<span className={styles.name}>{evento.name}</span>
									<span>{evento.hour}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
