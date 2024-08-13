import styles from "./side-menu.module.scss"

interface Props {
	onClick: (name: string) => void
	show: boolean
}

export const SideMenu = ({ onClick, show }: Props) => {
	const click = (name: string) => {
		onClick(name)
	}

	const options = [
		{
			name: "cover",
			label: "Inicio",
		},
		{
			name: "nosotros",
			label: "Nosotros",
		},
		{
			name: "invitamos",
			label: "Evento",
		},
		{
			name: "vestimenta",
			label: "Vestimenta",
		},
		{
			name: "itinerario",
			label: "Itinerario",
		},
		{
			name: "regalos",
			label: "registro de regalos",
		},
		{
			name: "rsvp",
			label: "rSVP",
		},
	]

	return (
		<div
			className={
				show
					? `${styles.side_menu} ${styles.side_menu__show}`
					: `${styles.side_menu} ${styles.side_menu__hide}`
			}
		>
			<div className={styles.side_menu__content}>
				{options.map((option) => {
					return (
						<span
							key={option.name}
							onClick={() => {
								click(option.name)
							}}
							className={styles.option}
						>
							{option.label}
						</span>
					)
				})}

				<span className={styles.legend}>Made by Samuel Barragan</span>
			</div>
		</div>
	)
}
