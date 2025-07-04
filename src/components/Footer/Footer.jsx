import React from 'react';
import styles from './Footer.module.css';
import {urlWhatsapp} from '../../constant/urlConstat'
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                {/* Puedes reemplazar el SVG por el logo de tu institución si tienes uno */}
                <img src="/img/log.webp" alt="Logo institución" />
            </div>
            <div className={styles.footerInfo}>
                <p>
                    <strong>© {new Date().getFullYear()} Institución Educativa Maruja Del Rosario Aguilar.</strong>
                </p>
                <p>
                    Calle 4 # 4-30 | Manatí, Colombia
                </p>
                <p><strong>NIT -</strong> 901831702-6</p>
            </div>
            <div className={styles.footerLinks}>
                <p>wual_09@hotmail.com |</p>  <a href={urlWhatsapp} target='_blank'> 3216803975</a>
            </div>
        </footer>
    );
}
export default Footer;