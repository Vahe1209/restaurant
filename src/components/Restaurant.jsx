import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import data from "../data.json";
import MyRating from "./MyRating";

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const rest = data.restaurants.find((item) => item.id === Number(id));
    setRestaurant(rest);
  }, [id]);

  return (
    <div className="currentRestaurant">
      <img src={restaurant.image} alt="" style={{ height: "60%" }} />
      <div className="about">
        <div style={{ fontSize: "30px", color: "red" }}>{restaurant.name}</div>
        <div>{restaurant.description}</div>
        <div style={{ display: "flex" }}>
          <MyRating rate={restaurant.rating} />
          <div style={{ marginLeft: "10px" }}>{restaurant.rating}</div>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none", fontSize: "30px" }}>
        Home
      </Link>
    </div>
  );
}
