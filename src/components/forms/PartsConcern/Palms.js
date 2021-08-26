import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Palms() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    palms: [],
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
        <FormLabel name={details.bodyPart} required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>

        <Form.Check
          checked={details.concerns.includes("Uneven contour")}
          disabled={
            !details.concerns.includes("Uneven contour") &&
            details.concerns.length > 1
          }
          label="Uneven contour"
          name={details.bodyPart}
          value="Uneven contour"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Stretch marks")}
          disabled={
            !details.concerns.includes("Stretch marks") &&
            details.concerns.length > 1
          }
          label="Stretch marks"
          name={details.bodyPart}
          value="Stretch marks"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Excess fat")}
          disabled={
            !details.concerns.includes("Excess fat") &&
            details.concerns.length > 1
          }
          label="Excess fat"
          name={details.bodyPart}
          value="Excess fat"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sagging skin")}
          disabled={
            !details.concerns.includes("Sagging skin") &&
            details.concerns.length > 1
          }
          label="Sagging skin"
          name={details.bodyPart}
          value="Sagging skin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name={details.bodyPart}
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name={details.bodyPart}
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Unwanted tattoo")}
          disabled={
            !details.concerns.includes("Unwanted tattoo") &&
            details.concerns.length > 1
          }
          label="Unwanted tattoo"
          name={details.bodyPart}
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
          name={details.bodyPart}
          value="Excessive Sweating"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name={details.bodyPart}
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
          name={details.bodyPart}
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Palms;
