import styles from './Fundacion.module.css'
import { urlFundacion } from '../../constant/urlConstat';
import React, { useState } from 'react';
import Modal from 'react-modal';
const Fundacion = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    
    const openModal = (url) => {
            setPdfUrl(url);
            setModalIsOpen(true);
    };
    
    const closeModal = () => {
            setModalIsOpen(false);
            setPdfUrl('');
    };
    
    
    return(
        <section className={styles.sectionContainer}>
                <div className={styles.container}>
                    <div className={styles.titulo}>
                    <h2>Fundación Maruja del Rosario Aguilar Talento, Imaginación y Ciencia</h2>
                    </div>
                    <div className={styles.texto}>
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
                    <div className={styles.documento}>
                        <button onClick={() => openModal(urlFundacion)}>Ver Documento Completo</button>
                    </div>
                </div>
                <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Visor de PDF"
                                style={{
                                    content: {
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '80vw',
                                        height: '80vh',
                                        padding: '0'
                                    }
                                }}
                            >
                                <button onClick={closeModal} style={{ float: 'right', margin: 10 }}>Cerrar</button>
                                {pdfUrl && (
                                    window.innerWidth < 600 ? (
                                        window.open(pdfUrl, '_blank')
                                    ) : (
                                        <iframe
                                            src={pdfUrl}
                                            title="PDF"
                                            width="100%"
                                            height="95%"
                                            style={{ border: 'none' }}
                                        />
                                    )
                                )}
                            </Modal>
        </section>
    )
}
export default Fundacion;