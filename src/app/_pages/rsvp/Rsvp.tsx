import styles from "./rsvp.module.scss"
import { useQRCode } from "next-qrcode"
import Image from "next/image"
import { useEffect } from "react"
import { updateAssist } from "../../../shared/services/guestsService"

interface Props {
	guestId: string
	guestName: string
	show: boolean
}

export const Rsvp = ({ guestId, guestName, show }: Props) => {
	const { SVG } = useQRCode()

	useEffect(() => {
		updateGuestAssist()
	}, [])

	const updateGuestAssist = async () => {
		try {
			await updateAssist(guestId, { assist: true })
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<div
			className={
				show
					? `${styles.rsvp} ${styles.rsvp__show}`
					: `${styles.rsvp} ${styles.rsvp__hide}`
			}
		>
			<div className={styles.rsvp__content}>
				<span className={styles.hello}>¡Hola {guestName}!</span>

				<SVG
					text={guestId || "Example"}
					options={{
						margin: 2,
						width: 200,
						color: {
							light: "#574f4b",
							dark: "#E7E0DC",
						},
					}}
				/>
				<span className={styles.instructions}>
					Muestra este codigo QR en la entrada
				</span>
				<Image src={"/leaf.svg"} alt={"leaf"} width={56} height={27} />
			</div>
		</div>
	)
}
