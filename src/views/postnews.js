import React from "react";
import $ from "jquery";
import Center from "react-center";
import { Form, Col, Button, Row } from "react-bootstrap";

import { ModalManager } from "react-dynamic-modal";
import moment from "moment-jalaali";
import DatePicker from "react-datepicker2";

import Header from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import MyModal from "../components/modals";

import "../css/postnews.css";

class postnews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(),
      values: moment()
    };
    this.enabledRange = {
      min: moment().startOf("month")
    };
  }

  componentDidMount() {
    $("select[name='subject']").bind("change", function() {
      var subject = $("select[name='subject']").val();
      var text;

      if (subject === "") {
        $("textarea[name='agenda']").val("");
      } else if (subject === "1_1") {
        text = "1. รับรองรายงานการประชุมครั้งที่ผ่านมา\n";
        text += "2. รายงานผลการดำเนินงานของบริษัทและรับรองงบการเงินประจำปี\n";
        text += "3. พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าตอบแทนประจำปี\n";
        text +=
          "4. พิจารณาแต่งตั้งคณะกรรมการแทนกรรมการที่จะครบกำหนดออกตามวาระ\n";
        text +=
          "5. พิจารณาเงินปันผล การจัดสรรทุนสำรองตามกฎหมายและบำเหน็จกรรมการ\n";
        text += "6. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "1_2") {
        text = "ป้อนรายละเอียดละเอียดประชุมที่นี่";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_1") {
        text = "1. พิจารณาแก้ไขที่ตั้งสำนักงานของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 2. ดังนี้\n";
        text += "ข้อ 2. สำนักงานของบริษัทตั้งอยู่ ณ จังหวัด .....\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_2") {
        text = "1. พิจารณาอนุมัติการลดทุนจดทะเบียนของบริษัท จำนวน ..... บาท\n";
        text +=
          "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 5. (ทุน) ดังนี้\n";
        text +=
          "ข้อ 5. ทุนของบริษัทกำหนดไว้เป็นจำนวน ..... บาท (.....) แบ่งออกเป็น ..... หุ้น (.....) มูลค่าหุ้นละ ..... บาท (.....)\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_3") {
        text = "1. พิจารณาแต่งตั้งกรรมการและอำนาจกรรมการ\n";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_4") {
        text = "1. พิจารณาแก้ไขเปลี่ยนแปลงชื่อของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 1. ดังนี้\n";
        text += "ข้อ 1. ชื่อบริษัท ..... จำกัด\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_5") {
        text =
          "1. พิจารณาอนุมัติการเพิ่มทุนจดทะเบียนของบริษัท จำนวน ..... บาท\n";
        text +=
          "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 5. (ทุน) ดังนี้\n";
        text +=
          "ข้อ 5. ทุนของบริษัทกำหนดไว้เป็นจำนวน ..... บาท (.....) แบ่งออกเป็น ..... หุ้น (.....) มูลค่าหุ้นละ ..... บาท (.....)\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_6") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมวัตถุประสงค์ของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 3. ดังนี้\n";
        text +=
          "ข้อ 3. วัตถุประสงค์ทั้งหลายของบริษัทมี 29 ข้อ ดังปรากฎในแบบ ว. ที่แนบ\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_7") {
        text = "1. พิจารณาลงมติพิเศษเรื่องการเลิกบริษัท\n";
        text += "2. พิจารณาแต่งตั้งผู้ชำระบัญชี\n";
        text += "3. พิจารณาแต่งตั้งผู้สอบบัญชี (ถ้ามี)\n";
        text += "4. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_8") {
        text = "1. รับรองรายงานการประชุมวิสามัญผู้ถือหุ้นครั้งที่ .....\n";
        text += "2. พิจารณารายงานการชำระบัญชี\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_9") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมตราของบริษัท\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_10") {
        text = "1. รับรองรายงานการประชุมครั้งที่ผ่านมา\n";
        text += "2. พิจารณาการอนุมัติการจ่ายเงินปันผลของบริษัท\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_11") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมข้อบังคับ\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_12") {
        text = "1. พิจารณาการควบบริษัทจำกัด\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "2_20") {
        text = "ป้อนรายละเอียดละเอียดประชุมที่นี่";

        $("textarea[name='agenda']").val(text);
      }

      if (subject === "2_13") {
        $(".hide-general").hide();
        $(".hide-2-14").hide();
        $(".hide-ofb").hide();
        $(".show-ofb").show();

        $("input[name='authorized_position']").val("ผู้ชำระบัญชี");
      } else if (subject === "2_14") {
        $(".hide-general").hide();
        $(".hide-ofb").hide();
        $(".hide-2-14").hide();
        $(".show-2-14").show();

        $("input[name='authorized_position']").val("กรรมการผู้มีอำนาจลงนาม");
      } else {
        $(".hide-ofb").hide();
        $(".hide-2-14").hide();
        $(".hide-general").hide();
        $(".show-general").show();

        $("input[name='authorized_position']").val("กรรมการผู้มีอำนาจลงนาม");
      }
    });
  }

  openModal() {
    var subject = this.refs.subject.value;
    const agenda = this.refs.agenda.value;
    const companyName = this.refs.company_name.value;
    const meeting_no = this.refs.meeting_no.value;
    const announce = this.refs.announce.value;
    const meeting_time = this.refs.meeting_time.value;
    const meeting_place = this.refs.meeting_place.value;
    const honorific = this.refs.honorific.value;
    const authorized_name = this.refs.authorized_name.value;
    const authorized_position = this.refs.authorized_position.value;
    const meeting_date = this.refs.meeting_date.value;
    if (
      subject === "-- เลือกหัวข้อ / เรื่อง --" ||
      agenda === "" ||
      companyName === "" ||
      meeting_no === "" ||
      announce === "" ||
      meeting_time === "-- เลือกเวลาจัดประชุม --" ||
      meeting_place === "" ||
      honorific === "-- เลือกคำนำหน้าชื่อผู้ลงนาม --" ||
      authorized_name === "" ||
      authorized_position === ""
    ) {
      alert(
        "ไม่สามารถดูตัวอย่างประกาศได้ โปรดป้อนข้อมูลให้ครบถ้วน แล้วลองใหม่อีกครั้ง"
      );
    } else {
      ModalManager.open(
        <MyModal
          agenda={agenda}
          companyName={companyName}
          meeting_date={meeting_date}
          meeting_no={meeting_no}
          announce={announce}
          meeting_time={meeting_time}
          meeting_place={meeting_place}
          honorific={honorific}
          authorized_name={authorized_name}
          authorized_position={authorized_position}
          onRequestClose={() => true}
        />
      );
    }
  }

  render() {
   
    var now = new Date().getFullYear() + 543;
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
                <Form.Group
                  name="subject"
                  as={Col}
                  controlId="formGridEmail"
                  required
                >
                  <Form.Label>หัวข้อ / เรื่อง</Form.Label>
                  <span className="require"> *</span>
                  <Form.Control ref="subject" name="subject" as="select">
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
                    {/* <optgroup label="อื่นๆ">
                      <option value="3_1">ลงประกาศแบบรูปภาพ</option>
                    </optgroup> */}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1" required>
                <Form.Label>วาระการประชุม </Form.Label>
                <span className="require"> *</span>
                <Form.Control
                  ref="agenda"
                  name="agenda"
                  as="textarea"
                  rows="5"
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1" required>
                <Form.Label>ชื่อบริษัท / ชื่อหน่วยงาน</Form.Label>
                <span className="require"> *</span>
                <Form.Control ref="company_name" name="company_name" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2" required>
                <Form.Label>ครั้งที่ประชุม</Form.Label>
                <span className="require"> *</span>
                <Form.Control
                  ref="meeting_no"
                  name="meeting_no"
                  placeholder={"1/" + now}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity" required>
                  <Form.Label>ประกาศถึง</Form.Label>
                  <span className="require"> *</span>
                  <Form.Control
                    ref="announce"
                    name="announce"
                    placeholder="ท่านผู้ถือหุ้นของบริษัท"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip" required>
                  <Form.Label>วันที่จัดประชุม</Form.Label>
                  <span className="require"> *</span>
                  <DatePicker
                    ref="meeting_date"
                    name="meeting_date"
                    timePicker={false}
                    min={this.enabledRange.min}
                    value={this.state.values}
                    inputFormat=" D/MM/YYYY"
                    onChange={values => this.setState({ values })}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" required>
                  <Form.Label>เวลาจัดประชุม</Form.Label>
                  <span className="require"> *</span>
                  <Form.Control
                    ref="meeting_time"
                    name="meeting_time"
                    as="select"
                  >
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

              <Form.Group controlId="exampleForm.ControlTextarea1" required>
                <Form.Label>
                  สถานที่จัดประชุม / ที่อยู่บริษัท (กรณีเลิกบริษัท)
                </Form.Label>
                <span className="require"> *</span>
                <Form.Control
                  ref="meeting_place"
                  name="meeting_place"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <Form.Group controlId="formGridZip" required>
                <Form.Label>วันที่ลงประกาศ</Form.Label>
                <span className="require"> *</span>
                <DatePicker
                  name="ads_post_date"
                  timePicker={false}
                  min={this.enabledRange.min}
                  value={this.state.value}
                  inputFormat=" D/MM/YYYY"
                  onChange={value => this.setState({ value })}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState" required>
                  <Form.Label>คำนำหน้าชื่อผู้ลงนาม</Form.Label>
                  <span className="require"> *</span>
                  <Form.Control ref="honorific" name="honorific" as="select">
                    <option>-- เลือกคำนำหน้าชื่อผู้ลงนาม --</option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip" required>
                  <Form.Label>ชื่อ นามสกุลผู้ลงนาม</Form.Label>
                  <span className="require"> *</span>
                  <Form.Control ref="authorized_name" name="authorized_name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridZip" required>
                <Form.Label>ตำแหน่งผู้ลงนาม</Form.Label>
                <span className="require"> *</span>
                <Form.Control
                  ref="authorized_position"
                  name="authorized_position"
                  placeholder="กรรมการผู้มีอำนาจลงนาม"
                />
              </Form.Group>

              <Center>
                <Row>
                  <Center>
                    <Col md={7}>
                      <Button
                        onClick={this.openModal.bind(this)}
                        variant="outline-success"
                      >
                        ตัวอย่างประกาศ
                      </Button>
                    </Col>
                    <br />
                    <br />
                    <Col md={7}>
                      <Button type="submit" variant="success">
                        ลงประกาศ
                      </Button>
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
}

export default postnews;
