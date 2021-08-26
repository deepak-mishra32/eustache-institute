import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Nose() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    nose: [],
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
        <FormLabel name="nose" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Nasal hump/bump")}
          disabled={
            !details.concerns.includes("Nasal hump/bump") &&
            details.concerns.length > 1
          }
          label="Nasal hump/bump"
          name="nose"
          value="Nasal hump/bump"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Ski slope nose")}
          disabled={
            !details.concerns.includes("Ski slope nose") &&
            details.concerns.length > 1
          }
          label="Ski slope nose"
          name="nose"
          value="Ski slope nose"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Nose too big")}
          disabled={
            !details.concerns.includes("Nose too big") &&
            details.concerns.length > 1
          }
          label="Nose too big"
          name="nose"
          value="Nose too big"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Nose too small")}
          disabled={
            !details.concerns.includes("Nose too small") &&
            details.concerns.length > 1
          }
          label="Nose too small"
          name="nose"
          value="Nose too small"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip too pointy)")}
          disabled={
            !details.concerns.includes("Tip too pointy)") &&
            details.concerns.length > 1
          }
          label="Tip too pointy)"
          name="nose"
          value="Tip too pointy)"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip too wide")}
          disabled={
            !details.concerns.includes("Tip too wide") &&
            details.concerns.length > 1
          }
          label="Tip too wide"
          name="nose"
          value="Tip too wide"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip too round")}
          disabled={
            !details.concerns.includes("Tip too round") &&
            details.concerns.length > 1
          }
          label="Tip too round"
          name="nose"
          value="Tip too round"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip too flat")}
          disabled={
            !details.concerns.includes("Tip too flat") &&
            details.concerns.length > 1
          }
          label="Tip too flat"
          name="nose"
          value="Tip too flat"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Crooked nose")}
          disabled={
            !details.concerns.includes("Crooked nose") &&
            details.concerns.length > 1
          }
          label="Crooked nose"
          name="nose"
          value="Crooked nose"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip points down")}
          disabled={
            !details.concerns.includes("Tip points down") &&
            details.concerns.length > 1
          }
          label="Tip points down"
          name="nose"
          value="Tip points down"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip points up")}
          disabled={
            !details.concerns.includes("Tip points up") &&
            details.concerns.length > 1
          }
          label="Tip points up"
          name="nose"
          value="Tip points up"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Tip out too far")}
          disabled={
            !details.concerns.includes("Tip out too far") &&
            details.concerns.length > 1
          }
          label="Tip out too far"
          name="nose"
          value="Tip out too far"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Nostrils too big")}
          disabled={
            !details.concerns.includes("Nostrils too big") &&
            details.concerns.length > 1
          }
          label="Nostrils too big"
          name="nose"
          value="Nostrils too big"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Nostrils too wide")}
          disabled={
            !details.concerns.includes("Nostrils too wide") &&
            details.concerns.length > 1
          }
          label="Nostrils too wide"
          name="nose"
          value="Nostrils too wide"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Contour irregularity")}
          disabled={
            !details.concerns.includes("Contour irregularity") &&
            details.concerns.length > 1
          }
          label="Contour irregularity"
          name="nose"
          value="Contour irregularity"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Bunny lines")}
          disabled={
            !details.concerns.includes("Bunny lines") &&
            details.concerns.length > 1
          }
          label="Bunny lines"
          name="nose"
          value="Bunny lines"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sunspots/discoloration")}
          disabled={
            !details.concerns.includes("Sunspots/discoloration") &&
            details.concerns.length > 1
          }
          label="Sunspots/discoloration"
          name="nose"
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
          name="nose"
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="nose"
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
          name="nose"
          value="Acne scarring"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="nose"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Mole/lesion")}
          disabled={
            !details.concerns.includes("Mole/lesion") &&
            details.concerns.length > 1
          }
          label="Mole/lesion"
          name="nose"
          value="Mole/lesion"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="nose"
          value="Other"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Nose;
