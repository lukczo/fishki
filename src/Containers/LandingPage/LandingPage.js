import React from "react";
import Hero from "../../Components/Hero/Hero";
import Ctas from "../../Components/Ctas/Ctas";
import Aux from "../../Hoc/Aux";

const LandingPage = (props) => {
  return !props.fishkiOn ? (
    <Aux>
      <Hero />
      <Ctas btnFunction={props.btnFunction} />
    </Aux>
  ) : null;
};

export default LandingPage;
