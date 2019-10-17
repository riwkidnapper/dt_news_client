import React, { Component} from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteConfirm } from "../../redux/actions/dataActions";


class Listnews extends Component {
  state = {
    load: false,
    open: false
  };


  render() {
    const {
      data: {
        //  agenda,
        // announce,
        authorized_name,
        authorized_position,
        companyName,
        honorific,
        // meeting_date,
        // meeting_no,
        // meeting_place,
        // meeting_time,
        post_date,

        subject
      }
    } = this.props;
    const { load } = this.state;
    return !load ? (
      <>
        <tr>
          <th>{post_date}</th>
          <td>{subject}</td>
          <td>{companyName}</td>
          <td>
            {honorific} {authorized_name}
          </td>
          <td>{authorized_position}</td>
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
)(Listnews);
