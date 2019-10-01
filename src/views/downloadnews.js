import React, { Component } from "react";

import { Container, Col, Button, Form, Card } from "react-bootstrap";
import Footer from "../layout/footer/footer";
import { FaFeatherAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdReply } from "react-icons/md";
import axios from "axios";

class downloadnews extends Component {

  state = {
    loading: true,
    downloadUrl: ""
  };

  changestate = event => {
    event.preventDefault();
    if (this.refs.dateload.value !== "") {
      axios
        .get("/pdf/generate/" + this.refs.dateload.value)
        .then(res => {
          this.setState({
            loading: false,
            downloadUrl: res.data.url
          });
        })
        .catch(err => {});
    } else {
      console.log("ใส่เลขด้วยไอ้ส้สไม่ใสมึงจะใส่เดี่ยวกับกูหรอ");
    }
  };

  stateDownload = event => {
    event.preventDefault();
    // console.log(this.state.downloadUrl);
    // window.location.assign(this.state.downloadUrl);
    window.open(this.state.downloadUrl, "_blank").focus();
    this.setState({
      loading: true,
      downloadUrl: ""
    });
  };

  stateCallback = event => {
    event.preventDefault();
    this.setState({
      loading: true,
      downloadUrl: ""
    });
  };

  render() {

    const { loading } = this.state;

    return loading ? (
      <div>
        <Container fluid>
          <Col lg={9} md={9} xs={12}>
            <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
          </Col>
          <form noValidate onSubmit={this.changestate}>
            <Card
              style={{
                marginTop: "1%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <Form className="tabsearch">
                <h5>{"ค้นหา"}</h5>
                <Form.Control
                  ref="dateload"
                  className="download"
                  type="date"
                  placeholder="Search..."
                />
                <br />{" "}
                <Button
                  type="submit"
                  variant="outline-success"
                  style={{
                    border: "2px solid"
                  }}
                  onSubmit={this.changestate}
                >
                  <FaFeatherAlt /> {"SEARCH"}
                </Button>
              </Form>
            </Card>
          </form>
        </Container>
        <Footer />
      </div>
    ) : (
      <div>
        <Container fluid>
          <Col lg={9} md={9} xs={12}>
            <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
          </Col>
          <form noValidate onSubmit={this.handleSubmit}>
            <Card
              style={{
                marginTop: "1%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <Form className="tabsearch">
                <h5>{"ค้นหา"}</h5>
                <Form.Control
                  ref="dateload"
                  className="download"
                  type="date"
                  placeholder="Search..."
                />
                <br />{" "}
                <Button
                  type="submit"
                  variant="success"
                  style={{
                    border: "1px solid #194D33",
                    background: " rgba(91, 156, 16, 0.658)",
                    fontSize: "20px"
                  }}
                  onClick={this.stateDownload}
                >
                  <FiDownload /> {"ดาวน์โหลด"}
                </Button>
                <br />
                <br />
                <Button
                  type="submit"
                  variant="outline-success"
                  style={{
                    marginTop: "-20px"
                  }}
                  hover={{ color: " rgba(91, 156, 16, 0.658)" }}
                  size="lg"
                  onClick={this.stateCallback}
                >
                  <MdReply /> {"ย้อนกลับ"}
                </Button>
              </Form>
            </Card>
          </form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default downloadnews;
