import styles from "./ubicaciones.module.scss"
import Image from "next/image"
import { useEffect, useRef } from "react"

interface Props {
	id: string
}

export const Ubicaciones = ({ id }: Props) => {
	const card1 = useRef<any>(null)
	const card2 = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (card1.current) {
						card1.current.classList.add(styles["card__animation"])
					}
					if (card2.current) {
						card2.current.classList.add(styles["card__animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (card1.current) {
			observer.observe(card1.current)
		}

		if (card2.current) {
			observer.observe(card2.current)
		}

		return () => {
			if (card1.current) {
				observer.unobserve(card1.current)
			}
			if (card2.current) {
				observer.unobserve(card2.current)
			}
		}
	}, [])

	return (
		<section className={styles.container} id={id}>
			<div className={styles.content}>
				<div className={styles.content__base}>
					<Image
						src={"/ubicaciones/perpetuo.webp"}
						alt={"perpetuo"}
						width={316}
						height={527}
					/>
					<div className={styles.content__line}></div>
					<div className={styles["content__base--text"]}>
						<span className={styles.hour}>4:50 PM</span>
						<span className={styles.spot}>CEREMONIA</span>
					</div>
					<span className={styles["content__base--place"]}>
						Parroquia de{" "}
						<b>
							Nuestra Señora del <br /> Perpetuo Socorro
						</b>
					</span>
				</div>
				<div className={styles.content__base}>
					<Image
						src={"/ubicaciones/marah.webp"}
						alt={"marah"}
						width={316}
						height={527}
					/>
					<div className={styles.content__line}></div>
					<div className={styles["content__base--text"]}>
						<span className={styles.hour}>4:50 PM</span>
						<span className={styles.spot}>RECEPCIÓN</span>
					</div>
					<span className={styles["content__base--place"]}>
						<b>Maráh</b>
						<br />
						Jardín de Eventos
					</span>
				</div>
			</div>

			<div className={styles.mobile}>
				<div className={styles.card} ref={card1}>
					<Image
						src={"/ubicaciones/ceremonia.svg"}
						alt={"ceremonia"}
						className={styles.mobile__ceremonias}
						width={350}
						height={256}
					/>
					<div className={styles.hour}>
						<span>4:50 PM</span>
					</div>

					<div className={styles.data}>
						<span className={styles.data__title}>Ceremonia</span>
						<span className={styles.data__name}>
							Parroquia de{" "}
							<b>
								Nuestra Señora del <br />
								Perpetuo Socorro
							</b>
						</span>
					</div>
				</div>

				<div className={styles.card} ref={card2}>
					<Image
						src={"/ubicaciones/recepcion.png"}
						alt={"recepcion"}
						className={styles.mobile__ceremonias}
						width={350}
						height={256}
					/>
					<div className={styles.hour}>
						<span>4:50 PM</span>
					</div>

					<div className={styles.data}>
						<span className={styles.data__title}>Recepción</span>
						<span className={styles.data__name}>
							<b>Marah</b> Jardín de Eventos
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
