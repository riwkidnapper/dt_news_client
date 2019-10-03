import React, { Component } from "react";
import Footer from "../layout/footer/footer";
import Navbar from "../layout/navbar/navbar";
import check from "../assets/check.gif";
class success extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img className="success" src={check} alt="check" />
        <div className="text_success">
          คุณได้ยืนยันการชำระเรียบร้อยแล้วกรุณารอเจ้าหน้าที่
          ตรวจสอบยอดเงินและเพิ่มเครดิตให้ภายใน 24 ชม.
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default success;
