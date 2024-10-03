import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
// import MenuIcon from "@mui/icons-material/Menu";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const NavBar = (props) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(props)

  // }, [])


  return (
    <AppBar position="relative" style={{backgroundColor: "#3CB371"}}>
      <Toolbar>
        <IconButton color="inherit">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Buisness
        </Typography>
        <ul className="nav-list" style={{display: "flex", flexDirection: "row", listStyleType: "none"}}>
          <li className="nav-list-item" style={{padding: "2vh"}}>
            <Link to="/" style={{textDecoration: "none", color: "white"}}>Listings</Link>
          </li>
          {checkAuth() ?
          <li className="nav-list-item" style={{padding: "2vh"}}>
          <Link to="/AddNew" style={{textDecoration: "none", color: "white"}}>Add New</Link>
          </li> :
            null}

          <li
            style={{padding: "2vh"}}
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/SignIn");
            }}
            
          >
            
            <Link to="/SignIn" style={{textDecoration: "none", color: "white"}}>{checkAuth() ? "Logout" : "Login"}</Link> 
            {/* add conditional if logged in here */}
          </li>
        </ul>
      </Toolbar>
      {checkAuth() ? <div style={{backgroundColor: "grey"}}>Logged in as: {props.user.username}</div> : null}
      
    </AppBar>
  );
};

export default NavBar;
