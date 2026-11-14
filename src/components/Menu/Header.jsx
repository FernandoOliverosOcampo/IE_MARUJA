import { items, despegable, botones, resoluciones } from "../../constant/headerConstant";
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { urlPlataforma } from '../../constant/urlConstat'

const submenus = {
    1: despegable,
    2: resoluciones
}

const Menu = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle('menu-open', isMenuOpen);
        return () => document.body.classList.remove('menu-open');
    }, [isMenuOpen]);

    const canHover = () => window.matchMedia('(hover: hover) and (min-width: 981px)').matches;

    const isGroupActive = (id) =>
        (submenus[id] || []).some((sub) => sub.type === 'route' && sub.href === location.pathname);

    return (
        <>
            <header className={`${styles.menu} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.menuContainer}`}>
                    <Link to="/" className={styles.menuLogo} aria-label="Ir al inicio">
                        <img src="/img/log.webp" alt="Escudo Institución Educativa Maruja del Rosario Aguilar" />
                        <span className={styles.logoText}>
                            <small>Institución Educativa</small>
                            <strong>Maruja del Rosario Aguilar</strong>
                        </span>
                    </Link>

                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>

                    {isMenuOpen && <div className={styles.menuOverlay} onClick={() => setIsMenuOpen(false)}></div>}

                    <nav
                        className={`${styles.menuOptions} ${isMenuOpen ? styles.active : ''}`}
                        aria-label="Menú principal"
                    >
                        <ul className={styles.navList}>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.href}
                                        end
                                        className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}

                            {botones.map((item) => {
                                const isOpen = openDropdown === item.id;
                                return (
                                    <li
                                        key={item.id}
                                        className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
                                        onMouseEnter={() => canHover() && setOpenDropdown(item.id)}
                                        onMouseLeave={() => canHover() && setOpenDropdown(null)}
                                    >
                                        <button
                                            onClick={() => setOpenDropdown(isOpen ? null : item.id)}
                                            aria-expanded={isOpen}
                                            aria-haspopup="true"
                                            className={`${styles.navLink} ${isGroupActive(item.id) ? styles.activeLink : ''}`}
                                        >
                                            {item.label}
                                            <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
                                        </button>
                                        <ul className={styles.submenu} role="menu" aria-label={`Submenú de ${item.label}`}>
                                            {(submenus[item.id] || []).map((subitem) => (
                                                <li key={subitem.id} role="none">
                                                    {subitem.type === 'route' ? (
                                                        <NavLink role="menuitem" to={subitem.href} className={styles.subLink}>
                                                            {subitem.label}
                                                        </NavLink>
                                                    ) : (
                                                        <a
                                                            role="menuitem"
                                                            className={styles.subLink}
                                                            href={subitem.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {subitem.label}
                                                            <span className={styles.pdfTag}>PDF</span>
                                                        </a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>

                        <a
                            href={urlPlataforma}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-accent ${styles.plataformaBoton}`}
                        >
                            Plataforma <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Menu;
