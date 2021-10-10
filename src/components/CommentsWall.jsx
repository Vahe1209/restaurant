import { useEffect, useState } from "react";
import Popup from "./Popup";

export default function CommentsWall({ data }) {
  const [commentsPopup, setCommentsPopup] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data.restaurantWithComments.comments);
  }, []);

  const showPopup = () => {
    setCommentsPopup(true);
  };

  const closePopup = () => {
    setCommentsPopup(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <button className="createComment" onClick={(e) => showPopup(e)}>
        Create Comment
      </button>
      {commentsPopup ? (
        <Popup closePopup={closePopup} addComments={setComments} />
      ) : (
        ""
      )}
      <div className="comments">
        {data &&
          comments.map((item, idx) => {
            return (
              <div className="comment" key={idx}>
                <div style={{ fontSize: "30px", color: "blue" }}>
                  {item.name}
                </div>
                <div>{item.commentText}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
