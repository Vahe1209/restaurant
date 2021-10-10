import { Link } from "react-router-dom";
import MyRating from "./MyRating";

export default function Restaurant({ restaurant }) {
  return (
    <div className="currentRestaurant">
      <img
        src={restaurant.restaurantWithComments.image}
        alt=""
        style={{ height: "60%" }}
      />
      <div className="about">
        <div style={{ fontSize: "30px", color: "red" }}>
          {restaurant.restaurantWithComments.name}
        </div>
        <div>{restaurant.restaurantWithComments.description}</div>
        <div style={{ display: "flex" }}>
          <MyRating rate={restaurant.restaurantWithComments.rating} />
          <div style={{ marginLeft: "10px" }}>
            {restaurant.restaurantWithComments.rating}
          </div>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none", fontSize: "30px" }}>
        Home
      </Link>
    </div>
  );
}
