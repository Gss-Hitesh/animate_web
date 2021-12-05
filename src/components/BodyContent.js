import React from "react";
import styled from "styled-components";
import faker from "./faker";
import { InnerLayout } from "./Layout";
import SellerCard from "./SellerCard";
import Faker from "./faker";
import BlogsSection from "./BlogsSection";
import GradientCardsSection from "./GradientCardsSection";
import DemonstrationSection from "./DemonstrationSection";
import ContactSection from "./ContactSection";

function BodyContent() {
  return (
    <Container>
      <InnerLayout>
        <Title>
          <Heading>
            <h3>All Entrepreneurs</h3>
          </Heading>
          <h2>Top Sellers This Month</h2>
        </Title>
        <SellerCardContainer>
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </SellerCardContainer>
        <BlogsSection />
        <GradientCardsSection />
        <DemonstrationSection />
      </InnerLayout>
      <ContactSection />
      <Footer>
        <p>
          Copyright ©YourName. All Rights Reserved.
          <br />
          It is Only for Educational Purpose.
          <br />
          All credit goes respective owner.
        </p>
      </Footer>
    </Container>
  );
}

export default BodyContent;

const Container = styled.div``;
const Title = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
`;

const Heading = styled.div`
  h3 {
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

const SellerCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 2rem 0;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #020a27;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  p {
    opacity: 0.7;
    text-align: center;
  }
`;

/* 
 
*/
