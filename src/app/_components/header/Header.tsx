import styles from "./header.module.scss"
import Image from "next/image"
import { WebHamburger } from "@/app/_components/web-hamburger/WebHamburger"

interface Props {
	dark: boolean
}

export const Header = ({ dark = true }) => {
	return (
		<div className={styles.header}>
			<Image
				src={"/logo.svg"}
				alt={"logo"}
				width={48}
				height={48}
				className={dark ? styles.header__dark : styles.header__light}
			/>
			<WebHamburger
				dark={dark}
				checked={false}
				onClick={() => console.log("hola")}
			/>
		</div>
	)
}
