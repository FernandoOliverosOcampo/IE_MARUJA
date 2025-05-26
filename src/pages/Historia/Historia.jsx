import styles from './Historia.module.css'
const Historia = () =>{
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h3>Historia De la I.E MARUJA DEL ROSARIO AGUILAR</h3>
                </div>
                <div className={styles.texto}>
                    <p>La Institución Educativa Maruja del Rosario de Manatí, Atlántico es una obra fundada por el Licenciado Walter David Orozco Ávila, especialista en Proyectos Educativos. Su misión es reconocer al estudiante como un ser en proceso de formación integral, capaz de superar vacíos académicos y personales, y de construir un proyecto de vida que mejore su calidad de vida en los ámbitos personal, social y profesional.
                    <br />
                    <br />
                    La institución promueve un modelo de autoaprendizaje por ciclos lectivos, en el que los estudiantes desarrollan sus conocimientos de manera armónica, haciendo uso de estrategias pedagógicas activas y herramientas tecnológicas, que les permiten construir saberes significativos.
                    <br />
                    <br />
                    Este enfoque educativo busca preparar ciudadanos con pensamiento crítico y capacidad de resolver problemas en diversos contextos, aportando al desarrollo local, regional, nacional e incluso internacional.</p>
                </div>

            </div>
        </section>
    )
}
export default Historia;