import React, { Component, Fragment } from "react";

import { Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteConfirm } from "../../redux/actions/dataActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { IconButton } from "@material-ui/core";

import { MdDelete } from "react-icons/md";

class Listconfirm extends Component {
  state = {
    load: false,
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteConfirm = () => {
    this.setState({ load: true });
    this.props
      .deleteConfirm(this.props.id)
      .then(res => {
        this.setState({ load: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      data: {
        // con_Payment,
        con_time,
        con_amount,
        con_datePay,
        con_email,
        con_lastname,
        con_name,
        // con_phone,
        // image,
        // more_details
      }
    } = this.props;
    const { load } = this.state;
    return !load ? (
      <>
        <tr>
          <th>{con_datePay}</th>
          <td>{con_time}</td> 
          <td>{con_email}</td>
          <td>
            {con_name}{" "}
            {con_lastname}
          </td>
          <td>{con_amount}</td>

          <td>
            <Fragment>
              <IconButton onClick={this.handleOpen}>
                <MdDelete style={{ color: "#FF756D" }} />
              </IconButton>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle>
                  คุณแน่ใจไหมว่าต้องการยกเลิกรายการดัะงต่อไปนี้ ?
                </DialogTitle>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.deleteConfirm} color="secondary">
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </Fragment>
          </td>
        </tr>
      </>
    ) : (
      <>
        <tr>
          <td>
            {load && (
              <Spinner
                className="deleteload"
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgba(91, 156, 16, 0.658)",
                  marginLeft: "150%"
                }}
                animation="border"
                variant="success"
              ></Spinner>
            )}{" "}
          </td>
          <div className="loading">{"กำลังโหลด"}</div>
        </tr>
      </>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
{ deleteConfirm }
)(Listconfirm);
