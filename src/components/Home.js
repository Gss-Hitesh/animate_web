import React from "react";
import styled from "styled-components";
import videosrc from "../video/marketing.mp4";
import Content from "./Content";
import {InnerLayout} from './Layout' ;

function Home() {
  return (
    <Container>
      <video src={videosrc} muted playsInline loop autoPlay></video>
      <CircleShade src="https://i.ibb.co/Fb0GqzM/circles.png" />
      <InnerLayout>
        <Content />
      </InnerLayout>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const CircleShade = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  right: -400px;
  top: -300px;
`;


/* 
<a href="https://ibb.co/ynYLBq1"><img src="https://i.ibb.co/Fb0GqzM/circles.png" alt="circles" border="0"></a>
 */
