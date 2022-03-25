import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "./SVG/marker.svg";

const Marker = () => (
  <div>
    <img src={marker} alt="Marker"/>
  </div>
);
const Map = () => {
  const defaultProps = {
    center: {
      lat: 21.028511,
      lng: 105.804817,
    },
    zoom: 11,
  };
  return (
    <div className="map mt-5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTz0q16GDTj2iZHgtjA6a-cukbS7mTVHU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={21.028511} lng={105.804817} text="Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
