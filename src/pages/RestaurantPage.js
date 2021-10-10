import CommentsWall from "../components/CommentsWall";
import Restaurant from "../components/Restaurant";

export default function RestaurantPage() {
  return (
    <div className="restaurantPage">
      <Restaurant />
      <CommentsWall />
    </div>
  );
}
