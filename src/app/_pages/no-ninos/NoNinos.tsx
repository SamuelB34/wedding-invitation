import styles from "./no-ninos.module.scss"
import { useEffect, useRef } from "react"

export const NoNinos = ({ id }: { id: string }) => {
	const lineRef = useRef<any>(null)
	const titleRef = useRef<any>(null)
	const paragraphRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (lineRef.current) {
						lineRef.current.classList.add(styles["line__content--animation"])
					}
					if (titleRef.current) {
						titleRef.current.classList.add(styles["text__title--animation"])
					}
					if (paragraphRef.current) {
						paragraphRef.current.classList.add(
							styles["text__paragraph--animation"]
						)
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (lineRef.current) {
			observer.observe(lineRef.current)
		}

		if (titleRef.current) {
			observer.observe(titleRef.current)
		}

		if (paragraphRef.current) {
			observer.observe(paragraphRef.current)
		}

		return () => {
			if (lineRef.current) {
				observer.unobserve(lineRef.current)
			}
			if (titleRef.current) {
				observer.unobserve(titleRef.current)
			}
			if (paragraphRef.current) {
				observer.unobserve(paragraphRef.current)
			}
		}
	})

	return (
		<section className={styles.container} id={id}>
			<div className={styles.container__box}>
				<span className={styles.title}>NO nIñoS</span>
			</div>
			<div className={styles.text}>
				<p className={styles.text__title} ref={titleRef}>
					SIN EXCEPCIÓN
				</p>
				<div className={styles.line}>
					<div className={styles.line__content} ref={lineRef}></div>
				</div>
				<p className={styles.text__paragraph} ref={paragraphRef}>
					Esperamos que respetando nuestra decision, nos ayuden a hacer de esta
					la boda de nuestros sueños. Un evento <b>SIN NIÑOS</b>.
				</p>
			</div>
		</section>
	)
}
