import Modal from 'react-modal';

Modal.setAppElement('#root');

const PdfModal = ({ url, title = 'Documento', onClose }) => (
    <Modal
        isOpen={Boolean(url)}
        onRequestClose={onClose}
        contentLabel={title}
        className="pdf-modal"
        overlayClassName="pdf-modal-overlay"
    >
        <div className="pdf-modal-bar">
            <span>{title}</span>
            <button onClick={onClose}>Cerrar</button>
        </div>
        {url && <iframe src={url} title={title} />}
    </Modal>
);

export default PdfModal;
