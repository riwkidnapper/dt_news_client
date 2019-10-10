import React from "react";
import PropTypes from "prop-types";
import { Container, Col, Jumbotron } from "react-bootstrap";
import { NProgress } from "@tanem/react-nprogress";
import Bar from "../layout/navbar/tool/Bar";
import NavBar from "../layout/navbar/navbar";
import Carousels from "../layout/carousel/Carousel";
import Item from "../layout/item/itembar";
import Footer from "../layout/footer/footer";
import { connect } from "react-redux";
import { getIndex } from "../redux/actions/dataActions";

import "./css/Homepage.css";

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getIndex();
  }

  render() {
    const {
      user: { loading }
    } = this.props;
    const { title, subtitle, detail, image } = this.props.data.payload;
    let homepage = !loading ? (
      <div className="้Homepage">
        <NavBar />
        <Carousels image={image} />
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
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </Container>
        </Jumbotron>
        <br />
        <Col>
          <p>{detail}</p>
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
        <NavBar fixed="top" className="Nav_acc"></NavBar>
      </div>
    );

    return homepage;
  }
}

HomePage.propTypes = {
  getIndex: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.index,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getIndex }
)(HomePage);
