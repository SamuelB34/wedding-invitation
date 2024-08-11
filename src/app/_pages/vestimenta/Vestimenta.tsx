import styles from "./vestimenta.module.scss"
import Image from "next/image"

export const Vestimenta = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.outfits_container}>
					<Image
						src={"/vestimenta/female-outfit.svg"}
						alt={"fem"}
						width={315}
						height={315}
					/>
					<Image
						src={"/vestimenta/male-outfit.svg"}
						alt={"male"}
						width={315}
						height={315}
					/>
				</div>
				<span className={styles.title}>vESTIMEnTa</span>

				<div className={styles.atuendo}>
					<span>ATUENDO FORMAL</span>
					<div className={styles.atuendo__line}></div>
					<span>COLOR NEGRO</span>
				</div>

				<span className={styles.paragraph}>
					¡Queremos lograr fotos cohesivas ese dia! Les pedimos por favor
					respeten nuestra elección.
				</span>
				<span className={styles.paragraph}>
					¿Búscas inspiración?{" "}
					<a href="www.google.com" target={"_blank"}>
						¡Haz click aquí para ideas!
					</a>
				</span>
			</div>
		</>
	)
}
