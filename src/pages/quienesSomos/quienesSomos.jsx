import styles from './quienesSomos.module.css'
const QuienesSomos = () => {
    return (
        <>
            {/*Section How am i*/}
            <section  className={styles.sectionContainer} id="quienes-somos">
                <div className={styles.quienesSomos}>
                    <div className={styles.imagenSomos}>
                        <img src="/img/log.png" alt="" />
                    </div>

                    <div className={styles.textoSomos}>
                        <h3>¿Quiénes Somos?</h3>
                        <p>La Institución Educativa Maruja del Rosario es una entidad privada ubicada en el municipio de Manatí, Atlántico, dedicada a brindar educación formal para jóvenes y adultos mediante un modelo académico flexible, estructurado por Ciclos Lectivos Integrales – CLEI, en modalidad semipresencial.
                        <br/>

                        Nuestro objetivo es ofrecer oportunidades reales de formación a personas en condición de extraedad o desescolarización, permitiéndoles retomar y culminar su educación básica y media a través de un proceso adaptado a sus necesidades personales, laborales y sociales.
                        <br/>
              
                        Nos fundamentamos en principios de inclusión, equidad, respeto y excelencia educativa, con el propósito de formar ciudadanos responsables, críticos y comprometidos con la transformación positiva de su entorno.
                        <br/>

                        Nuestro modelo pedagógico "Superándonos" se basa en la andragogía, el uso de tecnologías de la información (TIC) y un enfoque constructivista, permitiendo que cada estudiante avance a su propio ritmo, reciba acompañamiento personalizado y construya su propio proyecto de vida.
                        <br/>

                        En la Institución Educativa Maruja del Rosario, reafirmamos nuestro compromiso con el derecho a una educación de calidad, convencidos de que toda persona merece una segunda oportunidad para aprender, crecer y construir su futuro con dignidad.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default QuienesSomos;