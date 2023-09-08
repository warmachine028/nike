/** @format */

import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "next-themes"

const App = () => (
	<main className="relative scroll-smooth">
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="system" themes={["light", "dark"]} transitionDuration={300} disableTransitionOnChange>
			<Navbar />
			<section>
				<Hero />
				<PopularProducts />
				<SuperQuality />
				<Services />
				<SpecialOffers />
				<CustomerReviews />
				<Subscribe />
			</section>
		</ThemeProvider>
		<Footer />
	</main>
)

export default App
