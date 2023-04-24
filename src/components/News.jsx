import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import LoadingBar from "./LoadingBar";
export default function News({ pageSize, page, setPage, category }) {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "3e0d1e5e41064d31a42539a1e28ab3e1";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetch(url);
      const response = await data.json();
      setState(response.articles);
      setIsLoading(false);
    };
    fetchData();
    setTimeout(() => {
      setIsLoading(true);
    }, 300);
  }, [page, url]);

  //Move Up
  const moveUp = () => {
    setPage(page + 1);
  };
  //Move Back
  const moveBack = () => {
    setPage(page - 1);
  };
  //function ends here

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h1 className="my-2">
          News -
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h1>
        {isLoading ? (
          <LoadingBar />
        ) : (
          <section>
            <div className="row">
              {state.map((item) => {
                const { source, title, description, url, urlToImage } = item;
                return (
                  <div className="col-lg-4 my-2" key={url}>
                    <NewsItems
                      source={source}
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center gap-3 my-4">
              <button
                disabled={page <= 1}
                className="btn btn-dark"
                onClick={moveBack}
              >
                &larr;
              </button>
              <p>{page >= 4 ? "End of the list" : `page: ${page}`}</p>
              <button
                disabled={page >= 4}
                className="btn btn-dark"
                onClick={moveUp}
              >
                &rarr;
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
