import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie"

const SignIn = (props) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    props.removeUser()

  }, [])


  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    document.cookie = cookie.serialize("loggedIn", "true", { maxAge: 1000 * 60 });
    props.addUser(state)
    console.log(state)
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login} style={{display: "flex", flexDirection: "column", margin: "10vh"}}>
          <TextField
            style={{margin: "2vh"}}
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            style={{margin: "2vh"}}
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            style={{margin: "2vh"}}
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
