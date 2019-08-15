import React from "react";
import { Container, Row } from "reactstrap";

import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {new Date().getFullYear()}{" "}
                <span> ห้างหุ้นส่วนจำกัด ดี ที การบัญชี ภาษี และตรวจสอบ</span>
                <a className="copyrightx" href="/">
                  D T ACC TAX AND AUDIT
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
