import styles from "./end.module.scss"
import { Counter } from "../../_components/counter/Counter"
import Image from "next/image"

export const End = () => {
	return (
		<>
			<div className={styles.container}>
				<Image
					src="/end/Vector.png"
					alt="end"
					width={734}
					height={189}
					className={styles.container__img}
				/>
				<div></div>
				<div>
					<Counter />
				</div>
				<div className={styles.text}>
					<p className={styles.text__title}>¡NOS VEMOS PRONTO!</p>
					<p className={styles.text__paragraph}>
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
			</div>
		</>
	)
}
