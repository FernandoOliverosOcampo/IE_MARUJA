import { useState } from 'react';

const useDocumentViewer = () => {
    const [doc, setDoc] = useState(null);

    const openDocument = (url, title) => {
        if (window.innerWidth < 600) {
            window.open(url, '_blank', 'noopener');
            return;
        }
        setDoc({ url, title });
    };

    const closeDocument = () => setDoc(null);

    return { doc, openDocument, closeDocument };
};

export default useDocumentViewer;
