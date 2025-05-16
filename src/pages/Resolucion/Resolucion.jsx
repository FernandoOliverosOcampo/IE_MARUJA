import styles from './Resolucion.module.css'
import { urlResolucion } from '../../constant';
const Resolucion = () =>{
 
   return (
        <>
        <section className={styles.sectionContainer}>
           <div className={styles.container}>
                <div>
                   <h2>Aplicación de la Resolución 1195 en la Institución Educativa Maruja Del Rosario Aguilar</h2>
                </div>

                <div className={styles.texto}>
                <p>La Resolución 1195 de 2010, expedida por el Ministerio de Educación Nacional de Colombia, establece las orientaciones para la organización y funcionamiento de los programas de educación formal de adultos en los niveles de educación básica (primaria y secundaria) y media, dentro del marco del Servicio Educativo en Ciclos Lectivos Especiales Integrados (CLEI).
                  <br/>
                  <br/>


                En cumplimiento de esta normativa, la Institución Educativa Maruja Del Rosario Aguilar implementa su oferta académica nivelatoria estructurada en ciclos, permitiendo a los estudiantes acceder, avanzar y culminar sus estudios de manera flexible, según sus condiciones personales, sociales y laborales.
                <br/>
                <br/>
                La implementación de esta resolución permite a la Institución Educativa Maruja Del Rosario Aguilar cumplir su misión de garantizar el derecho a la educación con equidad, pertinencia y calidad, contribuyendo a la inclusión social y al desarrollo integral de sus estudiantes.
                </p>
              </div>
              
                <a href ={urlResolucion} target='_blank' className={styles.button}>Ver resolución Completa</a>
              
          </div>
          
        </section>
             
        </>
    )
}

export default Resolucion;