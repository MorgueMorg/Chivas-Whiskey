import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { userAuthContext, useUserAuth } from "../contexts/UserAuthContext";
import { Alert, Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  const { user } = useContext(userAuthContext);
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      // console.log(err);
      setError(err.message);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ marginTop: "130px" }} className="login">
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "280px" }}
            required
            id="outlined-required"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ width: "280px" }}
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            sx={{
              display: "block",
              margin: "0 auto",
            }}
            style={{
              width: "100px",
              border: "1px solid",
              color: "white",
              marginTop: "15px",
              backgroundColor: "blue",
              marginBottom: "15px",
            }}
            type="Submit"
          >
            Sign up
          </Button>

          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default LogIn;
