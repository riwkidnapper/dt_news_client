import React, { Component } from "react";
import Footer from "../../layout/footer/footer";
import Navbar from "../../layout/navbar/navbar";
import FromPay from "./frompayment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
class payment extends Component {
  render() {
    const {
      data: { amount }
    } = this.props;
    //console.log(amount);
    if (amount >= 10) {
      return (
        <div>
          <Navbar />
          <div>
            <h1 className="payment">{"สรุปยอดเงินที่ต้องชำระ"} </h1>
            <h3 className="payment">
              {"แพ็กเกจ: 40 บาท "}
              {amount}
              {" เครดิต"}
              <br />
              {"ยอดเงินที่ต้องชำระ : "} {40 * amount} {" บาท"}
            </h3>
          </div>
          <FromPay />
          <Footer />
        </div>
      );
    } else if (amount >= 5) {
      return (
        <div>
          <Navbar />
          <div>
            <h1 className="payment">{"สรุปยอดเงินที่ต้องชำระ"} </h1>
            <h3 className="payment">
              {"แพ็กเกจ: 43 บาท "}
              {amount}
              {" เครดิต"}
              <br />
              {"ยอดเงินที่ต้องชำระ : "} {43 * amount} {" บาท"}
            </h3>
          </div>
          <FromPay />
          <Footer />
        </div>
      );
    } else if (amount >= 1) {
      return (
        <div>
          <Navbar />
          <div>
            <h1 className="payment">{"สรุปยอดเงินที่ต้องชำระ"} </h1>
            <h3 className="payment">
              {"แพ็กเกจ: 45 บาท "}
              {amount}
              {" เครดิต"}
              <br />
              {"ยอดเงินที่ต้องชำระ : "} {45 * amount} {" บาท"}
            </h3>
          </div>
          <FromPay />
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/addcredit" />;
    }
  }
}
payment.propTypes = {
  money: PropTypes.number
};
const mapStateToProps = state => ({
  data: state.data
});
export default connect(mapStateToProps)(payment);
