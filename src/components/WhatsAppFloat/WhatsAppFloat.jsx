import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { urlWhatsapp } from '../../constant/urlConstat';
import styles from './WhatsAppFloat.module.css';

const WhatsAppFloat = () => (
    <a
        href={urlWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.float}
        aria-label="Escríbenos por WhatsApp"
    >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span className={styles.label}>¿Dudas? Escríbenos</span>
    </a>
);

export default WhatsAppFloat;
