import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Jaw() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    jaw: [],
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
        <FormLabel name="jaw" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Laugh lines")}
          disabled={
            !details.concerns.includes("Laugh lines") &&
            details.concerns.length > 1
          }
          label="Laugh lines"
          name="jaw"
          value="Laugh lines"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Marionette lines")}
          disabled={
            !details.concerns.includes("Marionette lines") &&
            details.concerns.length > 1
          }
          label="Marionette lines"
          name="jaw"
          value="Marionette lines"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Buccal lines")}
          disabled={
            !details.concerns.includes("Buccal lines") &&
            details.concerns.length > 1
          }
          label="Buccal lines"
          name="jaw"
          value="Buccal lines"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Recessed/small chin")}
          disabled={
            !details.concerns.includes("Recessed/small chin") &&
            details.concerns.length > 1
          }
          label="Recessed/small chin"
          name="jaw"
          value="Recessed/small chin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Protruding chin")}
          disabled={
            !details.concerns.includes("Protruding chin") &&
            details.concerns.length > 1
          }
          label="Protruding chin"
          name="jaw"
          value="Protruding chin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Chin creases")}
          disabled={
            !details.concerns.includes("Chin creases") &&
            details.concerns.length > 1
          }
          label="Chin creases"
          name="jaw"
          value="Chin creases"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes(
            "Hollowing/volume loss next to chin"
          )}
          disabled={
            !details.concerns.includes("Hollowing/volume loss next to chin") &&
            details.concerns.length > 1
          }
          label="Hollowing/volume loss next to chin"
          name="jaw"
          value="Hollowing/volume loss next to chin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sagging jowl/loss of jawline")}
          disabled={
            !details.concerns.includes("Sagging jowl/loss of jawline") &&
            details.concerns.length > 1
          }
          label="Sagging jowl/loss of jawline"
          name="jaw"
          value="Sagging jowl/loss of jawline"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Aging/poor skin quality")}
          disabled={
            !details.concerns.includes("Aging/poor skin quality") &&
            details.concerns.length > 1
          }
          label="Aging/poor skin quality"
          name="jaw"
          value="Aging/poor skin quality"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sunspots/discoloration")}
          disabled={
            !details.concerns.includes("Sunspots/discoloration") &&
            details.concerns.length > 1
          }
          label="Sunspots/discoloration"
          name="jaw"
          value="Sunspots/discoloration"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name="jaw"
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="jaw"
          value="Acne"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne scarring")}
          disabled={
            !details.concerns.includes("Acne scarring") &&
            details.concerns.length > 1
          }
          label="Acne scarring"
          name="jaw"
          value="Acne scarring"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="jaw"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="jaw"
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
          name="jaw"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Jaw;
