
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import theme from "./theme";
import { Container } from '@chakra-ui/react';



function App() {
  return (
   <> 
    <Navbar />
<Hero />
<Services/>
<Pricing />
<Gallery />
<Contact />
<Footer />
   </>
  
  );
}

export default App;
