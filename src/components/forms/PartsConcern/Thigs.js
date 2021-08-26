import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Thigs() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    thigs: [],
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
        <FormLabel name="thigs" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>

        <Form.Check
          checked={details.concerns.includes("Excess fat")}
          disabled={
            !details.concerns.includes("Excess fat") &&
            details.concerns.length > 1
          }
          label="Excess fat"
          name="thigs"
          value="Excess fat"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Uneven contour")}
          disabled={
            !details.concerns.includes("Uneven contour") &&
            details.concerns.length > 1
          }
          label="Uneven contour"
          name="thigs"
          value="Uneven contour"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Dimpling/cellulite")}
          disabled={
            !details.concerns.includes("Dimpling/cellulite") &&
            details.concerns.length > 1
          }
          label="Dimpling/cellulite"
          name="thigs"
          value="Dimpling/cellulite"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Unwanted hair")}
          disabled={
            !details.concerns.includes("Unwanted hair") &&
            details.concerns.length > 1
          }
          label="Unwanted hair"
          name="thigs"
          value="Unwanted hair"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Stretch marks")}
          disabled={
            !details.concerns.includes("Stretch marks") &&
            details.concerns.length > 1
          }
          label="Stretch marks"
          name="thigs"
          value="Stretch marks"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sagging skin")}
          disabled={
            !details.concerns.includes("Sagging skin") &&
            details.concerns.length > 1
          }
          label="Sagging skin"
          name="thigs"
          value="Sagging skin"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name="thigs"
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
          name="thigs"
          value="Unwanted tattoo"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Varicose Veins")}
          disabled={
            !details.concerns.includes("Varicose Veins") &&
            details.concerns.length > 1
          }
          label="Varicose Veins"
          name="thigs"
          value="Varicose Veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Excessive Sweating")}
          disabled={
            !details.concerns.includes("Excessive Sweating") &&
            details.concerns.length > 1
          }
          label="Excessive Sweating"
          name="thigs"
          value="Excessive Sweating"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="thigs"
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
          name="thigs"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Thigs;
