import React from 'react';
import styles from './Footer.module.css';

const Footer = () =>{
    return (
        <footer className={styles.footerContainer}>
            <p>© {new Date().getFullYear()} Intitución Educativa Maruja Del Rosario Aguilar. Todos los derechos reservados.</p>
        </footer>
    );
}
export default Footer;