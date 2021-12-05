import React from "react";
import styled from "styled-components";
import { SectionStyled } from "./Layout";
import blogs from "../Blogs";

function BlogsSection() {
  return (
    <Container>
      <SectionStyled>
        <TitleContainer>
          <Title>
            <Heading>
              <h3>Our Top Blogs</h3>
            </Heading>
            <h2>Popular Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </Title>
        </TitleContainer>
        <Blogs>
          {blogs.map((blog) => {
            return (
              <Blog key={blog.id}>
                <ImageContainer>
                  <Image src={blog.image} alt="" />
                </ImageContainer>
                <h6>{blog.title}</h6>
                <User>
                  <p>Creator : </p>
                  <p>{blog.name}</p>
                </User>
              </Blog>
            );
          })}
        </Blogs>
      </SectionStyled>
    </Container>
  );
}

export default BlogsSection;

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

const Blogs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding-top: 2rem;
`;

const Blog = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  h6 {
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  transition: all 0.4s ease-in-out;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-in-out;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  filter: grayscale(50%);
  &:hover {
    transform: scale(1.2) rotate(10deg);
    filter: grayscale(0);
  }
`;

const User = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  p:first-child {
    padding-right: 0.4rem;
    opacity: 0.5;
  }
`;
