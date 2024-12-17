"use client"
import styles from "./page.module.scss"
import { Loader } from "@/app/_components/loader/Loader"
import { Cover } from "@/app/_pages/cover/Cover"
import { Nosotros } from "@/app/_pages/nosotros/Nosotros"
import { Invitamos } from "@/app/_pages/invitamos/Invitamos"
import { NoNinos } from "@/app/_pages/no-ninos/NoNinos"
import { Vestimenta } from "@/app/_pages/vestimenta/Vestimenta"
import { End } from "@/app/_pages/end/End"
import { Itinerario } from "@/app/_pages/itinerario/Itinerario"
import { Ubicaciones } from "@/app/_pages/ubicaciones/Ubicaciones"
import { Regalos } from "@/app/_pages/regalos/Regalos"
import { Header } from "@/app/_components/header/Header"
import { Dots } from "@/app/_components/dots/Dots"
import { pages } from "../../shared/variables"
import { SideMenu } from "@/app/_components/side-menu/SideMenu"
import { useRouter } from "next/navigation"
import { Rsvp } from "@/app/_pages/rsvp/Rsvp"
import { useEffect, useState } from "react"

export default function Home() {
	const [loading, setLoading] = useState(false)
	const [showSideMenu, setShowSideMenu] = useState(false)
	const [showRsvp, setShowRsvp] = useState(false)
	const [section, setSection] = useState("")
	const [guestId, setGuestId] = useState("")
	const [guestName, setGuestName] = useState("")
	const [sectionNumber, setSectionNumber] = useState(0)
	const router = useRouter()

	const scrollToElement = (view: string) => {
		const element = document.getElementById(view)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	useEffect(() => {
		const query = new URLSearchParams(window.location.search)
		const search = query.get("guest_id")
		console.log(search)
		if (search) {
			// setGuestId(search)
			// getId(search)
		} else {
			// window.location.href = "https://www.google.com"
		}
	}, [router])

	useEffect(() => {
		if (!loading) {
			const sections = document.querySelectorAll("section")
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setSection(entry.target.id)
							setSectionNumber(
								pages.findIndex((page) => page.name === entry.target.id) || 0
							)
						}
					})
				},
				{ threshold: 0.6 }
			)

			sections.forEach((section) => {
				observer.observe(section)
			})

			return () => {
				sections.forEach((section) => {
					observer.unobserve(section)
				})
			}
		}
	}, [loading])

	const dark_pages = ["nosotros", "ubicaciones", "itinerario", "regalos"]

	return (
		<main className={styles.main}>
			{loading ? (
				<Loader />
			) : (
				<>
					<SideMenu
						onClick={(section) => {
							if (section !== "rsvp") {
								scrollToElement(section)
								setShowRsvp(false)
							} else {
								setShowRsvp(true)
							}
							setShowSideMenu(false)
						}}
						show={showSideMenu}
					/>
					<Header
						dark={dark_pages.includes(section)}
						menu_opened={showSideMenu}
						rsvp_opened={showRsvp}
						openMenu={() => {
							setShowSideMenu(!showSideMenu)
						}}
					/>
					<Cover
						scrollToView={() => {
							scrollToElement("nosotros")
						}}
						id={"cover"}
					/>
					<Nosotros id={"nosotros"} />
					<Invitamos id={"invitamos"} />
					<Ubicaciones id={"ubicaciones"} />
					<Vestimenta id={"vestimenta"} />
					<NoNinos id={"no-ninos"} />
					<Itinerario id={"itinerario"} />
					<Regalos id={"regalos"} />
					<End
						id={"end"}
						rsvp={() => {
							setShowRsvp(true)
						}}
					/>
					<Rsvp guestId={guestId} guestName={guestName} show={showRsvp} />
					{section !== "cover" && (
						<Dots
							dark={dark_pages.includes(section)}
							active={sectionNumber}
							click={(section: string) => {
								scrollToElement(section)
							}}
						/>
					)}
				</>
			)}
		</main>
	)
}
