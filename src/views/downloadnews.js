import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Card, CardBody, CardFooter, CardTitle, CardImg } from "reactstrap";

import Footer from "../layout/footer/footer";

class downloadnews extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Form className="tabsearch">
              <h5>{"ค้นหา"}</h5>
              <Form.Control
                className="download"
                type="search"
                placeholder="Search..."
              />
              <br />
              <Button
                variant="outline-success"
                style={{
                  border: "2px solid"
                }}
                size="sm"
              >
                SEARCH
              </Button>
            </Form>
            <Col lg={9} md={9} xs={12}>
              <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
              <Row>
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-globe text-warning" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Capacity</p>
                            <CardTitle tag="p">150GB</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="fas fa-sync-alt" /> Update Now
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Revenue</p>
                            <CardTitle tag="p">$ 1,345</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-calendar" /> Last day
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Errors</p>
                            <CardTitle tag="p">23</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-clock" /> In the last hour
                      </div>
                    </CardFooter>
                  </Card>
                </Col>{" "}
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Errors</p>
                            <CardTitle tag="p">23</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-clock" /> In the last hour
                      </div>
                    </CardFooter>
                  </Card>
                </Col>{" "}
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Errors</p>
                            <CardTitle tag="p">23</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-clock" /> In the last hour
                      </div>
                    </CardFooter>
                  </Card>
                </Col>{" "}
                <Col lg="4" md="6" sm="6">
                  <Card className="card-stats">
                    <CardImg
                      top
                      width="100%"
                      src="https://www.gogoprint.co.th/media/wysiwyg/opening-images_41.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <p className="card-category">Errors</p>
                            <CardTitle tag="p">23</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <i className="far fa-clock" /> In the last hour
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default downloadnews;
