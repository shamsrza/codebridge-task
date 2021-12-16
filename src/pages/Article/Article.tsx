import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import { fetchAllArticles } from "../../redux/actions";
import { AppState, ArticleState } from "../../types";
import "./article.scss";

const Article = () => {
  const { title } = useParams() as any;
  const history = useHistory();
  const dispatch = useDispatch();

  // const [currentArticle, setCurrentArticle] = useState(
  //   articles.filter((item) => item.title === title)[0]
  // );
  const [currentArticle, setCurrentArticle] = useState([]);
  const articles = useSelector(
    (state: AppState) => state.articleReducer.articles
  );
  const isLoading = useSelector(
    (state: AppState) => state.articleReducer.isLoading
  );

  //dispatch fetchAllArticles when page loads
  useEffect(() => {
    dispatch(fetchAllArticles());
    console.log(currentArticle);
  }, [dispatch]);

  //update currentArticle when we have article data
  useEffect(() => {
    setCurrentArticle(articles.filter((article) => article.title === title));
    console.log(currentArticle);
  }, [articles, title]);

  return (
    <div className="article-page">
      {isLoading && <LinearProgress />}
      {!isLoading && currentArticle && (
        <div className="article-page__details">
          <img
            src={currentArticle.imageUrl}
            alt="image"
            className="article-page__image"
          />
          <div className="article-page__content">
            <div className="article-page__title">
              <h1 key={currentArticle.title}>{currentArticle.title}</h1>
            </div>
            <div className="article-page__text">
              <p key={currentArticle.summary}>{currentArticle.summary}</p>
            </div>
          </div>
        </div>
      )}
      <div className="article-page__go-back">
        <Button
          size="small"
          style={{ textTransform: "none" }}
          onClick={() => history.push("/")}
        >
          <ArrowBackOutlinedIcon className="arrow-icon" /> Back to homepage
        </Button>
      </div>
    </div>
  );
};

export default Article;
