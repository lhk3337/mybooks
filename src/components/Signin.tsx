import React, { useRef } from "react";
import { Col, Row, Input, Button } from "antd";
import { LoginReqType } from "../types";
import styles from "./Signin.module.css";

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin = ({ login }: SigninProps) => {
  const emailRef = useRef<Input>(null);
  const passwordlRef = useRef<Input>(null);

  const onClickBtn = () => {
    const email = emailRef.current?.state.value;
    const password = passwordlRef.current?.state.value;
    // console.log(email, password); // 잘 나옴
    // console.log(login({ email, password }));
    login({ email, password });
  };

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img src="./bg_signin.png" alt="Signin" className={styles.signin_bg} />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>Please Note your Opinion</div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="Email" autoComplete="email" name="email" ref={emailRef} />
            </div>

            <div className={styles.password_title}>
              Password
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="password" autoComplete="current-password" ref={passwordlRef} />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={onClickBtn}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
