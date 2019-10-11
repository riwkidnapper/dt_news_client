import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { deleteImage } from "../../redux/actions/dataActions";

class ImageShow extends Component {
  stateDelete = () => {
    this.props.deleteImage(this.props.url);
  };

  render() {
    const { url } = this.props;
    return (
      <div>
        <br />
        <Row>
          <Col>
            <img className="preview" src={url} alt="preview" height="100" />
          </Col>
          <Col md="3">
            <Button
              style={{ marginLeft: "5%", marginTop: "10%" }}
              variant="outline-danger"
              onClick={this.stateDelete}
            >
              ลบรูปภาพ
            </Button>
          </Col>
          <br />
        </Row>
      </div>
    );
  }
}

ImageShow.propTypes = {
  deleteImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteImage }
)(ImageShow);
