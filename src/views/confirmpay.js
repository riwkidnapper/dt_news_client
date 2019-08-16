import React from "react";

import { Form, Col, Button, Row, Image } from "react-bootstrap";

import Header from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import Center from "react-center";

import "../css/confirmpay.css";

class confirmpay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    //reader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <div className="post_">
          <Header />
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
                ชำระค่าบริการ การโอนเงินเข้าบัญชีของทาง ห้างหุ้นส่วนจำกัด ดี ที
                การบัญชี ภาษี
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
              <Form as={Col}>
                <br />
                <Center>
                  <Image
                    src="http://www.sevenfive.co.th/product_images/uploaded_images/payment.jpg"
                    rounded
                  />
                </Center>
              </Form>
              <Form className="post" as={Col} style={{ paddingLeft: "3%" }}>
                <h3>
                  แจ้งชำระเงิน
                  <br />
                  <small>
                    <small>
                      กรุณากรอกข้อมูลด้านล่างให้ตรบถ้วนเพื่อแจ้งชำระเงิน
                    </small>
                  </small>
                </h3>
                <br />
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>อีเมลที่ใช้ลงทะเบียน</Form.Label>
                    <Form.Control placeholder="email@example.com" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  <Form.Control placeholder="0812345678" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>เลขที่คำสั่งซื้อ (Order ID)</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>วิธีชำระเงิน</Form.Label>
                  <Form.Control as="select">
                    <option>-- เลือกวิธีชำระเงิน --</option>
                    <optgroup label="โอนผ่านบัญชีธนาคาร">
                      <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                    </optgroup>
                  </Form.Control>
                </Form.Group>

                <Form.Row />
                <Form.Group controlId="formGridState">
                  <Form.Label>ระบุวันที่ชำระเงิน</Form.Label>
                  <Form.Control placeholder="dd/mm/yy" />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>เวลาทีชำระเงิน</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                  <Form.Label>จำนวนเงิน</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                  <Form.Label>อัพโหลดสลิปโอนเงิน</Form.Label>

                  <form onSubmit={e => this._handleSubmit(e)}>
                    <input
                      className="fileInput"
                      type="file"
                      onChange={e => this._handleImageChange(e)}
                    />
                  </form>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>

                <Center>
                  <Center>
                    <br />
                    <br />
                    <Button
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
            </Row>
          </Center>
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default confirmpay;
