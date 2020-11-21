import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const CategCoupon = () => {
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
    return <span>{post.category == id ? `${post.title}` : ``}</span>;
  });
  let imager = post.map((post) => {
    return (
      <img
        className={classes.img}
        src={post.category == id ? `${post.image}` : ``}
        alt=""
      />
    );
  });
  let descript = post.map((post) => {
    return <span>{post.category == id ? `${post.type}` : ``}</span>;
  });
  let code = post.map((post) => {
    return <span>{post.category == id ? `${post.couponscode}` : ``}</span>;
  });
  let buttons = post.map((post) => {
    return <span>{post.category == id ? `Get Code` : ``}</span>;
  });
  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                {/* <img  alt={store} src={imager} /> */}
                {imager}
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {store}
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    {descript}
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography> */}
                </Grid>
                <Grid item>
                  {/* <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography> */}
                </Grid>
              </Grid>
              <Grid item>
                <Popup
                  trigger={
                    <a target="_blank" href={post.dealURL}>
                      <button className="glow-on-hover  button">
                        {" "}
                        {buttons}{" "}
                      </button>
                    </a>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> {store} </div>
                      <div className="content">
                        <center>{imager}</center>
                        <center>
                          <span style={{ fontSize: "20px", color: "#ea4c89" }}>
                            Visit Store
                          </span>
                        </center>
                        <br />
                        <center>{post.type}</center>
                        <center>Copy and Paste Code At Checkout</center>
                      </div>
                      <div className="actions">
                        <input
                          className="input"
                          value={code}
                          onChange={() => setCopy(value)}
                        />

                        <CopyToClipboard
                          text={value}
                          onCopy={() => setValue(value)}
                        >
                          <button
                            className="button"
                            onClick={() => setCopy(true)}
                          >
                            Copy Code
                          </button>
                        </CopyToClipboard>

                        {copy ? (
                          <span style={{ color: "red" }}>Copied.</span>
                        ) : null}
                        {/* <button
                                   className="button"
                                   onClick={() => {
                                     console.log("modal closed ");
                                     close();
                                   }}
                                 >
                                   close modal
                                 </button> */}
                      </div>
                    </div>
                  )}
                </Popup>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default CategCoupon;
