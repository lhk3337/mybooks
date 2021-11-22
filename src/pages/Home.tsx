import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../redux/modules/auth";

import { RootState } from "../types";
const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>((state) => state.auth.token);
  if (token === null) {
    return <Redirect to="/signin" />;
  }

  const click = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={click}>log out</button>
    </div>
  );
};

export default Home;
