import styles from "./end.module.scss"
import { Counter } from "../../_components/counter/Counter"
import Image from "next/image"
import { useEffect, useRef } from "react"

export const End = ({ id }: { id: string }) => {
	const textRef = useRef<any>(null)
	const imgRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (textRef.current) {
						textRef.current.classList.add(styles["text__paragraph--animation"])
					}
					if (imgRef.current) {
						imgRef.current.classList.add(styles["container__img--animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (textRef.current) {
			observer.observe(textRef.current)
		}

		if (imgRef.current) {
			observer.observe(imgRef.current)
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current)
			}
			if (imgRef.current) {
				observer.unobserve(imgRef.current)
			}
		}
	}, [])

	return (
		<section className={styles.container} id={id}>
			<Image
				src="/end/Vector.png"
				alt="end"
				width={734}
				height={189}
				className={styles.container__img}
				ref={imgRef}
			/>
			<div></div>
			<div>
				<Counter />
			</div>
			<div className={styles.text}>
				<p className={styles.text__title}>¡NOS VEMOS PRONTO!</p>
				<p className={styles.text__paragraph} ref={textRef}>
					Si aún no confirmas tu asistencia, <br />{" "}
					<a href="#">¡haz click aquí!</a>
				</p>
			</div>
			<div className={styles.line}></div>
			<div className={styles.nav}>
				<a href="#">Inicio</a>
				<a href="#">Nosotros</a>
				<a href="#">Ceremonia y recepción</a>
				<a href="#">Vestimenta</a>
				<a href="#">Itinerario</a>
				<a href="#">Registro de regalos</a>
			</div>
			<div></div>
		</section>
	)
}
