import React, { Component } from "react";
import FormPay from "./formpayment";
import Footer from "../../layout/footer/footer";
import Navbar from "../../layout/navbar/navbar";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const {
      data: { amount }
    } = this.props;
    console.log(amount);
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
            <br />
            {"ยอดเงินที่ต้องชำระ : "} {43 * amount} {" บาท"}
            <br />
            {"ยอดเงินที่ต้องชำระ : "} {40 * amount} {" บาท"}
          </h3>
        </div>
        <FormPay />
        <Footer />
      </div>
    );
  }
}
payment.propTypes = {
  money: PropTypes.number
};
const mapStateToProps = state => ({
  data: state.data,
  user: state.user
});
export default connect(mapStateToProps)(payment);
