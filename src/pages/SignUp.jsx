import { Alert, Button, Container } from "@mui/material";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth, userAuthContext } from "../contexts/UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");    
    } catch (err) {
      setError(err.message);
    }
  };
  const { user } = useContext(userAuthContext);
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="signUp-page">
      <Container sx={{ marginTop: "120px", width: "400px" }}>
        <Box
          sx={{
            display: "block",
          }}
        >
          {error && <Alert severity="error">{error}</Alert>}

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
            <h2
              className="mb-3"
              style={{
                width: "280px",
                textAlign: "flex-start",
                marginBottom: "10px",
                color: "gray",
              }}
            >
              Регистрация
            </h2>

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
                color: "grey",
                marginTop: "15px",
              }}
              type="Submit"
            >
              Sign up
            </Button>
            <div
              style={{
                marginTop: "10px",
                display: "block",

                width: "280px",
              }}
            >
              {/* Already have an account? <Link to="/login">Log In</Link> */}
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
