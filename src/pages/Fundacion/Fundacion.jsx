import PageHeader from '../../components/PageHeader/PageHeader';
import PdfModal from '../../components/PdfModal/PdfModal';
import useDocumentViewer from '../../components/PdfModal/useDocumentViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faLocationDot, faInfinity, faBookOpenReader, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { urlFundacion } from '../../constant/urlConstat';
import page from '../../styles/Page.module.css'

const datos = [
    { icon: faHandHoldingHeart, titulo: 'Naturaleza', texto: 'Entidad privada, autónoma y sin ánimo de lucro' },
    { icon: faLocationDot, titulo: 'Sede principal', texto: 'Calle 4 #4-30, Manatí, Atlántico' },
    { icon: faInfinity, titulo: 'Duración', texto: 'Indefinida' },
    { icon: faBookOpenReader, titulo: 'Enfoque', texto: 'Formación para la vida: saber ser, saber entender y saber hacer' },
];

const Fundacion = () => {
    const { doc, openDocument, closeDocument } = useDocumentViewer();

    return (
        <>
            <PageHeader
                breadcrumb="Nosotros"
                eyebrow="Fundación"
                title="Fundación Maruja del Rosario Aguilar"
                subtitle="Talento, Imaginación y Ciencia: transformación social a través de la educación."
            />
            <section className="section">
                <div className={`container ${page.layout}`}>
                    <div className={`${page.card} ${page.prose} reveal`}>
                    <p>
                    La <strong>Fundación MARUJA DEL ROSARIO AGUILAR</strong> es una entidad privada, autónoma y sin ánimo de lucro, constituida legalmente bajo los marcos constitucionales y normativos vigentes en la República de Colombia. Su propósito es el de contribuir a la transformación social a través de la educación, promoviendo oportunidades de formación integral para niños, jóvenes y adultos, especialmente aquellos en condición de vulnerabilidad o desescolarización. El nombre de la Fundación está legalmente protegido y reservado, de acuerdo con la Ley 133 de 1994 y el parágrafo 1 del artículo 1 del Decreto 782 de 1995, por lo cual su uso está restringido exclusivamente a la <strong>Institución Educativa Maruja del Rosario Aguilar</strong>, previa autorización expresa de la Fundación, garantizando así la identidad, el prestigio y la integridad institucional.
                    </p>
                    <p>
                    La sede principal de la Fundación se encuentra ubicada en la Calle 4 #4-30 del municipio de Manatí, Atlántico, desde donde dirige y coordina sus actividades pedagógicas y administrativas. No obstante, su campo de acción se extiende a todo el territorio nacional e incluso al ámbito internacional, teniendo la facultad de establecer nuevas sedes o instituciones educativas que actúen bajo su dirección, siguiendo el debido proceso y cumpliendo con los lineamientos establecidos por el Ministerio de Educación Nacional y las Secretarías de Educación certificadas o no. Estas sedes podrán ser permanentes o temporales, dependiendo de las necesidades locales, y estarán orientadas por el mismo espíritu institucional de excelencia educativa, inclusión social y responsabilidad comunitaria.
                    </p>
                    <p>
                    La duración de la Fundación es indefinida, lo que le permite proyectarse como una institución sólida y sostenible en el tiempo, comprometida con el desarrollo humano, ético y académico de sus beneficiarios. Su naturaleza es esencialmente pedagógica, con un enfoque en la <strong>“formación para la vida”</strong>, lo que implica una propuesta educativa basada no solo en la adquisición de conocimientos, sino también en el fortalecimiento de competencias ciudadanas, habilidades sociales, pensamiento crítico y valores fundamentales para la convivencia y el liderazgo en diversos contextos.
                    </p>
                    <p>
                    En coherencia con su misión, los fines pedagógicos de la Fundación están orientados al desarrollo del <strong>saber ser</strong>, <strong>saber entender</strong> y <strong>saber hacer</strong>. Esto se logra a través de un currículo flexible e inclusivo, adaptado a las necesidades de sus estudiantes y enmarcado en los estándares y lineamientos del Ministerio de Educación Nacional. La Fundación tiene autonomía para definir su propio Proyecto Educativo Institucional (PEI), designar los cargos de dirección y liderazgo académico, y establecer vínculos colaborativos con otras instituciones educativas públicas o privadas, tanto a nivel nacional como internacional.
                    </p>
                    <p>
                    Asimismo, la Fundación garantiza el ejercicio libre y autónomo de su <strong>Gobierno Escolar</strong>, promoviendo la participación democrática y la toma de decisiones colectiva, con base en principios éticos, transparencia y compromiso social. Esta independencia le permite establecer sus propias reglamentaciones internas, procesos administrativos y pedagógicos, ajustados a sus valores institucionales y orientados a generar impacto positivo en las comunidades donde hace presencia.
                    </p>

                    </div>
                    <aside className={`${page.sideCard} ${page.sticky} reveal`}>
                        <div className={page.sideCardHead}>
                            <h3>Datos clave</h3>
                            <p>Fundación Maruja del Rosario Aguilar</p>
                        </div>
                        <div className={page.sideCardBody}>
                            <ul className={page.factList}>
                                {datos.map((d) => (
                                    <li key={d.titulo}>
                                        <span className={page.factIcon}><FontAwesomeIcon icon={d.icon} /></span>
                                        <div><strong>{d.titulo}</strong><span>{d.texto}</span></div>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`btn btn-primary ${page.fullBtn}`}
                                onClick={() => openDocument(urlFundacion, 'Fundación Maruja del Rosario Aguilar')}
                            >
                                <FontAwesomeIcon icon={faFilePdf} /> Ver documento completo
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
            <PdfModal url={doc?.url} title={doc?.title} onClose={closeDocument} />
        </>
    )
}
export default Fundacion;
