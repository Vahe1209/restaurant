import { Link } from "react-router-dom";
import data from "../data.json";

export default function Card() {
  return (
    <div className="cards">
      {data.restaurants.map((item, key) => {
        return (
          <Link to={`/restaurant/${item.id}`} key={key}>
            <div className="restaurant">
              <img src={item.image} alt="" />
              <div className="about">
                <div style={{ fontSize: "30px", color: "red" }}>
                  {item.name}
                </div>
                <div className="rating">Rating ` {item.rating}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
