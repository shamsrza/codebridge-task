import React from "react";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { format } from "date-fns";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Highlighter from "react-highlight-words";
// import Home from "../../pages/Home/Home";

import "./articlecard.scss";

type ArticleCardProps = {
  id: string;
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
  posts: [];
  onClick: Function;
  disabled: boolean;
};

const ArticleCard = ({
  id,
  imageUrl,
  publishedAt,
  title,
  summary,
}: ArticleCardProps) => {
  //formating date
  const fdate = format(new Date(publishedAt), "MMMM do,  yyyy");

  return (
    <div className="article-card">
      <div className="article-card__wrapper">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="530"
            image={imageUrl}
            alt={title}
            className="article-card__content"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <h3>
                <CalendarTodayOutlinedIcon
                  style={{
                    color: "#363636",
                    fontSize: 14,
                    marginRight: 5,
                    marginTop: 3,
                  }}
                  className="calendar-icon"
                />
                {fdate}
              </h3>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title"
            >
              {title}
            </Typography>
            <Typography variant="body2" className="summary">
              {summary}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={`/article/${title}`}>
              <Button size="small" style={{ textTransform: "capitalize" }}>
                Read more
                <ArrowForwardOutlinedIcon className="arrow-icon" />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ArticleCard;
