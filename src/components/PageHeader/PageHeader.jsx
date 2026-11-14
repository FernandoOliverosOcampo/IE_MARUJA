import { Link } from 'react-router-dom';
import styles from './PageHeader.module.css';

const PageHeader = ({ eyebrow, title, subtitle, breadcrumb }) => {
    return (
        <section className={styles.pageHeader}>
            <div className={`container ${styles.inner}`}>
                <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
                    <Link to="/">Inicio</Link>
                    {breadcrumb && <><span>/</span><span>{breadcrumb}</span></>}
                    <span>/</span>
                    <span aria-current="page">{eyebrow || title}</span>
                </nav>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageHeader;
