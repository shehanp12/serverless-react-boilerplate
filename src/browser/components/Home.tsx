import React, { useState, useEffect } from 'react';
import { Container, Grow, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";


interface User{
    userHasAuthenticated : false
}

const Home = () => {
  const history = useHistory();
  const { userHasAuthenticated  } = useAppContext();

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
    history.push('/login');
  }

  return (
    <Grow in>
      <Container>
        <Button
          type="button"
          style={{
            width: '200px'
          }}
          variant="contained"
          color="primary"
        >
          Call The Api
        </Button>

        <Button
          type="button"
          style={{
            width: '200px'
          }}
          variant="contained"
          color="primary"
           onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>
    </Grow>
  );
};

export default Home;
