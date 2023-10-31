import React, { FunctionComponent } from "react";
import { ContentContainer, HomeContainer } from "./styles";
import NavbarElement from "../components/Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <NavbarElement />
      <HomeContainer>
        <ContentContainer>
          <h1>
            Let's make your <span>choices</span> easier!
          </h1>
          <img className="skiller" alt="skiller" src="/assets/skiller.svg" />
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
