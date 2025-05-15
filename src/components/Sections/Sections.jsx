import styles from './Sections.module.css'
import MapWithAddress from '../Mapa/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Sections = ()=>{
    return(
        <div className={styles.sectionsWrapper}>
            {/* Section Banner*/}
            <section className={styles.sectionContainer}>
            <div className={styles.backgroundSection}>
                <div className={styles.textoBanner}>
                    <h2>Donde cada paso cuenta para llegar más lejos.</h2>
                </div>
            </div>
            </section>
            {/*Section How am i*/}
            <section  className={styles.sectionContainer} id="quienes-somos">
                <div className={styles.quienesSomos}>
                    <div className={styles.imagenSomos}>
                        <img src="./src/assets/img/log.png" alt="" />
                    </div>

                    <div className={styles.textoSomos}>
                        <h3>¿Quiénes Somos?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore quas ad tempora modi nam quae, molestiae eum, alias reprehenderit dolorum necessitatibus saepe vel unde quasi vero eligendi est ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi, fugit incidunt reiciendis nesciunt nihil fugiat error aliquid aliquam tenetur vitae. Tempora vitae beatae placeat, adipisci dicta suscipit eum voluptatibus!</p>
                    </div>
                </div>
            </section>
            {/*Sections nuestros programas*/}
            <section className={styles.sectionContainer}>
        
            </section>
            {/*Section location*/}
            <section className={styles.sectionContainer} id='sede'>
                <div className={styles.titleMap}>
                    <h3>Sede</h3>
                </div>
                <div className={styles.infomap}>
                     <div>
                    <MapWithAddress 
                        address="Calle 4 # 4-30, Manatí, Colombia" 
                        label="Institución Educativa Maruja del Rosario Aguilar" 
                    />
                </div>
                <div className={styles.datos}>
                    <span>
                        <p><FontAwesomeIcon icon={faLocationDot} />  Dirección : Calle 4 # 4-30, Manatí, Colombia</p>
                        <br />
                        <p>
                        <FontAwesomeIcon icon={faPhone} /> Teléfono : 3216800016
                        </p>
                        <br />
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} /> Correo: walrafa1987@gmail.com
                        </p>
                        
                    </span>
                </div>

                </div>
               

            </section>
        </div>
        
    )
}
export default Sections;