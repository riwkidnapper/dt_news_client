import React from "react";
import { Container, Button } from "react-bootstrap";
import "./css/error-pages.css";
function error404(props) {
  return (
    <div>
      <section id="wrapper" className="error-page">
        <div className="error-box">
          <div className="error-body text-center">
            <h1>404</h1>
            <h3 className="text-uppercase">Oops! Page Not Found !</h3>
            <p className="text-muted m-t-30 m-b-30">
              The page you are looking for was not found.
            </p>
            <Button href="/" variant="outline-success" className="bt">
              Back to Home
            </Button>
          </div>

          <footer className="footer error-page">
            {" "}
            <Container>
              <p className="copyright">
                &copy; {new Date().getFullYear()}{" "}
                <a className="copyright error" href="/">
                  D T ACCOUNTING TAX AND AUDIT LIMITED PARTNERSHIP
                </a>
                <span> ห้างหุ้นส่วนจำกัด ดี ที การบัญชี ภาษี และตรวจสอบ</span>
              </p>
            </Container>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default error404;
