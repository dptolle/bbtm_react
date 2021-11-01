import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Container fluid className="page-container">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
        <Main></Main>
        </Col>
      </Row>
      <Row>
        <Col>
        <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
