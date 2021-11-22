import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../types";
import SigninContainer from "../containers/SigninContainer";
const Signin = () => {
  const token = useSelector<RootState, string | null>((state) => state.auth.token);
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default Signin;
