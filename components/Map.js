import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
  const [selectedMarker, setSelectedMarker] = useState({});
  console.log(selectedMarker?.title);

  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const centerCoordinate = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: centerCoordinate.longitude,
    latitude: centerCoordinate.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/washtakzo/cl8x4tm94001615rm6rlnmz76"}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(event) => {
        setViewport(event.viewport);
      }}
    >
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => {
              setSelectedMarker(item);
            }}
          >
            <p className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>
          {item.long === selectedMarker.long ? (
            <Popup
              longitude={item.long}
              latitude={item.lat}
              closeOnClick={false}
              onClose={() => {
                setSelectedMarker({});
              }}
            >
              {selectedMarker.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
