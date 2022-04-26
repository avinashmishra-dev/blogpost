import React, { useCallback, useEffect, useState } from "react";
import PostContent from "./PostContent";

const Post = () => {
  const [getData, setGetData] = useState([]);

  const getPostData = useCallback(async () => {
    const getResponse = await fetch(
      "https://blogpost-20840-default-rtdb.firebaseio.com/blogpost.json"
    );
    const getResponseData = await getResponse.json();
    // console.log(getResponseData);
    let loadedPost = [];
    for (const key in getResponseData) {
      loadedPost.push({ id: key, blogs: getResponseData[key].blogs });
    }
    setGetData(loadedPost);
  }, []);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  async function onPostSubmit(post) {
    const postResponse = await fetch(
      "https://blogpost-20840-default-rtdb.firebaseio.com/blogpost.json",
      {
        method: "POST",
        body: JSON.stringify(post),
      }
    );
    const responseData = await postResponse.json();
    console.log(responseData);
  }

  return (
    <React.Fragment>
      <PostContent
        onPostSubmit={onPostSubmit}
        getPostData={getPostData}
        getData={getData}
      />
    </React.Fragment>
  );
};

export default Post;
