import styles from "./nosotros.module.scss"
import Image from "next/image"
import { useEffect, useRef } from "react"

export const Nosotros = () => {
	const bodyRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (bodyRef.current) {
						bodyRef.current.classList.add(styles["text__container--animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (bodyRef.current) {
			observer.observe(bodyRef.current)
		}

		return () => {
			if (bodyRef.current) {
				observer.unobserve(bodyRef.current)
			}
		}
	}, [])

	return (
		<div className={styles.nosotros}>
			<div className={styles.nosotros__content}>
				<div className={styles.text}>
					<div className={styles.text__container} ref={bodyRef}>
						<h3 className={styles.text__title}>Nosotros</h3>
						<p className={styles.text__paragraph}>
							Nos conocimos en el 2014 en nuestro primer año de prepa por medio
							de amigos en común, amigos que aun conservamos y que estaban a
							punto de ver los inicios de nuestra relación…
							{/*<br />*/}
							{/*Y como los opuestos se atraen nos hicimos novios el 1ero de Abril*/}
							{/*del 2015. Y a pesar de que en gustos no coincidíamos , sí*/}
							{/*compartíamos muchos puntos de vista, sueños, metas y aspiraciones.*/}
							{/*<br />*/}
							{/*Muchas cosas pasaron antes de llegar a comprometernos pero lo mas*/}
							{/*bonito de todo fue vernos crecer el uno al otro y ver nuestro amor*/}
							{/*madurar lo suficiente para llegar al matrimonio.*/}
						</p>
					</div>
				</div>
				<Image
					src={"/nosotros/nosotros-img.webp"}
					alt={"nosotros"}
					width={2106}
					height={3200}
					className={styles.image}
				/>
				<div className={styles.mobile}>
					<Image
						src={"/nosotros/mobile.svg"}
						alt={"nosotros"}
						width={390}
						height={312}
						className={styles.image__mobile}
					/>
					<div className={styles.mobile__date}>
						<span>
							ABR
							<Image
								src={"/nosotros/diamond.svg"}
								alt={"diamond"}
								width={7}
								height={7}
							/>
							1
							<Image
								src={"/nosotros/diamond.svg"}
								alt={"diamond"}
								width={7}
								height={7}
							/>
							2015
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
