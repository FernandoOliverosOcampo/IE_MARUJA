const GoogleMapEmbed = ({ className }) => {
  return (
    <div className={className}>
      <iframe
        title="Mapa de la Institución Educativa Maruja del Rosario Aguilar"
        src="https://www.google.com/maps?q=Institución+Educativa+Maruja+del+Rosario+Aguilar+Manatí+Atlántico&z=17&output=embed"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
