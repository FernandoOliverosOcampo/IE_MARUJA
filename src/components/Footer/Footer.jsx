import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import { urlWhatsapp, urlManual, urlCamara, urlAcreditacion, urlPlataforma, contacto } from '../../constant/urlConstat';

const enlaces = [
    { label: 'Inicio', to: '/' },
    { label: '¿Quiénes somos?', to: '/quienes-somos' },
    { label: 'Misión y Visión', to: '/mision-vision' },
    { label: 'Historia', to: '/historia' },
    { label: 'Proyectos', to: '/proyectos' },
    { label: 'Sede', to: '/sede' },
];

const documentos = [
    { label: 'Manual de convivencia', href: urlManual },
    { label: 'Cámara de comercio', href: urlCamara },
    { label: 'Acreditación', href: urlAcreditacion },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <div className={styles.brandLogo}>
                        <img src="/img/log.webp" alt="Escudo de la institución" loading="lazy" />
                        <div>
                            <small>Institución Educativa</small>
                            <strong>Maruja del Rosario Aguilar</strong>
                        </div>
                    </div>
                    <p>
                        Educación formal para jóvenes y adultos por Ciclos Lectivos Integrales (CLEI).
                        Toda persona merece una segunda oportunidad para aprender.
                    </p>
                    <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos
                    </a>
                </div>

                <div>
                    <h4>Enlaces</h4>
                    <ul className={styles.list}>
                        {enlaces.map((e) => (
                            <li key={e.to}><Link to={e.to}>{e.label}</Link></li>
                        ))}
                        <li><a href={urlPlataforma} target="_blank" rel="noopener noreferrer">Plataforma estudiantes</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Documentos</h4>
                    <ul className={styles.list}>
                        <li><Link to="/resolucion">Resolución 1195</Link></li>
                        {documentos.map((d) => (
                            <li key={d.href}>
                                <a href={d.href} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFilePdf} /> {d.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>Contacto</h4>
                    <ul className={styles.contact}>
                        <li><FontAwesomeIcon icon={faLocationDot} /><span>{contacto.direccion}</span></li>
                        <li><FontAwesomeIcon icon={faPhone} /><a href={contacto.telefonoHref}>{contacto.telefono}</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /><a href={`mailto:${contacto.correo}`}>{contacto.correo}</a></li>
                    </ul>
                    <span className={styles.badge}>Matrículas abiertas todo el año</span>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={`container ${styles.bottomInner}`}>
                    <p>© {new Date().getFullYear()} Institución Educativa Maruja del Rosario Aguilar. Todos los derechos reservados.</p>
                    <p><strong>NIT</strong> {contacto.nit}</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
