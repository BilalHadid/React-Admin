import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import "reactjs-popup/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "25px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "2%",
    maxWidth: 800,
    border: "1px",
    borderColor: "#EFEFEF",
    borderStyle: "solid",
    boxShadow: "gray",
    marginTop: "25px",
  },
  image: {
    width: 128,
    height: 128,
    border: "1px",
    borderColor: "black",
    borderStyle: "solid",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const StoreCoupons = () => {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [value, setValue] = useState("");
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/CouponDeal")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let { id } = useParams();
  console.log(id);
  let store = post.map((post) => {
    return (
      <div>
        <h2>
          <span>{post.store == id ? `${post.title}` : ``}</span>
        </h2>
      </div>
    );
  });
  let imager = post.map((post) => {
    return (
      <div>
        <img
          className={classes.img}
          src={post.store == id ? `${post.image}` : ``}
          alt=""
        />
      </div>
    );
  });
  let descript = post.map((post) => {
    return (
      <div>
        <span>{post.store == id ? `${post.type}` : ``}</span>
      </div>
    );
  });
  let code = post.map((post) => {
    return (
      <div>
        <span>{post.store == id ? `${post.couponscode}` : ``}</span>
      </div>
    );
  });
  let buttons = post.map((post) => {
    return (
      <div>
        <span>{post.store == id ? `Get Code` : ``}</span>
      </div>
    );
  });
  return (
    <div>
      <div className={classes.root}>
        {store}
        {imager}
        {descript}
        {code}
        {buttons}
      </div>
    </div>
  );
};

export default StoreCoupons;
