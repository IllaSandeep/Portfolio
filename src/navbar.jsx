import React ,{useState}from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from "./utils";
const Navbar = () => {
    const [menuOpen,SetMenuOpen]=useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Sandeep's Portfolio</a>
            <div className={styles.menu}>
            <img className={styles.menubtn} src={
                menuOpen?
                getImageUrl("nav/closeIcon.png"):getImageUrl('nav/menuIcon.png')} alt="menu-button" onClick={()=>SetMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=>SetMenuOpen(false)}>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;