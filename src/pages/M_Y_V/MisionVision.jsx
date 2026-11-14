import { contenido } from "../../constant/misionVisionConstant";
import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHandshake, faScaleBalanced, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import page from '../../styles/Page.module.css'

const iconos = { 1: faBullseye, 2: faEye };

const valores = [
    { icon: faHandshake, titulo: 'Inclusión', texto: 'Educación para todos, sin importar su trayectoria.' },
    { icon: faScaleBalanced, titulo: 'Equidad', texto: 'Oportunidades reales de formación.' },
    { icon: faHeart, titulo: 'Respeto', texto: 'Convivencia y valores éticos.' },
    { icon: faStar, titulo: 'Excelencia', texto: 'Calidad educativa en cada ciclo.' },
];

const MisionVision = () => {
    return (
        <>
            <PageHeader
                breadcrumb="Nosotros"
                title="Misión y Visión"
                subtitle="El propósito que orienta nuestro quehacer pedagógico y el futuro que construimos juntos."
            />
            <section className="section">
                <div className="container">
                    <div className={page.grid2}>
                        {contenido.map((item) => (
                            <article
                                className={`${page.featureCard} ${item.id === 2 ? page.green : ''} reveal`}
                                key={item.id}
                            >
                                <span className={page.featureIcon}><FontAwesomeIcon icon={iconos[item.id]} /></span>
                                <h3>{item.label}</h3>
                                <p>{item.contenido}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section section-alt">
                <div className="container">
                    <div className="section-head reveal">
                        <span className="eyebrow">Nuestros principios</span>
                        <h2 className="section-title">Valores que nos identifican</h2>
                    </div>
                    <div className={page.grid4}>
                        {valores.map((v) => (
                            <div className={`${page.valueCard} reveal`} key={v.titulo}>
                                <span className={page.featureIcon}><FontAwesomeIcon icon={v.icon} /></span>
                                <h3>{v.titulo}</h3>
                                <p>{v.texto}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default MisionVision;
