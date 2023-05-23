import React, { useState, useEffect, useCallback } from "react";
import NewsItem from "../components/newItem/NewsCard";
import Spinner from "../components/spinner/Spinner";
import "./news.scss";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = useCallback(async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc769721dc0546fbb3ade34380a182fa&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }, [props.category, props.country, page, props.pagesize]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / props.pagesize)) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, [props.category, updateNews]);

  return (
    <>
      <h2 id="heading">
        NewsMonkey - Top Headlines on {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />}
      <div className="">
        <div id="cards">
          {articles &&
            articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : ""}
                  description={
                    element.description ? element.description.slice(0, 40) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={
                    element.author ? element.author.slice(0, 10) : "unknown"
                  }
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>
        <div className="btnsss">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-info"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalResults / props.pagesize)}
            type="button"
            className="btn btn-info"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: "10",
  category: "general",
  totalResults: 0,
};

export default News;
