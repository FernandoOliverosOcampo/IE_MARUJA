import GoogleMapEmbed from '../../components/Mapa/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Location.module.css'
const Location = () => {
    return(
            <div>
            {/*Section location*/}
            <section className={styles.sectionContainer}>

                <div className={styles.containerSede}>
                
                <div className={styles.titleMap}>
                    <h3>Sede Institución Maruja del Rosario Aguilar</h3>
                </div>

                <div className={styles.texto}>
                    <p>
                    La Institución Educativa Maruja Del Rosario Aguilar se encuentra ubicada en un entorno accesible y seguro, brindando facilidad de ingreso a estudiantes provenientes de diversos sectores de la comunidad.

                    Gracias a su localización estratégica, la institución facilita el acceso tanto a pie como mediante transporte público, lo que permite a nuestros estudiantes y sus familias llegar con comodidad y puntualidad a cada jornada académica.

                    Si desea visitarnos, conocer nuestras instalaciones o recibir orientación sobre el proceso de matrícula, será un gusto atenderle en nuestras oficinas durante el horario institucional.
                    </p>
                </div>
                <div className={styles.infomap}>
                     <div >
                        <GoogleMapEmbed 
                            address="Calle 4 # 4-30, Manatí, Colombia" 
                            // label="Institución Educativa Maruja del Rosario Aguilar" 
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
                        <FontAwesomeIcon icon={faEnvelope} /> Correo: wal_09@hotmail.com
                        </p>
                        
                    </span>
                </div>

                </div>
               
                </div>


            </section>
    </div>

    )


}
export default Location;