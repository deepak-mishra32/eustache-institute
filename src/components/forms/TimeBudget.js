import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Context from "../../Context";
import "./TimeBudget.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "36px",
    backgroundColor: "#32a8b8",
    borderRadius: "5px",
    color: "black",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function TimeBudget() {
  const classes = useStyles();
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const onPriceChangeHandler = (e, newValue) => {
    addDetails(newValue, "price");
  };
  const onTimeChangeHandler = (e) => {
    addDetails(e, "time");
  };

  return (
    <div className="info">
      <h3>My Budget and Time Frame</h3>
      <hr />
      <p>
        To help your consultant in formulating the appropriate recommendations
        for you, please provide information on your budget and timeframe.
      </p>
      <section>
        <div className={classes.root}>
          <Typography id="discrete-slider-always" gutterBottom>
            <Row>
              <Col sm={12} md={8} lg={8}>
                <p className="budgetP">
                  My Budget (Move the dial to adjust your budget)
                </p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <p>${details.price}000</p>
              </Col>
            </Row>
          </Typography>
          <br />
          <Slider
            defaultValue="20"
            valueLabelDisplay="on"
            value={details.price}
            onChange={onPriceChangeHandler}
          />
          <div className="sliderDiv">
            <Col sm={12} md={6} lg={6}>
              <h6 style={{ marginRight: "8px", marginTop: "8px" }}>
                My Time Frame
              </h6>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <DropdownButton id="dropdown-basic-button" title={details.time}>
                <Dropdown.Item
                  eventKey="Immediately within a month"
                  onSelect={onTimeChangeHandler}
                >
                  Immediately within a month
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="1-3 Months"
                  onSelect={onTimeChangeHandler}
                >
                  1-3 Months
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3-6 Months"
                  onSelect={onTimeChangeHandler}
                >
                  3-6 Months
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="6-12 Months"
                  onSelect={onTimeChangeHandler}
                >
                  6-12 Months
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Over 12 Months"
                  onSelect={onTimeChangeHandler}
                >
                  Over 12 Months
                </Dropdown.Item>
                <Dropdown.Item eventKey="Others" onSelect={onTimeChangeHandler}>
                  Others
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimeBudget;
