/** @format */

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  ScrollToTopButton,
} from "./sections";
import Navbar from "./components/Navbar";
import { useMenuContext } from "./contexts/MenuContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import ShoeDetails from "./components/ShoeDetails.jsx";

const App = () => {
  const showMenu = useMenuContext();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={
          <main
            className={
              "relative scroll-smooth  overflow-hidden " +
              (showMenu ? "h-screen overflow-hidden" : "")
            }
          >
            <div
              className={
                showMenu ? "w-full h-full fixed top-0 left-0 z-40" : "hidden"
              }
            ></div>
            <Menu />
            <section>
              <Hero />
              <PopularProducts />
              <ScrollToTopButton />
              <SuperQuality />
              <Services />
              <SpecialOffers />
              <CustomerReviews />
              <Subscribe />
            </section>
          </main>}
        />

        <Route path={'/shoe_details'} element={<ShoeDetails/>}/>
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
