import React from "react";
import styled from "styled-components";

export const Header = ({ title, backgroundColor }) => {
  return (
    <HeaderContainer style={{ backgroundColor: backgroundColor }}>
      <Circle></Circle>
      <Container>
        <Navbar>
          <span>about</span>
          <span>trips</span>
          <span>pricing</span>
          <span>contact</span>
        </Navbar>
      </Container>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 40vh;
  color: #fcfffe;
  overflow: hidden;

  @media (min-width: 668px) and (max-width: 1024px) {
    height: 50vh;
  }

  @media only screen and (min-width: 1025px) {
    height: 60vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: flex-end;
  color: #fbf6d4;
  column-gap: 10px;
  padding: 10px;
  font-size: 10px;

  @media (min-width: 668px) and (max-width: 1024px) {
    column-gap: 40px;
    padding: 20px;
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) {
    column-gap: 40px;
    padding: 20px;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  width: 60%;
  margin: 0 0 0 40px;
  z-index: 2;
  position: absolute;
  top: 100px;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 40px;
    top: 100px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 60px;
    top: 70px;
  }
`;

const Circle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #dc8722;
  z-index: 1;
  position: absolute;
  top: -10px;
  margin-left: 50px;

  @media (min-width: 668px) and (max-width: 1024px) {
    height: 250px;
    width: 250px;
    top: -20px;
  }

  @media only screen and (min-width: 1025px) {
    height: 300px;
    width: 300px;
    top: -30px;
  }
`;
