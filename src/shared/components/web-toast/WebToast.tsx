import styles from "./web-toast.module.scss"
import Image from "next/image"
import React from "react"

interface Props {
	children: React.JSX.Element
	close: () => void
}

export function WebToast({ children, close }: Props) {
	return (
		<>
			<div className={styles[`toast-error`]}>
				<div className={styles["toast-container"]}>
					{
						<Image
							src={"/components/toast/error.svg"}
							alt={"error"}
							width={32}
							height={32}
						/>
					}

					<span className={styles[`toast-error__label`]}>{children}</span>

					<Image
						src={"/components/toast/x.svg"}
						alt={"error"}
						width={32}
						height={32}
						className={styles[`toast-error__x`]}
						onClick={close}
					/>
				</div>
			</div>
		</>
	)
}
