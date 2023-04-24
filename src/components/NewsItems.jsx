import React from "react";

export default function NewsItems({
  source,
  title,
  description,
  url,
  urlToImage,
}) {
  return (
    <div>
      <div className="card">
        <img
          src={
            !urlToImage
              ? "https://images.uncyclomedia.co/uncyclopedia/en/thumb/0/0e/No_image.PNG/300px-No_image.PNG"
              : urlToImage
          }
          className="card-img-top"
          alt={title}
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} ...</p>
          <a href={url} target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
