import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./footer.css";
export class footer extends Component {
  render() {
    return (
      <footer className="footerr">
        <Container fluid>
          <p className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <a className="copyright link" href="/">
              D T ACC TAX AND AUDIT
            </a>
            <span> ห้างหุ้นส่วนจำกัด ดี ที การบัญชี ภาษี และตรวจสอบ</span>
            <span> D T ACCOUNTING TAX AND AUDIT LIMITED PARTNERSHIP </span>
            <span>
              เลขที่ 113/2 หมู่ที่ 3 ตำบลดอนศรีชุม อำเภอดอกคำใต้ จังหวัดพะเยา
              56120
            </span>
            <span className="slogan" style={{ fontSize: 12 }}>
              " รับทำบัญชี ตรวจสอบบัญชี วางระบบบัญชี จดทะเบียนนิติบุคคล
              วางแผนภาษี และงานบัญชีครบวงจร "
            </span>
          </p>
        </Container>
      </footer>
    );
  }
}

export default footer;
