import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images0 from "../../assets/i0.png";
import N0 from "../../assets/n.png";
import Image from "react-bootstrap/Image";

export default class row_container extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={Images0}
                rounded
                className="img"
                style={{ width: 100, height: 100 }}
              />
              {"XXXXXXXXXX"}
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={N0}
                rounded
                className="img"
                style={{ padding: "35%" }}
              />
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={Images0}
                rounded
                className="img"
                style={{ width: 100, height: 100 }}
              />
              {"XXXXXXXXXX"}
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={N0}
                rounded
                className="img"
                style={{ padding: "35%" }}
              />
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={Images0}
                rounded
                className="img"
                style={{ width: 100, height: 100 }}
              />
              {"XXXXXXXXXX"}
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={N0}
                rounded
                className="img"
                style={{ padding: "35%" }}
              />
            </Col>{" "}
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={Images0}
                rounded
                className="img"
                style={{ width: 100, height: 100 }}
              />
              {"XXXXXXXXXX"}
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={N0}
                rounded
                className="img"
                style={{ padding: "35%" }}
              />
            </Col>
            <Col xs={5} sm={4} md={4} xl={1}>
              <Image
                src={Images0}
                rounded
                className="img"
                style={{ width: 100, height: 100 }}
              />
              {"XXXXXXXXXX"}
            </Col>
            <Col xs={5} sm={4} md={4} xl={1} />
          </Row>
        </Container>
      </div>
    );
  }
}
