import React from "react";
import "./newscard.scss";

const NewsCard = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <>
      <div className="">
        <div id="maincard">
          <img
            src={
              !imageUrl
                ? "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="stdiv">
            <h5 className="">{title}...</h5>
            <p className="">
              {!description
                ? "Lorem Ipsum is simply dummy text of the printing and."
                : description}
              ...
            </p>
            <p className="">
              <small className="">
                by {author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <div id="nddiv">
              <button>
                <a href={newsUrl} className="">
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
