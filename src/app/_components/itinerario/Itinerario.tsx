import styles from "./itinerario.module.scss"
import Image from "next/image"

export const Itinerario = () => {
	const itinerario: { name: string; hour: string }[] = [
		{
			name: "Ceremonia",
			hour: "5:00 P.M.",
		},
		{
			name: "Recepción",
			hour: "5:00 P.M.",
		},
		{
			name: "Baile",
			hour: "5:00 P.M.",
		},
		{
			name: "Cena",
			hour: "5:00 P.M.",
		},
	]
	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.content}>
						<div className={styles.content__top}>
							<Image
								src={"/itinerario/leaf.svg"}
								alt={"leaf"}
								width={64}
								height={31}
							/>
							<div className={styles["content__top--texts"]}>
								<span className={styles.programa}>PROGRAMA DE BODA</span>
								<span className={styles.itinerario}>Itinerario</span>
							</div>
						</div>
						<div className={styles.events_box}>
							{itinerario.map((evento: { hour: string; name: string }) => {
								return (
									<div key={evento.name} className={styles.events}>
										<span>{evento.name}</span>
										<span>{evento.hour}</span>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
