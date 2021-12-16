import React from "react";
import "./pagination.scss";

const Pagination = ({ paginate }) => {
  const pageNumbers = [];
  // const limit = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
