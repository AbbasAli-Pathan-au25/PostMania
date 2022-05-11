import React, { useState } from "react";
import Posts from "./Posts";
const axios = require("axios").default;

export default function Input() {
  const [post, setPost] = useState([]); // Creating state to set the Post data

  const [postData, setpostData] = useState({
    // Creating state to set values while using events
    title: "",
    url: "",
    image: "",
  });
  const [search, setSearch] = useState(""); // Creating state to set the searched GIF

  const postSet = async (e) => {
    // setting of Posts
    e.preventDefault();

    setPost(post.concat(postData));

    setPost((state) => {
      return state;
    });
  };

  const onChange = (e) => {
    // to hold the values entered
    setpostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const onSearch = async (e) => {
    // Fecthing of api with search query param and then adding the image url
    e.preventDefault();
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=hPNflSlOkI27tUPCakP3j1WxfD8KXpJy&limit=1&q=${postData.url}`
    );
    setSearch(response.data.data[0].images.original.url);

    await setpostData({
      ...postData,
      image: response.data.data[0].images.original.url,
    });
    setpostData((state) => {
      return state;
    });
  };

  return (
    <>
      <div className="my-5">
        <form onSubmit={postSet}>
          <div className="mb-3 container">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label h3 text-light"
              style={{ fontStyle: "italic" }}
            >
              Create Posts
            </label>
            <input //Post Title input tag
              type="text"
              className="form-control"
              name="title"
              value={postData.title}
              id="text"
              aria-describedby="text"
              placeholder="Enter Text"
              onChange={onChange}
            />
          </div>
          <div className="d-flex container">
            <input //query param input tag
              className="form-control me-2"
              type="text"
              placeholder="Search for gifs"
              aria-label="Search"
              name="url"
              value={postData.url}
              onChange={onChange}
              id="text"
            />
            <button // To search the entered gif name
              className="btn btn-outline-primary"
              type="submit"
              onClick={onSearch}
            >
              Search
            </button>
          </div>
          <div className="container my-2">
            {/*Displaying the searched gif*/}
            <img src={search} alt="" srcSet="" />
          </div>

          <button // Submitting the form
            type="submit"
            className="btn btn-primary my-5"
            style={{ marginLeft: "7.8%" }}
          >
            Submit
          </button>
        </form>
      </div>

      {post && // Passing the post data as props to the Post component
        post.map((data) => {
          return <Posts post={data}></Posts>;
        })}
    </>
  );
}
