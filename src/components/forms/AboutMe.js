import React, { useState, useMemo, useContext } from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import countryList from "react-select-country-list";
import Select from "react-select";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Context from "../../Context";
import { getNewStateOneValue } from "../utils";

function AboutMe() {
  const options = useMemo(() => countryList().getData(), []);

  const initialData = {
    name: "",
    gender: "Male",
    age: "",
    height: "",
    contact: "",
    email: "",
    state: "",
    fitness: "Normal Weight",
    city: "",
    surgeries: "",
    pastCosmeticSurgeries: [],
    liposuctionBodypart: "",
    OtherSurgeries: "",
    results: "",
    medications: "No",
    pregnant: "No",
    smoker: "No",
    problems: "",
    tan: "",
  };
  const [data, setData] = useState(initialData);
  const [country, setCountry] = useState("");
  const [liposuction, setLiposuction] = useState(false);
  const [other, setOther] = useState(false);
  const { addDetails } = useContext(Context);

  const onChangehandler = (e) => {
    setData((prevState) => {
      const targetName = prevState[e.target.name];
      console.log(targetName);
      addDetails(
        {
          ...prevState,
          [e.target.name]:
            e.target.name === "pastCosmeticSurgeries"
              ? getNewStateOneValue(targetName, e.target.value)
              : e.target.value,
        },
        "about"
      );
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const changeHandler = (country) => {
    setCountry(country);
  };
  const onSubmithandler = (e) => {
    e.preventDefault();
    window.scrollTo(0, 2);
  };
  const onSavehandler = (e) => {
    console.log(data);
  };
  console.log(data);
  return (
    <div>
      <h5>About Me and Medical History</h5>
      <section>
        <Form className="p-4" onSubmit={onSubmithandler}>
          <div>
            <p>Personal Information</p> <hr />
            <Row className="mb-3">
              <Col sm={12} md={8} lg={8}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Patient name"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                  <Form.Control
                    as="select"
                    value={data.gender}
                    name="gender"
                    onChange={onChangehandler}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel controlId="floatingInputGrid" label="Age">
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Height (in m)"
                >
                  <Form.Control
                    type="number"
                    name="height"
                    placeholder="Height"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel controlId="floatingInputGrid" label="Phone">
                  <Form.Control
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={12} md={7} lg={7}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Email address"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="your@example.com"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={5} lg={5}>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Which State Best describes you"
                >
                  <Form.Control
                    as="select"
                    required
                    name="fitness"
                    onChange={onChangehandler}
                  >
                    <option value="Normal Weight">Normal Weight</option>
                    <option value="Under Weight">Under Weight</option>
                    <option value="Over Weight">Over Weight</option>
                    <option value="Obese">Obese</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={12} md={4} lg={4}>
                <p
                  style={{
                    marginBottom: "-4px",
                    fontSize: "16px",
                  }}
                >
                  Select Your Country
                </p>
                <Select
                  options={options}
                  value={country}
                  classNamePrefix="Select Country"
                  name="country"
                  onChange={changeHandler}
                  required
                />
              </Col>
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel controlId="floatingInputGrid" label="State">
                  <Form.Control
                    type="text"
                    name="state"
                    placeholder="Enter Your State"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <FloatingLabel controlId="floatingInputGrid" label="City">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter Your City"
                    onChange={onChangehandler}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <hr />
          </div>
          <div className="mt-3">
            <p>Medical Profile</p>
            <Row className="mb-3">
              <Col sm={12} md={12} lg={12}>
                <Form.Label name="problems">
                  What medical problems do you have now or have had in the past?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="problems"
                  onChange={onChangehandler}
                  placeholder="Let Us Know if any or None"
                  style={{ height: "100px" }}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label
                  as="legend"
                  column
                  sm={12}
                  name="surgeries"
                  required
                >
                  Have you had any surgeries in the past?
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="surgeries"
                  value="yes"
                  defaultChecked
                  onChange={onChangehandler}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="No"
                  name="surgeries"
                  onChange={onChangehandler}
                />
              </Col>
            </Row>
            <hr />
          </div>
          <Row>
            <FormLabel>Past Cosmetic Surgeries/ Procedures:</FormLabel>
            <Col Col sm={12} md={4} lg={4}>
              <Form.Check
                label="Rhinoplasty (Nose Job)"
                name="pastCosmeticSurgeries"
                value="Rhinoplasty (Nose Job)"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Breast (Augmentation, Reduction, Lift)"
                name="pastCosmeticSurgeries"
                value="Breast (Augmentation, Reduction, Lift)"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Liposuction of"
                name="pastCosmeticSurgeries"
                value="Liposuction of"
                onClick={onChangehandler}
                onChange={() => {
                  liposuction ? setLiposuction(false) : setLiposuction(true);
                }}
              />
              {liposuction ? (
                <Form.Control
                  type="text"
                  name="liposuctionBodypart"
                  placeholder="Which Body part"
                  onChange={onChangehandler}
                  required
                />
              ) : (
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Which Body part"
                  disabled
                />
              )}
              <Form.Check
                label="Tummy Tuck"
                name="pastCosmeticSurgeries"
                value="Tummy Tuck"
                onClick={onChangehandler}
              />
            </Col>
            <Col Col sm={12} md={4} lg={4}>
              <Form.Check
                label="Facelift"
                name="pastCosmeticSurgeries"
                value="Facelift"
                onClick={onChangehandler}
              />
              <Form.Check
                label=" Eyelid Surgery"
                name="pastCosmeticSurgeries"
                value=" Eyelid Surgery"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Chin/ Cheek Implant"
                name="pastCosmeticSurgeries"
                value="Chin/ Cheek Implant"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Butt/ Calf/ Body Implants"
                name="pastCosmeticSurgeries"
                value="Butt/ Calf/ Body Implants"
                onClick={onChangehandler}
              />
            </Col>
            <Col Col sm={12} md={4} lg={4}>
              <Form.Check
                label="Dermal fillers"
                name="pastCosmeticSurgeries"
                value="Dermal fillers"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Botox"
                name="pastCosmeticSurgeries"
                value="Botox"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Peels / Lasers"
                name="pastCosmeticSurgeries"
                value="Peels / Lasers"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Others"
                name="pastCosmeticSurgeries"
                value="Others"
                onClick={onChangehandler}
                onChange={() => {
                  other ? setOther(false) : setOther(true);
                }}
              />
              {other ? (
                <Form.Control
                  type="text"
                  name="OtherSurgeries"
                  placeholder="Please Specify"
                  onChange={onChangehandler}
                  required
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder="Please Specify"
                  disabled
                />
              )}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col Col sm={12} md={12} lg={12}>
              <FormLabel name="results">Results:</FormLabel>
              <Form.Check
                label="Better than Expected"
                name="results"
                value="Better than Expected"
                onClick={onChangehandler}
              />
              <Form.Check
                label="As Expected"
                name="results"
                value="As Expected"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Worse than Expected"
                name="results"
                value="Worse than Expected"
                onClick={onChangehandler}
              />
              <Form.Check
                label="Had Major Complications"
                name="results"
                value="Had Major Complications"
                onClick={onChangehandler}
              />
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col sm={12} md={6} lg={6}>
              <Form.Label
                as="legend"
                column
                sm={12}
                name="medications"
                required
              >
                Are you taking any medications?
              </Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                name="medications"
                onChange={onChangehandler}
                value="yes"
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                name="medications"
                onChange={onChangehandler}
                defaultChecked
                defaultValue="No"
              />
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Form.Label as="legend" column sm={12} name="pregnant" required>
                Are you pregnant?
              </Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                name="pregnant"
                value="yes"
                onChange={onChangehandler}
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                name="pregnant"
                onChange={onChangehandler}
                defaultChecked
                defaultValue="No"
              />
            </Col>
            <Col sm={12} md={3} lg={3}>
              <Form.Label as="legend" column sm={12} name="smoker" required>
                Do you smoke?
              </Form.Label>
              <Form.Check
                type="radio"
                label="Yes"
                onChange={onChangehandler}
                name="smoker"
                value="yes"
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                name="smoker"
                onChange={onChangehandler}
                defaultChecked
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Form.Label as="legend" column sm={12} name="tan" required>
                How often do you tan?
              </Form.Label>
              <Form.Control
                type="text"
                name="tan"
                onChange={onChangehandler}
                placeholder="Daily/Weekly/Monthly etc"
              />
            </Col>
          </Row>
          <Button
            type="submit"
            disabled={data.tan === "" ? true : false}
            className="mt-3"
            onClick={onSavehandler}
          >
            Submit Details
          </Button>
        </Form>
      </section>
    </div>
  );
}

// export { data };
export default AboutMe;
