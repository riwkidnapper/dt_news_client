import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Col, Button, Row, Image, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import Center from "react-center";
import { connect } from "react-redux";
import { confirmPay } from "../redux/actions/userActions";
import "../css/confirmpay.css";

class confirmpay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      uploading: true,
      file: "",
      imagePreviewUrl: ""
    });

    const image = this.state.image;
    const formData = new FormData();
    formData.append("image", image, image.name);
    const conData = {
      con_email: this.props.user.credentials.email,
      con_name: this.refs.con_name.value,
      con_lastname: this.refs.con_lastname.value,
      con_phone: this.refs.con_phone.value,
      con_orderId: this.refs.con_orderId.value,
      con_Payment: this.refs.con_Payment.value,
      con_datePay: this.refs.con_datePay.value,
      con_amount: this.refs.con_amount.value,
      more_details: this.refs.more_details.value,
      image: ""
    };
    this.props.confirmPay(conData, formData, this.props.history);
  };

  handleImage = event => {
    event.preventDefault();
    this.setState({
      image: event.target.files[0]
    });
  };

  render() {
    const {
      user: {
        credentials: { email },
        authenticated
      }
    } = this.props;
    const { uploading } = this.state;
    let confirm = authenticated ? (
      uploading === true ? (
        <div>
          <div className="post_">
            <Navbar />
            <div className="topName">
              <h1>&emsp;แจ้งชำระเงิน</h1>
              <Col
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  fontSize: "18px",
                  color: "#7cb342"
                }}
              >
                <p>
                  &emsp;&emsp;&emsp;&emsp;
                  การชำระเงินทำได้โดยวิธิการโอนเงินเข้าบัญชีธนาคารสำหรับการจ่าย
                  ชำระค่าบริการ การโอนเงินเข้าบัญชีของทาง ห้างหุ้นส่วนจำกัด ดี
                  ที การบัญชี ภาษี
                  และตรวจสอบผู้ใช้งานจะต้องเลือกชำระเงินของธนาคารที่ใช้ใช้งาน
                  โดยบัญชีธนาคารของสถาบันมีดังนี้ นายพันธกานต์ นันตาลิต
                  ธนาคารกรุงไทย
                  <b>
                    <b>เลขที่บัญชี 981-3-64714-0</b>
                  </b>
                </p>
              </Col>
            </div>
            <br /> <br />
            <Center>
              <Row className="bord">
                <Form as={Col} md="5">
                  <br />
                  <Center>
                    <Image
                      style={{ Size: "auto" }}
                      src="http://www.sevenfive.co.th/product_images/uploaded_images/payment.jpg"
                      rounded
                    />
                  </Center>
                </Form>
                <form onSubmit={this.handleSubmit}>
                  <Form className="post" as={Col} style={{ marginLeft: "20%" }}>
                    <h3>
                      แจ้งชำระเงิน
                      <br />
                      <small>
                        <small>กรุณากรอกข้อมูลด้านล่างให้ตรบถ้วน</small>
                        <br />
                        <small>เพื่อแจ้งชำระเงิน</small>
                      </small>
                    </h3>
                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>อีเมลที่ใช้ลงทะเบียน</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          disabled
                          ref="con_email"
                          name="con_email"
                          placeholder={email}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          ref="con_name"
                          name="con_name"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          ref="con_lastname"
                          name="con_lastname"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>เบอร์โทรศัพท์</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_phone"
                        name="con_phone"
                        placeholder="0812345678"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>เลขที่คำสั่งซื้อ (Order ID)</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_orderId"
                        name="con_orderId"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                      <Form.Label>วิธีชำระเงิน</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_Payment"
                        name="con_Payment"
                        as="select"
                      >
                        <option>-- เลือกวิธีชำระเงิน --</option>
                        <optgroup label="โอนผ่านบัญชีธนาคาร">
                          <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                        </optgroup>
                      </Form.Control>
                    </Form.Group>

                    <Form.Row />
                    <Form.Group controlId="formGridState">
                      <Form.Label>ระบุวันที่ชำระเงิน</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_datePay"
                        name="con_datePay"
                        placeholder="dd/mm/yy"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                      <Form.Label>เวลาทีชำระเงิน</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                      <Form.Label>จำนวนเงิน</Form.Label>
                      <Form.Control
                        required
                        ref="con_amount"
                        name="con_amount"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                      <Form.Label>อัพโหลดสลิปโอนเงิน</Form.Label>
                      <br />
                      <input
                        className="fileInput"
                        type="file"
                        onChange={this.handleImage}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
                      <Form.Control
                        type="text"
                        ref="more_details"
                        name="more_details"
                        as="textarea"
                        rows="5"
                      />
                    </Form.Group>

                    <Center>
                      <Center>
                        <br />
                        <br />
                        <div className="Spinner-download">
                          {uploading && (
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
                      </Center>
                    </Center>
                  </Form>
                </form>
              </Row>
            </Center>
            <br />
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <div className="post_">
            <Navbar />
            <div className="topName">
              <h1>&emsp;แจ้งชำระเงิน</h1>
              <Col
                style={{
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  fontSize: "18px",
                  color: "#7cb342"
                }}
              >
                <p>
                  &emsp;&emsp;&emsp;&emsp;
                  การชำระเงินทำได้โดยวิธิการโอนเงินเข้าบัญชีธนาคารสำหรับการจ่าย
                  ชำระค่าบริการ การโอนเงินเข้าบัญชีของทาง ห้างหุ้นส่วนจำกัด ดี
                  ที การบัญชี ภาษี
                  และตรวจสอบผู้ใช้งานจะต้องเลือกชำระเงินของธนาคารที่ใช้ใช้งาน
                  โดยบัญชีธนาคารของสถาบันมีดังนี้ นายพันธกานต์ นันตาลิต
                  ธนาคารกรุงไทย
                  <b>
                    <b>เลขที่บัญชี 981-3-64714-0</b>
                  </b>
                </p>
              </Col>
            </div>
            <br /> <br />
            <Center>
              <Row className="bord">
                <Form as={Col} md="5">
                  <br />
                  <Center>
                    <Image
                      style={{ Size: "auto" }}
                      src="http://www.sevenfive.co.th/product_images/uploaded_images/payment.jpg"
                      rounded
                    />
                  </Center>
                </Form>
                <form onSubmit={this.handleSubmit}>
                  <Form className="post" as={Col} style={{ marginLeft: "20%" }}>
                    <h3>
                      แจ้งชำระเงิน
                      <br />
                      <small>
                        <small>กรุณากรอกข้อมูลด้านล่างให้ตรบถ้วน</small>
                        <br />
                        <small>เพื่อแจ้งชำระเงิน</small>
                      </small>
                    </h3>
                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>อีเมลที่ใช้ลงทะเบียน</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          disabled
                          ref="con_email"
                          name="con_email"
                          placeholder={email}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          ref="con_name"
                          name="con_name"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          ref="con_lastname"
                          name="con_lastname"
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>เบอร์โทรศัพท์</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_phone"
                        name="con_phone"
                        placeholder="0812345678"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>เลขที่คำสั่งซื้อ (Order ID)</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_orderId"
                        name="con_orderId"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                      <Form.Label>วิธีชำระเงิน</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_Payment"
                        name="con_Payment"
                        as="select"
                      >
                        <option>-- เลือกวิธีชำระเงิน --</option>
                        <optgroup label="โอนผ่านบัญชีธนาคาร">
                          <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                        </optgroup>
                      </Form.Control>
                    </Form.Group>

                    <Form.Row />
                    <Form.Group controlId="formGridState">
                      <Form.Label>ระบุวันที่ชำระเงิน</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        ref="con_datePay"
                        name="con_datePay"
                        placeholder="dd/mm/yy"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                      <Form.Label>เวลาทีชำระเงิน</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                      <Form.Label>จำนวนเงิน</Form.Label>
                      <Form.Control
                        required
                        ref="con_amount"
                        name="con_amount"
                      />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                      <Form.Label>อัพโหลดสลิปโอนเงิน</Form.Label>
                      <br />
                      <input
                        className="fileInput"
                        type="file"
                        onChange={this.handleImage}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
                      <Form.Control
                        type="text"
                        ref="more_details"
                        name="more_details"
                        as="textarea"
                        rows="5"
                      />
                    </Form.Group>

                    <Center>
                      <Center>
                        <br />
                        <br />
                        <Button
                          type="submit"
                          variant="success"
                          style={{
                            background: "#8bc34a",
                            borderColor: "#8bc34a"
                          }}
                        >
                          ยืนยัน
                        </Button>
                      </Center>
                    </Center>
                  </Form>
                </form>
              </Row>
            </Center>
            <br />
          </div>
          <Footer />
        </div>
      )
    ) : (
      <Redirect to="/login" />
    );
    return confirm;
  }
}
confirmpay.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  confirmPay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});
export default connect(
  mapStateToProps,

  { confirmPay }
)(confirmpay);
