import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Fullstack Developer Portfolio</h1>
            <nav>
                <a href="#about">Om meg</a>
                <a href="#projects">Prosjekter</a>
                <a href="#skills">Kompetanse</a>
                <a href="#contact">Kontakt</a>
            </nav>
        </header>
    );
}

export default Header;
