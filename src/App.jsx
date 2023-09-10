/** @format */

import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from './sections'
import Navbar from './components/Navbar'
import { useMenuContext } from './contexts/MenuContext'
import Menu from './components/Menu'

const App = () => {
  const showMenu = useMenuContext()
  return (
    <main className={'relative scroll-smooth ' + (showMenu ? 'h-screen overflow-hidden' : '')}>
      <div className={showMenu ? 'w-full h-full fixed top-0 left-0 z-40' : 'hidden'}></div>
      <Navbar />
      <Menu />
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
}

export default App
