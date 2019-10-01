import React from "react";

import Center from "react-center";
import { Button, Card, CardDeck } from "react-bootstrap";

import Navbar from "../layout/navbar/navbar";
import Footer from "../layout/footer/footer";

import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

import "../css/addcredit.css";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    money: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const count = {
      amount: parseInt(values.money)
    };
    console.log(count);
  };

  const handleSubmit1 = event => {
    event.preventDefault();
    const count = {
      amount: 1
    };
    console.log(count);
  };

  const handleSubmit2 = event => {
    event.preventDefault();
    const count = {
      amount: 5
    };
    console.log(count);
  };

  const handleSubmit3 = event => {
    event.preventDefault();
    const count = {
      amount: 10
    };
    console.log(count);
  };
  return (
    <div>
      <div className="post_">
        <Navbar />
        <div className="topName">
          <h1>เติมเครดิต</h1>
        </div>
        <br />
        <h3 style={{ textAlign: "center", color: "#558b2f" }}>
          {"แพ็กเกจขั้นต้น 3 แพ็กเกจ "}
        </h3>
        <br />
        <br />
        <form noValidate>
          <Center>
            <CardDeck>
              <Card style={{ width: "20rem", borderColor: "#8bc34a" }}>
                <Card.Header
                  style={{
                    textAlign: "center",
                    background: "#8bc34a",
                    color: "white"
                  }}
                >
                  <Card.Img variant="top" src="" />

                  <h5 style={{ fontSize: "30px" }}>แพ็กเกจที่ 1 </h5>
                  <p style={{ fontSize: "20px" }}>ราคาต่อเครดิต 45 บาท</p>
                </Card.Header>
                <Card.Body>
                  <Center>
                    <Card.Title style={{ fontSize: "30px", color: "#689f38" }}>
                      45 บาท
                    </Card.Title>
                  </Center>
                  <Center>
                    <Card.Text style={{ fontSize: "25px", color: "#7cb342 " }}>
                      1 เครดิต
                    </Card.Text>
                  </Center>
                  <br />
                  <Center>
                    <Button
                      variant="success"
                      style={{ background: "#8bc34a", borderColor: "#8bc34a" }}
                      type="submit"
                      onClick={handleSubmit1}
                    >
                      ซื้อเครติด
                    </Button>
                  </Center>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem", borderColor: "#8bc34a" }}>
                <Card.Header
                  style={{
                    textAlign: "center",
                    background: "#8bc34a",
                    color: "white"
                  }}
                >
                  <Card.Img variant="top" src="" />

                  <h5 style={{ fontSize: "30px" }}>แพ็กเกจที่ 2 </h5>
                  <p style={{ fontSize: "20px" }}>ราคาต่อเครดิต 43 บาท</p>
                </Card.Header>
                <Card.Body>
                  <Center>
                    <Card.Title style={{ fontSize: "30px", color: "#689f38" }}>
                      215 บาท
                    </Card.Title>
                  </Center>
                  <Center>
                    <Card.Text style={{ fontSize: "25px", color: "#7cb342 " }}>
                      5 เครดิต
                    </Card.Text>
                  </Center>
                  <br />
                  <Center>
                    <Button
                      variant="success"
                      style={{ background: "#8bc34a", borderColor: "#8bc34a" }}
                      type="submit"
                      onClick={handleSubmit2}
                    >
                      ซื้อเครติด
                    </Button>
                  </Center>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem", borderColor: "#8bc34a" }}>
                <Card.Header
                  style={{
                    textAlign: "center",
                    background: "#8bc34a",
                    color: "white"
                  }}
                >
                  <Card.Img variant="top" src="" />

                  <h5 style={{ fontSize: "30px" }}>แพ็กเกจที่ 3 </h5>
                  <p style={{ fontSize: "20px" }}>ราคาต่อเครดิต 40 บาท</p>
                </Card.Header>
                <Card.Body>
                  <Center>
                    <Card.Title style={{ fontSize: "30px", color: "#689f38" }}>
                      400 บาท
                    </Card.Title>
                  </Center>
                  <Center>
                    <Card.Text style={{ fontSize: "25px", color: "#7cb342 " }}>
                      10 เครดิต
                    </Card.Text>
                  </Center>
                  <br />
                  <Center>
                    <Button
                      variant="success"
                      style={{ background: "#8bc34a", borderColor: "#8bc34a" }}
                      type="submit"
                      onClick={handleSubmit3}
                    >
                      ซื้อเครติด
                    </Button>
                  </Center>
                </Card.Body>
              </Card>
            </CardDeck>
          </Center>
          <br />
          <br />
          <br />
          <Center>
            <Card style={{ width: "30rem", borderColor: "#8bc34a" }}>
              <Card.Header
                style={{
                  textAlign: "center",
                  background: "#8bc34a",
                  color: "white"
                }}
              >
                <Card.Img variant="top" src="" />

                <h5 style={{ fontSize: "30px" }}>ระบุจำนวนเอง </h5>
                <p style={{ fontSize: "20px" }}>
                  ราคาต่อเครดิตคำนวณจากยอดเครดิตที่ซื้อ
                </p>
              </Card.Header>
              <Card.Body>
                <Center>
                  <Card.Title style={{ fontSize: "20px", color: "#689f38" }}>
                    ป้อนจำนวนเครดิตที่ต้องการ
                  </Card.Title>
                </Center>
                <Center>
                  <ThemeProvider theme={theme}>
                    <TextField
                      id="outlined-number"
                      label="ระบุจำนวนเงิน"
                      value={values.money}
                      onChange={handleChange("money")}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      inputProps={{ min: "0" }}
                    />
                  </ThemeProvider>
                </Center>
                <br />
                <Center>
                  <Button
                    variant="success"
                    style={{ background: "#8bc34a", borderColor: "#8bc34a" }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    ซื้อเครติด
                  </Button>
                </Center>
              </Card.Body>
            </Card>
          </Center>
        </form>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
