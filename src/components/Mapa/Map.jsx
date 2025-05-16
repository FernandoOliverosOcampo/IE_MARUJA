import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige ícono por defecto en algunos entornos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapWithAddress = ({ address, label }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();
      if (data && data.length > 0) {
        setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    };
    fetchCoordinates();
  }, [address]);

  return (
    <div>
      {position ? (
        <MapContainer center={position} zoom={16} style={{ height: '400px', width: '370px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Tooltip permanent direction="top" offset={[0, -10]}>
              <strong>{label}</strong><br />
              {address}
            </Tooltip>
          </Marker>
        </MapContainer>
      ) : (
        <p>Cargando ubicación...</p>
      )}
    </div>
  );
};

export default MapWithAddress;
