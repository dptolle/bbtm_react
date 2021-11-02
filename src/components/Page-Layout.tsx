import React, { Children, PropsWithChildren } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PageLayout({ children }: PropsWithChildren<{}>) {
    const [header, main, footer] = Children.toArray(children);

  return (
    <Container fluid className="page-container">
      <Row className="row-header">
        <Col>{header} </Col>
      </Row>
      <Row className="row-main">
        <Col>{main}</Col>
      </Row>
      <Row className="row-footer">
        <Col>{footer}</Col>
      </Row>
    </Container>
  );
}

export default PageLayout;
