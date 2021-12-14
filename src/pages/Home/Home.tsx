import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appbar from "../../components/Appbar/Appbar";
import Pagination from "../../components/Pagination/Pagination";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { AppState } from "../../types";
import { fetchAllArticles } from "../../redux/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

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
    setPosts(articles);
  }, [dispatch]);

  //Get current articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <Appbar />

      {/* Inner contents country list/result */}
      <div className="article-list">
        {isLoading && <LinearProgress />}
        {!isLoading &&
          currentPosts &&
          currentPosts.map((article) => <ArticleCard {...article} />)}
      </div>
      {!isLoading && <Pagination paginate={paginate} />}
    </div>
  );
};

export default Home;
