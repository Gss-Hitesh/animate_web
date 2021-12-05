import React from "react";
import styled from "styled-components";

function GradientCard({ image, avatar, name, price, title, ctaButton }) {
  return (
    <Container>
      <Card>
        <InnerContent>
          <ImageContainer>
            <Image src={image} />
            <Name>
              <AvatarImg src={avatar} />
              <p>{name}</p>
            </Name>
          </ImageContainer>
          <CardContent>
            <h6 className="card-title">{title}</h6>
            <p>
              Price <span className="price">{price}</span> &nbsp; &nbsp;{" "}
              <span className="l-text">1 of 15</span>
            </p>
            <p>
              Highest Bid : &nbsp; <span className="price">{price}</span>{" "}
            </p>
            <Duration>
              <p>
                <DurationImage
                  src="https://i.ibb.co/KWpGS6L/image.png"
                  alt=""
                />{" "}
                7 Hours Ago
              </p>
              <p>
                <DurationImage
                  src="https://i.ibb.co/ryXDtLD/image.png"
                  alt=""
                />{" "}
                200 Likes
              </p>
            </Duration>
            {ctaButton && (
              <Cta_Btn>
                <Btn>{ctaButton}</Btn>
              </Cta_Btn>
            )}
          </CardContent>
        </InnerContent>
      </Card>
    </Container>
  );
}

export default GradientCard;
const Container = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 1s ease-in-out;
  background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
  animation: colors 3s infinite ease-in-out;
  @keyframes colors {
    0% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    50% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    70% {
      background: linear-gradient(130deg, #022894 0%, #7f41db 100%);
    }
    100% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
  }
`;
const Card = styled.div`
  margin: 0.2rem;
`;
const InnerContent = styled.div`
  background-color: #091026;
  padding: 0.8rem;
  border-radius: 20px;
`;
const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
  border-radius: 10px;
  margin-right: 2rem;
`;
const Name = styled.div`
  position: absolute;
  left: 50%;
  bottom: -26px;
  background-color: #03091f;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  width: 75%;
  padding: 0.5rem 0.5rem;
  border-radius: 70px;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;
const AvatarImg = styled.img`
  width: 45px;
  object-fit: cover;
  height: 45px;
  border-radius: 50%;
  margin-right: 2rem;
`;
const CardContent = styled.div`
  padding-top: 3rem;
  .card-title {
    font-size: 1.3rem;
    font-weight: 500;
    padding-bottom: 0.6rem;
  }
  .price {
    color: #6bbe92;
  }
  .l-text {
    opacity: 0.5;
  }
`;
const Duration = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
  }
`;
const DurationImage = styled.img`
  object-fit: cover;
  width: 18px;
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cta_Btn = styled.div`
  width: 100%;
  a {
    margin: 0.6rem 0;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
`;
const Btn = styled.a`
  text-transform: uppercase;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: linear-gradient(120deg, #eb3fa9, #395ff6);
  }
`;
/* 
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/KWpGS6L/image.png" alt="image" border="0"></a><br /><a target='_blank' href='https://freeonlinedice.com/'>die to roll</a><br />

  //heart
  <a href="https://imgbb.com/"><img src="https://i.ibb.co/ryXDtLD/image.png" alt="image" border="0"></a><br /><a target='_blank' href='https://freeonlinedice.com/'>die to roll</a><br />
*/
