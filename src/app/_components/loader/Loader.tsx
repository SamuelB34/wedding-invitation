import styles from "./loader.module.scss"
import Image from "next/image"

export const Loader = () => {
	return (
		<div className={styles.loader}>
			<Image
				src={"/thanks/logo.svg"}
				alt={"logo"}
				width="80"
				height="80"
				className={styles.loader__logo}
			/>
		</div>
	)
}
