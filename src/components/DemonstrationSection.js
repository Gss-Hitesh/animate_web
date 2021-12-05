import React from "react";
import styled from "styled-components";
import { SectionStyled } from "./Layout";
import GradientCard from "./GradientCard";

function DemonstrationSection() {
  return (
    <Container>
      <SectionStyled>
        <TitleContainer>
          <Title>
            <Heading>
              <h3>Live Demonstration</h3>
            </Heading>
            <h2>Live Demonstration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </Title>
        </TitleContainer>
        <GradientCardContainer>
          <GradientCard
            image="https://i.ibb.co/44XvgCr/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
            ctaButton={"Place bid"}
          />
          <GradientCard
            image="https://i.ibb.co/p1gpM4X/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
            ctaButton={"Place bid"}
          />
          <GradientCard
            image="https://i.ibb.co/qRRRGT2/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
            ctaButton={"Place bid"}
          />
          <GradientCard
            image="https://i.ibb.co/NCc0zRM/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
            ctaButton={"Place bid"}
          />
        </GradientCardContainer>
      </SectionStyled>
    </Container>
  );
}

export default DemonstrationSection;

const Container = styled.div``;
const TitleContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
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
const Title = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    padding: 1.2em 0;
    opacity: 0.5;
  }
`;
const GradientCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
