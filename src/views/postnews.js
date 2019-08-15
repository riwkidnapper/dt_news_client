import React from "react";
import Center from "react-center";
import { Form, Col, Button, Row } from "react-bootstrap";

import Header from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";

import "../css/postnews.css";

function postnews() {
  return (
    <div>
      <div className="post_">
        <Header />
        <div className="topName">
          <h1>ลงประกาศ</h1>
        </div>
        <br /> <br />
        <Center>
          <Form className="post">
            <h3>ลงประกาศเชิญประชุม</h3>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>หัวข้อ / เรื่อง</Form.Label>
                <Form.Control as="select">
                  <option> -- เลือกหัวข้อ / เรื่อง -- </option>
                  <optgroup label="สามัญ">
                    <option value="1_1">เชิญประชุมปิดงบประจำปี</option>
                    <option value="1_2">กำหนดรายละเอียดการประชุมเอง</option>
                  </optgroup>
                  <optgroup label="วิสามัญ">
                    <option value="2_1">เชิญประชุมย้ายที่อยู่</option>
                    <option value="2_2">เชิญประชุมลดทุน</option>
                    <option value="2_3">เชิญประชุมเปลี่ยนกรรมการ</option>
                    <option value="2_4">เชิญประชุมเปลี่ยนชื่อบริษัท</option>
                    <option value="2_5">เชิญประชุมเพิ่มทุน</option>
                    <option value="2_6">เชิญประชุมเพิ่มวัตถุประสงค์</option>
                    <option value="2_7">เชิญประชุมเลิกบริษัท</option>
                    <option value="2_8">เชิญประชุมเสร็จชำระบัญชี</option>
                    <option value="2_9">
                      เชิญประชุมแก้ไขเพิ่มเติมตราบริษัท
                    </option>
                    <option value="2_10">เชิญประชุมอนุมัติเงินปันผล</option>
                    <option value="2_11">เชิญประชุมแก้ไขข้อบังคับ</option>
                    <option value="2_12">เชิญประชุมควบรวมบริษัท</option>
                    <option value="2_13">ประกาศเลิกบริษัท</option>
                    <option value="2_14">ประกาศจ่ายเงินปันผล</option>
                    <option value="2_20">กำหนดรายละเอียดการประชุมเอง</option>
                  </optgroup>
                  <optgroup label="อื่นๆ">
                    <option value="3_1">ลงประกาศแบบรูปภาพ</option>
                  </optgroup>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>วาระการประชุม </Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>ชื่อบริษัท / ชื่อหน่วยงาน</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>ครั้งที่ประชุม</Form.Label>
              <Form.Control placeholder="1/2562" />
              {new Date().getFullYear() + 543}
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ประกาศถึง</Form.Label>
                <Form.Control placeholder="ท่านผู้ถือหุ้นของบริษัท" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>วันที่จัดประชุม</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>เวลาจัดประชุม</Form.Label>
                <Form.Control as="select">
                  <option>-- เลือกเวลาจัดประชุม --</option>
                  <option value="0:00">0:00</option>
                  <option value="0:30">0:30</option>
                  <option value="1:00">1:00</option>
                  <option value="1:30">1:30</option>
                  <option value="2:00">2:00</option>
                  <option value="2:30">2:30</option>
                  <option value="3:00">3:00</option>
                  <option value="3:30">3:30</option>
                  <option value="4:00">4:00</option>
                  <option value="4:30">4:30</option>
                  <option value="5:00">5:00</option>
                  <option value="5:30">5:30</option>
                  <option value="6:00">6:00</option>
                  <option value="6:30">6:30</option>
                  <option value="7:00">7:00</option>
                  <option value="7:30">7:30</option>
                  <option value="8:00">8:00</option>
                  <option value="8:30">8:30</option>
                  <option value="9:00">9:00</option>
                  <option value="9:30">9:30</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                  <option value="22:30">22:30</option>
                  <option value="23:00">23:00</option>
                  <option value="23:30">23:30</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                สถานที่จัดประชุม / ที่อยู่บริษัท (กรณีเลิกบริษัท)
              </Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>วันที่ลงโฆษณา</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>คำนำหน้าชื่อผู้ลงนาม</Form.Label>
                <Form.Control as="select">
                  <option>-- เลือกคำนำหน้าชื่อผู้ลงนาม --</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>ชื่อผู้ลงนาม</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>นามสกุลผู้ลงนาม</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridZip">
              <Form.Label>ตำแหน่งผู้ลงนาม</Form.Label>
              <Form.Control placeholder="กรรมการผู้มีอำนาจลงนาม" />
            </Form.Group>

            <Center>
              <Row>
                <Center>
                  <Col md={7}>
                    <Button variant="outline-success">ตัวอย่างประกาศ</Button>
                  </Col>
                  <br />
                  <br />
                  <Col md={7}>
                    <Button variant="success">ลงประกาศ</Button>
                  </Col>
                </Center>
              </Row>
            </Center>
          </Form>
        </Center>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default postnews;
