import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);

  const fetchArticles = async (pageNumber) => {
    try { // Added try-catch block for error handling
      props.setProgress(0)
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize}`;
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ad7dcf07951460aade8ce326fc73692&page=${pageNumber}&pageSize=${props.pageSize}`;
      props.setProgress(5)
      let data = await fetch(url);
      props.setProgress(20)
      let parsedData = await data.json();
      props.setProgress(40)
      if (parsedData.articles) { // Checked if parsedData.articles is defined
        setTotalResults(parsedData.totalResults);
        props.setProgress(70)
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        props.setProgress(100)
      }
    } catch (error) {
      console.error("Error fetching articles:", error); // Added error logging
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchArticles(page);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    setLoading(true);
    setArticles([]); // Reset articles when category or country changes
    setPage(1); // Reset page to 1 when category or country changes
    fetchArticles(1, true); // Fetch articles for the first page
    // eslint-disable-next-line
  }, [props.category, props.country]);

  const handlePreviousClick = () => {
    setLoading(true);
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setLoading(true);
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
      console.log("Results completed");
    } else setPage(page + 1);
  };

  const fetchMoreData = async() => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
        {/* {loading && <Spiner></Spiner>} */}
        <div className="heading" style={{marginTop:'68px'}}>
          <h2 className="text-center my-3">NewsMonkey - {props.headlineName}</h2>
          </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spiner></Spiner>}
        >
          <div className="container" >

          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                    ></NewsItem>
                </div>
              );
            })}
          </div>
            </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-success"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / 30)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
}
