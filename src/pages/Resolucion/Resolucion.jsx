import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faArrowUpRightFromSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { urlResolucion, urlCamara, urlAcreditacion } from '../../constant/urlConstat';
import page from '../../styles/Page.module.css'

const Resolucion = () => {
    return (
        <>
            <PageHeader
                breadcrumb="Documentos"
                eyebrow="Resolución 1195"
                title="Resolución 1195"
                subtitle="Aplicación de la Resolución 1195 en la Institución Educativa Maruja Del Rosario Aguilar."
            />
            <section className="section">
                <div className={`container ${page.layout}`}>
                    <div className={`${page.card} ${page.prose} reveal`}>
                        <p className={page.lead}>
                            Orientaciones para la organización y funcionamiento de los programas de educación formal de adultos.
                        </p>
                        <p>
                            La Resolución 1195 de 2010, expedida por el Ministerio de Educación Nacional de Colombia, establece las
                            orientaciones para la organización y funcionamiento de los programas de educación formal de adultos en los
                            niveles de educación básica (primaria y secundaria) y media, dentro del marco del Servicio Educativo en
                            Ciclos Lectivos Especiales Integrados (CLEI).
                        </p>
                        <p>
                            En cumplimiento de esta normativa, la Institución Educativa Maruja Del Rosario Aguilar implementa su oferta
                            académica nivelatoria estructurada en ciclos, permitiendo a los estudiantes acceder, avanzar y culminar sus
                            estudios de manera flexible, según sus condiciones personales, sociales y laborales.
                        </p>
                        <p>
                            La implementación de esta resolución permite a la Institución Educativa Maruja Del Rosario Aguilar cumplir
                            su misión de garantizar el derecho a la educación con equidad, pertinencia y calidad, contribuyendo a la
                            inclusión social y al desarrollo integral de sus estudiantes.
                        </p>
                    </div>
                    <aside className={`${page.sideCard} ${page.sticky} reveal`}>
                        <div className={page.sideCardHead}>
                            <h3><FontAwesomeIcon icon={faScaleBalanced} /> Documentos oficiales</h3>
                            <p>Consulta y descarga</p>
                        </div>
                        <div className={page.sideCardBody}>
                            <a href={urlResolucion} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${page.fullBtn}`}>
                                Ver resolución completa <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                            <a href={urlCamara} target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${page.fullBtn}`}>
                                <FontAwesomeIcon icon={faFilePdf} /> Cámara de comercio
                            </a>
                            <a href={urlAcreditacion} target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${page.fullBtn}`}>
                                <FontAwesomeIcon icon={faFilePdf} /> Acreditación
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}

export default Resolucion;
