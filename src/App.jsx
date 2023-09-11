/** @format */

import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from './sections'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'next-themes'
import { MenuProvider } from './contexts/MenuContext'
import Menu from './components/Menu'

const App = () => (
  <main className="relative scroll-smooth">
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      themes={['light', 'dark']}
      transitionDuration={300}
      disableTransitionOnChange
    >
      <MenuProvider>
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
      </MenuProvider>
    </ThemeProvider>
    <Footer />
  </main>
)

export default App
