import styles from "./regalos.module.scss"
import Image from "next/image"
import { useEffect, useRef } from "react"

export const Regalos = ({ id }: { id: string }) => {
	const btnsRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (btnsRef.current) {
						btnsRef.current.classList.add(styles["right__btns--animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (btnsRef.current) {
			observer.observe(btnsRef.current)
		}

		return () => {
			if (btnsRef.current) {
				observer.unobserve(btnsRef.current)
			}
		}
	}, [])

	return (
		<section className={styles.container} id={id}>
			<div className={styles.content}>
				<div className={styles.top}>
					<div className={styles.top__head}>
						<span className={styles.title}>
							Registro de <br /> Regalos
						</span>

						<div className={styles.line}></div>

						<div className={styles.right}>
							<span className={styles.right__text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
								aliquam ante, sed maximus.
							</span>
							<div className={styles.right__btns} ref={btnsRef}>
								<div className={styles.btn}>
									<span>Bed, Bath & Beyond</span>
								</div>
								<div className={styles.btn}>
									<span>Liverpool</span>
								</div>
								<div className={styles.btn}>
									<span>Target</span>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.content__line}></div>
				</div>
				<Image
					className={styles.content__img}
					src={"/regalos/sammel-hands.webp"}
					alt={"hands"}
					width={1440}
					height={475}
				/>
			</div>
		</section>
	)
}
