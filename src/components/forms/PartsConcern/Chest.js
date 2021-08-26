import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Chest() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    chest: [],
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

  return (
    <Row className="mt-2">
      <Col Col sm={12} md={12} lg={12}>
        <FormLabel name="chest" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Sagging breast(s)")}
          disabled={
            !details.concerns.includes("Sagging breast(s)") &&
            details.concerns.length > 1
          }
          label="Sagging breast(s)"
          name="chest"
          value="Sagging breast(s)"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sunspots")}
          disabled={
            !details.concerns.includes("Sunspots") &&
            details.concerns.length > 1
          }
          label="Sunspots"
          name="chest"
          value="Sunspots"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Stretch marks")}
          disabled={
            !details.concerns.includes("Stretch marks") &&
            details.concerns.length > 1
          }
          label="Stretch marks"
          name="chest"
          value="Stretch marks"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="chest"
          value="Acne"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scarring")}
          disabled={
            !details.concerns.includes("Scarring") &&
            details.concerns.length > 1
          }
          label="Scarring"
          name="chest"
          value="Scarring"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Unwanted tattoo")}
          disabled={
            !details.concerns.includes("Unwanted tattoo") &&
            details.concerns.length > 1
          }
          label="Unwanted tattoo"
          name="chest"
          value="Unwanted tattoo"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Excessive Sweating")}
          disabled={
            !details.concerns.includes("Excessive Sweating") &&
            details.concerns.length > 1
          }
          label="Excessive Sweating"
          name="chest"
          value="Excessive Sweating"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="chest"
          value="Other"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Excess/unwanted hair")}
          disabled={
            !details.concerns.includes("Excess/unwanted hair") &&
            details.concerns.length > 1
          }
          label="Excess/unwanted hair"
          name="chest"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Chest;
