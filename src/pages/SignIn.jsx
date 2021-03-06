import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBox from "@material-ui/icons/CheckBox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '../node_modules/@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { isLoaded } from "react-redux-firebase";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { render } from "@testing-library/react";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// const theme = createTheme();

export default function SignIn() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const signInSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    firebase
      .auth()
      .signInWithEmailAndPassword(data.get("email"), data.get("password"))
      .then(function () {
        console.log("Successfully signed in!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
    navigate("/dashboard");
  };


  if (!user) {
    return (
      // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={signInSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<CheckBox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      // </ThemeProvider>
    )
  } else {
    return (navigate('/sign-out'));
  };
}


