import React from "react";

import PropTypes from "prop-types";
import $ from "jquery";
import Center from "react-center";
import { Form, Col, Button, Row, Spinner } from "react-bootstrap";

import { ModalManager } from "react-dynamic-modal";
import moment from "moment-jalaali";

import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";
import MyModal from "../components/modals";
import { connect } from "react-redux";
import { postNews } from "../redux/actions/userActions";
import "../css/postnews.css";

class postnews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_date: "",
      subject: "",
      agenda: "",
      companyName: "",
      meeting_time: "",
      meeting_date: "",
      meeting_place: "",
      meeting_no: "",
      announce: "",
      honorific: "",
      authorized_name: "",
      authorized_position: ""
    };
    this.enabledRange = {
      min: moment().startOf("month")
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    $("select[name='subject']").bind("change", function() {
      var subject = $("select[name='subject']").val();
      var text;

      if (subject === "") {
        $("textarea[name='agenda']").val("");
      } else if (subject === "ประชุมปิดงบประจำปี") {
        text = "1. รับรองรายงานการประชุมครั้งที่ผ่านมา\n";
        text += "2. รายงานผลการดำเนินงานของบริษัทและรับรองงบการเงินประจำปี\n";
        text += "3. พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าตอบแทนประจำปี\n";
        text +=
          "4. พิจารณาแต่งตั้งคณะกรรมการแทนกรรมการที่จะครบกำหนดออกตามวาระ\n";
        text +=
          "5. พิจารณาเงินปันผล การจัดสรรทุนสำรองตามกฎหมายและบำเหน็จกรรมการ\n";
        text += "6. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "กำหนดรายละเอียดการประชุมเอง") {
        text = "ป้อนรายละเอียดละเอียดประชุมที่นี่";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมย้ายที่อยู่") {
        text = "1. พิจารณาแก้ไขที่ตั้งสำนักงานของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 2. ดังนี้\n";
        text += "ข้อ 2. สำนักงานของบริษัทตั้งอยู่ ณ จังหวัด .....\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมลดทุน") {
        text = "1. พิจารณาอนุมัติการลดทุนจดทะเบียนของบริษัท จำนวน ..... บาท\n";
        text +=
          "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 5. (ทุน) ดังนี้\n";
        text +=
          "ข้อ 5. ทุนของบริษัทกำหนดไว้เป็นจำนวน ..... บาท (.....) แบ่งออกเป็น ..... หุ้น (.....) มูลค่าหุ้นละ ..... บาท (.....)\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเปลี่ยนกรรมการ") {
        text = "1. พิจารณาแต่งตั้งกรรมการและอำนาจกรรมการ\n";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเปลี่ยนชื่อบริษัท") {
        text = "1. พิจารณาแก้ไขเปลี่ยนแปลงชื่อของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 1. ดังนี้\n";
        text += "ข้อ 1. ชื่อบริษัท ..... จำกัด\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเพิ่มทุน") {
        text =
          "1. พิจารณาอนุมัติการเพิ่มทุนจดทะเบียนของบริษัท จำนวน ..... บาท\n";
        text +=
          "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 5. (ทุน) ดังนี้\n";
        text +=
          "ข้อ 5. ทุนของบริษัทกำหนดไว้เป็นจำนวน ..... บาท (.....) แบ่งออกเป็น ..... หุ้น (.....) มูลค่าหุ้นละ ..... บาท (.....)\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเพิ่มวัตถุประสงค์") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมวัตถุประสงค์ของบริษัท\n";
        text += "2. พิจารณาแก้ไขเพิ่มเติมหนังสือบริคณห์สนธิ ข้อ 3. ดังนี้\n";
        text +=
          "ข้อ 3. วัตถุประสงค์ทั้งหลายของบริษัทมี 29 ข้อ ดังปรากฎในแบบ ว. ที่แนบ\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเลิกบริษัท") {
        text = "1. พิจารณาลงมติพิเศษเรื่องการเลิกบริษัท\n";
        text += "2. พิจารณาแต่งตั้งผู้ชำระบัญชี\n";
        text += "3. พิจารณาแต่งตั้งผู้สอบบัญชี (ถ้ามี)\n";
        text += "4. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมเสร็จชำระบัญชี") {
        text = "1. รับรองรายงานการประชุมวิสามัญผู้ถือหุ้นครั้งที่ .....\n";
        text += "2. พิจารณารายงานการชำระบัญชี\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมแก้ไขเพิ่มเติมตราบริษัท") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมตราของบริษัท\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "กำหนดรายละเอียดการประชุมเอง") {
        text = "1. รับรองรายงานการประชุมครั้งที่ผ่านมา\n";
        text += "2. พิจารณาการอนุมัติการจ่ายเงินปันผลของบริษัท\n";
        text += "3. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมแก้ไขข้อบังคับ") {
        text = "1. พิจารณาแก้ไขเพิ่มเติมข้อบังคับ\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "ประชุมแก้ไขข้อบังคับ") {
        text = "1. พิจารณาการควบบริษัทจำกัด\n";
        text += "2. พิจารณาเรื่องอื่นๆ (ถ้ามี)";

        $("textarea[name='agenda']").val(text);
      } else if (subject === "กำหนดรายละเอียดการประชุมเอง") {
        text = "ป้อนรายละเอียดละเอียดประชุมที่นี่";

        $("textarea[name='agenda']").val(text);
      }

      // if (subject === "ประกาศเลิกบริษัท") {
      //   $(".hide-general").hide();
      //   $(".hide-2-14").hide();
      //   $(".hide-ofb").hide();
      //   $(".show-ofb").show();

      //   $("input[name='authorized_position']").val("ผู้ชำระบัญชี");
      // } else if (subject === "ประกาศจ่ายเงินปันผล") {
      //   $(".hide-general").hide();
      //   $(".hide-ofb").hide();
      //   $(".hide-2-14").hide();
      //   $(".show-2-14").show();

      //   $("input[name='authorized_position']").val("กรรมการผู้มีอำนาจลงนาม");
      // } else {
      //   $(".hide-ofb").hide();
      //   $(".hide-2-14").hide();
      //   $(".hide-general").hide();
      //   $(".show-general").show();

      //   $("input[name='authorized_position']").val("กรรมการผู้มีอำนาจลงนาม");
      // }
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
    const post_date = this.refs.post_date.value;
    const meeting_date = this.refs.meeting_date.value;

    // if (
    //   subject === "-- เลือกหัวข้อ / เรื่อง --" ||
    //   agenda === "" ||
    //   companyName === "" ||
    //   meeting_no === "" ||
    //   announce === "" ||
    //   meeting_time === "-- เลือกเวลาจัดประชุม --" ||
    //   meeting_place === "" ||
    //   honorific === "-- เลือกคำนำหน้าชื่อผู้ลงนาม --" ||
    //   authorized_name === "" ||
    //   authorized_position === ""
    // ) {
    //   alert(
    //     "ไม่สามารถดูตัวอย่างประกาศได้ โปรดป้อนข้อมูลให้ครบถ้วน แล้วลองใหม่อีกครั้ง"
    //   );
    // } else {
    ModalManager.open(
      <MyModal
        subject={subject}
        agenda={agenda}
        companyName={companyName}
        post_date={post_date}
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
    // }
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = {
      post_date: this.refs.post_date.value,
      subject: this.refs.subject.value,
      agenda: this.refs.agenda.value,
      companyName: this.refs.company_name.value,
      meeting_time: this.refs.meeting_time.value,
      meeting_date: this.refs.meeting_date.value,
      meeting_place: this.refs.meeting_place.value,
      meeting_no: this.refs.meeting_no.value,
      announce: this.refs.announce.value,
      honorific: this.refs.honorific.value,
      authorized_name: this.refs.authorized_name.value,
      authorized_position: this.refs.authorized_position.value
    };
    this.props.postNews(data, this.props.history);
  };
  render() {
    const {
      UI: { loading }
    } = this.props;
    var now = new Date().getFullYear() + 543;
    return (
      <div>
        <div className="post_">
          <Navbar />
          <div className="topName">
            <h1>ลงประกาศ</h1>
          </div>
          <br /> <br />
          <Center>
            <form onSubmit={this.handleSubmit} className="post">
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
                      <option value="ประชุมปิดงบประจำปี">
                        เชิญประชุมปิดงบประจำปี
                      </option>
                      <option value="กำหนดรายละเอียดการประชุมเอง">
                        กำหนดรายละเอียดการประชุมเอง
                      </option>
                    </optgroup>
                    <optgroup label="วิสามัญ">
                      <option value="ประชุมย้ายที่อยู่">
                        เชิญประชุมย้ายที่อยู่
                      </option>
                      <option value="ประชุมลดทุน">เชิญประชุมลดทุน</option>
                      <option value="ประชุมเปลี่ยนกรรมการ">
                        เชิญประชุมเปลี่ยนกรรมการ
                      </option>
                      <option value="ประชุมเปลี่ยนชื่อบริษัท">
                        เชิญประชุมเปลี่ยนชื่อบริษัท
                      </option>
                      <option value="ประชุมเพิ่มทุน">เชิญประชุมเพิ่มทุน</option>
                      <option value="ประชุมเพิ่มวัตถุประสงค์">
                        เชิญประชุมเพิ่มวัตถุประสงค์
                      </option>
                      <option value="ประชุมเลิกบริษัท">
                        เชิญประชุมเลิกบริษัท
                      </option>
                      <option value="ประชุมเสร็จชำระบัญชี">
                        เชิญประชุมเสร็จชำระบัญชี
                      </option>
                      <option value="ประชุมแก้ไขเพิ่มเติมตราบริษัท">
                        เชิญประชุมแก้ไขเพิ่มเติมตราบริษัท
                      </option>
                      <option value="ประชุมอนุมัติเงินปันผล">
                        เชิญประชุมอนุมัติเงินปันผล
                      </option>
                      <option value="ประชุมแก้ไขข้อบังคับ">
                        เชิญประชุมแก้ไขข้อบังคับ
                      </option>
                      <option value="ประชุมแก้ไขข้อบังคับ">
                        เชิญประชุมแก้ไขข้อบังคับ
                      </option>
                      {/* <option value="ประกาศเลิกบริษัท">ประกาศเลิกบริษัท</option> */}
                      <option value="ประกาศจ่ายเงินปันผล">
                        ประกาศจ่ายเงินปันผล
                      </option>
                      <option value="กำหนดรายละเอียดการประชุมเอง">
                        กำหนดรายละเอียดการประชุมเอง
                      </option>
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

                  <input
                    ref="post_date"
                    type="date"
                    name="post_date"
                    className="form-control"
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
                <input
                  ref="meeting_date"
                  type="date"
                  name="meeting_date"
                  className="form-control"
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
                        {"ลงประกาศ"}
                        {loading && (
                          <Spinner
                            animation="border"
                            variant="success"
                            className="progress"
                          />
                        )}
                      </Button>
                    </Col>
                  </Center>
                </Row>
              </Center>
            </form>
          </Center>
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
postnews.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  postNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { postNews }
)(postnews);
