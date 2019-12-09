import React from "react";
import Aux from "../../hoc/Aux";
import Food from "../../components/Food/Food"

const FoodBuilder = () => {
  return (
    <Aux>
      <Food/>
      <div>Food Controler</div>
    </Aux>
  );
};

export default FoodBuilder;
