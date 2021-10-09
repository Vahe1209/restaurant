import { Link } from "react-router-dom";
import data from "../data.json";

export default function Card({ fixCenter }) {
  return (
    <div className="cards">
      {data.restaurants.map((item, idx) => {
        return (
          <div
            className="restaurant"
            onClick={() => fixCenter(item.id)}
            key={idx}
          >
            <img src={item.image} alt="" />
            <div className="about">
              <div style={{ fontSize: "30px", color: "red" }}>{item.name}</div>
              <div className="rating">Rating ` {item.rating}</div>
            </div>
            <Link to={`/restaurant/${item.id}`}>View Restaurant</Link>
          </div>
        );
      })}
    </div>
  );
}
