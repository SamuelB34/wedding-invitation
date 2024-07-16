import React from "react"
import styles from "./wed-button.module.scss"

interface Props {
	children: React.JSX.Element
	onClick: () => void
}

export const WedButton = ({ children, onClick }: Props) => {
	return (
		<div className={styles.btn} onClick={() => onClick()}>
			<span className={styles.btn__text}>{children}</span>
		</div>
	)
}
