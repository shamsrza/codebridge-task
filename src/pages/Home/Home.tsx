import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import ArticleList from "../../components/ArticleList/ArticleList";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Appbar component */}
      <Appbar />
      <ArticleList />
    </div>
  );
};

export default Home;
