import styles from "./end.module.scss"
import { Counter } from "../counter/Counter"

export const End = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title__image}>
					<img src="./end/Vector.png" alt="" />
				</div>
				<div></div>
				<div>
					<Counter />
				</div>
				<div className={styles.text}>
					<p className={styles.text__title}>¡NOS VEMOS PRONTO!</p>
					<p className={styles.text__paragraph}>
						Si aún no confirmas tu asistencia, <a href="#">¡haz click aquí!</a>
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
