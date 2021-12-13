import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllArticles } from "../../redux/actions";
import { AppState } from "../../types";

import ArticleCard from "../ArticleCard/ArticleCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./articlelist.scss";

const ArticleList = () => {
  //get all countries from redux state
  const articles = useSelector(
    (state: AppState) => state.articleReducer.articles
  );
  const isLoading = useSelector(
    (state: AppState) => state.articleReducer.isLoading
  );
  //initialize dispatch
  const dispatch = useDispatch();

  //dispatch fetchAllArticles when page loads
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <div className="article-list">
      {isLoading && <LinearProgress />}
      {!isLoading &&
        articles &&
        articles.map((article) => <ArticleCard {...article} />)}
    </div>
  );
};

export default ArticleList;
