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
		</div>
	)
}
