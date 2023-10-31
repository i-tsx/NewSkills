import React, { FunctionComponent, useEffect } from "react";
import NavbarElement from "../components/Navbar";
import {
  AuthenticateContainer,
  FormContainer,
  Input,
  Label,
  SubmitButton,
  Title,
  Form,
} from "./styles";
import { useDataContext } from "../contexts/data";
import { useNavigate } from "react-router-dom";

interface AuthorizationProps {}

const Authorization: FunctionComponent<AuthorizationProps> = () => {
  const { data } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.user?.email) return navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavbarElement />
      <AuthenticateContainer>
        <FormContainer>
          <Form method="POST" action="http://192.168.0.195/auth/login">
            <Title>Login From</Title>
            <figure>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </figure>
            <figure>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </figure>
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        </FormContainer>
      </AuthenticateContainer>
    </>
  );
};

export default Authorization;
