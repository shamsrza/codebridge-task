import React from "react";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
// import { Link } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./articlecard.scss";
import { capitalize } from "lodash";

const ArticleCard = () => {
  return (
    <div className="article-card">
      <div className="article-card__wrapper">
        {/* <img
          src="https://christmasworld.messefrankfurt.com/content/dam/messefrankfurt-redaktion/christmasworld/2022/images/general/christmasworld-keyvisual-2022.jpg"
          alt="article image"
        />
        <div className="article-card__content">
          <div className="article-card__content__publish-date">
            <CalendarTodayOutlinedIcon
              style={{ color: "#363636", fontSize: 14 }}
              className="calendar-icon"
            />
            <h3>June 29th, 2021</h3>
          </div>
          <div className="article-card__content__article-title">
            <h1>The 2020 World's Most Valuable Brands</h1>
          </div>
          <div className="article-card__content__article-description">
            <p>
              Non sed molestie tortor massa vitae in mattis. Eget vel consequat
              hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
              pharetra...
            </p>
          </div>
          <Link
            href="#"
            underline="none"
            className="article-card__content__read-more-button"
          >
            Read more
            <ArrowForwardOutlinedIcon className="arrow-icon" />
          </Link>
        </div> */}

        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="530"
            image="https://christmasworld.messefrankfurt.com/content/dam/messefrankfurt-redaktion/christmasworld/2022/images/general/christmasworld-keyvisual-2022.jpg"
            alt="article image"
            style={{ height: 217 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ display: "flex", flexDirection: "row", padding: 0 }}
            >
              <CalendarTodayOutlinedIcon
                style={{
                  color: "#363636",
                  fontSize: 14,
                  marginRight: 5,
                  marginTop: 3,
                }}
                className="calendar-icon"
              />
              <h3>June 29th, 2021</h3>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ margin: "20px 0" }}
            >
              The 2020 World's Most Valuable Brands
            </Typography>
            <Typography variant="body2">
              Non sed molestie tortor massa vitae in mattis. Eget vel consequat
              hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
              pharetra...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ textTransform: "capitalize" }}>
              Read more
              <ArrowForwardOutlinedIcon style={{ fontSize: 17 }} />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ArticleCard;
