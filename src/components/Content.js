import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

function Content() {
  return (
    <Container>
      <NavBar />
      <InnerContainer>
        <LeftPart>
          <Heading>
            <h3 className="HorizontalLine">
              All Digital Currencies in One Place
            </h3>
          </Heading>
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect , Buy
            and Sell <span className="GradientText">Awesome NFTs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id
            unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
            Cumque obcaecati sint officiis quis laboriosam vitae, error
            molestiae temporibus voluptatum consectetur, quibusdam magni,
            delectus a autem soluta optio laborum!
          </p>
          <BtnContainer>
            <Btn>Discover More</Btn>
            <Btn>Get Help</Btn>
          </BtnContainer>
        </LeftPart>
        <RightPart>
          <RightPartImg src="https://www.linkpicture.com/q/bchain.png" />
        </RightPart>
      </InnerContainer>
    </Container>
  );
}

export default Content;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
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

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  width: 100%;
`;

const LeftPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding: 1.8rem 0;
  }
`;

const RightPart = styled.div``;

const BtnContainer = styled.div`
  margin-top: 3rem;
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

const RightPartImg = styled.img`
  position: absolute;
  right: -11%;
  bottom: -1%;
  width: 60%;
`;

/* 
<a href='https://www.linkpicture.com/view.php?img=LPic61a09389ec1501162475285'><img src='https://www.linkpicture.com/q/bchain.png' type='image'></a>
*/
