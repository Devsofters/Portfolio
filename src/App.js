import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills"
import Experience from "./Pages/Experience"
import Contact from "./Pages/Contact"
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    return (
        <div className="app">
            <Navbar />

            <div className="content">
                <div id="Home"  data-aos="fade-up">
                    <Home />
                </div>
                <div id="About" data-aos="fade-up">
                    <About />
                </div>
                <div id="Skills" data-aos="fade-up">
                    <Skills />
                </div>
                <div id="Experience"  data-aos="fade-up">
                    <Experience />
                </div>
                <div id="Contact" data-aos="fade-up">
                    <Contact />
                </div>
            </div>

        </div>

    );

}

export default App;