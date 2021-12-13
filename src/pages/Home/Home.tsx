import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Appbar from "../../components/Appbar/Appbar";
import ArticleList from "../../components/ArticleList/ArticleList";

import { fetchAllArticles } from "../../redux/actions";

import "./home.scss";

const Home = () => {
  //initialize dispatch
  const dispatch = useDispatch();

  //dispatch fetchAllArticles when page loads
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <div className="home">
      <Appbar />
      <ArticleList />
    </div>
  );
};

export default Home;
