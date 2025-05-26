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
                <div className={styles.container}>
                    <div className={styles.titulo}>
                        <h3>Oferta Académica</h3>
                    </div>
                    <div className={styles.texto}>
                        <p>La Institución Educativa Maruja del Rosario ofrece su formación bajo la modalidad de educación de adultos por ciclos lectivos integrales (CLEI), facilitando el acceso a la educación básica y media para jóvenes y adultos que no han terminado sus estudios en la edad regular. La institución abarca los seis niveles establecidos por el Ministerio de Educación Nacional:</p>
                        <br />
                         <ul>
                            <li><strong>CLEI 1</strong>: Grados 1° y 2°</li>
                            <li><strong>CLEI 2</strong>: Grados 3°, 4° y 5°</li>
                            <li><strong>CLEI 3</strong>: Grados 6° y 7°</li>
                            <li><strong>CLEI 4</strong>: Grados 8° y 9°</li>
                            <li><strong>CLEI 5</strong>: Grado 10°</li>
                            <li><strong>CLEI 6</strong>: Grado 11°</li>
                        </ul>
                        <br />
                        <p>Este modelo permite a los estudiantes avanzar por ciclos educativos de manera acelerada y organizada, recuperando el tiempo perdido en su proceso de formación.</p>
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
                                    <div className="ciclos">
                                        <span>{item.ciclos}</span>
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

            {/*Sections admisiones*/}
            <section className={styles.sectionContainer}>
                <div className={styles.container}>
                    <div className={styles.titulo}>
                        <h3>Admisiones</h3>
                    </div>
                    <div className={styles.texto}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus blanditiis, cupiditate delectus, ipsam soluta error voluptas, dolores iure fuga tempora? Ea quidem aliquam facilis necessitatibus neque iusto sapiente! Quia.</p>
                    </div>
                </div>
              

            </section>

        </div>
        
    )
}
export default Sections;