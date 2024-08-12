import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "SamMel Wedding",
	description: "Boda Samuel y Melissa",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preload"
					href="/nosotros/mobile.svg"
					as="image"
					type={"image/svg"}
				/>
				<link
					rel="preload"
					href="/ubicaciones/recepcion.svg"
					as="image"
					type={"image/svg"}
				/>
				<link
					rel="preload"
					href="/ubicaciones/ceremonia.svg"
					as="image"
					type={"image/svg"}
				/>
				<link
					rel="preload"
					href="/vestimenta/female-outfit.svg"
					as="image"
					type={"image/svg"}
				/>
				<link
					rel="preload"
					href="/vestimenta/male-outfit.svg"
					as="image"
					type={"image/svg"}
				/>
				<link
					rel="preload"
					href="/end/Vector.png"
					as="image"
					type={"image/png"}
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
