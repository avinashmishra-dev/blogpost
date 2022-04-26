import React from "react";
import { useState } from "react/cjs/react.development";
import Button from "../../Button/Button";

const Comments = () => {
  const [peopleReacted, setPeopleReacted] = useState("");
  const [likes, setLikes] = useState(0);
  const [disLikes, setDislikes] = useState(0);
  const [getComments, setGetComments] = useState([]);

  const commentData = (event) => {
    setPeopleReacted(event.target.value);
    // console.log(peopleReacted);
  };

  const likeHandler = () => {
    setLikes(likes + 1);
  };

  const dislikeHandler = () => {
    setDislikes(disLikes + 1);
  };

  const commentHandler = () => {
    if (peopleReacted.trim() === "") {
      return;
    }
    setGetComments([...getComments, peopleReacted]);
    setPeopleReacted('')
  };
  const deleteHandler = (id) => {
    setGetComments(
      getComments.filter((com, comId) => {
        return id !== comId;
      })
    );
  };

  return (
    <React.Fragment>
      <input
        placeholder="Comment"
        type="text"
        value={peopleReacted}
        onChange={commentData}
      />
      <br />
      <Button
        onFetch={() => {
          commentHandler();
        }}
      >
        Send
      </Button>
      <ul>
        {getComments.map((comment, id) => (
          <li key={id}>
            {comment}-
            <Button
              id={id}
              onFetch={() => {
                deleteHandler(id);
              }}
            >
              ❌
            </Button>
            <br />
            <Button
              onFetch={() => {
                likeHandler();
              }}
            >
              👍{likes}
            </Button>
            <Button
              onFetch={() => {
                dislikeHandler();
              }}
            >
              👎{disLikes}
            </Button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Comments;
