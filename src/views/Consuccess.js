import React, { Component } from "react";
import Footer from "../layout/footer/footer";
import Navbar from "../layout/navbar/navbar";
import check from "../assets/check.gif";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Consuccess extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      data: { amount }
    } = this.props;
    if (amount >= 1) {
      return (
        <div>
          <Navbar />
          <img className="success" src={check} alt="check" />
          <div className="text_success">
            คุณได้ทำการเติมเครดิตเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ
            <br />
            กรุณาชำระเงินและแจ้งการชำระเงินเพื่อให้เจ้าหน้าที่ดำเนินการให้ขั้นต่อไป.
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
    } else {
      return <Redirect to="/addcredit" />;
    }
  }
}
const mapStateToProps = state => ({
  data: state.data
});
export default connect(mapStateToProps)(Consuccess);
