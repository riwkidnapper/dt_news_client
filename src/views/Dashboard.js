import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers, getConfirm, getnews } from "../redux/actions/dataActions";
import {
  TableFooter,
  TablePagination,
  TableRow,
  IconButton
} from "@material-ui/core";
import { Pie } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table
} from "reactstrap";
import {
  dashboardEmailStatisticsChart,
} from "../variables/charts";

import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Listconfirm from "./lib/listconfirm";
import Listnews from "./lib/listnews";

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


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page: page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.props.getUsers();
    this.props.getConfirm();
    this.props.getnews();
  }

  render() {
    const { rowsPerPage, page } = this.state;
    const { confirms, news } = this.props;
    let listnews = news
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(news => <Listnews key={news.id} data={news.data} id={news.id} />);
    let listcon = confirms
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(confirm => (
        <Listconfirm key={confirm.id} data={confirm.data} id={confirm.id} />
      ));
      console.log(this.props);
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="4" md="4" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">จำนวนผู้ใช้งานทั้งหมด</p>
                        <CardTitle tag="p">
                          {this.props.users.getUsers.length} คน
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="4" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">จำนวนออร์เดอร์</p>
                        <CardTitle tag="p">{confirms.length} ออเดอร์</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4" md="4" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">จำนวนข่าวประกาศ</p>
                        <CardTitle tag="p">{news.length} ข่าว</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader style={{ marginLeft: "50px" }}>
                  <h5>แสดงรายการออเดอร์ทั้งหมด</h5>
                </CardHeader>
                <CardBody style={{ textAlign: "center" }}>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>วันที่แจ้งชำระ</th>
                        <th>เวลาที่แจ้งชำระ</th>
                        <th>อีเมล์</th>
                        <th>ชื่อ นามสกุล</th>
                        <th>จำนวนเงิน</th>
                        <th>ลบรายการ</th>
                      </tr>
                    </thead>
                    <tbody>{listcon}</tbody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 50]}
                          count={confirms.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            native: true
                          }}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader style={{ marginLeft: "50px" }}>
                  <h5>แสดงรายการออเดอร์ทั้งหมด</h5>
                </CardHeader>
                <CardBody style={{ textAlign: "center" }}>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>วันที่ลงประกาศ</th>
                        <th>หัวข้อ / เรื่อง</th>
                        <th>ชื่อบริษัท / ชื่อหน่วยงาน </th>
                        <th>ชื่อ นามสกุลผู้ลงนาม</th>
                        <th>ตำแหน่งผู้ลงนาม</th>
                      </tr>
                    </thead>
                    <tbody>{listnews}</tbody>
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 50]}
                          count={news.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            native: true
                          }}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                      </TableRow>
                    </TableFooter>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.getUsers,
  confirms: state.data.confirms,
  news:state.data.news

});

export default connect(
  mapStateToProps,
  { getUsers, getConfirm, getnews }
)(Dashboard);
