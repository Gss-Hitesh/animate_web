import React, { useEffect, useState } from "react";
import faker from "faker";
import styled from "styled-components";


function SellerCard() {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    const peoples = [...Array(4)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setPeoples(peoples);
  }, []);
  const currency = Math.floor((Math.random() * 15) + 5);
  return (
    <Container>
      {peoples.map((profile) => {
        return (
          <Card key={profile.id}>
            <NumberCard>
              <p>0 {profile.id +1}</p>
            </NumberCard>
            <Profile>
              <ProfileImg src={profile.avatar} />
              <ProfileText>
                <h4>{profile.name}</h4>
                <p>{currency*(5 - (profile.id+1))/10}  ETH</p>
              </ProfileText>
            </Profile>
          </Card>
        );
      })}
    </Container>
  );
}

export default SellerCard;

const Container = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
`;

const NumberCard = styled.div`
  padding-right: 1rem;
  font-size: 1.6rem;
  opacity: 0.5;
  p {
    font-weight: 700;
  }
`;

const Profile = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid #395ff6;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-weight: 500;
  }
  p {
    padding-top: 0.5rem;
    opacity: 0.5;
  }
`;

/* 

*/
