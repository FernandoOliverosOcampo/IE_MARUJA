import React from 'react';
import styles from './Mapa.module.css';

const GoogleMapEmbed = () => {
  return (
    <div className={styles.mapResponsive}>
      <iframe
        title="Institución Educativa Maruja del Rosario Aguilar"
        src="https://www.google.com/maps?q=Institución+Educativa+Maruja+del+Rosario+Aguilar+Manatí+Atlántico&z=17&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
