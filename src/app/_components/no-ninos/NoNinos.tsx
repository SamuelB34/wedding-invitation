import styles from "./no-ninos.module.scss"

export const NoNinos = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container__box}>
					<span className={styles.title}>NO nIñoS</span>
				</div>
				<div className={styles.text}>
					<p className={styles.text__title}>ADULTOS SOLAMENTE SIN EXCEPCIÓN</p>
					<div className={styles.line}></div>
					<p className={styles.text__paragraph}>
						Esperamos puedan encontrar un lugar seguro para dejar a sus hijos al
						cuidado <br /> de otros y comprender nuestra decisión de hacer de
						este evento uno <b>SIN NIÑOS</b>.
					</p>
				</div>
			</div>
		</>
	)
}
