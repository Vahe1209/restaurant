import { useState } from "react";

export default function Popup({ closePopup, setComment }) {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

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
          disabled={!name && !commentText}
          onClick={(e) => {
            setComment((prevState) => [
              ...prevState,
              {
                name,
                commentText,
              },
            ]);
            closePopup();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
