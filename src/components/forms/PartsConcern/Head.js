import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Head() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    head: [],
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
        <FormLabel name="head" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>

        <Form.Check
          checked={details.concerns.includes("Balding/Hair Loss")}
          disabled={
            !details.concerns.includes("Balding/Hair Loss") &&
            details.concerns.length > 1
          }
          label="Balding/Hair Loss"
          name="head"
          value="Balding/Hair Loss"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="head"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="head"
          value="Other"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("PPP Injection")}
          disabled={
            !details.concerns.includes("PPP Injection") &&
            details.concerns.length > 1
          }
          label="PPP Injection"
          name="head"
          value="PPP Injection"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Hair Growth")}
          disabled={
            !details.concerns.includes("Hair Growth") &&
            details.concerns.length > 1
          }
          label="Hair Growth"
          name="head"
          value="Hair Growth"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Head;
