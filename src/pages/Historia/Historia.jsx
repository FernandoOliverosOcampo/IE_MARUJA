import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faRotate, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import page from '../../styles/Page.module.css'

const hitos = [
    { icon: faUserTie, titulo: 'Fundador', texto: 'Lic. Walter David Orozco Ávila, especialista en Proyectos Educativos.' },
    { icon: faRotate, titulo: 'Autoaprendizaje por ciclos', texto: 'Estrategias pedagógicas activas y herramientas tecnológicas.' },
    { icon: faLightbulb, titulo: 'Pensamiento crítico', texto: 'Ciudadanos capaces de resolver problemas en diversos contextos.' },
];

const Historia = () => {
    return (
        <>
            <PageHeader
                breadcrumb="Nosotros"
                eyebrow="Historia"
                title="Nuestra historia"
                subtitle="Una obra educativa nacida en Manatí, Atlántico, para transformar proyectos de vida."
            />
            <section className="section">
                <div className={`container ${page.layoutEven}`}>
                    <div className={`${page.prose} reveal`}>
                        <span className="eyebrow">Institución Educativa Maruja del Rosario Aguilar</span>
                        <p className={page.lead}>
                            Reconocemos al estudiante como un ser en proceso de formación integral, capaz de superar vacíos
                            académicos y personales.
                        </p>
                        <p>
                            La Institución Educativa Maruja del Rosario de Manatí, Atlántico es una obra fundada por el Licenciado
                            Walter David Orozco Ávila, especialista en Proyectos Educativos. Su misión es reconocer al estudiante
                            como un ser en proceso de formación integral, capaz de superar vacíos académicos y personales, y de
                            construir un proyecto de vida que mejore su calidad de vida en los ámbitos personal, social y profesional.
                        </p>
                        <p>
                            La institución promueve un modelo de autoaprendizaje por ciclos lectivos, en el que los estudiantes
                            desarrollan sus conocimientos de manera armónica, haciendo uso de estrategias pedagógicas activas y
                            herramientas tecnológicas, que les permiten construir saberes significativos.
                        </p>
                        <p>
                            Este enfoque educativo busca preparar ciudadanos con pensamiento crítico y capacidad de resolver
                            problemas en diversos contextos, aportando al desarrollo local, regional, nacional e incluso internacional.
                        </p>
                    </div>
                    <div className={`${page.photo} reveal`}>
                        <img src="/img/iemaruja.webp" alt="Sede de la Institución Educativa Maruja del Rosario" loading="lazy" />
                    </div>
                </div>
            </section>
            <section className="section section-alt">
                <div className={`container ${page.grid3}`}>
                    {hitos.map((h, i) => (
                        <div
                            className={`${page.featureCard} ${i === 1 ? page.green : ''} ${i === 2 ? page.orange : ''} reveal`}
                            key={h.titulo}
                        >
                            <span className={page.featureIcon}><FontAwesomeIcon icon={h.icon} /></span>
                            <h3>{h.titulo}</h3>
                            <p>{h.texto}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Historia;
