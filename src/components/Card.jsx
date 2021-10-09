import data from "../data.json";

export default function Card() {
  return (
    <div className="cards">
      {data.restaurants.map((item) => {
        return (
          <div className="restaurant">
            <img src={item.image} alt="" />
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div className="rating">Rating ` {item.rating}</div>
          </div>
        );
      })}
    </div>
  );
}
