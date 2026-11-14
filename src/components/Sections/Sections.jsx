import { Link } from 'react-router-dom';
import styles from './Sections.module.css'
import { tarjetas, ciclos } from '../../constant/tarjetasConstant';
import { urlWhatsapp } from '../../constant/urlConstat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
    faLayerGroup, faCalendarCheck, faChalkboardUser, faGraduationCap,
    faUsers, faBullseye, faLaptop, faArrowRight, faFileSignature,
    faFolderOpen, faComments, faUserCheck, faCircleInfo, faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const destacados = [
    { icon: faLayerGroup, titulo: '6 ciclos CLEI', texto: 'De 1° a 11° grado' },
    { icon: faCalendarCheck, titulo: 'Matrícula abierta', texto: 'Durante todo el año' },
    { icon: faChalkboardUser, titulo: 'Semipresencial', texto: 'Modelo flexible' },
    { icon: faGraduationCap, titulo: 'Bachiller Académico', texto: 'Título oficial' },
];

const pasos = [
    { icon: faFileSignature, titulo: 'Solicitud de ingreso', texto: 'Contáctanos por WhatsApp o acércate a la sede para iniciar tu solicitud.' },
    { icon: faFolderOpen, titulo: 'Documentación', texto: 'Entrega tu documento de identidad, certificados de estudios anteriores, entre otros.' },
    { icon: faComments, titulo: 'Entrevista de orientación', texto: 'Evaluamos tu nivel educativo y definimos el ciclo adecuado para tu ingreso.' },
];

const pilares = [
    { icon: faUsers, texto: 'Andragogía: aprendizaje pensado para jóvenes y adultos' },
    { icon: faLaptop, texto: 'Uso de tecnologías de la información (TIC)' },
    { icon: faBullseye, texto: 'Acompañamiento personalizado a tu propio ritmo' },
];

