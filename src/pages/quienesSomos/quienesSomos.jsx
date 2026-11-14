import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLaptop, faPuzzlePiece, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import page from '../../styles/Page.module.css'

const modelo = [
    { icon: faUsers, titulo: 'Andragogía', texto: 'Metodologías pensadas para el aprendizaje de jóvenes y adultos.' },
    { icon: faLaptop, titulo: 'TIC', texto: 'Uso de tecnologías de la información como apoyo al aprendizaje.' },
    { icon: faPuzzlePiece, titulo: 'Constructivismo', texto: 'Cada estudiante avanza a su ritmo y construye su proyecto de vida.' },
];

const QuienesSomos = () => {
    return (
        <>
            <PageHeader
                breadcrumb="Nosotros"
                title="¿Quiénes somos?"
                subtitle="Educación formal para jóvenes y adultos mediante un modelo académico flexible por Ciclos Lectivos Integrales – CLEI."
            />
            <section className="section" id="quienes-somos">
                <div className={`container ${page.layoutEven}`}>
                    <div className={`${page.prose} reveal`}>
                        <p className={page.lead}>
                            Toda persona merece una segunda oportunidad para aprender, crecer y construir su futuro con dignidad.
                        </p>
                        <p>
                            La Institución Educativa Maruja del Rosario es una entidad privada ubicada en el municipio de Manatí,
                            Atlántico, dedicada a brindar educación formal para jóvenes y adultos mediante un modelo académico flexible,
                            estructurado por Ciclos Lectivos Integrales – CLEI, en modalidad semipresencial.
                        </p>
                        <p>
                            Nuestro objetivo es ofrecer oportunidades reales de formación a personas en condición de extraedad o
                            desescolarización, permitiéndoles retomar y culminar su educación básica y media a través de un proceso
                            adaptado a sus necesidades personales, laborales y sociales.
                        </p>
                        <p>
                            Nos fundamentamos en principios de inclusión, equidad, respeto y excelencia educativa, con el propósito de
                            formar ciudadanos responsables, críticos y comprometidos con la transformación positiva de su entorno.
                        </p>
                        <p>
                            En la Institución Educativa Maruja del Rosario, reafirmamos nuestro compromiso con el derecho a una
                            educación de calidad.
                        </p>
                    </div>
                    <div className={`${page.photo} reveal`}>
                        <img src="/img/iemaruja.webp" alt="Sede de la Institución Educativa Maruja del Rosario" loading="lazy" />
                    </div>
                </div>
            </section>
            <section className="section section-alt">
                <div className="container">
                    <div className="section-head reveal">
                        <span className="eyebrow">Modelo pedagógico</span>
                        <h2 className="section-title">“Superándonos”</h2>
                        <p className="section-lead">
                            Un modelo que permite que cada estudiante avance a su propio ritmo, reciba acompañamiento
                            personalizado y construya su propio proyecto de vida.
                        </p>
                    </div>
                    <div className={page.grid3}>
                        {modelo.map((m, i) => (
                            <div
                                className={`${page.featureCard} ${i === 1 ? page.green : ''} ${i === 2 ? page.orange : ''} reveal`}
                                key={m.titulo}
                            >
                                <span className={page.featureIcon}><FontAwesomeIcon icon={m.icon} /></span>
                                <h3>{m.titulo}</h3>
                                <p>{m.texto}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/mision-vision" className="btn btn-primary">
                            Misión y Visión <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default QuienesSomos;
