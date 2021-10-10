/* eslint-disable react-hooks/exhaustive-deps*/
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentsWall from "../components/CommentsWall";
import Restaurant from "../components/Restaurant";
import { getRestaurantsById } from "../service/api";

export default function RestaurantPage() {
  const { id } = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    getRestaurantsById(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="restaurantPage">
      {data && <Restaurant restaurant={data} />}
      {data && <CommentsWall data={data} />}
    </div>
  );
}
