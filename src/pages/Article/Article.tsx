import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import { fetchAllArticles } from "../../redux/actions";
import { AppState } from "../../types";
import FetchArticle from "./FetchArticle";
import "./article.scss";

const Article = () => {
  const title = useParams() as any;
  console.log(title);
  const history = useHistory();
  const dispatch = useDispatch();

  const articles = useSelector(
    (state: AppState) => state.articleReducer.articles
  );
  const isLoading = useSelector(
    (state: AppState) => state.articleReducer.isLoading
  );

  //dispatch fetchAllArticles when page loads
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);
  console.log(articles);

  return (
    <div className="article-page">
      {isLoading && <LinearProgress />}
      {!isLoading &&
        articles
          .filter((article) => article.title === title.name)
          .map((filteredArticle) => (
            <div className="article-page__details">
              <img
                src={filteredArticle.imageUrl}
                alt={filteredArticle.title}
                className="article-page__image cover"
              />
              <div className="article-page__content">
                <div className="article-page__title">
                  <h1>{filteredArticle.title}</h1>
                </div>
                <div className="article-page__text">{filteredArticle.url}</div>
                <FetchArticle url={filteredArticle.url} />
              </div>
            </div>
          ))}
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
