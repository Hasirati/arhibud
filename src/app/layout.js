import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const montserrat = Montserrat({
	weight: '400',
	subsets: ['cyrillic'],
	display: 'swap',
})

export const metadata = {
	title: 'АрхіБуд',
	description: 'Будівельно оздоблювальні роботи',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ua'>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
