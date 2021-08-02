import React, { useState } from "react";
import Input from "./Input";
import useStyles from "./styles";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { Auth } from "aws-amplify";

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const classes = useStyles();
  const  {userHasAuthenticated } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(form.email, form.password);
    setIsLoading(true);

    try {
      await Auth.signIn(form.email, form.password);
      userHasAuthenticated(true);

      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            SiginIn
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;
