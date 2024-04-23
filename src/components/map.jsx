import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = ({ users, selectedUserLocation }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAC1Ny965y3wVhLeFA54LQ3mIh8caIBZ04',
  });

  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={selectedUserLocation || defaultCenter}>
    {users.map((user) => (
      <Marker
        key={user.id}
        position={{ lat: user.latitude, lng: user.longitude }}
      />
    ))}
  </GoogleMap>
) : (
  <></>
);
}
export default Map;

