import styles from "./header.module.scss"
import Image from "next/image"
import { WebHamburger } from "@/app/_components/web-hamburger/WebHamburger"
import { useEffect, useState } from "react"

interface Props {
	dark: boolean
	menu_opened: boolean
	rsvp_opened: boolean
	openMenu: () => void
}

export const Header = ({
	dark = true,
	menu_opened = false,
	rsvp_opened = false,
	openMenu,
}: Props) => {
	const [showDark, setShowDark] = useState(false)
	useEffect(() => {
		setShowDark(dark && !menu_opened && !rsvp_opened)
	}, [dark, menu_opened, rsvp_opened])

	return (
		<div className={styles.header}>
			<Image
				src={"/logo.svg"}
				alt={"logo"}
				width={48}
				height={48}
				className={showDark ? styles.header__dark : styles.header__light}
			/>
			<WebHamburger dark={showDark} checked={menu_opened} onClick={openMenu} />
		</div>
	)
}
