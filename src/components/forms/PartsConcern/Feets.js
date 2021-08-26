import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Feets() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    feets: [],
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
        <FormLabel name="feets" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Sagging skin")}
          disabled={
            !details.concerns.includes("Sagging skin") &&
            details.concerns.length > 1
          }
          label="Sagging skin"
          name="feets"
          value="Sagging skin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="feets"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Unwanted tattoo")}
          disabled={
            !details.concerns.includes("Unwanted tattoo") &&
            details.concerns.length > 1
          }
          label="Unwanted tattoo"
          name="feets"
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
          name="feets"
          value="Excessive Sweating"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="feets"
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
          name="feets"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Feets;
