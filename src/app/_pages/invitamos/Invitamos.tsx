import styles from "./invitamos.module.scss"

export const Invitamos = () => {
	return (
		<div className={styles.invitamos}>
			<div className={styles.invitamos__content}>
				<div></div>
				<div className={styles.right}>
					<div className={styles.right__container}>
						<h3>Los Invitamos</h3>
						<p>
							A compartir con ustedes la alegría de unir nuestras vidas en el
							sacramento del matrimonio, invitándoles a la ceremonia religiosa
							que se celebrará el día
						</p>
						<h3>23 de Noviembre</h3>
						<span>DOS MIL VEINTICUATRO</span>
					</div>
				</div>
			</div>
		</div>
	)
}
