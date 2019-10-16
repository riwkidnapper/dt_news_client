import React, { Component } from "react";

import { Container, Col, Button, Form, Card, Spinner } from "react-bootstrap";
import Footer from "../layout/footer/footer";
import { FaFeatherAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdReply } from "react-icons/md";
import axios from "axios";

class DownloadNews extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    downloading: false,
    loading: true,
    downloadUrl: ""
  };

  changestate = event => {
    event.preventDefault();
    if (this.refs.dateload.value !== "") {
      this.setState({
        downloading: true,
        loading: true,
        downloadUrl: ""
      });
      axios
        .post("/pdf/generate/" + this.refs.dateload.value)
        .then(res => {
          this.setState({
            downloading: false,
            loading: false,
            downloadUrl: res.data.url
          });
        })
        .catch(err => {});
    } else {
      alert("กรุณาระบุวัน เดือน ปี ที่ต้องการค้นหา");
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
    const { loading, downloading } = this.state;

    return loading ? (
      downloading === false ? (
        <div>
          <Container fluid>
            <Col lg={9} md={9} xs={12}>
              <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
            </Col>
            <Card
              style={{
                marginTop: "1%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <Form className="tabsearch" onSubmit={this.changestate}>
                <h5>{"ค้นหา"}</h5>
                <Form.Control
                  ref="dateload"
                  className="download"
                  type="date"
                  placeholder="Search..."
                />
                <br />
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
          </Container>
          <Footer />
        </div>
      ) : (
        <div>
          <Container fluid>
            <Col lg={9} md={9} xs={12}>
              <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
            </Col>
            <Card
              style={{
                marginTop: "1%",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              <Form className="tabsearch" onSubmit={this.changestate}>
                <h5>{"ค้นหา"}</h5>
                <br />
                <div className="Spinner-download">
                  {downloading && (
                    <Spinner
                      className="Spinner-download"
                      style={{
                        marginLeft: "30px",
                        marginRight: "30px"
                      }}
                      animation="border"
                      variant="success"
                    />
                  )}
                  {" Loading... "}
                </div>
              </Form>
            </Card>
          </Container>
          <Footer />
        </div>
      )
    ) : (
      <div>
        <Container fluid>
          <Col lg={9} md={9} xs={12}>
            <h1 className="topName">หนังสือพิมพ์บัญชี</h1>
          </Col>
          <Card
            style={{
              marginTop: "1%",
              marginLeft: "5%",
              marginRight: "5%"
            }}
          >
            <Form className="tabsearch" onSubmit={this.handleSubmit}>
              <h5>{"รายการดาวน์โหลดหนังสือพิมพ์"}</h5>
              {/* <Form.Control
                ref="dateload"
                className="download"
                type="date"
                placeholder="Search..."
              /> */}
              <br />
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
        </Container>
        <Footer />
      </div>
    );
  }
}

export default DownloadNews;
