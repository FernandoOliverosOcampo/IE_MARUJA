import { items } from "../../constant.js";
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    useEffect(() => {
        const sections = items.map(item => document.getElementById(item.id));
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const menuElement = document.querySelector(`.${styles.menu}`);
            const menuHeight = menuElement ? menuElement.offsetHeight : 0;

            const currentSection = sections.find((section, index) => {
                if (!section) return false;

                const sectionTop = section.offsetTop - menuHeight - 50;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (index === sections.length - 1) {
                    return scrollPosition >= sectionTop;
                }

                return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
            });

            if (currentSection) {
                setActiveItem(currentSection.id);
            }
        };
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Bloquear scroll cuando el menú está abierto en móvil
    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => document.body.classList.remove('menu-open');
    }, [isMenuOpen, isMobile]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item.id);

        if (item.type === 'scroll') {
            // Scroll interno
            const section = document.getElementById(item.href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (item.type === 'route') {
            // Navegación a otra ruta
            navigate(item.href);
        }
        if(isMobile){
            setIsMenuOpen(false)
        }
    };

    return (
        <>
            {/* Overlay para el menú lateral */}
            {isMobile && isMenuOpen && (
                <div className={styles.menuOverlay} onClick={toggleMenu}></div>
            )}
            <header className={styles.menu}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuLogo}>
                        <div className={styles.imagenLogo}>
                            <img src="./src/assets/img/log.png" alt="logoInstitución" />
                        </div>
                        <div className={styles.textoLogo}>
                            <h1>Institución Educativa Maruja Del Rosario Aguilar</h1>
                        </div>
                    </div>
                    <div className={styles.menuControls}>
                        <button 
                            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                        >
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </button>
                    </div>
                    <nav 
                        className={`${styles.menuOptions} ${isMenuOpen ? styles.active : ''}`}
                        role="navigation"
                        aria-label="Menú principal"
                    >
                        {items.map((item) => (
                            <div
                                className={`${styles.menuItem} ${
                                    activeItem === item.id ? styles.active : ''
                                }`}
                                key={item.id}
                            >
                                <button
                                    onClick={() => handleItemClick(item)}
                                    className={styles.linkButton}
                                >
                                    {item.label}
                                </button>
                            </div>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Menu;
