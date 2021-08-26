import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Hands() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const [expand, setExpand] = useState(false);

  const initialData = {
    hands: [],
  };

  const [data, setData] = useState(initialData);

  const onChangehandler = (e) => {
    setData((prevState) => {
      addDetails(
        getNewStateOneValue(prevState[e.target.name], e.target.value),
        "concerns"
      );
      return {
        ...prevState,
        [e.target.name]: getNewStateOneValue(
          prevState[e.target.name],
          e.target.value
        ),
      };
    });
  };
  const onExpandhandler = () => {
    {
      expand ? setExpand(false) : setExpand(true);
    }
  };

  return (
    <Row className="mt-2">
      <Col Col sm={12} md={12} lg={12}>
        <FormLabel name="hands" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Sagging skin")}
          disabled={
            !details.concerns.includes("Sagging skin") &&
            details.concerns.length > 1
          }
          label="Sagging skin"
          name="hands"
          value="Sagging skin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Wrinkles")}
          disabled={
            !details.concerns.includes("Wrinkles") &&
            details.concerns.length > 1
          }
          label="Wrinkles"
          name="hands"
          value="Wrinkles"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="hands"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="hands"
          value="Other"
          onClick={onChangehandler}
        />
        <div style={{ display: "flex" }}>
          <Form.Check
            checked={details.concerns.includes("Aging hands")}
            disabled={
              !details.concerns.includes("Aging hands") &&
              details.concerns.length > 1
            }
            label="Aging hands"
            name="hands"
            value="Aging hands"
            onClick={onChangehandler}
          />
          <a className="eye-btn" onClick={onExpandhandler}>
            {expand ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </a>
        </div>
        {expand ? (
          <div className="expand-div">
            <Form.Check
              checked={details.concerns.includes("Aging hands -> Sunspots")}
              disabled={
                !details.concerns.includes("Aging hands -> Sunspots") &&
                details.concerns.length > 1
              }
              label="Sunspots"
              name="hands"
              value="Aging hands -> Sunspots"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Aging hands -> Volume loss")}
              disabled={
                !details.concerns.includes("Aging hands -> Volume loss") &&
                details.concerns.length > 1
              }
              label="Volume loss"
              name="hands"
              value="Aging hands -> Volume loss"
              onClick={onChangehandler}
            />
          </div>
        ) : null}
        <Form.Check
          checked={details.concerns.includes("Excess/unwanted hair")}
          disabled={
            !details.concerns.includes("Excess/unwanted hair") &&
            details.concerns.length > 1
          }
          label="Excess/unwanted hair"
          name="hands"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Hands;
