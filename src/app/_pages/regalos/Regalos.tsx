import styles from "./regalos.module.scss"
import Image from "next/image"

export const Regalos = () => {
	return (
		<div className={styles.container}>
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
							<div className={styles.right__btns}>
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
		</div>
	)
}
