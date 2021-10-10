import { Link } from "react-router-dom";

export default function Card({ fixCenter, data }) {
  return (
    <div className="cards">
      {data &&
        data.restaurantList.map((item, idx) => {
          return (
            <div
              className="restaurant"
              onClick={() => fixCenter(item._id)}
              key={idx}
            >
              <img src={item.image} alt="" />
              <div className="about">
                <div style={{ fontSize: "30px", color: "red" }}>
                  {item.name}
                </div>
                <div className="rating">Rating ` {item.rating}</div>
              </div>
              <Link to={`/restaurant/${item._id}`}>View Restaurant</Link>
            </div>
          );
        })}
    </div>
  );
}
