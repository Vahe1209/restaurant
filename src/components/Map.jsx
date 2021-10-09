import React from "react";
import { GoogleMap } from "react-google-maps";

export default function Map() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.179188, lng: 44.499104 }}
    />
  );
}
