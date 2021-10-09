import React from "react";
import Map from "./Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";

const Wrap = withScriptjs(withGoogleMap(Map));

export default function WrappedMap() {
  return (
    <div>
      <Wrap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100vh", width: "100%" }} />}
        containerElement={<div style={{ height: `400px`, width: "30%" }} />}
        mapElement={<div style={{ height: `100vh`, width: "100%" }} />}
      />
    </div>
  );
}
