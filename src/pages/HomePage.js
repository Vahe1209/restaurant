import { useEffect, useState } from "react";
import Card from "../components/Card";
import RMap from "../components/Map";
import { getRestaurants } from "../service/api";

export default function HomePage() {
  const [centerId, setCenterId] = useState("");
  const [data, setData] = useState(false);
  useEffect(() => {
    getRestaurants().then((res) => {
      setData(res);
    });
  }, []);

  const fixCenter = (id) => {
    setCenterId(id);
  };
  return (
    <div className="home">
      <Card fixCenter={fixCenter} data={data} />
      <RMap centerId={centerId} data={data} />
    </div>
  );
}
