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

						<div className={styles.right}>
							<span className={styles.right__text}>
								Abajo pueden encontrar algunas opciones que hemos seleccionado
								previamente.
								<b> ¡Regalos en efectivo también son bienvenidos!</b>
							</span>
							<div className={styles.right__btns} ref={btnsRef}>
								<a
									href={
										"https://www.amazon.com.mx/wedding/registry/2CBUWSH5FQP49"
									}
									target={"_blank"}
									className={styles.btn}
								>
									<span>Amazon</span>
								</a>
								<a
									href={
										"https://mesaderegalos.liverpool.com.mx/milistaderegalos/51467654"
									}
									target={"_blank"}
									className={styles.btn}
								>
									<span>Liverpool</span>
								</a>
								<a
									href={
										"https://www.target.com/gift-registry/gift-giver?registryId=5b8855a0-23bc-11ef-8824-619fd27fd0d8&type=WEDDING"
									}
									target={"_blank"}
									className={styles.btn}
								>
									<span>Target</span>
								</a>
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
