import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections"
import Navbar from "./components/Navbar"

const App = () => (
	<main className="relative">
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
		<Footer />
	</main>
)

export default App
