import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Cheeks() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    cheeks: [],
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
        <FormLabel name="cheeks" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Sagging cheeks")}
          disabled={
            !details.concerns.includes("Sagging cheeks") &&
            details.concerns.length > 1
          }
          label="Sagging cheeks"
          name="cheeks"
          value="Sagging cheeks"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Deflated cheeks")}
          disabled={
            !details.concerns.includes("Deflated cheeks") &&
            details.concerns.length > 1
          }
          label="Deflated cheeks"
          name="cheeks"
          value="Deflated cheeks"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Cheeks too fat")}
          disabled={
            !details.concerns.includes("Cheeks too fat") &&
            details.concerns.length > 1
          }
          label="Cheeks too fat"
          name="cheeks"
          value="Cheeks too fat"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Flat cheek bones")}
          disabled={
            !details.concerns.includes("Flat cheek bones") &&
            details.concerns.length > 1
          }
          label="Flat cheek bones"
          name="cheeks"
          value="Flat cheek bones"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes(
            "Deep nasolabial folds(between nose and cheeks)"
          )}
          disabled={
            !details.concerns.includes(
              "Deep nasolabial folds(between nose and cheeks)"
            ) && details.concerns.length > 1
          }
          label="Deep nasolabial folds(between nose and cheeks)"
          name="cheeks"
          value="Deep nasolabial folds(between nose and cheeks)"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Aging skin/wrinkles")}
          disabled={
            !details.concerns.includes("Aging skin/wrinkles") &&
            details.concerns.length > 1
          }
          label="Aging skin/wrinkles"
          name="cheeks"
          value="Aging skin/wrinkles"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Aging/poor skin quality")}
          disabled={
            !details.concerns.includes("Aging/poor skin quality") &&
            details.concerns.length > 1
          }
          label="Aging/poor skin quality"
          name="cheeks"
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
          name="cheeks"
          value="Sunspots/discoloration"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Rosacea")}
          disabled={
            !details.concerns.includes("Rosacea") && details.concerns.length > 1
          }
          label="Rosacea"
          name="cheeks"
          value="Rosacea"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name="cheeks"
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="cheeks"
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
          name="cheeks"
          value="Acne scarring"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="cheeks"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="cheeks"
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
          name="cheeks"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Cheeks;
