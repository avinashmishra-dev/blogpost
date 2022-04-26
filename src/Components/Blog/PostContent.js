import React, { useState } from "react";
import Button from "../Button/Button";
import Comments from "./PostComments/Comments";

const PostContent = ({ onPostSubmit, getPostData, getData }) => {
  const [postData, setPostData] = useState("");
  // const [toggleComment, setToggleComment] = useState(false);
  const [activePost, setActivePost] = useState("");

  const toggleHandler = (id) => {
    setActivePost(id);
  };

  const postHandler = (event) => {
    setPostData(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (postData.trim() === "") {
      return;
    }
    // console.log(postData);

    const post = { blogs: postData };

    onPostSubmit(post);

    setPostData("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <section>
        <h1>BlogPost</h1>
        <label htmlFor="data">Feel free to share your experiences</label>
      </section>
      <section>
        <input id="data" type="text" value={postData} onChange={postHandler} />
      </section>
      <Button
        onFetch={() => {
          getPostData();
        }}
      >
        Post
      </Button>

      {/*  */}

      <ol>
        {getData.map((data) => (
          <li key={data.id}>
            {/* {console.log(data.id)} */}
            <span> {data.blogs}</span>
            <br />
            {activePost !== data.id && (
              <Button
                onFetch={() => {
                  toggleHandler(data.id);
                }}
              >
                Comment
              </Button>
            )}
            <br />
            {activePost === data.id && <Comments />}
          </li>
        ))}
      </ol>
    </form>
  );
};

export default PostContent;
