import React, { useContext } from "react";
import Context from "../../../Context";
import "./Parts.css";
import Abdomen from "./Abdomen";
import SideFat from "./SideFat";
import Chest from "./Chest";
import Jaw from "./Jaw";
import Neck from "./Neck";
import Lips from "./Lips";
import Cheeks from "./Cheeks";
import Nose from "./Nose";
import Eyes from "./Eyes";
import Ears from "./Ears";
import Forehead from "./Forehead";
import Head from "./Head";
import Thigs from "./Thigs";
import Knees from "./Knees";
import Feets from "./Feets";
import Hands from "./Hands";
import Palms from "./Palms";
import Butt from "./Butt";

function ConcernBodypart() {
  const { details } = useContext(Context);

  return (
    <>
      {details.bodyPart === "abdomen" ? <Abdomen /> : null}
      {details.bodyPart === "sidefat" ? <SideFat /> : null}
      {details.bodyPart === "chest" ? <Chest /> : null}
      {details.bodyPart === "jaw" ? <Jaw /> : null}
      {details.bodyPart === "neck" ? <Neck /> : null}
      {details.bodyPart === "lips" ? <Lips /> : null}
      {details.bodyPart === "cheeks" ? <Cheeks /> : null}
      {details.bodyPart === "nose" ? <Nose /> : null}
      {details.bodyPart === "eyes" ? <Eyes /> : null}
      {details.bodyPart === "ears" ? <Ears /> : null}
      {details.bodyPart === "forehead" ? <Forehead /> : null}
      {details.bodyPart === "head" ? <Head /> : null}
      {details.bodyPart === "thigs" ? <Thigs /> : null}
      {details.bodyPart === "knees" ? <Knees /> : null}
      {details.bodyPart === "feets" ? <Feets /> : null}
      {details.bodyPart === "hands" ? <Hands /> : null}
      {details.bodyPart === "palms" ? <Palms /> : null}
      {details.bodyPart === "buttocks" ? <Butt /> : null}
    </>
  );
}

export default ConcernBodypart;
