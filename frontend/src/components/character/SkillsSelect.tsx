import React from "react";
import {
  activeCombatSkills,
  activeCombatSkillsEnum,
  activePhysicalSkills,
  activePhysicalSkillsEnum,
  magicalSkills,
  magicalSkillsEnum,
  resonanceSkills,
  resonanceSkillsEnum,
  socialSkills,
  socialSkillsEnum,
  technicalSkills,
  technicalSkillsEnum,
  vehicleSkills,
  vehicleSkillsEnum,
} from "../../data/Skills.js";
import type { IActiveSkill } from "../../data/Skills.js";
import Dropdown from "react-dropdown";
import { ISkillPoints } from "./PriorityImports.js";

// first rating empty for no points in skill
const skillRating = [
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

interface IProps {
  skillPoints: ISkillPoints;
  skillSelections: Array<IActiveSkill>;
}

export const SkillsSelect = function (props: IProps) {
  return (
    <React.Fragment>
      <p>
        Skill Points Remaining:{" "}
        <span id="skillPoints">{props.skillPoints.skillPoints}</span>
      </p>
      <div>
        <h1>Combat Skills</h1>
        {activeCombatSkills.map((skill) => {
          const escapedName = activeCombatSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Physical Skills</h1>
        {activePhysicalSkills.map((skill) => {
          const escapedName = activePhysicalSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Social Skills</h1>
        {socialSkills.map((skill) => {
          const escapedName = socialSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Magical Skills</h1>
        {magicalSkills.map((skill) => {
          const escapedName = magicalSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Resonance Skills</h1>
        {resonanceSkills.map((skill) => {
          const escapedName = resonanceSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Technical Skills</h1>
        {technicalSkills.map((skill) => {
          const escapedName = technicalSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
      <div>
        <h1>Vehicle Skills</h1>
        {vehicleSkills.map((skill) => {
          const escapedName = vehicleSkillsEnum[skill.id];
          return <SkillSelect escapedName={escapedName} />;
        })}
      </div>
    </React.Fragment>
  );
};

interface ISkillSelectProp {
  escapedName: string;
}

const SkillSelect = function ({ escapedName: escapedName }: ISkillSelectProp) {
  return (
    <div>
      <label htmlFor={escapedName}>{escapedName}</label>
      <Dropdown
        options={skillRating}
        value={""}
        className={escapedName}
        placeholder={""}
      />
    </div>
  );
};
