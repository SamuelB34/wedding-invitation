import styles from "./vestimenta.module.scss"

export const Vestimenta = () => {
	return (
		<>
			<div className={styles.container}>
				<div>
                    <span className={styles.title}>vESTIMEnTa</span>
                </div>
                <div className={styles.container__box}>
                    <span className={styles.text}>FORMAL COLOR NEGRO</span>
                </div>
                <div className={styles.diamond}></div>
                <div className={styles.paragraph}><p>¡Queremos lograr fotos cohesivas ese dia! <br />
                Les pedimos <b>por favor respeten nuestra elección</b>.</p></div>
			</div>
		</>
	)
}