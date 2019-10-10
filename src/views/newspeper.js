import React from "react";
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

class Newspeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date(), alt: "", src: "" };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
  }

  imageClick1 = () => {
    this.stepper.next();
    this.setState({
      alt: "advertise1",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise1.png?alt=media&token=73a1e6e7-56da-4478-aa2e-e13bcc2ccae0"
    });
  };

  imageClick2 = () => {
    this.stepper.next();
    this.setState({
      alt: "advertise2",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise2.png?alt=media&token=00bf58f4-3d8a-47ab-ad95-4c21d1b390f6"
    });
  };

  imageClick3 = () => {
    this.stepper.next();
    this.setState({
      alt: "advertise3",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise3.png?alt=media&token=ebf8343f-65fc-43ea-88fb-b8bacb3dabac"
    });
  };

  imageClick4 = () => {
    this.stepper.next();
    this.setState({
      alt: "news",
      src:
        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/news%2Fnews-2019-10-01.png?alt=media&token=7fbb301f-d87e-414c-b49c-f0731fa62a69"
    });
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });

    if (date) {
      this.stepper.next();
    } else {
      alert("กรุณาระบุวันที่");
    }
    console.log(date.toDateString("dd-MM-yyyy"));
  };
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
                    &nbsp;&nbsp;&nbsp;&nbsp;จัดการหน้าหนังสือพิมพ์
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="stepper1" className="bs-stepper">
                    <div className="bs-stepper-header">
                      <div className="step" data-target="#test-l-1">
                        <button className="step-trigger">
                          <EventNoteIcon />
                          <span className="bs-stepper-label">
                            เลือกวันที่ลงข่าว
                          </span>
                        </button>
                      </div>
                      <div className="line"></div>
                      <div className="step" data-target="#test-l-2">
                        <button className="step-trigger" disabled>
                          <ImageAspectRatioIcon />
                          <span className="bs-stepper-label">
                            ส่วนที่ต้องการ
                          </span>
                        </button>
                      </div>
                      <div className="line"></div>
                      <div className="step" data-target="#test-l-3">
                        <button className="step-trigger" disabled>
                          <UnarchiveIcon />
                          <span className="bs-stepper-label">
                            อัปโหลดเนื้อหาข่าว
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="bs-stepper-content">
                      <form onSubmit={this.onSubmit}>
                        <div id="test-l-1" className="content">
                          <div className="form-date">
                            <br />
                            <h4>ระบุวันที่ที่ต้องการประกาศข่าวสาร</h4>
                            <br />
                            <div className="newsDate">
                              <DatePicker
                                isBuddhist
                                dateFormat="dd/MMMM/yyyy"
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
                        <div id="test-l-2" className="content">
                          <div className="form-group">
                            <div>
                              <h5>
                                &nbsp; &nbsp; &nbsp;
                                {"ประจำวันที่ : " +
                                  this.state.startDate.toDateString()}
                              </h5>
                              <Container>
                                <Row>
                                  <Col>
                                    <img
                                      className="uploadead1"
                                      alt="newspaper_head"
                                      src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fhead.png?alt=media&token=68a42a51-41af-40d2-9523-2951f5b0ec13"
                                      width="80%"
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="uploadead">
                                    <Row>
                                      <img
                                        className="uploadead1"
                                        alt="connect"
                                        src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fconnect.png?alt=media&token=b8a59c44-d9b8-4a0a-aeb8-4c1e59df8572"
                                        width="40%"
                                      />
                                    </Row>
                                    <Row>
                                      <img
                                        className="uploadead1"
                                        alt="advertise"
                                        src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise.png?alt=media&token=dc21564a-b214-476c-90a0-09a1a96020f8"
                                        width="40%"
                                      />
                                    </Row>
                                    <Row>
                                      <img
                                        className="uploadead1"
                                        onClick={this.imageClick1}
                                        alt="advertise1"
                                        src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise1.png?alt=media&token=73a1e6e7-56da-4478-aa2e-e13bcc2ccae0"
                                        width="40%"
                                      />
                                    </Row>
                                    <Row>
                                      <img
                                        className="uploadead1"
                                        onClick={this.imageClick2}
                                        alt="advertise2"
                                        src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise2.png?alt=media&token=00bf58f4-3d8a-47ab-ad95-4c21d1b390f6"
                                        width="40%"
                                      />
                                    </Row>
                                    <Row>
                                      <img
                                        className="uploadead1"
                                        onClick={this.imageClick3}
                                        alt="advertise3"
                                        src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Fadvertise3.png?alt=media&token=ebf8343f-65fc-43ea-88fb-b8bacb3dabac"
                                        width="40%"
                                      />
                                    </Row>
                                  </Col>
                                  <Col className="uploadnews">
                                    <img
                                      className="uploadead1"
                                      onClick={this.imageClick4}
                                      alt="news"
                                      src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/news%2Fnews-2019-10-01.png?alt=media&token=7fbb301f-d87e-414c-b49c-f0731fa62a69"
                                      width="100%"
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <img
                                      className="uploadead1"
                                      alt="footer"
                                      src="https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Ffooter.png?alt=media&token=deab758d-d487-40ae-a085-440e4c83982c"
                                      width="80%"
                                    />
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          </div>
                        </div>

                        <div id="test-l-3" className="content text-center">
                          <img alt={alt} src={src} width="40%" />
                          <br />
                          <br />
                          <Input
                            style={{ marginLeft: "35%" }}
                            onChange={this.fileUploaded}
                            type="file"
                            label="Upload"
                            accept="image/*"
                            ref={ref => (this.fileUpload = ref)}
                          />
                          <br />
                          <button
                            type="submit"
                            className="btn btn-success mt-5"
                          >
                            อัปโหลดเนื้อหาข่าว
                          </button>
                        </div>
                      </form>
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

export default Newspeper;
