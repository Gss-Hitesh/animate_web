import React from "react";
import styled from "styled-components";
import { SectionStyled } from "./Layout";
import GradientCard from "./GradientCard";

function GradientCardsSection() {
  return (
    <Container>
      <SectionStyled>
        <TitleContainer>
          <Title>
            <Heading>
              <h3>Discover Upcoming Items</h3>
            </Heading>
            <h2>New Upcoming Items</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </Title>
        </TitleContainer>
        <GradientCardContainer>
          <GradientCard
            image="https://i.ibb.co/DCnd65B/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/NCc0zRM/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/p1gpM4X/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/44XvgCr/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/HTns4WV/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/qRRRGT2/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/DCnd65B/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image="https://i.ibb.co/HTns4WV/image.png"
            avatar="https://i.ibb.co/6BkzMSc/image.png"
            name={"@Taklya Babu"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
        </GradientCardContainer>
        <BtnContainer>
          <Btn>View More</Btn>
        </BtnContainer>
      </SectionStyled>
    </Container>
  );
}

export default GradientCardsSection;

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
const BtnContainer = styled.div`
  padding-top: 3rem;
  text-align: center;
`;
const Btn = styled.a`
  text-transform: uppercase;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:last-child {
    margin-left: 1.5rem;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
    background: linear-gradient(120deg, #eb3fa9, #395ff6);
  }
`;
/* 

/* 
//avator
  <a href="https://imgbb.com/"><img src= alt="image" border="0"></a>
//person
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>
//person2
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>

//person3
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>

//compute
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>

//bitcoin2
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>

//bitcoin
<a href="https://imgbb.com/"><img src= alt="image" border="0"></a>
*/
