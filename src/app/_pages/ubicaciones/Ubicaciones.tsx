import styles from "./ubicaciones.module.scss"
import Image from "next/image"

export const Ubicaciones = () => {
	return (
		<div className={styles.container}>
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
				<div className={styles.card}>
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

				<div className={styles.card}>
					<Image
						src={"/ubicaciones/recepcion.svg"}
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
		</div>
	)
}
