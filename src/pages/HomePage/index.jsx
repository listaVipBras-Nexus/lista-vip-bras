import About from "../../components/About";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import Home from "../../components/Home";
import Benefits from "../../components/Benefits";
import Suppliers from "../../components/Suppliers";
import Categories from "../../components/Categories";

export default function HomePage() {
    return (
        <>
            <Home />
            <Categories />
            <Benefits />
            <Suppliers />
            <Testimonials />
            <About />
            <Footer />
        </>
    );
}
