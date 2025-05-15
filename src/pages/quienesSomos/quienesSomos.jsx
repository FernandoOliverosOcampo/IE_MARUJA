import styles from './quienesSomos.module.css'
const QuienesSomos = () => {
    return (
        <>
            {/*Section How am i*/}
            <section  className={styles.sectionContainer} id="quienes-somos">
                <div className={styles.quienesSomos}>
                    <div className={styles.imagenSomos}>
                        <img src="./src/assets/img/log.png" alt="" />
                    </div>

                    <div className={styles.textoSomos}>
                        <h3>¿Quiénes Somos?</h3>
                        <p>La Institución Educativa Maruja Del Rosario Aguilar es una entidad académica de carácter nivelatorio, dedicada a ofrecer oportunidades educativas a niños, adolescentes y jóvenes que, por diversas razones, han interrumpido su proceso de formación escolar y desean retomarlo de manera flexible y estructurada. <br/>

                        Nuestra oferta académica abarca los niveles de educación primaria, media (grados 6° a 9°) y educación superior secundaria (grados 10° y 11°), garantizando un acompañamiento pedagógico integral, orientado al desarrollo de competencias académicas, sociales y éticas que permitan a nuestros estudiantes proyectarse con éxito en su vida personal, académica y profesional.<br/>


                        Nos fundamentamos en principios de inclusión, equidad, respeto y excelencia educativa, con el propósito de formar ciudadanos responsables, críticos y comprometidos con la transformación positiva de su entorno.<br/>


                        Contamos con un equipo humano altamente calificado, cuya labor se enfoca en generar ambientes de aprendizaje motivadores, en los que cada estudiante pueda avanzar a su propio ritmo, consolidar su proyecto de vida y acceder a nuevas oportunidades de desarrollo.<br/>


                        En la Institución Educativa Maruja Del Rosario Aguilar, reafirmamos nuestro compromiso con el derecho a la educación de calidad, convencidos de que toda persona merece una segunda oportunidad para aprender, crecer y construir su futuro.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default QuienesSomos;