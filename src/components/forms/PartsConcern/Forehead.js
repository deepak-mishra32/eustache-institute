import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Forehead() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    forehead: [],
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
        <FormLabel name="forehead" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>

        <Form.Check
          checked={details.concerns.includes("Lines/Wrinkles")}
          disabled={
            !details.concerns.includes("Lines/Wrinkles") &&
            details.concerns.length > 1
          }
          label="Lines/Wrinkles"
          name="forehead"
          value="Lines/Wrinkles"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sunspots/Discoloration")}
          disabled={
            !details.concerns.includes("Sunspots/Discoloration") &&
            details.concerns.length > 1
          }
          label="Sunspots/Discoloration"
          name="forehead"
          value="Sunspots/Discoloration"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider Veins")}
          disabled={
            !details.concerns.includes("Spider Veins") &&
            details.concerns.length > 1
          }
          label="Spider Veins"
          name="forehead"
          value="Spider Veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="forehead"
          value="Acne"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne Scar")}
          disabled={
            !details.concerns.includes("Acne Scar") &&
            details.concerns.length > 1
          }
          label="Acne Scar"
          name="forehead"
          value="Acne Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="forehead"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="forehead"
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
          name="forehead"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Forehead;
