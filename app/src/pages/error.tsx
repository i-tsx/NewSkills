import React, { FunctionComponent } from "react";
import { Button, ErrorContainer } from "./styles";
import { Link } from "react-router-dom";
import NavbarElement from "../components/Navbar";

interface ErrorProps {}

const Error: FunctionComponent<ErrorProps> = () => {
  return (
    <>
      <NavbarElement />
      <ErrorContainer>
        <h4>404</h4>
        <p>This page is not available</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </ErrorContainer>
    </>
  );
};

export default Error;
