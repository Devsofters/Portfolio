import { useEffect, useState } from "react";
import "../Styles/Navbar.css";

const menus = ["Home", "About", "Skills", "Experience", "Contact"];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navigate = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
            </div>

            <div className={`navLinks ${menuOpen ? "open" : ""}`}>
                {menus.map((item) => (
                    <div
                        key={item}
                        className="navItem"
                        onClick={() => navigate(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <button
                className={`menuToggle ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                style={{width : menuOpen ? "20px" : "23px"}}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {menuOpen && (
                <div className="navOverlay" onClick={() => setMenuOpen(false)} />
            )}
        </div>
    );
};

export default Navbar;