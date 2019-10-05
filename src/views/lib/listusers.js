import React, { Component } from "react";

import { IconButton } from "@material-ui/core";
import { MdModeEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
class Listusers extends Component {
  render() {
    const {
      users: { credit, handle, admin, email },
      index
    } = this.props;
    var rule = admin.toString();
    return (
      <tr>
        <th scope="row">{(index) + 1}</th>
        <td>{email}</td>
        <td>{handle}</td>
        <td>{credit}</td>
        <td>{rule}</td>
        <td>
          <IconButton>
            <MdModeEdit
              style={{
                color: "rgba(91, 156, 16, 0.658)"
              }}
            />
          </IconButton>
        </td>
        <td>
          <IconButton>
            <MdDelete style={{ color: "#FF756D" }} />
          </IconButton>
        </td>
      </tr>
    );
  }
}
Listusers.propTypes = {
  users: PropTypes.object.isRequired
};

export default Listusers;