const Sections = () => {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroInner}`}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>
                            <FontAwesomeIcon icon={faLocationDot} /> Manatí, Atlántico · Educación para jóvenes y adultos
                        </span>
                        <h1>Donde cada paso cuenta para <span>llegar más lejos.</span></h1>
                        <p>
                            Retoma y culmina tu educación básica y media con un modelo flexible,
                            por ciclos y con acompañamiento personalizado.
                        </p>
                        <div className={styles.heroActions}>
                            <a href={urlWhatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} /> Inscríbete por WhatsApp
                            </a>
                            <a href="#oferta" className="btn btn-outline-light">
                                Conoce la oferta <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destacados */}
            <section className={styles.highlights}>
                <div className={`container ${styles.highlightsGrid}`}>
                    {destacados.map((d) => (
                        <div className={`${styles.highlight} reveal`} key={d.titulo}>
                            <span className={styles.highlightIcon}><FontAwesomeIcon icon={d.icon} /></span>
                            <div>
                                <strong>{d.titulo}</strong>
                                <span>{d.texto}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sobre nosotros */}
            <section className="section">
                <div className={`container ${styles.about}`}>
                    <div className={`${styles.aboutImage} reveal`}>
                        <img src="/img/iemaruja.webp" alt="Fachada de la Institución Educativa Maruja del Rosario" loading="lazy" />
                        <div className={styles.aboutStamp}>
                            <img src="/img/log.webp" alt="" />
                            <span>Modelo pedagógico <strong>“Superándonos”</strong></span>
                        </div>
                    </div>
                    <div className="reveal">
                        <span className="eyebrow">¿Quiénes somos?</span>
                        <h2 className="section-title">Una segunda oportunidad para aprender, crecer y construir tu futuro</h2>
                        <p className="section-lead">
                            Brindamos educación formal para jóvenes y adultos en condición de extraedad o
                            desescolarización, mediante un modelo académico flexible estructurado por
                            Ciclos Lectivos Integrales (CLEI), en modalidad semipresencial.
                        </p>
                        <ul className={styles.pillars}>
                            {pilares.map((p) => (
                                <li key={p.texto}>
                                    <span><FontAwesomeIcon icon={p.icon} /></span>
                                    {p.texto}
                                </li>
                            ))}
                        </ul>
                        <Link to="/quienes-somos" className="btn btn-primary">
                            Conoce más <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Oferta académica */}
            <section className="section section-alt" id="oferta">
                <div className="container">
                    <div className="section-head reveal">
                        <span className="eyebrow">Oferta académica</span>
                        <h2 className="section-title">Avanza por ciclos y recupera el tiempo</h2>
                        <p className="section-lead">
                            Formación bajo la modalidad de educación de adultos por Ciclos Lectivos Integrales (CLEI),
                            abarcando los seis niveles establecidos por el Ministerio de Educación Nacional.
                        </p>
                    </div>

                    <ol className={`${styles.timeline} reveal`}>
                        {ciclos.map((c, i) => (
                            <li key={c.clei}>
                                <span className={styles.timelineDot}>{i + 1}</span>
                                <strong>{c.clei}</strong>
                                <span>Grados {c.grados}</span>
                            </li>
                        ))}
                    </ol>

                    <div className={styles.cards}>
                        {tarjetas.map((item) => (
                            <article className={`${styles.card} ${styles[item.color]} reveal`} key={item.id}>
                                <div className={styles.cardImage}>
                                    <img src={item.img} alt={item.label} loading="lazy" />
                                    <span className={styles.cardBadge}>{item.ciclos}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.cardGrades}>{item.grados}</span>
                                    <h3>{item.label}</h3>
                                    <dl>
                                        <dt>Dirigido a</dt>
                                        <dd>{item.contenido}</dd>
                                        <dt>Objetivo</dt>
                                        <dd>{item.objetivo}</dd>
                                        <dt>Modalidad</dt>
                                        <dd>{item.modo}</dd>
                                    </dl>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admisiones */}
            <section className="section" id="admisiones">
                <div className="container">
                    <div className="section-head reveal">
                        <span className="eyebrow">Admisiones</span>
                        <h2 className="section-title">Ingresar es fácil: 3 pasos</h2>
                        <p className="section-lead">
                            Oportunidades de acceso para jóvenes y adultos que desean retomar su proceso
                            formativo a través de un modelo flexible y adaptado a sus necesidades.
                        </p>
                    </div>

                    <div className={styles.steps}>
                        {pasos.map((p, i) => (
                            <div className={`${styles.step} reveal`} key={p.titulo}>
                                <span className={styles.stepNumber}>0{i + 1}</span>
                                <span className={styles.stepIcon}><FontAwesomeIcon icon={p.icon} /></span>
                                <h3>{p.titulo}</h3>
                                <p>{p.texto}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.infoGrid}>
                        <div className={`${styles.infoCard} reveal`}>
                            <FontAwesomeIcon icon={faUserCheck} />
                            <div>
                                <h4>Requisitos</h4>
                                <p>Ser una persona joven o adulta que haya interrumpido su trayectoria académica y desee culminar sus estudios de básica o media.</p>
                            </div>
                        </div>
                        <div className={`${styles.infoCard} reveal`}>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            <div>
                                <h4>Calendario de matrículas</h4>
                                <p>Inscripciones abiertas durante todo el año, de acuerdo con la disponibilidad de cupos en cada nivel.</p>
                            </div>
                        </div>
                        <div className={`${styles.infoCard} reveal`}>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <div>
                                <h4>Costos</h4>
                                <p>Para mayor información, comunícate directamente con la institución por nuestros canales oficiales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaWrap}>
                <div className="container">
                    <div className={`${styles.cta} reveal`}>
                        <div>
                            <h2>¿Listo para retomar tus estudios?</h2>
                            <p>Escríbenos y te orientamos sobre el ciclo ideal para ti.</p>
                        </div>
                        <div className={styles.ctaActions}>
                            <a href={urlWhatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} /> Hablar por WhatsApp
                            </a>
                            <Link to="/sede" className="btn btn-outline-light">Visítanos</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Sections;
