import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import Listusers from "./lib/listusers";
import { getUsers } from "../redux/actions/dataActions";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: ""
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getUsers();
  }
  render() {
    const { getUsers, loading } = this.props.data;
    let listusers = !loading ? (
      getUsers.map((users, index) => (
        <Listusers key={users.getUserId} users={users.getUser} index={index} />
      ))
    ) : (
      <p>loading...</p>
    );

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5>แสดงรายการผู้ใช้งานทั่วไป</h5>
                </CardHeader>
                <CardBody style={{ textAlign: "center" }}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>no</th>
                        <th>email</th>
                        <th>username</th>
                        <th>credit</th>
                        <th>admin</th>
                        <th>edit</th>
                        <th>delete</th>
                      </tr>
                    </thead>
                    <tbody>{listusers}</tbody>
                  </Table>
                </CardBody>
              </Card>
              <br />
              <h6>
                {`รายการทั้งหมด`} {getUsers.length} {`รายการ`}
              </h6>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
User.propTypes = {
  getUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  data: state.getUsers,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(User);
