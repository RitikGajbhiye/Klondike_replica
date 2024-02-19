import React, { useState } from "react";
import "./login.scss";
import { Form, Input } from "antd";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;

type ParamType = {
  username: string;
  password: string;
};

function Login() {
  const [params, setParams] = useState<ParamType>({
    username: "",
    password: "",
  });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login__container">
      <div className="login__box">
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Log in
        </h1>
        <Form>
          <Form.Item>
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <Input
              style={{
                height: "45px",
              }}
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={params.username}
              onChange={HandleChange}
            />
          </Form.Item>

          <Form.Item>
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <Input
              style={{
                height: "45px",
              }}
              type="password"
              id="password"
              placeholder="Passowrd"
              name="password"
              value={params.password}
              onChange={HandleChange}
            />
          </Form.Item>

          <Text
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1.5rem",
            }}
          >
            <a
              href="#"
              style={{
                textAlign: "right",
                width: "100%",
              }}
            >
              <span className="text-styled">Forgot Password or Username?</span>
            </a>
          </Text>

          <Text
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text>
              Not a Klondike Financial Member?
              <span className="text-styled"> Start Here </span>
            </Text>
          </Text>
        </Form>
      </div>
    </div>
  );
}

export default Login;
