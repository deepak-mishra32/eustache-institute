import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import maleFront from "../assets/male-front.png";
import maleBack from "../assets/male-back.png";
import femaleFront from "../assets/female-front.png";
import femaleBack from "../assets/female-back.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ImageMapper from "react-image-mapper";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Concerns.css";
import { Button } from "react-bootstrap";
import Context from "../../Context";
import { MAPFEMALEFRONT } from "../../Constant";
import { MAPMALEFRONT } from "../../Constant";
import { MAPMALEBACK } from "../../Constant";
import { MAPFEMALEBACK } from "../../Constant";
import { MAPMALEFRONTMB } from "../../Constant";
import { MAPMALEBACKMB } from "../../Constant";
import { MAPFEMALEFRONTMB } from "../../Constant";
import { MAPFEMALEBACKMB } from "../../Constant";
import ConcernBodypart from "./PartsConcern/ConcernBodyPart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    top: "10%",
    position: "absolute",
    // margin: "18px 0px",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #2fa0af",
    boxShadow: theme.shadows[5],
    borderRadius: "5px",
    padding: theme.spacing(2, 4, 3),
  },
  enter: {
    marginTop: "16px",
    backgroundColor: "#6EC8D3",
    color: "#000000",
    margin: "8px",
    "&:hover": {
      backgroundColor: "#6EC8D3",
      color: "#000000",
      fontWeight: "500",
    },
  },
}));

function Concerns() {
  const [gender, setGender] = useState("Male");
  const [view, setView] = useState("Front View");
  const [modalView, setModalView] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { addDetails } = useContext(Context);
  const { details } = useContext(Context);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  const onAreaClickhandler = (area) => {
    setOpen(true);
    setModalView(true);
    addDetails(area.name, "bodyPart");
  };

  const onCancelHandler = (e) => {
    setOpen(false);
    addDetails([], "concerns");
    addDetails("", "bodyPart");
  };

  return (
    <Container fluid className="mt-1">
      <Row>
        <Col sm={12} md={6} lg={6}>
          {gender === "Male" ? (
            view === "Front View" ? (
              <ImageMapper
                src={maleFront}
                map={matches ? MAPMALEFRONTMB : MAPMALEFRONT}
                name="my-map"
                onClick={(area) => onAreaClickhandler(area)}
                className="body-img"
                height={matches ? 500 : 756}
              />
            ) : (
              <ImageMapper
                src={maleBack}
                map={matches ? MAPMALEBACKMB : MAPMALEBACK}
                name="my-maleBackmap"
                onClick={(area) => onAreaClickhandler(area)}
                height={matches ? 500 : 756}
              />
            )
          ) : view === "Front View" ? (
            <ImageMapper
              src={femaleFront}
              map={matches ? MAPFEMALEFRONTMB : MAPFEMALEFRONT}
              name="my-Femalemap"
              onClick={(area) => onAreaClickhandler(area)}
              height={matches ? 500 : 756}
            />
          ) : (
            <ImageMapper
              src={femaleBack}
              map={matches ? MAPFEMALEBACKMB : MAPFEMALEBACK}
              name="my-femaleBackmap"
              onClick={(area) => onAreaClickhandler(area)}
              height={matches ? 500 : 756}
            />
          )}
          {modalView ? (
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <ConcernBodypart />
                    <Button
                      onClick={handleClose}
                      className={classes.enter}
                      disabled={!details.concerns.length > 0}
                    >
                      Add Request
                    </Button>
                    <Button
                      name={details.bodyPart}
                      className={classes.enter}
                      onClick={onCancelHandler}
                    >
                      Cancel
                    </Button>
                  </div>
                </Fade>
              </Modal>
            </div>
          ) : null}
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <DropdownButton
                id="dropdown-basic-button"
                title={gender}
                style={{ marginBottom: "8px", float: "left" }}
              >
                <Dropdown.Item
                  className="gender-view"
                  value="Male"
                  onSelect={() => setGender("Male")}
                >
                  Male
                </Dropdown.Item>
                <Dropdown.Item
                  className="gender-view"
                  value="Female"
                  onSelect={() => setGender("Female")}
                >
                  Female
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <DropdownButton id="dropdown-basic-button" title={view}>
                <Dropdown.Item
                  className="gender-view"
                  value="Front View"
                  onSelect={() => setView("Front View")}
                >
                  Front View
                </Dropdown.Item>
                <Dropdown.Item
                  className="gender-view"
                  value="Back View"
                  onSelect={() => setView("Back View")}
                >
                  Back View
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <section>
            <p>
              Click on which body parts you’d like to consult on, then choose up
              to 2 of your concerns. Limit: Max of 2 body parts and 2 concerns
              per transaction. Should you wish to consult on more than two
              concerns, we advise that you schedule an in-person, private
              consultation instead. We’d be happy to take your call.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Concerns;
