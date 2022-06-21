import React from "react";
import { useRef, useEffect } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 25.7473;
  const lat = 62.2426;
  const zoom = 10;

  mapboxgl.accessToken = process.env.REACT_APP_MAP;
  useEffect(() => {
    try {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div
      ref={mapContainer}
      className="map-container min-h-[400px] h-400 w-full"
    />
  );
};
