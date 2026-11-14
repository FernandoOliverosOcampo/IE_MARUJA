import PageHeader from '../../components/PageHeader/PageHeader';
import PdfModal from '../../components/PdfModal/PdfModal';
import useDocumentViewer from '../../components/PdfModal/useDocumentViewer';
import { projects } from '../../constant/projectConstant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faShieldHeart, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import page from '../../styles/Page.module.css'

const iconos = { 1: faBookOpen, 2: faShieldHeart };

const Proyectos = () => {
    const { doc, openDocument, closeDocument } = useDocumentViewer();

    return (
        <>
            <PageHeader
                title="Proyectos Institucionales"
                subtitle="Compromiso con la inclusión, la formación ciudadana y el bienestar colectivo, más allá del aula."
            />
            <section className="section">
                <div className="container">
                    <div className="section-head reveal">
                        <p className="section-lead">
                            En la <strong>Institución Educativa Maruja del Rosario</strong>, promovemos una educación integral que
                            responde a las necesidades reales de nuestra comunidad. Estos proyectos fortalecen nuestro modelo
                            educativo y contribuyen al desarrollo social y la seguridad del entorno en el municipio de Manatí.
                        </p>
                    </div>
                    <div className={page.grid2}>
                        {projects.map((item) => (
                            <article
                                className={`${page.featureCard} ${item.id === 2 ? page.orange : page.green} reveal`}
                                key={item.id}
                            >
                                <span className={page.featureIcon}><FontAwesomeIcon icon={iconos[item.id] || faBookOpen} /></span>
                                <span className={page.tag}>Proyecto {item.id}</span>
                                <h3>{item.label}</h3>
                                <p>{item.resumen}</p>
                                <div className={page.actions}>
                                    <button className="btn btn-primary" onClick={() => openDocument(item.link, item.label)}>
                                        <FontAwesomeIcon icon={faFilePdf} /> Ver proyecto
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <PdfModal url={doc?.url} title={doc?.title} onClose={closeDocument} />
        </>
    )
}
export default Proyectos;
