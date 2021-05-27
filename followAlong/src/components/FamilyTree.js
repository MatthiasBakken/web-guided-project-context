import React, { useContext } from "react";

import { FamilyContext } from '../App'; 

import Parents from "./Parents";
import Siblings from "./Siblings";

export default function FamilyTree() {
  // awesome new exciting.... EASY
  const value = useContext(FamilyContext) // where does this data come from?
  return (
    <section className="FamilyTree">
      <h1>{value.activeFamily.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={value.activeFamily} />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings />
      {/* <Siblings family={family} /> */}
    </section>
  );
}
