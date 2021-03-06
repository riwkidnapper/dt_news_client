import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class From_pay extends Component {
  constructor(props) {
    super(props);
    this.Submit = this.Submit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  Submit = event => {
    event.preventDefault();
    return this.props.history.push("/addcredit/success");
  };
  render() {
    return (
      <Card style={{ marginTop: "-10%", marginLeft: "5%", marginRight: "5%" }}>
        <Form
          style={{ padding: "50px", paddingLeft: "15%" }}
          onSubmit={this.Submit}
        >
          <h3>ที่อยู่ใบเสร็จรับเงิน</h3>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ชื่อ - นามสกุล</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>บริษัท</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>อำเภอ / เขต</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Control as="select">
                <option>-- โปรดเลือกจังหวัด --</option>
                <option>กระบี่</option> <option>กรุงเทพมหานคร</option>
                <option>กาญจนบุรี</option>
                <option>กาฬสินธุ์</option> <option>กำแพงเพชร</option>
                <option>ขอนแก่น</option> <option>จันทบุรี</option>
                <option>ฉะเชิงเทรา</option>
                <option>ชลบุรี</option> <option>ชัยนาท</option>
                <option>ชัยภูมิ</option> <option>ชุมพร</option>
                <option>เชียงราย</option>
                <option>เชียงใหม่</option> <option>ตรัง</option>
                <option>ตราด</option> <option>ตาก</option>
                <option>นครนายก</option> <option>นครปฐม</option>
                <option>นครพนม</option> <option>นครราชสีมา</option>
                <option>นครศรีธรรมราช</option> <option>นครสวรรค์</option>
                <option>นนทบุรี</option> <option>นราธิวาส</option>
                <option>น่าน</option> <option>บึงกาฬ</option>
                <option>บุรีรัมย์</option>
                <option>ปทุมธานี</option> <option>ประจวบคีรีขันธ์</option>
                <option>ปราจีนบุรี</option> <option>ปัตตานี</option>
                <option>พระนครศรีอยุธยา</option> <option>พะเยา</option>
                <option>พังงา</option> <option>พัทลุง</option>
                <option>พิจิตร</option>
                <option>พิษณุโลก</option> <option>เพชรบุรี</option>
                <option>เพชรบูรณ์</option> <option>แพร่</option>
                <option>ภูเก็ต</option>
                <option>มหาสารคาม</option> <option>มุกดาหาร</option>
                <option>แม่ฮ่องสอน</option> <option>ยโสธร</option>
                <option>ยะลา</option>
                <option>ร้อยเอ็ด</option> <option>ระนอง</option>
                <option>ระยอง</option> <option>ราชบุรี</option>
                <option>ลพบุรี</option> <option>ลำปาง</option>
                <option>ลำพูน</option> <option>เลย</option>
                <option>ศรีสะเกษ</option> <option>สกลนคร</option>
                <option>สงขลา</option> <option>สตูล</option>
                <option>สมุทรปราการ</option> <option>สมุทรสงคราม</option>
                <option>สมุทรสาคร</option> <option>สระแก้ว</option>
                <option>สระบุรี</option> <option>สิงห์บุรี</option>
                <option>สุโขทัย</option> <option>สุพรรณบุรี</option>
                <option>สุราษฎร์ธานี</option> <option>สุรินทร์</option>
                <option>หนองคาย</option> <option>หนองบัวลำภู</option>
                <option>อ่างทอง</option> <option>อำนาจเจริญ</option>
                <option>อุดรธานี</option> <option>อุตรดิตถ์</option>
                <option>อุทัยธานี</option>
                <option>อุบลราชธานี</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>รหัสไปรษณีย์</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
          </Form.Row>
          <br />
          <h5>ตัวเลือกการชำระเงิน</h5>
          <div key={`inline-"radio"`} className="mb-1">
            <Form.Check
              inline
              label="โอนเงินผ่านบัญชีธนาคาร"
              type="radio"
              id={`inline-"radio"-1`}
            />
          </div>
          <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="5"
              style={{ paddingLeft: "10%" }}
              controlId="validationCustom02"
            >
              {"คำแนะนำเพิ่มเติม "}
              <br />
              {"การโอนผ่านบัญชีธนาคารต้องรอเจ้าหน้าที่"}
              <br />
              {"ตรวจสอบยอดเงินและเพิ่มเครดิตให้ภายใน 24 ชม."}
            </Form.Group>
            <br /> <br />
          </Form.Row>
          <br />
          <Button variant="success" type="submit">
            ดำเนินการต่อ
          </Button>
        </Form>
      </Card>
    );
  }
}

export default withRouter(From_pay);
