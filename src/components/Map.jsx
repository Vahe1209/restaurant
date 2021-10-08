import React from "react";
import { GoogleMap } from "react-google-maps";

export default function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.179188, lng: 44.499104 }}
    />
  );
}
