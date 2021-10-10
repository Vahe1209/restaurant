import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

export default function Popup({ closePopup, addComments }) {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { id } = useParams();

  const handleSubmitClick = () => {
    const article = { author: name, commentText, restaurantId: id };
    axios.post("http://localhost:5000/setComment", article);
    addComments((prevState) => [...prevState, { name, commentText }]);
    closePopup();
  };

  return (
    <div className="popup">
      <input
        type="text"
        placeholder="Your Name"
        style={{ fontSize: "30px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="popupText"
      />
      <textarea
        name="txtname"
        rows="4"
        cols="50"
        maxLength="200"
        placeholder="Your Comment"
        style={{ height: "80px", fontSize: "20px" }}
        className="popupText"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <div>
        <button
          className="popupButton"
          style={{ backgroundColor: "red" }}
          onClick={(e) => closePopup()}
        >
          Cancel
        </button>
        <button
          className="popupButton"
          style={{ backgroundColor: "green" }}
          disabled={!(name && commentText)}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
