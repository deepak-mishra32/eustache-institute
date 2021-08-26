import React, { useContext, useState } from "react";
import Context from "../../../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getNewStateOneValue } from "../../utils";
import { Form, FormLabel } from "react-bootstrap";
import "./Parts.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Eyes() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);

  const [expand, setExpand] = useState(false);
  const [expandLower, setExpandLower] = useState(false);

  const initialData = {
    eyes: [],
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
  const onExpandhandler = () => {
    {
      expand ? setExpand(false) : setExpand(true);
    }
  };
  const onExpandhandlerlower = () => {
    {
      expandLower ? setExpandLower(false) : setExpandLower(true);
    }
  };

  return (
    <Row className="mt-2">
      <Col Col sm={12} md={12} lg={12}>
        <FormLabel name="eyes" required>
          <h6 className="concernpart">WHICH DO YOU WANT TO CONSULT ON?</h6>
        </FormLabel>
        <Form.Check
          checked={details.concerns.includes("Sagging Brows")}
          disabled={
            !details.concerns.includes("Sagging Brows") &&
            details.concerns.length > 1
          }
          label="Sagging Brows"
          name="eyes"
          value="Sagging Brows"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Uneven Brows")}
          disabled={
            !details.concerns.includes("Uneven Brows") &&
            details.concerns.length > 1
          }
          label="Uneven Brows"
          name="eyes"
          value="Uneven Brows"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Crow's Feet")}
          disabled={
            !details.concerns.includes("Crow's Feet") &&
            details.concerns.length > 1
          }
          label="Crow's Feet"
          name="eyes"
          value="Crow's Feet"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Hollow/recessed temples")}
          disabled={
            !details.concerns.includes("Hollow/recessed temples") &&
            details.concerns.length > 1
          }
          label="Hollow/recessed temples"
          name="eyes"
          value="Hollow/recessed temples"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Dark Circles")}
          disabled={
            !details.concerns.includes("Dark Circles") &&
            details.concerns.length > 1
          }
          label="Dark Circles"
          name="eyes"
          value="Dark Circles"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Scar")}
          disabled={
            !details.concerns.includes("Scar") && details.concerns.length > 1
          }
          label="Scar"
          name="eyes"
          value="Scar"
          onClick={onChangehandler}
        />
        <Form.Check
          checked={details.concerns.includes("Other")}
          disabled={
            !details.concerns.includes("Other") && details.concerns.length > 1
          }
          label="Other"
          name="eyes"
          value="Other"
          onClick={onChangehandler}
        />
        <div style={{ display: "flex" }}>
          <Form.Check
            checked={details.concerns.includes("Upper eyelids")}
            disabled={
              !details.concerns.includes("Upper eyelids") &&
              details.concerns.length > 1
            }
            label="Upper eyelids"
            name="eyes"
            value="Upper eyelids"
            onClick={onChangehandler}
          />
          <a className="eye-btn" onClick={onExpandhandler}>
            {expand ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </a>
        </div>
        {expand ? (
          <div className="expand-div">
            <Form.Check
              checked={details.concerns.includes("Upper eyelids -> Excess fat")}
              disabled={
                !details.concerns.includes("Upper eyelids -> Excess fat") &&
                details.concerns.length > 1
              }
              label="Excess fat"
              name="eyes"
              value="Upper eyelids -> Excess fat"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes(
                "Upper eyelids -> Excess skin/Sagging eyelids"
              )}
              disabled={
                !details.concerns.includes(
                  "Upper eyelids -> Excess skin/Sagging eyelids"
                ) && details.concerns.length > 1
              }
              label="Excess skin/Sagging eyelids"
              name="eyes"
              value="Upper eyelids -> Excess skin/Sagging eyelids"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes(
                "Upper eyelids -> Hooding skin"
              )}
              disabled={
                !details.concerns.includes("Upper eyelids -> Hooding skin") &&
                details.concerns.length > 1
              }
              label="Hooding skin"
              name="eyes"
              value="Upper eyelids -> Hooding skin"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Upper eyelids -> Puffiness")}
              disabled={
                !details.concerns.includes("Upper eyelids -> Puffiness") &&
                details.concerns.length > 1
              }
              label="Puffiness"
              name="eyes"
              value="Upper eyelids -> Puffiness"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Upper eyelids -> Scar")}
              disabled={
                !details.concerns.includes("Upper eyelids -> Scar") &&
                details.concerns.length > 1
              }
              label="Scar"
              name="eyes"
              value="Upper eyelids -> Scar"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Upper eyelids -> Other")}
              disabled={
                !details.concerns.includes("Upper eyelids -> Other") &&
                details.concerns.length > 1
              }
              label="Other"
              name="eyes"
              value="Upper eyelids -> Other"
              onClick={onChangehandler}
            />
          </div>
        ) : null}
        <div style={{ display: "flex" }}>
          <Form.Check
            checked={details.concerns.includes("Lower eyelids")}
            disabled={
              !details.concerns.includes("Lower eyelids") &&
              details.concerns.length > 1
            }
            label="Lower eyelids"
            name="eyes"
            value="Lower eyelids"
            onClick={onChangehandler}
          />
          <a className="eye-btn" onClick={onExpandhandlerlower}>
            {expand ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </a>
        </div>
        {expandLower ? (
          <div className="expand-div">
            <Form.Check
              checked={details.concerns.includes("Upper eyelids -> Excess fat")}
              disabled={
                !details.concerns.includes("Upper eyelids -> Excess fat") &&
                details.concerns.length > 1
              }
              label="Excess fat"
              name="eyes"
              value="Lower eyelids -> Excess fat"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes(
                "Lower eyelids -> Excess skin"
              )}
              disabled={
                !details.concerns.includes("Lower eyelids -> Excess skin") &&
                details.concerns.length > 1
              }
              label="Excess skin"
              name="eyes"
              value="Lower eyelids -> Excess skin"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes(
                "Lower eyelids -> Skin wrinkles/creases"
              )}
              disabled={
                !details.concerns.includes(
                  "Lower eyelids -> Skin wrinkles/creases"
                ) && details.concerns.length > 1
              }
              label="Skin wrinkles/creases"
              name="eyes"
              value="Lower eyelids -> Skin wrinkles/creases"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Lower eyelids -> Puffiness")}
              disabled={
                !details.concerns.includes("Lower eyelids -> Puffiness") &&
                details.concerns.length > 1
              }
              label="Puffiness"
              name="eyes"
              value="Lower eyelids -> Puffiness"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Lower eyelids -> Scar")}
              disabled={
                !details.concerns.includes("Lower eyelids -> Scar") &&
                details.concerns.length > 1
              }
              label="Scar"
              name="eyes"
              value="Lower eyelids -> Scar"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes(
                "Lower eyelids -> Dark circles"
              )}
              disabled={
                !details.concerns.includes("Lower eyelids -> Dark circles") &&
                details.concerns.length > 1
              }
              label="Dark circles"
              name="eyes"
              value="Lower eyelids -> Dark circles"
              onClick={onChangehandler}
            />
            <Form.Check
              checked={details.concerns.includes("Lower eyelids -> Other")}
              disabled={
                !details.concerns.includes("Lower eyelids -> Other") &&
                details.concerns.length > 1
              }
              label="Other"
              name="eyes"
              value="Lower eyelids -> Other"
              onClick={onChangehandler}
            />
          </div>
        ) : null}
        <Form.Check
          checked={details.concerns.includes("Excess/unwanted hair")}
          disabled={
            !details.concerns.includes("Excess/unwanted hair") &&
            details.concerns.length > 1
          }
          label="Excess/unwanted hair"
          name="eyes"
          value="Excess/unwanted hair"
          onClick={onChangehandler}
        />
      </Col>
    </Row>
  );
}

export default Eyes;
