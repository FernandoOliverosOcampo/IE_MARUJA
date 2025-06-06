import styles from './Proyectos.module.css'
import { projects } from '../../constant/projectConstant';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // o '#app' según tu index.html

const Proyectos = () => {
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

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h2>Proyectos Institucionales</h2>
                </div>
                <div className={styles.texto}>
                    <p>
                        En la <strong>Institución Educativa Maruja del Rosario</strong>, promovemos una educación integral que responde a las necesidades reales de nuestra comunidad. Nuestros proyectos institucionales reflejan el compromiso con la inclusión, la formación ciudadana y el bienestar colectivo, más allá del aula.
                    </p>

                    <div className={styles.proyecto}>
                        <h3>Alfabetización en la Institución Educativa Maruja del Rosario Aguilar, Manatí - Atlántico</h3>
                        <p>
                            Desarrollamos un programas de alfabetización dirigidos a jóvenes y adultos en condición de analfabetismo o baja escolaridad. A través de metodologías flexibles y acompañamiento personalizado, brindamos herramientas fundamentales en lectura, escritura y cálculo, fortaleciendo la autonomía y participación activa en la sociedad.
                        </p>
                    </div>

                    <div className={styles.proyecto}>
                        <h3>Plan Escolar de Prevención y Atención de Emergencias y Desastres</h3>
                        <p>
                            Implementamos un plan institucional orientado a la gestión del riesgo y la protección de la comunidad educativa. Promueve una cultura de prevención, organización y respuesta ante situaciones de emergencia mediante simulacros, capacitaciones, protocolos y participación activa de estudiantes, docentes y personal administrativo.
                        </p>
                    </div>

                    <p>
                        Estos proyectos fortalecen nuestro modelo educativo, consolidando una formación que no solo transforma vidas, sino que también contribuye al desarrollo social y la seguridad del entorno en el municipio de Manatí.
                    </p>
                </div>
                <div className={styles.proyectos}>
                    <div className={styles.tarjetas}>
                        {projects.map((item) => (
                            <div className={styles.card} key={item.id}>
                                <img src="img/log.webp" alt="" />
                                <h3>{item.label}</h3>
                                <p>{item.content}.</p>
                                <button onClick={() => openModal(item.link)}>Ver Proyecto</button>
                            </div>
                        ))}
                    </div>
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
export default Proyectos;