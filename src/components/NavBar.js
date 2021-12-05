import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Container>
      <LogoContainer>
        <Logo src="https://i.ibb.co/hKNPTtg/image.png" />
      </LogoContainer>
      <ul className="nav-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <ConnectBtn>Get Connected</ConnectBtn>
      </ul>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    font-weight:bolder ;
    li {
      margin: 0 1rem;
    }
  }
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
  width:60px ;
`;
const ConnectBtn = styled.div`
  margin-left: 3rem;
  background-color: rgba(57, 95, 246, 0.6);
  padding: 0.6rem 1.3rem;
  border-radius: 70px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: rgba(57, 95, 246, 1);
  }
`;

/* import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Container>
      <LogoContainer>
        <Logoimg src="https://i.ibb.co/hKNPTtg/image.png" />
      </LogoContainer>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQS</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <ConnectBtn>get connected</ConnectBtn>
      </ul>
    </Container>
  );
}

export default NavBar;

const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 200px;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;
const LogoContainer = styled.div`
  height: 100%;
  flex: 4;
`;
const Logoimg = styled.img`
  position: absolute;
  top: 20px;
  left: 200px;
  width: 60px;
`;
const ListItemContainer = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex: 5;
  padding: 0 2px;
  ul {
    display: flex;
    li {
      padding: 7px;
      a {
        color: white;
        font-weight: bolder;
      }
    }
  }
`;

const ConnectBtn = styled.div`
  display: flex;
  flex: 2;
  text-transform: uppercase;
  margin-left: 3rem;
  background-color: rgba(57, 95, 246, 0.6);
  padding: 0.6rem 0.3rem;
  border-radius: 70px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: rgba(57, 95, 246, 1);
  }
`;

/*
 <a href="https://imgbb.com/"><img src="https://i.ibb.co/hKNPTtg/image.png" alt="image" border="0"></a>


 <LogoContainer>
        <Logoimg src="https://i.ibb.co/hKNPTtg/image.png" />
      </LogoContainer>
      <NavItems>
        
      </NavItems>
*/
