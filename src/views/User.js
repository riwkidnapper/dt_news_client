import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import Listusers from "./lib/listusers";
import { getUsers } from "../redux/actions/dataActions";
import { withStyles } from "@material-ui/core/styles";
import {
  TableFooter,
  TablePagination,
  TableRow,
  IconButton
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
});
class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rule: "",
      page: 0,
      rowsPerPage: 10
    };
  }
  handleChangePage = page => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getUsers();
  }
  render() {
    const { rowsPerPage, page } = this.state;
    const { getUsers } = this.props.data;
    let listusers = getUsers
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((users, index) => (
        <Listusers key={users.getUserId} users={users.getUser} index={index} />
      ));

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader style={{ marginLeft: "50px" }}>
                  <h5>แสดงรายการผู้ใช้งานทั่วไป</h5>
                </CardHeader>
                <CardBody style={{ textAlign: "center" }}>
                  <Table hover responsive>
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
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 50]}
                          count={getUsers.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            native: true
                          }}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}
                        />
                      </TableRow>
                    </TableFooter>
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
