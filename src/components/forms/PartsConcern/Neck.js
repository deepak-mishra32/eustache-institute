import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";

function Neck() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const initialData = {
    neck: [],
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
        <FormLabel name="neck" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Neck (bands)")}
          disabled={
            !details.concerns.includes("Neck (bands)") &&
            details.concerns.length > 1
          }
          label="Neck (bands)"
          name="neck"
          value="Neck (bands)"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Neck skin excess")}
          disabled={
            !details.concerns.includes("Neck skin excess") &&
            details.concerns.length > 1
          }
          label="Neck skin excess"
          name="neck"
          value="Neck skin excess"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Neck fat excess")}
          disabled={
            !details.concerns.includes("Neck fat excess") &&
            details.concerns.length > 1
          }
          label="Neck fat excess"
          name="neck"
          value="Neck fat excess"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Neck creases")}
          disabled={
            !details.concerns.includes("Neck creases") &&
            details.concerns.length > 1
          }
          label="Neck creases"
          name="neck"
          value="Neck creases"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Irregular contour")}
          disabled={
            !details.concerns.includes("Irregular contour") &&
            details.concerns.length > 1
          }
          label="Irregular contour"
          name="neck"
          value="Irregular contour"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Spider veins")}
          disabled={
            !details.concerns.includes("Spider veins") &&
            details.concerns.length > 1
          }
          label="Spider veins"
          name="neck"
          value="Spider veins"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Sunspots/discoloration")}
          disabled={
            !details.concerns.includes("Sunspots/discoloration") &&
            details.concerns.length > 1
          }
          label="Sunspots/discoloration"
          name="neck"
          value="Sunspots/discoloration"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Aging/poor skin quality")}
          disabled={
            !details.concerns.includes("Aging/poor skin quality") &&
            details.concerns.length > 1
          }
          label="Aging/poor skin quality"
          name="neck"
          value="Aging/poor skin quality"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Acne")}
          disabled={
            !details.concerns.includes("Acne") && details.concerns.length > 1
          }
          label="Acne"
          name="neck"
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
          name="neck"
          value="Acne scarring"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="neck"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="neck"
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
          name="neck"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Neck;
