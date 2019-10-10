import React from "react";
import { Container } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input
} from "reactstrap";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Form } from "react-bootstrap";

class Pagemodify extends React.Component {
  state = {
    template: [
      "Fluid jumbotron\nThis is a modified jumbotron that occupies the entirehorizontal space of its parent."
    ],
    body: [
      "เบิร์ดบ๊อบเมี่ยงคำคาแร็คเตอร์เนอะ มอบตัวบาร์บี้เปโซวีไอพี สะกอมแอลมอนด์ ช็อปจัมโบ้ ทัวร์นาเมนท์สลัมเคลื่อนย้าย วิภัชภาคโกลด์ ขั้นตอน เครปดอกเตอร์ดีพาร์ทเมนท์ ทิปภควัทคีตาโฮปออกแบบสเตชัน แม่ค้าทิปยังไงแซววานิลลา ซูเอี๋ย เท็กซ์โอเลี้ยง คาปูชิโนเซอร์วิสดีเจฮัลโหล แอคทีฟเหมยเชอร์รี่ภคันทลาพาธคาแร็คเตอร์ วาซาบิ บุ๋นแพทยสภาต่อรองบราภารตะ\nฟอยล์ แพนดาแพนด้าภควัมปติเฝอฮอต ไฟลต์คันถธุระยากูซ่า ใช้งานโมเต็ลว่ะแป๋ววานิลลา เคลมคอร์สออร์เดอร์แคทวอล์คโดนัท สตริงโดมิโน ลิสต์ ทอล์คน็อค ทอร์นาโดรีไทร์นายพรานแพกเกจ แชมเปี้ยนเซลส์แมนแยมโรลว่ะ เฟรมดั๊มพ์ โอเลี้ยง บิลปาสเตอร์อมาตยาธิปไตย ผิดพลาดเนอะหยวนซูเอี๋ย อัลตราบลูเบอร์รี่แซนด์วิชแจ๊กเก็ต อุปนายิกากุมภาพันธ์นรีแพทย์\nทรู เทอร์โบกิฟท์ตาปรือผลักดันเยอร์บีร่า มินต์เฮอร์ริเคนเธครันเวย์ เกมส์คอมเมนต์จ๊าบกลาส อิกัวนาธรรมาภิบาลโกเต็กซ์บลูเบอร์รี่มอคค่า ภารตะออยล์ไอซียู จูน โมเดลกัมมันตะ เอฟเฟ็กต์อพาร์ตเมนต์ ฟีดล็อต เอ็นทรานซ์สึนามิ กาญจนาภิเษกแชมปิยอง ศึกษาศาสตร์ สตีลเทเลกราฟอพาร์ตเมนต์ ฮ็อตด็อกรูบิคแฟรี่เปราะบางจูน ลีกมอยส์เจอไรเซอร์\nโปรดักชั่นเคลมทัวริสต์เซ็นเซอร์สเปค แฟรนไชส์แซนด์วิชคาร์โก้ ฟิวเจอร์จัมโบ้แยมโรลเฝอ ตัวเองซิตีคอรัปชั่นกุนซือฟินิกซ์ โกเต็กซ์ดิกชันนารี แคนูบอกซ์ท็อปบู๊ท เบญจมบพิตรแอ็กชั่นโฮม โบว์รีดไถเวิร์คธัมโมชะโนด ตนเองชินบัญชรความหมายออร์แกนิก สโตร์อัลบัม โมหจริต ตังค์ เดโมละตินคลับฮวงจุ้ยดีไซน์ แอ็กชั่นป๊อกมหภาคสเตริโอพล็อต สลัมเอ๊าะ ไหร่ไคลแม็กซ์บอดี้ท็อปบู๊ทม้านั่ง\nแชมป์ คาร์โก้เจล หลวงพี่มาร์คมอบตัวแบต อิกัวนาสไลด์ก่อนหน้า ติ๋มสุนทรีย์โง่เขลาสตีล โพลารอยด์พลานุภาพอินดอร์ วานิลลา สันทนาการ สถาปัตย์รีดไถลอร์ด โฟมจ๊อกกี้ แม่ค้า วิวสารขัณฑ์เรตเอสเพรสโซ ริคเตอร์แชมพูโบกี้ชาร์ป คอมเพล็กซ์ เคลมจิตพิสัยวาริชศาสตร์พาร์ตเนอร์ สตริงซินโดรมคอนโทรลโมหจริต"
    ],
    preview: "",
    edit: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  editpage = () => {
    this.setState({
      edit: !this.state.edit
    });
    console.log(this.state.edit);
  };

  handleCancel = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  fileUploaded = ev => {
    const reader = new FileReader();
    reader.readAsDataURL(ev.target.files[0]);
    reader.onloadend = ev => {
      this.setState({ preview: reader.result });
    };
  };

  render() {
    const { edit, preview } = this.state;
    return !edit ? (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">
                    &nbsp;&nbsp;&nbsp;&nbsp;ปรับแต่งหน้าเว็บไซส์
                  </CardTitle>
                  <h6 className="file-head">อัปโหลดรูปภาพของคุณ</h6>
                  <h6 className="text-head">
                    รูปภาพใช้แสดงในหน้าแรกของเว็บไซต์
                  </h6>
                  <br />
                  <div className="file-drag">
                    &nbsp;&nbsp; &nbsp;&nbsp; {"สไลด์โชว์"}
                    <br />
                    <br />
                    <img
                      className="preview"
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Findex%2Fslide-1.png?alt=media"
                      }
                      alt="preview"
                      height="50"
                    />
                    <Button variant="outline-danger">ลบรูปภาพ</Button>
                    <br />
                    <br />
                    <img
                      className="preview"
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/news-48fc7.appspot.com/o/images%2Findex%2Fslide-2.png?alt=media"
                      }
                      alt="preview"
                      height="50"
                    />
                    <Button variant="outline-danger">ลบรูปภาพ</Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <br />
                  <div className="texthead">
                    <Container>
                      <h1>Fluid jumbotron</h1>
                      <p>
                        This is a modified jumbotron that occupies the entire
                        horizontal space of its parent.
                      </p>
                    </Container>
                  </div>
                  <br />
                  <br />
                  <div className="edittext">
                    <Col>
                      <p>
                        <span>
                          เบิร์ดบ๊อบเมี่ยงคำคาแร็คเตอร์เนอะ
                          มอบตัวบาร์บี้เปโซวีไอพี สะกอมแอลมอนด์ ช็อปจัมโบ้
                          ทัวร์นาเมนท์สลัมเคลื่อนย้าย วิภัชภาคโกลด์ ขั้นตอน
                          เครปดอกเตอร์ดีพาร์ทเมนท์ ทิปภควัทคีตาโฮปออกแบบสเตชัน
                          แม่ค้าทิปยังไงแซววานิลลา ซูเอี๋ย เท็กซ์โอเลี้ยง
                          คาปูชิโนเซอร์วิสดีเจฮัลโหล
                          แอคทีฟเหมยเชอร์รี่ภคันทลาพาธคาแร็คเตอร์ วาซาบิ
                          บุ๋นแพทยสภาต่อรองบราภารตะ
                        </span>
                      </p>
                      <p>
                        <span>
                          ฟอยล์ แพนดาแพนด้าภควัมปติเฝอฮอต ไฟลต์คันถธุระยากูซ่า
                          ใช้งานโมเต็ลว่ะแป๋ววานิลลา
                          เคลมคอร์สออร์เดอร์แคทวอล์คโดนัท สตริงโดมิโน ลิสต์
                          ทอล์คน็อค ทอร์นาโดรีไทร์นายพรานแพกเกจ
                          แชมเปี้ยนเซลส์แมนแยมโรลว่ะ เฟรมดั๊มพ์ โอเลี้ยง
                          บิลปาสเตอร์อมาตยาธิปไตย ผิดพลาดเนอะหยวนซูเอี๋ย
                          อัลตราบลูเบอร์รี่แซนด์วิชแจ๊กเก็ต
                          อุปนายิกากุมภาพันธ์นรีแพทย์
                        </span>
                      </p>
                      <p>
                        <span>
                          ทรู เทอร์โบกิฟท์ตาปรือผลักดันเยอร์บีร่า
                          มินต์เฮอร์ริเคนเธครันเวย์ เกมส์คอมเมนต์จ๊าบกลาส
                          อิกัวนาธรรมาภิบาลโกเต็กซ์บลูเบอร์รี่มอคค่า
                          ภารตะออยล์ไอซียู จูน โมเดลกัมมันตะ
                          เอฟเฟ็กต์อพาร์ตเมนต์ ฟีดล็อต เอ็นทรานซ์สึนามิ
                          กาญจนาภิเษกแชมปิยอง ศึกษาศาสตร์
                          สตีลเทเลกราฟอพาร์ตเมนต์ ฮ็อตด็อกรูบิคแฟรี่เปราะบางจูน
                          ลีกมอยส์เจอไรเซอร์
                        </span>
                      </p>
                      <p>
                        <span>
                          โปรดักชั่นเคลมทัวริสต์เซ็นเซอร์สเปค
                          แฟรนไชส์แซนด์วิชคาร์โก้ ฟิวเจอร์จัมโบ้แยมโรลเฝอ
                          ตัวเองซิตีคอรัปชั่นกุนซือฟินิกซ์ โกเต็กซ์ดิกชันนารี
                          แคนูบอกซ์ท็อปบู๊ท เบญจมบพิตรแอ็กชั่นโฮม
                          โบว์รีดไถเวิร์คธัมโมชะโนด
                          ตนเองชินบัญชรความหมายออร์แกนิก สโตร์อัลบัม โมหจริต
                          ตังค์ เดโมละตินคลับฮวงจุ้ยดีไซน์
                          แอ็กชั่นป๊อกมหภาคสเตริโอพล็อต สลัมเอ๊าะ
                          ไหร่ไคลแม็กซ์บอดี้ท็อปบู๊ทม้านั่ง
                        </span>
                      </p>

                      <p>
                        <span>
                          แชมป์ คาร์โก้เจล หลวงพี่มาร์คมอบตัวแบต
                          อิกัวนาสไลด์ก่อนหน้า ติ๋มสุนทรีย์โง่เขลาสตีล
                          โพลารอยด์พลานุภาพอินดอร์ วานิลลา สันทนาการ
                          สถาปัตย์รีดไถลอร์ด โฟมจ๊อกกี้ แม่ค้า
                          วิวสารขัณฑ์เรตเอสเพรสโซ ริคเตอร์แชมพูโบกี้ชาร์ป
                          คอมเพล็กซ์ เคลมจิตพิสัยวาริชศาสตร์พาร์ตเนอร์
                          สตริงซินโดรมคอนโทรลโมหจริต
                        </span>
                      </p>
                    </Col>
                  </div>
                </CardBody>
                <br />
                <br />
                <Fab
                  onClick={this.editpage}
                  style={{
                    marginLeft: "80%",
                    backgroundColor: "rgba(84,149,13, 0.81)",
                    color: "white"
                  }}
                  aria-label="edit"
                >
                  <EditIcon />
                </Fab>
                <br />
                <br />
              </Card>
            </Col>
          </Row>
        </div>
      </>
    ) : (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  &nbsp;&nbsp;&nbsp;&nbsp;ปรับแต่งหน้าเว็บไซส์
                </CardTitle>
                <h6 className="file-head">อัปโหลดรูปภาพของคุณ</h6>
                <h6 className="text-head">รูปภาพใช้แสดงในหน้าแรกของเว็บไซต์</h6>
                <br />
                <div className="file-dragedit">
                  <Input
                    onChange={this.fileUploaded}
                    type="file"
                    label="Upload"
                    accept="image/*"
                    ref={ref => (this.fileUpload = ref)}
                  />
                </div>
                <br />
                <div className="file-bt">
                  <Button variant="secondary" block>
                    อัปโหลดรูปภาพ
                  </Button>
                </div>
                <br />
                {preview && (
                  <img
                    className="previewFile"
                    src={preview}
                    alt="preview"
                    width="80"
                  />
                )}
              </CardHeader>
              <CardBody>
                <br />
                <div className="texthead">
                  <Container>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>ส่วนหัว</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        defaultValue={this.state.template}
                      />
                    </Form.Group>
                  </Container>
                </div>
                <br />
                <br />
                <div className="edittext">
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>ส่วนเนื้อหา</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="15"
                        defaultValue={this.state.body}
                      />
                    </Form.Group>
                  </Col>
                </div>
              </CardBody>
              <br />
              <br />
              <div>
                <Fab
                  onClick={this.handleSummit}
                  style={{
                    marginLeft: "73%",
                    backgroundColor: "rgba(84,149,13, 0.81)",
                    color: "white"
                  }}
                  aria-label="edit"
                >
                  <CheckIcon />
                </Fab>
                <Fab
                  onClick={this.handleCancel}
                  style={{
                    marginLeft: "80%",
                    marginTop: "-7%",
                    backgroundColor: "#FC4C4C",
                    color: "white"
                  }}
                  aria-label="edit"
                >
                  <CloseIcon />
                </Fab>
              </div>
              <br />
              <br />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pagemodify;
