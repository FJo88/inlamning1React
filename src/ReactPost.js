import { useState } from "react";
import PostLiked from "./PostLiked";

let ReactPost = ({ question, answer }) => {
  const [showLike, setShowLike] = useState(false);

  return (
    <div className="content">
      <h2>{question}</h2>
      <h2>{answer}</h2>

      {!showLike ? (
        <button
          onClick={() => {
            setShowLike(!showLike);
          }}
        >
          Like Post
        </button>
      ) : (
        <PostLiked />
      )}
      {console.log(showLike)}
    </div>
  );
};

export default ReactPost;

