import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadNews } from "../redux/actions/dataActions";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "react-bootstrap";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ImageAspectRatioIcon from "@material-ui/icons/ImageAspectRatio";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
  Input
} from "reactstrap";
registerLocale("th", th);
const now = new Date();
class NewsPeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      date: "",
      alt: "",
      src: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
  }

  imageClick1 = () => {
    window.scrollTo(0, 0);
    this.stepper.next();
    this.setState({
      id: "1",
      alt: "advertise1",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise1.png?alt=media"
    });
  };

  imageClick2 = () => {
    window.scrollTo(0, 0);
    this.stepper.next();
    this.setState({
      id: "2",
      alt: "advertise2",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise2.png?alt=media"
    });
  };

  imageClick3 = () => {
    window.scrollTo(0, 0);
    this.stepper.next();
    this.setState({
      id: "3",
      alt: "advertise3",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise3.png?alt=media"
    });
  };

  imageClick4 = () => {
    window.scrollTo(0, 0);
    this.stepper.to(3);
    this.setState({
      id: "4",
      alt: "news",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/news%2Fnews-" + now + ".png?alt=media&token=7fbb301f-d87e-414c-b49c-f0731fa62a69"
    });
  };

  handleChange = date => {
    window.scrollTo(0, 0);
    if (date) {
      var twoDigit = (num) => {
        return num > 9 ? num.toString() : "0" + num.toString();
      }
      this.setState({
        date: date.getFullYear().toString() + "-" + twoDigit(date.getMonth() + 1) + "-" + twoDigit(date.getDate())
      });
      this.stepper.to(2);
    } else {
      alert("กรุณาระบุวันที่");
    }
  };

  fileUploaded = event => {
    event.preventDefault();
    var files = event.target.files[0];
    if (files instanceof Blob) {
      this.setState({
        file: files
      });
    } else {
      this.setState({
        file: null
      });
    }
  }

  onSubmit = () => {
    if (this.state.file != null) {
      const file = this.state.file;
      const formData = new FormData();
      formData.append("image", file, file.name);
      this.props.uploadNews(this.state.id, formData, this.state.date)
        .then(() => {
          this.setState({
            id: "",
            date: "",
            alt: "",
            src: "",
            file: null
          });
          this.stepper.reset();
        })
        .catch(() => {});
    }
  }

  render() {
    const { alt, src } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    &nbsp;&nbsp;จัดการหน้าหนังสือพิมพ์
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="stepper1" className="bs-stepper">
                    <div className="bs-stepper-header">
                      <div className="step" data-target="#test-l-1">
                        <button className="step-trigger">
                          <ImageAspectRatioIcon />
                          <span className="bs-stepper-label">
                            ส่วนที่ต้องการ
                          </span>
                        </button>
                      </div>
                      <div className="line"></div>
                      <div className="step" data-target="#test-l-2">
                        <button className="step-trigger" disabled>
                          <EventNoteIcon />
                          <span className="bs-stepper-label">
                            เลือกวันที่ลงข่าว
                          </span>
                        </button>
                      </div>
                      <div className="line"></div>
                      <div className="step" data-target="#test-l-3">
                        <button className="step-trigger" disabled>
                          <UnarchiveIcon />
                          <span className="bs-stepper-label">
                            อัปโหลดเนื้อหา
                          </span>
                        </button>
                      </div>
                    </div>
                    <div id="test-l-1" className="content">
                      <div className="form-group">
                        <div>
                          <br />
                          <Container>
                            <Row>
                              <Col>
                                <img
                                  className="uploadead1"
                                  alt="newspaper_head"
                                  src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fhead.png?alt=media"
                                  width="80%"
                                  height="auto"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col className="uploadead">
                                <Row>
                                  <img
                                    className="uploadead1"
                                    alt="connect"
                                    src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fconnect.png?alt=media"
                                    width="40%"
                                    height="10%"
                                  />
                                </Row>
                                <Row>
                                  <img
                                    className="uploadead1"
                                    alt="advertise"
                                    src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise.png?alt=media"
                                    width="40%"
                                    height="15%"
                                  />
                                </Row>
                                <Row>
                                  <img
                                    className="uploadead1"
                                    onClick={this.imageClick1}
                                    alt="advertise1"
                                    src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise1.png?alt=media"
                                    width="40%"
                                    height="15%"
                                  />
                                </Row>
                                <Row>
                                  <img
                                    className="uploadead1"
                                    onClick={this.imageClick2}
                                    alt="advertise2"
                                    src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise2.png?alt=media"
                                    width="40%"
                                    height="15%"
                                  />
                                </Row>
                                <Row>
                                  <img
                                    className="uploadead1"
                                    onClick={this.imageClick3}
                                    alt="advertise3"
                                    src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise3.png?alt=media"
                                    width="40%"
                                    height="15%"
                                  />
                                </Row>
                              </Col>
                              <Col className="uploadnews">
                                <img
                                  className="uploadead1"
                                  onClick={this.imageClick4}
                                  alt="news"

                                  src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/news%2Fnews-2019-10-01.png?alt=media"
                                  width="100%"
                                  height="auto"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <img
                                  className="uploadead1"
                                  alt="footer"
                                  src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Ffooter.png?alt=media"
                                  width="80%"
                                />
                              </Col>
                            </Row>
                          </Container>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div id="test-l-2" className="content text-center">
                      <img alt={alt} src={src} width="40%" />
                      <br />
                      <br />
                      <Input
                        style={{ marginLeft: "35%" }}
                        onChange={this.fileUploaded}
                        type="file"
                        label="Upload"
                        accept="image/png"
                        ref={ref => (this.fileUpload = ref)}
                      />
                      <br />
                      <button type="submit" className="btn btn-success mt-5" onClick={this.onSubmit} >
                        อัปโหลดเนื้อหาข่าว
                      </button>
                    </div>
                    <div className="bs-stepper-content">
                      <div id="test-l-3" className="content">
                        <div className="form-date">
                          <br />
                          <h4>ระบุวันที่ที่ต้องการประกาศข่าวสาร</h4>
                          <br />
                          <div className="newsDate">
                            <DatePicker
                              isBuddhist
                              dateFormat="dd-MMMM-yyyy"
                              minDate={new Date()}
                              todayButton="วันนี้"
                              selected={null}
                              onChange={this.handleChange}
                              locale={th}
                              isClearable
                              placeholderText="กรุณาระบุวันที่"
                              withPortal
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

NewsPeper.propTypes = {
  uploadNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { uploadNews }
)(NewsPeper);
