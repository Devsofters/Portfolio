import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills"
import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />

            <div className="content">
                <div id="Home">
                    <Home />
                </div>
                <div id="About">
                    <About />
                </div>
                <div id="Skills">
                    <Skills />
                </div>
            </div>

        </div>

    );

}

export default App;