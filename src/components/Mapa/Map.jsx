import React from 'react';
import styles from './Mapa.module.css'
const GoogleMapEmbed = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className={styles.mapResponsive}>
      <iframe
        title="Mapa"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
