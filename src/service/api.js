import axios from "axios";

export function getRestaurants() {
  return axios.get("http://localhost:5000/getRestaurants").then((res) => {
    return res.data;
  });
}

export function getRestaurantsById(id) {
  const restID = { restaurantId: id };
  return axios
    .post("http://localhost:5000/getRestaurantById", restID)
    .then((res) => {
      return res.data;
    });
}
