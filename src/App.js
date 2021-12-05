import React from 'react' ;
import styled from'styled-components' ;
import Home from './components/Home';
import BodyContent from './components/BodyContent';


function App() {
  return (
    <div className="App">
      <Home />
      <BodyContent/>
    </div>
  )
}

export default App



/* import Home from "./components/Home";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Content from "./components/Content";

function App() {
  return (
    <Container className="App">
      <Layout>
        <NavBar />
      </Layout>
      <Home />
      <Content/>
    </Container>
  );
}

export default App;
const Container = styled.div`
  z-index:80 ;
`;

const Layout = styled.div`
  padding: 4rem 15rem;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index:100 ;
`;
 */