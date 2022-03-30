import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Witamy!</h1>
      <Button onClick={authCtx.onLogout}>Wyloguj się</Button>
    </Card>
  );
};

export default Home;
