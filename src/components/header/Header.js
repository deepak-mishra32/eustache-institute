import { React, useState, useMemo, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "react-bootstrap/Container";
import Concerns from "../forms/Concerns";
import TimeBudget from "../forms/TimeBudget";
import AboutMe from "../forms/AboutMe";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import countryList from "react-select-country-list";
import Select from "react-select";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../forms/Concerns.css";
import Button from "react-bootstrap/esm/Button";
import Context from "../../Context";
import { disclaimer } from "../../Constant";
import ConcernParts from "../ConcernParts";
import hippa from "../assets/hippa-logo.png";
import ssl from "../assets/ssl.png";
import secure from "../assets/secure1.png";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
    border: "none",
    outline: "none",
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "&:hover": {
      boxShadow: "1px 1px 3px 2px #5f5d5d",
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "556px",
    [theme.breakpoints.down("md")]: {
      width: "456",
    },
  },
  enter: {
    marginTop: "16px",
    backgroundColor: "#6EC8D3",
    "&:hover": {
      backgroundColor: "#6EC8D3",
      color: "#000000",
      fontWeight: "500",
    },
  },
  selectCountry: {
    padding: "8px",
    backgroundColor: "#6EC8D3",
    borderRadius: "5px",
  },
  row: {
    backgroundColor: "#6EC8D3",
  },
  doc: {
    marginTop: "56px",
    textAlign: "center",
    color: "#ffffff",
    [theme.breakpoints.down("md")]: {
      marginTop: "16px",
    },
    textShadow: "1px 1px 5px #000",
  },
  stepperRow: {
    backgroundColor: "#ffffff",
    padding: "16px",
    borderRadius: "50%",
    wordWrap: "break-word",
    maxWidth: "136px",
    minHeight: "136px",
    boxShadow: "inset 3px 4px 5px #000",
    [theme.breakpoints.down("md")]: {
      marginTop: "-16px",
      maxWidth: "66px",
      minHeight: "46px",
    },
  },
  activeIcon: {
    fill: "#6EC8D3",
    color: "#000000",
  },
  activeStepper: {
    backgroundColor: "#000000",
  },
  label: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function getSteps() {
  return ["Concerns", "Time and Budget", "About Me"];
}

function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isNext, setIsnext] = useState(false);
  const steps = getSteps();
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const { details } = useContext(Context);

  const disclaimerOpenhandler = () => {
    setDisclaimerOpen(true);
  };
  const disclaimerClosehandler = () => {
    setDisclaimerOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (country) => {
    setCountry(country);
  };

  useEffect(() => {
    setIsnext(false);
  }, [activeStep]);

  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={false}
          onClose={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h5 className={classes.selectCountry}>
                Please Select Your Country
              </h5>
              <Select
                options={options}
                value={country}
                onChange={changeHandler}
              />
              {country === "" ? (
                <Button disabled className={classes.enter}>
                  Enter
                </Button>
              ) : (
                <Button onClick={handleClose} className={classes.enter}>
                  Enter
                </Button>
              )}
            </div>
          </Fade>
        </Modal>
      </div>
      <Container fluid>
        <Row className={classes.row}>
          <Col sm={12} md={3} lg={3} className={classes.doc}>
            <div>
              <h3>EUSTACHE INSTITUTE</h3>
            </div>
          </Col>
          <Col sm={12} md={9} lg={9}>
            <Stepper
              className={classes.row}
              activeStep={activeStep}
              alternativeLabel
              connector={null}
            >
              {steps.map((label) => (
                <Step
                  key={label}
                  classes={{
                    active: classes.activeStepper,
                  }}
                >
                  <StepLabel
                    className={classes.stepperRow}
                    StepIconProps={{
                      classes: {
                        active: classes.activeIcon,
                      },
                    }}
                  >
                    <hr className={classes.label} />
                    <h6 className={classes.label}>{label}</h6>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={8} lg={8} className="mt-1">
            {activeStep === 0 ? <Concerns /> : null}
            {activeStep === 1 ? <TimeBudget /> : null}
            {activeStep === 2 ? <AboutMe /> : null}
          </Col>
          <Col sm={12} md={4} lg={4} className="mt-4">
            <div className="concerns">
              <h3>Concerns</h3>
              {!details.concerns.length > 0 ? (
                <section>
                  <p>
                    Click a body part then select the concern that you want your
                    consultant to address
                  </p>
                  <section className="cosmentic-concern">
                    <p>No Cosmetic Concern Selected</p>
                  </section>
                </section>
              ) : (
                <ConcernParts />
              )}
              <section className="brand-adv">
                <img src={hippa} alt="hipp" fluid />
                <img src={ssl} alt="ssl" />
                <img src={secure} alt="secure" />
              </section>

              <Button onClick={disclaimerOpenhandler}>Read Disclaimer</Button>
              <div>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={disclaimerOpen}
                  onClose={disclaimerClosehandler}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={disclaimerOpen}>
                    <div className="paper">
                      <h5 className="disclaimer">Disclaimer</h5>
                      <p className="disclaimer-text">{disclaimer}</p>
                      <Button
                        onClick={() => setDisclaimerOpen(false)}
                        style={{
                          margin: "8px",
                          display: "block",
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
            <div className="button-div">
              <div>
                <div style={{ textAlign: "center" }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button className="button" disabled>
                      Finished
                    </Button>
                  ) : (
                    <Button
                      className="button"
                      onClick={handleNext}
                      disabled={
                        (details.concerns.length === 0 && !isNext) ||
                        (details.concerns.length > 0 &&
                          details.price === 0 &&
                          !isNext)
                      }
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
