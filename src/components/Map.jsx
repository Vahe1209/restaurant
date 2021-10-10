import { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
// import MyRating from "./MyRating";

export default function RMap({ centerId, data }) {
  const [centerPosition, setCenterPosition] = useState([
    40.1776121, 44.5125849,
  ]);
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    const clickedData =
      data && data.restaurantList.find((item) => item._id === centerId);
    if (clickedData) {
      setCenterPosition([
        clickedData.geometry.latitude,
        clickedData.geometry.longitude,
      ]);
    }
  }, [centerId, data]);

  return (
    <YMaps>
      <div style={{ position: "fixed", right: "20px" }}>
        <Map
          state={{ center: centerPosition, zoom: 15 }}
          height="100vh"
          width="700px"
        >
          {data &&
            data.restaurantList.map((item, idx) => {
              return (
                <Placemark
                  geometry={[item.geometry.latitude, item.geometry.longitude]}
                  key={idx}
                  onClick={(e) => setIsHover(!isHover)}
                />
              );
            })}
        </Map>
      </div>
    </YMaps>
  );
}
// {
//   isHover && (
//     <div
//       style={{
//         position: "relative",
//         zIndex: "5",
//         backgroundColor: "black",
//         width: "300px",
//       }}
//     >
//       <div>{item.name}</div>
//       <img src={item.image} alt="" />
//       <div>{MyRating}</div>
//     </div>
//   );
// }
