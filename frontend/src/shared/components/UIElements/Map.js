import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map as olMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import './Map.css';
const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new olMap({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [center.lng, center.lat],
        zoom: zoom
      })
    });

    return () => {
      // Clean up the map instance when the component is unmounted
      map.setTarget(null);
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;