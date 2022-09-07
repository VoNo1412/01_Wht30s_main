import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import DetailProducts from "./components/DetailProducts/DetailProducts";
import Brand from "./components/Brand/Brand";
import Issue from "./components/Issue/Issue";
import Study from "./components/Study/Study";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
        <Header />
        <Banner />
        <Hero />
        <Product />
        <DetailProducts />
        <Brand/>
        <Issue />
        <Study />
        <Footer/>
    </div>
  );
}

export default App;
