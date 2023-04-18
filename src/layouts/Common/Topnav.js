import React from "react";
import { AppBar, Toolbar , Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../Common/Logo.png"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#F3F5F3",
    boxShadow: "none",
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  logo: {
    width: "120px",
    height: "40px",
  },
}));

export default function TopNavigation() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="Logo" className={classes.logo} />
        </Link>
        <div style={{ marginLeft: "auto" }}>
          <Button component={Link} to="/" className={classes.button}>
            Home
          </Button>
          <Button component={Link} to="/farmers" className={classes.button}>
            Farmers
          </Button>
          <Button component={Link} to="/products" className={classes.button}>
            All Products
          </Button>
          <Button component={Link} to="/contact" className={classes.button}>
            Contact Us
          </Button>
          <IconButton component={Link} to="/favorites" className={classes.button}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton component={Link} to="/profile" className={classes.button}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
