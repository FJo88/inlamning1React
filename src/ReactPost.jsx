import { useState } from "react";
import PostLiked from "./PostLiked";

let ReactPost = ({ question, answer }) => {
  const [showLike, setShowLike] = useState(false);

  return (
    <div className="content">
      <h1>{question}</h1>
      <h2>{answer}</h2>
      {/* butt :D */}
      {!showLike ? (
        
        <button className="butt"
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

