import { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import data from "../data.json";
import MyRating from "./MyRating";

export default function RMap({ centerId }) {
  const [centerPosition, setCenterPosition] = useState([
    40.1776121, 44.5125849,
  ]);
  useEffect(() => {
    const clickedData = data.restaurants.find((item) => item.id === centerId);
    if (clickedData) {
      setCenterPosition(clickedData.geometry);
    }
  }, [centerId]);

  return (
    <YMaps>
      <div style={{ position: "fixed", right: "20px" }}>
        <Map
          state={{ center: centerPosition, zoom: 15 }}
          height="100vh"
          width="700px"
        >
          {data.restaurants.map((item, idx) => {
            return (
              <Placemark
                geometry={item.geometry}
                key={idx}
                onMouseEnter={(e) => {
                  return (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: "5",
                        backgroundColor: "black",
                        width: "300px",
                      }}
                    >
                      <div>{item.name}</div>
                      <img src={item.image} alt="" />
                      <div>{MyRating}</div>
                    </div>
                  );
                }}
              />
            );
          })}
        </Map>
      </div>
    </YMaps>
  );
}
