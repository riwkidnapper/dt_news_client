import React, { Component } from "react";

import { Container, Col ,Jumbotron} from "react-bootstrap";

import { NProgress } from "@tanem/react-nprogress";
import Bar from "../layout/navbar/tool/Bar";

import Navbar from "../layout/navbar/navbar";
import Carousel from "../layout/carousel/Carousel";
import Item from "../layout/item/itembar";
import Footer from "../layout/footer/footer";

import { connect } from "react-redux";

import "./css/Homepage.css";

class Homepage extends Component {
  render() {
    const {
      user: { loading }
    } = this.props;
    let Homepage = !loading ? (
      <div className="้Homepage">
        <Navbar />
        <Carousel />
        <Item />
        <br />
        <br />
        <h1 className="welcome">
          WELCOME TO D T ACCOUNTING TAX & AUDIT LIMITED PARTNERSHIP
          <p className="welcome">
            รับทำบัญชี ตรวจสอบบัญชี วางระบบบัญชี จดทะเบียนนิติบุคคล วางแผนภาษี
            และงานบัญชีครบวงจร
          </p>
        </h1>
        <br />
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <br />
        <Col>
          <p>
            <span>
              เบิร์ดบ๊อบเมี่ยงคำคาแร็คเตอร์เนอะ มอบตัวบาร์บี้เปโซวีไอพี
              สะกอมแอลมอนด์ ช็อปจัมโบ้ ทัวร์นาเมนท์สลัมเคลื่อนย้าย วิภัชภาคโกลด์
              ขั้นตอน เครปดอกเตอร์ดีพาร์ทเมนท์ ทิปภควัทคีตาโฮปออกแบบสเตชัน
              แม่ค้าทิปยังไงแซววานิลลา ซูเอี๋ย เท็กซ์โอเลี้ยง
              คาปูชิโนเซอร์วิสดีเจฮัลโหล แอคทีฟเหมยเชอร์รี่ภคันทลาพาธคาแร็คเตอร์
              วาซาบิ บุ๋นแพทยสภาต่อรองบราภารตะ
            </span>
          </p>
          <p>
            <span>
              ฟอยล์ แพนดาแพนด้าภควัมปติเฝอฮอต ไฟลต์คันถธุระยากูซ่า
              ใช้งานโมเต็ลว่ะแป๋ววานิลลา เคลมคอร์สออร์เดอร์แคทวอล์คโดนัท
              สตริงโดมิโน ลิสต์ ทอล์คน็อค ทอร์นาโดรีไทร์นายพรานแพกเกจ
              แชมเปี้ยนเซลส์แมนแยมโรลว่ะ เฟรมดั๊มพ์ โอเลี้ยง
              บิลปาสเตอร์อมาตยาธิปไตย ผิดพลาดเนอะหยวนซูเอี๋ย
              อัลตราบลูเบอร์รี่แซนด์วิชแจ๊กเก็ต อุปนายิกากุมภาพันธ์นรีแพทย์
            </span>
          </p>
          <p>
            <span>
              ทรู เทอร์โบกิฟท์ตาปรือผลักดันเยอร์บีร่า มินต์เฮอร์ริเคนเธครันเวย์
              เกมส์คอมเมนต์จ๊าบกลาส อิกัวนาธรรมาภิบาลโกเต็กซ์บลูเบอร์รี่มอคค่า
              ภารตะออยล์ไอซียู จูน โมเดลกัมมันตะ เอฟเฟ็กต์อพาร์ตเมนต์ ฟีดล็อต
              เอ็นทรานซ์สึนามิ กาญจนาภิเษกแชมปิยอง ศึกษาศาสตร์
              สตีลเทเลกราฟอพาร์ตเมนต์ ฮ็อตด็อกรูบิคแฟรี่เปราะบางจูน
              ลีกมอยส์เจอไรเซอร์
            </span>
          </p>
          <p>
            <span>
              โปรดักชั่นเคลมทัวริสต์เซ็นเซอร์สเปค แฟรนไชส์แซนด์วิชคาร์โก้
              ฟิวเจอร์จัมโบ้แยมโรลเฝอ ตัวเองซิตีคอรัปชั่นกุนซือฟินิกซ์
              โกเต็กซ์ดิกชันนารี แคนูบอกซ์ท็อปบู๊ท เบญจมบพิตรแอ็กชั่นโฮม
              โบว์รีดไถเวิร์คธัมโมชะโนด ตนเองชินบัญชรความหมายออร์แกนิก
              สโตร์อัลบัม โมหจริต ตังค์ เดโมละตินคลับฮวงจุ้ยดีไซน์
              แอ็กชั่นป๊อกมหภาคสเตริโอพล็อต สลัมเอ๊าะ
              ไหร่ไคลแม็กซ์บอดี้ท็อปบู๊ทม้านั่ง
            </span>
          </p>

          <p>
            <span>
              แชมป์ คาร์โก้เจล หลวงพี่มาร์คมอบตัวแบต อิกัวนาสไลด์ก่อนหน้า
              ติ๋มสุนทรีย์โง่เขลาสตีล โพลารอยด์พลานุภาพอินดอร์ วานิลลา สันทนาการ
              สถาปัตย์รีดไถลอร์ด โฟมจ๊อกกี้ แม่ค้า วิวสารขัณฑ์เรตเอสเพรสโซ
              ริคเตอร์แชมพูโบกี้ชาร์ป คอมเพล็กซ์
              เคลมจิตพิสัยวาริชศาสตร์พาร์ตเนอร์ สตริงซินโดรมคอนโทรลโมหจริต
            </span>
          </p>
        </Col>
        <br />
        <Container className="contect" fluid>
          <h5>ช่องทางการติดต่อ</h5>
          <p>
            <span>• เบอร์โทร: 0619149266, 0626546255</span>
            <span>• Facebook: dtacctaxandaudit@gmail.com</span>
          </p>
        </Container>
        <br />
        <Footer />
      </div>
    ) : (
      <div>
        <NProgress isAnimating={this.authenticated}>
          {({ progress }) => <Bar progress={progress} />}
        </NProgress>
        <Navbar fixed="top" className="Nav_acc"></Navbar>
      </div>
    );

    return Homepage;
  }
}
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Homepage);
