import React, { useEffect, useState } from "react";
import axios from "axios";
//import LinearProgress from "@material-ui/core/LinearProgress";

const FetchArticle = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("url").then((response) => {
      // now fetch the text
      fetch(response.url)
        .then((response2) => response2.text())
        .then((response2) => {
          setData({
            data: response2,
          });
        });
    });
  }, [url]);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default FetchArticle;
