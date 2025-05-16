import styles from './Sections.module.css'
import { tarjetas } from '../../constant';
import { urlWhatsapp } from '../../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'; 

const Sections = ()=>{
    return(
        <div className={styles.sectionsWrapper}>
            {/* Section Banner*/}
            <section className={styles.sectionContainer}>
            <div className={styles.backgroundSection}>
                <div className={styles.textoBanner}>
                    <h2>Donde cada paso cuenta para llegar más lejos.</h2>
                        <a href={urlWhatsapp}className={styles.whatsappButton} target='_blank'><FontAwesomeIcon icon={faWhatsapp} /> Contactanos por WhatsApp</a>
                </div>
                
            </div>
            </section>
         
            {/*Sections nuestros programas*/}
            <section className={styles.sectionContainer}>
                <div className={styles.containerTarjetas}>
                    <div className={styles.titulo}>
                        <h3>Estudios ofrecidos</h3>
                    </div>
                    <div className={styles.tarjetas}>
                    
                        {
                            tarjetas.map((item) =>(
                                <div className={styles.tarjeta} key={item.id}>
                                    <div className="titulo">
                                        <h3>{item.label}</h3>
                                    </div>
                                    <div className={styles.imagen}>
                                        <img src={item.img} alt="foto tarjetas" />
                                    </div>
                                    <div className="grados">
                                        <span>{item.grados}</span>
                                    </div>
                                    <div className="contenido">
                                        <p><span>Dirigido a:</span>{item.contenido}</p>
                                        <br />
                                        <p><span>Objetivo:</span>{item.objetivo}</p>
                                        <br />
                                        <p><span>Modalidad:</span>{item.modo}</p>
                                    </div>
                                </div>
                            
                            ))
                        }
                    </div>

                    </div>        
            </section>

        </div>
        
    )
}
export default Sections;