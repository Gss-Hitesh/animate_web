import React from "react";
import styled from "styled-components";
import { SectionStyled } from "./Layout";

function ContactSection() {
  return (
    <Container>
      <SectionStyled>
        <ContactInfo>
          <h3 className="contact-title">Contact Us</h3>
          <p>30 Your Street, Your Country</p>
          <p>+99 9999 9999</p>
          <p>youremail@gmail.com</p>
        </ContactInfo>
        <BgImage>
          <img src="https://i.ibb.co/FnwmwnB/image.png" alt="" />
        </BgImage>
      </SectionStyled>
    </Container>
  );
}
export default ContactSection;
const Container = styled.div`
  background-color: #020c31;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  position: relative;
  z-index: 1;
  p {
    opacity: 0.5;
  }
`;
const ContactInfo = styled.div`
  .contact-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 2px;
    background-color: #eb3fa9;
}
`;
const BgImage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  img {
    width: 80%;
    opacity: 0.08;
  }
`;

/* <a href="https://ibb.co/x3jXj3M"><img src="https://i.ibb.co/FnwmwnB/image.png" alt="image" border="0"></a> */
