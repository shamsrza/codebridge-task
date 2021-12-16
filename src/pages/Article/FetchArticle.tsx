import React, { useEffect, useState } from "react";
import axios from "axios";
//import LinearProgress from "@material-ui/core/LinearProgress";

const FetchArticle = (url: any) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url).then((data) => {
        setContents(data);
      });
      console.log("fetching");
    };
    console.log("after_fetching");
  }, []);

  return (
    <div>
      <p>text</p>
    </div>
  );
};

export default FetchArticle;
