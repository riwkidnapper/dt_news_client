import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteImage } from "../../redux/actions/dataActions";

class ImageShow extends Component {

  stateDelete = () => {
    this.props.deleteImage(this.props.url);
  };

  render() {
    const {
      url
    } = this.props;
    return (
      <div>
        <br />
        <img
          className="preview"
          src={url}
          alt="preview"
          height="50"
        />
        <Button
          variant="outline-danger"
          onClick={this.stateDelete}
        >ลบรูปภาพ</Button>
        <br />
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
