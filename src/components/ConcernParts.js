import React, { useContext } from "react";
import Context from "../Context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./ConcernParts.css";
import abdomen from "./assets/concerns/abdomen.png";
import cheeks from "./assets/concerns/cheeks.png";
import chest from "./assets/concerns/chest.png";
import ears from "./assets/concerns/ears.png";
import eyes from "./assets/concerns/eyes.png";
import feets from "./assets/concerns/abdomen.png";
import forehead from "./assets/concerns/forehead.png";
import hands from "./assets/concerns/hands.png";
import head from "./assets/concerns/head.png";
import jaw from "./assets/concerns/jaw.png";
import knees from "./assets/concerns/knees.png";
import lips from "./assets/concerns/lips.png";
import neck from "./assets/concerns/neck.png";
import nose from "./assets/concerns/nose.png";
import palms from "./assets/concerns/palms.png";
import sidefat from "./assets/concerns/sidefat.png";
import thigs from "./assets/concerns/thigs.png";
import buttocks from "./assets/concerns/buttocks.JPG";

function ConcernParts() {
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);
  const part = details.bodyPart;

  const onDeletehandler = (e) => {
    addDetails([], "concerns");
    addDetails("", "bodyPart");
  };

  console.log(part);
  return (
    <section className="concerns-parts">
      <Row>
        <Col>
          {details.bodyPart === "abdomen" ? (
            <img src={abdomen} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "cheeks" ? (
            <img src={cheeks} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "chest" ? (
            <img src={chest} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "ears" ? (
            <img src={ears} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "eyes" ? (
            <img src={eyes} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "feets" ? (
            <img src={feets} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "forehead" ? (
            <img src={forehead} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "hands" ? (
            <img src={hands} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "head" ? (
            <img src={head} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "jaw" ? (
            <img src={jaw} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "knees" ? (
            <img src={knees} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "lips" ? (
            <img src={lips} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "neck" ? (
            <img src={neck} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "nose" ? (
            <img src={nose} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "palms" ? (
            <img src={palms} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "sidefat" ? (
            <img src={sidefat} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "thigs" ? (
            <img src={thigs} alt={details.bodypart} height="80px" fluid />
          ) : null}
          {details.bodyPart === "buttocks" ? (
            <img src={buttocks} alt={details.bodypart} height="80px" fluid />
          ) : null}
        </Col>

        <Col>
          <p>
            {part.charAt(0).toUpperCase()}
            {part.slice(1)}
          </p>
        </Col>
        <Col>
          <DeleteForeverIcon
            color="error"
            className="icon"
            onClick={onDeletehandler}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6} md={6} lg={4}>
          <h6>Concerns:</h6>
        </Col>
        <Col sm={6} md={6} lg={8}>
          {details.concerns.map((concern) => (
            <ul>
              <li>{concern}</li>
            </ul>
          ))}
        </Col>
      </Row>
    </section>
  );
}

export default ConcernParts;
