import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.progress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page},&pagesize=${props.pageSize}`;
    setLoading(true)
    let tempData = await fetch(url);
    props.progress(50);
    let data = await tempData.json();
    props.progress(70);
    setNews(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.progress(100);
  };
 
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    let tempData = await fetch(url);
    let data = await tempData.json();
    setNews(news.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  const capital = (x) => {
    return x.charAt(0).toUpperCase() + x.slice(1);
  };

  return (
    <>
    <div className="container">
      <h3
        className="text-center text-light bg-primary p-2"
        style={{ marginTop: "70px" }}
      >
        Go-New Top {capital(props.category)} Head Lines
      </h3>
      </div>
      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length !== totalResults}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="container">
          <div className="row">
            {news.map((item, key) => {
              return (
                <div className="col-4 my-2"  key={key}>
                  <NewsCard
                    title={item.title}
                    img={item.urlToImage}
                    description={item.description}
                    url={item.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
