import React from "react";
import PropTypes from "prop-types";
import { Container, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Input
} from "reactstrap";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Form } from "react-bootstrap";
import { getIndex, editIndex, uploadImage } from "../redux/actions/dataActions";
import ImageShow from "./lib/imageshow";

class PageModify extends React.Component {
  state = {
    preview: "",
    edit: false,
    loading: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getIndex();
  }

  editpage = () => {
    window.scrollTo(0, 0);
    this.setState({
      edit: !this.state.edit,
      preview: "",
      loading: false
    });
    console.log(this.state.loading);
  };

  handleSummit = async () => {
    window.scrollTo(0, 0);
    if (this.state.file != null) {
      const image = this.state.file;
      const formData = new FormData();
      formData.append("image", image, image.name);
      this.props.uploadImage(formData);
    }
    const data = {
      title: this.refs.title.value,
      subtitle: this.refs.subtitle.value,
      detail: this.refs.detail.value
    };

    this.props.editIndex(data);
    this.setState({
      edit: !this.state.edit,
      preview: "",
      loading: true
    });
  };

  handleCancel = () => {
    window.scrollTo(0, 0);
    this.setState({
      edit: !this.state.edit,
      preview: ""
    });
  };

  fileUploaded = ev => {
    var file = ev.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = ev => {
        this.setState({
          preview: reader.result,
          file: file
        });
      };
    } else {
      this.setState({
        preview: "",
        file: null
      });
    }
  };

  render() {
    const { edit, preview, loading } = this.state;
    const { title, subtitle, detail, image } = this.props.data.payload;

    let images = image.map((value, index) => (
      <ImageShow key={index} url={value} />
    ));
    return !edit ? (
      loading === false ? (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">
                      &nbsp;&nbsp;&nbsp;&nbsp;ปรับแต่งหน้าเว็บไซส์
                    </CardTitle>
                    <h6 className="file-head">อัปโหลดรูปภาพของคุณ</h6>
                    <h6 className="text-head">
                      รูปภาพใช้แสดงในหน้าแรกของเว็บไซต์
                    </h6>
                    <br />
                    <h6 className="size">ขนาดรูปภาพควรเท่ากับ 1688*550</h6>
                    <div className="file-drag">
                      &nbsp;&nbsp; &nbsp;&nbsp; {"สไลด์โชว์"}
                      <br />
                      {images}
                    </div>
                  </CardHeader>
                  <CardBody>
                    <br />
                    <div className="texthead">
                      <Container>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                      </Container>
                    </div>
                    <br />
                    <br />
                    <div className="edittext">
                      <Col>{detail}</Col>
                    </div>
                  </CardBody>
                  <br />
                  <br />
                  <Fab
                    onClick={this.editpage}
                    style={{
                      marginLeft: "80%",
                      backgroundColor: "rgba(84,149,13, 0.81)",
                      color: "white"
                    }}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </Fab>
                  <br />
                  <br />
                </Card>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <div className="Spinner-download">
          {loading && (
            <Spinner
              className="Spinner-download"
              style={{
                marginLeft: "30px",
                marginRight: "30px"
              }}
              animation="border"
              variant="success"
            />
          )}
          {" Loading... "}
        </div>
      )
    ) : (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  &nbsp;&nbsp;&nbsp;&nbsp;ปรับแต่งหน้าเว็บไซส์
                </CardTitle>
                <h6 className="file-head">อัปโหลดรูปภาพของคุณ</h6>
                <h6 className="text-head">รูปภาพใช้แสดงในหน้าแรกของเว็บไซต์</h6>
                <br /> <h6 className="size">ขนาดรูปภาพควรเท่ากับ 1688*550</h6>
                <div className="file-dragedit">
                  <Input
                    onChange={this.fileUploaded}
                    type="file"
                    label="Upload"
                    accept="image/*"
                    ref={ref => (this.fileUpload = ref)}
                  />
                </div>
                <br />
                {preview && (
                  <img
                    className="previewFile"
                    src={preview}
                    alt="preview"
                    width="80"
                  />
                )}
              </CardHeader>
              <CardBody>
                <br />
                <div className="texthead">
                  <Container>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>ส่วนหัวเรื่องหลัก</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        ref="title"
                        defaultValue={title}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>ส่วนหัวเรื่องรอง</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        ref="subtitle"
                        defaultValue={subtitle}
                      />
                    </Form.Group>
                  </Container>
                </div>
                <br />
                <br />
                <div className="edittext">
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>ส่วนเนื้อหา</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="15"
                        ref="detail"
                        defaultValue={detail}
                      />
                    </Form.Group>
                  </Col>
                </div>
              </CardBody>
              <br />
              <br />
              <Row style={{ marginLeft: "75%" }}>
                <Col>
                  <Fab
                    onClick={this.handleSummit}
                    style={{
                      backgroundColor: "rgba(84,149,13, 0.81)",
                      color: "white"
                    }}
                    aria-label="edit"
                  >
                    <CheckIcon />
                  </Fab>
                </Col>
                <Col style={{ marginLeft: "-50%" }}>
                  <Fab
                    onClick={this.handleCancel}
                    style={{
                      backgroundColor: "#FC4C4C",
                      color: "white"
                    }}
                    aria-label="edit"
                  >
                    <CloseIcon />
                  </Fab>
                </Col>
              </Row>
              <br />
              <br />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

PageModify.propTypes = {
  getIndex: PropTypes.func.isRequired,
  editIndex: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.index
});

export default connect(
  mapStateToProps,
  { getIndex, editIndex, uploadImage }
)(PageModify);
