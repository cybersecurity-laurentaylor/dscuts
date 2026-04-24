
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";



function App() {
  return (
   <> 
<Navbar />
 <Hero />
<Layout>
  
<Services/>
<Pricing />
<Gallery />
<Contact />
<Footer />
</Layout>
   </>
  
  );
}

export default App;
