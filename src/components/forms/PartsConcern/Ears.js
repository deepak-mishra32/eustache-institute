import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Ears() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    ears: [],
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
        <FormLabel name="ears" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>

        <Form.Check
          checked={details.concerns.includes("Prominent ears")}
          disabled={
            !details.concerns.includes("Prominent ears") &&
            details.concerns.length > 1
          }
          label="Prominent ears"
          name="ears"
          value="Prominent ears"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Irregular shaped ears")}
          disabled={
            !details.concerns.includes("Irregular shaped ears") &&
            details.concerns.length > 1
          }
          label="Irregular shaped ears"
          name="ears"
          value="Irregular shaped ears"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Elongated/torn earlobe")}
          disabled={
            !details.concerns.includes("Elongated/torn earlobe") &&
            details.concerns.length > 1
          }
          label="Elongated/torn earlobe"
          name="ears"
          value="Elongated/torn earlobe"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scars")}
          disabled={
            !details.concerns.includes("Scars") && details.concerns.length > 1
          }
          label="Scars"
          name="ears"
          value="Scars"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name="ears"
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Excess/unwanted hair")}
          disabled={
            !details.concerns.includes("Excess/unwanted hair") &&
            details.concerns.length > 1
          }
          label="Excess/unwanted hair"
          name="ears"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Others")}
          disabled={
            !details.concerns.includes("Others") && details.concerns.length > 1
          }
          label="Others"
          name="ears"
          value="Others"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Ears;
