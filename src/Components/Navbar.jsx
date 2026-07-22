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
        </div>
    );
};

export default Navbar;
