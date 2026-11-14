import GoogleMapEmbed from '../../components/Mapa/Map'
import PageHeader from '../../components/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faDiamondTurnRight, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { contacto, urlWhatsapp, urlComoLlegar } from '../../constant/urlConstat';
import page from '../../styles/Page.module.css'

const Location = () => {
    return (
        <>
            <PageHeader
                title="Nuestra sede"
                subtitle="Un entorno accesible y seguro en Manatí, Atlántico. Será un gusto atenderte en nuestras oficinas durante el horario institucional."
            />
            <section className="section">
                <div className={`container ${page.layout}`}>
                    <div className="reveal">
                        <GoogleMapEmbed className={page.map} />
                        <div className={`${page.prose} ${page.card}`} style={{ marginTop: '2rem' }}>
                            <span className={page.tag}><FontAwesomeIcon icon={faPersonWalking} /> Fácil acceso</span>
                            <p>
                                La Institución Educativa Maruja Del Rosario Aguilar se encuentra ubicada en un entorno accesible y seguro,
                                brindando facilidad de ingreso a estudiantes provenientes de diversos sectores de la comunidad.
                            </p>
                            <p>
                                Gracias a su localización estratégica, la institución facilita el acceso tanto a pie como mediante
                                transporte público, lo que permite a nuestros estudiantes y sus familias llegar con comodidad y
                                puntualidad a cada jornada académica.
                            </p>
                            <p>
                                Si desea visitarnos, conocer nuestras instalaciones o recibir orientación sobre el proceso de matrícula,
                                será un gusto atenderle en nuestras oficinas durante el horario institucional.
                            </p>
                        </div>
                    </div>

                    <aside className={`${page.sideCard} ${page.sticky} reveal`}>
                        <div className={page.sideCardHead}>
                            <h3>Información de contacto</h3>
                            <p>Escríbenos o visítanos</p>
                        </div>
                        <div className={page.sideCardBody}>
                            <ul className={page.factList}>
                                <li>
                                    <span className={page.factIcon}><FontAwesomeIcon icon={faLocationDot} /></span>
                                    <div><strong>Dirección</strong><span>{contacto.direccion}</span></div>
                                </li>
                                <li>
                                    <span className={page.factIcon}><FontAwesomeIcon icon={faPhone} /></span>
                                    <div><strong>Teléfono</strong><a href={contacto.telefonoHref}>{contacto.telefono}</a></div>
                                </li>
                                <li>
                                    <span className={page.factIcon}><FontAwesomeIcon icon={faEnvelope} /></span>
                                    <div><strong>Correo</strong><a href={`mailto:${contacto.correo}`}>{contacto.correo}</a></div>
                                </li>
                            </ul>
                            <a href={urlComoLlegar} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${page.fullBtn}`}>
                                <FontAwesomeIcon icon={faDiamondTurnRight} /> Cómo llegar
                            </a>
                            <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${page.fullBtn}`}>
                                <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos por WhatsApp
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}
export default Location;
