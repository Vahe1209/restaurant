import { useState } from "react";
import Card from "../components/Card";
import RMap from "../components/Map";

export default function HomePage() {
  const [centerId, setCenterId] = useState("");
  const fixCenter = (id) => {
    setCenterId(id);
  };
  return (
    <div className="home">
      <Card fixCenter={fixCenter} />
      <RMap centerId={centerId} />
    </div>
  );
}
