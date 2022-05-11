import React from "react";

export default function Posts(props) {
  return (
    // Creating of Post Component with the props recived from input component
    <div className="mx-5 my-4">
      <div
        className="card"
        style={{
          width: "18rem",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          fontFamily: "sans-serif",
          border: "solid 1px white",
        }}
      >
        {props.post.image && (
          <img src={props.post.image} className="card-img-top" alt="..." />
        )}
        <div className="card-body">
          <p className="card-text h4">{props.post.title}</p>
        </div>
      </div>
    </div>
  );
}
