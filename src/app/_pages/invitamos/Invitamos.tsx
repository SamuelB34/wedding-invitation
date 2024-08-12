import styles from "./invitamos.module.scss"
import { useEffect, useRef } from "react"

interface Props {
	id: string
}

export const Invitamos = ({ id }: Props) => {
	const text1Ref = useRef<any>(null)
	const text2Ref = useRef<any>(null)
	const text3Ref = useRef<any>(null)
	const text4Ref = useRef<any>(null)
	const lineRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (text1Ref.current) {
						text1Ref.current.classList.add(
							styles["right__container--animation"]
						)
					}
					if (text2Ref.current) {
						text2Ref.current.classList.add(
							styles["right__container--animation"]
						)
					}
					if (text3Ref.current) {
						text3Ref.current.classList.add(
							styles["right__container--animation"]
						)
					}
					if (text4Ref.current) {
						text4Ref.current.classList.add(
							styles["right__container--animation"]
						)
					}
					if (lineRef.current) {
						lineRef.current.classList.add(styles["line__content--animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (text1Ref.current) {
			observer.observe(text1Ref.current)
		}

		if (text2Ref.current) {
			observer.observe(text2Ref.current)
		}

		if (text3Ref.current) {
			observer.observe(text3Ref.current)
		}

		if (text4Ref.current) {
			observer.observe(text4Ref.current)
		}

		if (lineRef.current) {
			observer.observe(lineRef.current)
		}

		return () => {
			if (text1Ref.current) {
				observer.unobserve(text1Ref.current)
			}
			if (text2Ref.current) {
				observer.unobserve(text2Ref.current)
			}
			if (text3Ref.current) {
				observer.unobserve(text3Ref.current)
			}
			if (text4Ref.current) {
				observer.unobserve(text4Ref.current)
			}
			if (lineRef.current) {
				observer.unobserve(lineRef.current)
			}
		}
	}, [])

	return (
		<section className={styles.invitamos} id={id}>
			<div className={styles.invitamos__content}>
				<div></div>
				<div className={styles.right}>
					<div className={styles.right__container}>
						<div className={styles.line}>
							<div className={styles.line__content} ref={lineRef}></div>
						</div>

						<h3 ref={text1Ref}>Los Invitamos</h3>
						<p ref={text2Ref}>
							A compartir con ustedes la alegría de unir nuestras vidas en el
							sacramento del matrimonio, invitándoles a la ceremonia religiosa
							que se celebrará el día
						</p>
						<h3 ref={text3Ref}>23 de Noviembre</h3>
						<span ref={text4Ref}>DOS MIL VEINTICUATRO</span>
					</div>
				</div>
			</div>
		</section>
	)
}
