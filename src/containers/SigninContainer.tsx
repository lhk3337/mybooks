import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSagaStart } from "../redux/modules/auth";

const SigninContainer = () => {
  const dispatch = useDispatch();
  const login = useCallback(
    (reqData) => {
      dispatch(loginSagaStart(reqData));
      // console.log(dispatch); //reqData 잘 들어옴
      // console.log(dispatch(loginSagaStart(reqData))); //잘 나옴
    },
    [dispatch]
  );
  // console.log(login);
  return <Signin login={login} />;
};

export default SigninContainer;
