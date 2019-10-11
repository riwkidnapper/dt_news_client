import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

import { connect } from "react-redux";
import { deleteUser, editUser } from "../../redux/actions/dataActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { green, lightGreen } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import { MdModeEdit, MdDelete, MdClear, MdCheck } from "react-icons/md";

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});
const GreenSwitch = withStyles({
  switchBase: {
    color: lightGreen[300],
    "&$checked": {
      color: lightGreen[500]
    },
    "&$checked + $track": {
      backgroundColor: lightGreen[500]
    }
  },
  checked: {},
  track: {}
})(Switch);

class Listusers extends Component {
  state = {
    load: false,
    open: false,
    edit: false,
    checkedA: false
  };

  handleChange = () => {
    this.setState({
      checkedA: !this.state.checkedA
    });
  };

  edituser = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  handleSummit = () => {
    this.setState({
      edit: !this.state.edit
    });

    const editUserdata = {
      credit: parseInt(this.credit.value),
      admin: this.state.checkedA
    };

    this.props.editUser(this.props.users.userId, editUserdata);
  };

  handleCancel = () => {
    this.setState({
      edit: !this.state.edit,
      checkedA: this.props.users.admin
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteuser = () => {
    this.setState({ load: true });
    this.props
      .deleteUser(this.props.users.userId)
      .then(res => {
        this.setState({ load: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    this.setState({
      checkedA: this.props.users.admin
    });
  }

  render() {
    const {
      users: { credit, handle, admin, email },
      index
    } = this.props;
    const { edit, load } = this.state;
    var rule = admin.toString();
    return !edit ? (
      !load ? (
        <>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{email}</td>
            <td>{handle}</td>
            <td>{credit}</td>
            <td>{rule}</td>
            <td>
              <IconButton onClick={this.edituser}>
                <MdModeEdit
                  style={{
                    color: "rgba(91, 156, 16, 0.658)"
                  }}
                />
              </IconButton>
            </td>
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
                    คุณแน่ใจไหมว่าต้องการยกเลิกผู้ใช้งานรายนี้ ?
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.deleteuser} color="secondary">
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
                />
              )}
            </td>
          </tr>
        </>
      )
    ) : (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{email}</td>
        <td>{handle}</td>
        <td>
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-number"
              defaultValue={credit}
              type="number"
              className="credittext"
              margin="dense"
              variant="outlined"
              inputProps={{
                ref: input => (this.credit = input),
                min: "0"
              }}
            />
          </ThemeProvider>
        </td>
        <td>
          <GreenSwitch
            checked={this.state.checkedA}
            onChange={this.handleChange}
            value={this.state.checkedA}
          />
        </td>
        <td>
          <IconButton onClick={this.handleSummit}>
            <MdCheck
              style={{
                color: "rgba(91, 156, 16, 0.658)"
              }}
            />
          </IconButton>
        </td>
        <td>
          <IconButton onClick={this.handleCancel}>
            <MdClear style={{ color: "#FF756D" }} />
          </IconButton>
        </td>
      </tr>
    );
  }
}
Listusers.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  data: state.getUsers
});

export default connect(
  mapStateToProps,
  { deleteUser, editUser }
)(Listusers);
