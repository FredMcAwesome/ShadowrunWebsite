import { MetatypeEnum } from "./PriorityImports.js";
import type { IMagicInfo, IPriorities } from "./PriorityImports.js";
import { Fragment, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
interface IAttributeRange {
  minimum: number;
  maximum: number;
}

type IMetatypeAttributes = Array<Array<IAttributeRange>>;

const metatypeBaseAttributes: IMetatypeAttributes = [
  [
    // race: MetatypeEnum.Human,
    // body:
    {
      minimum: 1,
      maximum: 6,
    },
    // agility:
    {
      minimum: 1,
      maximum: 6,
    },
    // reaction:
    {
      minimum: 1,
      maximum: 6,
    },
    // strength:
    {
      minimum: 1,
      maximum: 6,
    },
    // willpower:
    {
      minimum: 1,
      maximum: 6,
    },
    // logic:
    {
      minimum: 1,
      maximum: 6,
    },
    // intuition:
    {
      minimum: 1,
      maximum: 6,
    },
    // charisma:
    {
      minimum: 1,
      maximum: 6,
    },
    // edge:
    {
      minimum: 2,
      maximum: 7,
    },
  ],
  [
    // race: MetatypeEnum.Elf,
    // body:
    {
      minimum: 1,
      maximum: 6,
    },
    // agility:
    {
      minimum: 2,
      maximum: 7,
    },
    // reaction:
    {
      minimum: 1,
      maximum: 6,
    },
    // strength:
    {
      minimum: 1,
      maximum: 6,
    },
    // willpower:
    {
      minimum: 1,
      maximum: 6,
    },
    // logic:
    {
      minimum: 1,
      maximum: 6,
    },
    // intuition:
    {
      minimum: 1,
      maximum: 6,
    },
    // charisma:
    {
      minimum: 3,
      maximum: 8,
    },
    // edge:
    {
      minimum: 1,
      maximum: 6,
    },
  ],
  [
    // race: MetatypeEnum.Dwarf,
    // body:
    {
      minimum: 3,
      maximum: 8,
    },
    // agility:
    {
      minimum: 1,
      maximum: 6,
    },
    // reaction:
    {
      minimum: 1,
      maximum: 5,
    },
    // strength:
    {
      minimum: 3,
      maximum: 8,
    },
    // willpower:
    {
      minimum: 2,
      maximum: 7,
    },
    // logic:
    {
      minimum: 1,
      maximum: 6,
    },
    // intuition:
    {
      minimum: 1,
      maximum: 6,
    },
    // charisma:
    {
      minimum: 1,
      maximum: 6,
    },
    // edge:
    {
      minimum: 1,
      maximum: 6,
    },
  ],
  [
    // race: MetatypeEnum.Ork,
    // body:
    {
      minimum: 4,
      maximum: 9,
    },
    // agility:
    {
      minimum: 1,
      maximum: 6,
    },
    // reaction:
    {
      minimum: 1,
      maximum: 6,
    },
    // strength:
    {
      minimum: 3,
      maximum: 8,
    },
    // willpower:
    {
      minimum: 1,
      maximum: 6,
    },
    // logic:
    {
      minimum: 1,
      maximum: 5,
    },
    // intuition:
    {
      minimum: 1,
      maximum: 6,
    },
    // charisma:
    {
      minimum: 1,
      maximum: 5,
    },
    // edge:
    {
      minimum: 1,
      maximum: 6,
    },
  ],
  [
    // race: MetatypeEnum.Troll,
    // body:
    {
      minimum: 5,
      maximum: 10,
    },
    // agility:
    {
      minimum: 1,
      maximum: 5,
    },
    // reaction:
    {
      minimum: 1,
      maximum: 6,
    },
    // strength:
    {
      minimum: 5,
      maximum: 10,
    },
    // willpower:
    {
      minimum: 1,
      maximum: 6,
    },
    // logic:
    {
      minimum: 1,
      maximum: 5,
    },
    // intuition:
    {
      minimum: 1,
      maximum: 5,
    },
    // charisma:
    {
      minimum: 1,
      maximum: 4,
    },
    // edge:
    {
      minimum: 1,
      maximum: 6,
    },
  ],
];

export interface IAttributes {
  body: number;
  agility: number;
  reaction: number;
  strength: number;
  willpower: number;
  logic: number;
  intuition: number;
  charisma: number;
}

export interface ISpecialAttributes {
  edge: number;
  magic: number;
}

export enum AttributesEnum {
  Body,
  Agility,
  Reaction,
  Strength,
  Willpower,
  Logic,
  Intuition,
  Charisma,
  AttributesEnumMax,
}

const EdgeBaseAttributeIndex = AttributesEnum.AttributesEnumMax;

export enum SpecialAttributesEnum {
  Edge,
  Magic,
  SpecialAttributesEnumMax,
}

function checkMinimums(
  attributes: Array<number>,
  attributeRanges: Array<IAttributeRange>,
  attributeType: AttributesEnum
) {
  if (attributes[attributeType] < attributeRanges[attributeType].minimum)
    attributes[attributeType] = attributeRanges[attributeType].minimum;
  return attributes;
}

function checkMaximums(
  attributes: Array<number>,
  attributeRanges: Array<IAttributeRange>,
  attributeType: AttributesEnum
) {
  if (attributes[attributeType] > attributeRanges[attributeType].maximum)
    attributes[attributeType] = attributeRanges[attributeType].maximum;

  for (
    let otherAttributeType = 0;
    otherAttributeType < AttributesEnum.AttributesEnumMax;
    otherAttributeType++
  ) {
    if (attributeType !== otherAttributeType) {
      if (
        attributes[otherAttributeType] ===
          attributeRanges[otherAttributeType].maximum &&
        attributes[attributeType] === attributeRanges[attributeType].maximum
      ) {
        attributes[attributeType]--;
        break;
      }
    }
  }
  return attributes;
}

function checkSpecialMinimums(
  attributes: Array<number>,
  attributeRanges: Array<IAttributeRange>,
  attributeType: SpecialAttributesEnum
) {
  if (attributes[attributeType] < attributeRanges[attributeType].minimum)
    attributes[attributeType] = attributeRanges[attributeType].minimum;
  return attributes;
}

function checkSpecialMaximums(
  attributes: Array<number>,
  attributeRanges: Array<IAttributeRange>,
  attributeType: SpecialAttributesEnum
) {
  if (attributes[attributeType] > attributeRanges[attributeType].maximum)
    attributes[attributeType] = attributeRanges[attributeType].maximum;
  return attributes;
}

interface IProps {
  priorityInfo: IPriorities;
  attributeInfo: IAttributes;
  setAttributeInfo: (loadingAttributes: IAttributes) => void;
  specialAttributeInfo: ISpecialAttributes;
  setSpecialAttributeInfo: (
    loadingSpecialAttributes: ISpecialAttributes
  ) => void;
  maxAttributePoints: number;
  maxSpecialAttributePoints: number;
  magicInfo: IMagicInfo;
}

const AttributesSelect = function (props: IProps) {
  const metatype = props.priorityInfo.MetatypeSubselection;
  const baseAttributes: Array<IAttributeRange> =
    metatypeBaseAttributes[metatype];
  const baseSpecialAttributes: Array<IAttributeRange> = [
    metatypeBaseAttributes[metatype][EdgeBaseAttributeIndex],
    {
      minimum: props.magicInfo.magicRating,
      maximum: props.magicInfo.magicRating > 0 ? 6 : 0,
    },
  ];
  const [attributePoints, setAttributePoints] = useState(
    props.maxAttributePoints
  );
  const [specialAttributePoints, setSpecialAttributePoints] = useState(
    props.maxSpecialAttributePoints
  );
  const [attributes, setAttributes] = useState<Array<number>>(() => {
    let attributeArray = [
      props.attributeInfo.body,
      props.attributeInfo.agility,
      props.attributeInfo.reaction,
      props.attributeInfo.strength,
      props.attributeInfo.willpower,
      props.attributeInfo.logic,
      props.attributeInfo.intuition,
      props.attributeInfo.charisma,
    ];
    let tempAttributePoints = attributePoints;
    for (
      let attribute = 0;
      attribute < AttributesEnum.AttributesEnumMax;
      attribute++
    ) {
      attributeArray = checkMinimums(attributeArray, baseAttributes, attribute);
      attributeArray = checkMaximums(attributeArray, baseAttributes, attribute);
      let difference =
        attributeArray[attribute] - baseAttributes[attribute].minimum;
      if (difference <= tempAttributePoints) {
        tempAttributePoints = tempAttributePoints - difference;
      } else {
        difference = tempAttributePoints;
        attributeArray[attribute] =
          baseAttributes[attribute].minimum + difference;
        tempAttributePoints = 0;
      }
    }
    setAttributePoints(tempAttributePoints);
    return attributeArray;
  });
  const [specialAttributes, setSpecialAttributes] = useState<Array<number>>(
    () => {
      let attributeArray = [
        props.specialAttributeInfo.edge,
        props.specialAttributeInfo.magic,
      ];
      let tempAttributePoints = specialAttributePoints;
      for (
        let attribute = 0;
        attribute < SpecialAttributesEnum.SpecialAttributesEnumMax;
        attribute++
      ) {
        attributeArray = checkSpecialMinimums(
          attributeArray,
          baseSpecialAttributes,
          attribute
        );
        attributeArray = checkSpecialMaximums(
          attributeArray,
          baseSpecialAttributes,
          attribute
        );
        let difference =
          attributeArray[attribute] - baseSpecialAttributes[attribute].minimum;
        if (difference <= tempAttributePoints) {
          tempAttributePoints = tempAttributePoints - difference;
        } else {
          difference = tempAttributePoints;
          attributeArray[attribute] =
            baseSpecialAttributes[attribute].minimum + difference;
          tempAttributePoints = 0;
        }
      }

      setSpecialAttributePoints(tempAttributePoints);
      return attributeArray;
    }
  );
  const [attributeOptions, setAttributeOptions] = useState<
    Array<Array<string>>
  >(() => {
    let totalArray: Array<Array<string>> = getAttributeOptions(
      baseAttributes,
      AttributesEnum.AttributesEnumMax
    );
    return totalArray;
  });

  const [specialAttributeOptions, setSpecialAttributeOptions] = useState<
    Array<Array<string>>
  >(() => {
    let totalArray: Array<Array<string>> = getSpecialAttributeOptions(
      baseSpecialAttributes,
      SpecialAttributesEnum.SpecialAttributesEnumMax
    );
    return totalArray;
  });

  function getAttributeOptions(
    baseAttributeRanges: Array<IAttributeRange>,
    attributeEnumMax: number
  ) {
    let maxAttribute: Array<boolean> = [];
    let totalArray: Array<Array<string>> = [];
    for (let attribute = 0; attribute < attributeEnumMax; attribute++) {
      if (attributes[attribute] === baseAttributeRanges[attribute].maximum)
        maxAttribute.push(true);
      else maxAttribute.push(false);
    }
    const anyMax = maxAttribute.reduce(
      (anyPreviousMax, currrentMax) => anyPreviousMax || currrentMax,
      false
    );
    for (let attribute = 0; attribute < attributeEnumMax; attribute++) {
      let attributeArray: Array<string> = [];
      for (
        let value = baseAttributeRanges[attribute].minimum;
        value < baseAttributeRanges[attribute].maximum;
        value++
      ) {
        const difference = value - attributes[attribute];
        if (attributePoints - difference >= 0) {
          attributeArray.push(value.toString());
        }
      }
      if (!anyMax || maxAttribute[attribute]) {
        const difference =
          baseAttributeRanges[attribute].maximum - attributes[attribute];
        if (attributePoints - difference >= 0) {
          attributeArray.push(
            baseAttributeRanges[attribute].maximum.toString()
          );
        }
      }
      totalArray.push(attributeArray);
    }
    return totalArray;
  }

  function getSpecialAttributeOptions(
    baseAttributeRanges: Array<IAttributeRange>,
    attributeEnumMax: number
  ) {
    let totalArray: Array<Array<string>> = [];
    for (let attribute = 0; attribute < attributeEnumMax; attribute++) {
      let attributeArray: Array<string> = [];
      for (
        let value = baseAttributeRanges[attribute].minimum;
        value < baseAttributeRanges[attribute].maximum;
        value++
      ) {
        const difference = value - specialAttributes[attribute];
        if (specialAttributePoints - difference >= 0) {
          attributeArray.push(value.toString());
        }
      }
      const difference =
        baseAttributeRanges[attribute].maximum - specialAttributes[attribute];
      if (specialAttributePoints - difference >= 0) {
        attributeArray.push(baseAttributeRanges[attribute].maximum.toString());
      }

      totalArray.push(attributeArray);
    }
    return totalArray;
  }

  function changeAttribute(
    attributeType: AttributesEnum,
    attributeStr: string
  ) {
    let attributeParsed = attributeStr.replace(/\D/g, "");
    if (attributeParsed.length === 0) attributeParsed = "0";
    const attributeValue = parseInt(attributeParsed);
    const newAttributes = [...attributes];
    newAttributes[attributeType] = attributeValue;
    changeIfValid(newAttributes, attributeType);
  }

  function changeSpecialAttribute(
    attributeType: SpecialAttributesEnum,
    attributeStr: string
  ) {
    let attributeParsed = attributeStr.replace(/\D/g, "");
    if (attributeParsed.length === 0) attributeParsed = "0";
    const attributeValue = parseInt(attributeParsed);
    const newAttributes = [...specialAttributes];
    newAttributes[attributeType] = attributeValue;
    changeSpecialIfValid(newAttributes, attributeType);
  }

  function changeIfValid(
    newAttributes: Array<number>,
    attributeType: AttributesEnum
  ) {
    newAttributes = checkMinimums(newAttributes, baseAttributes, attributeType);
    newAttributes = checkMaximums(newAttributes, baseAttributes, attributeType);
    const newAttributePoints =
      attributePoints -
      (newAttributes[attributeType] - attributes[attributeType]);
    setAttributes(newAttributes);
    props.setAttributeInfo({
      body: newAttributes[AttributesEnum.Body],
      agility: newAttributes[AttributesEnum.Agility],
      reaction: newAttributes[AttributesEnum.Reaction],
      strength: newAttributes[AttributesEnum.Strength],
      willpower: newAttributes[AttributesEnum.Willpower],
      logic: newAttributes[AttributesEnum.Logic],
      intuition: newAttributes[AttributesEnum.Intuition],
      charisma: newAttributes[AttributesEnum.Charisma],
    });
    setAttributePoints(newAttributePoints);
  }

  function changeSpecialIfValid(
    newAttributes: Array<number>,
    attributeType: SpecialAttributesEnum
  ) {
    newAttributes = checkSpecialMinimums(
      newAttributes,
      baseSpecialAttributes,
      attributeType
    );
    newAttributes = checkSpecialMaximums(
      newAttributes,
      baseSpecialAttributes,
      attributeType
    );
    const newAttributePoints =
      specialAttributePoints -
      (newAttributes[attributeType] - specialAttributes[attributeType]);
    setSpecialAttributes(newAttributes);
    props.setSpecialAttributeInfo({
      edge: newAttributes[SpecialAttributesEnum.Edge],
      magic: newAttributes[SpecialAttributesEnum.Magic],
    });
    setSpecialAttributePoints(newAttributePoints);
  }

  useEffect(() => {
    props.setAttributeInfo({
      body: attributes[AttributesEnum.Body],
      agility: attributes[AttributesEnum.Agility],
      reaction: attributes[AttributesEnum.Reaction],
      strength: attributes[AttributesEnum.Strength],
      willpower: attributes[AttributesEnum.Willpower],
      logic: attributes[AttributesEnum.Logic],
      intuition: attributes[AttributesEnum.Intuition],
      charisma: attributes[AttributesEnum.Charisma],
    });
  }, []);

  useEffect(() => {
    setAttributeOptions(
      getAttributeOptions(baseAttributes, AttributesEnum.AttributesEnumMax)
    );
  }, [attributes]);

  useEffect(() => {
    setSpecialAttributeOptions(
      getSpecialAttributeOptions(
        baseSpecialAttributes,
        SpecialAttributesEnum.SpecialAttributesEnumMax
      )
    );
  }, [specialAttributes]);

  return (
    <div>
      <div>
        <p>
          Race: <span id="race">{MetatypeEnum[metatype]}</span>
        </p>
      </div>
      <div>
        <p>
          Attribute Points Remaining:{" "}
          <span id="attribute_points">{attributePoints}</span>
        </p>
        <p>Only one normal Attribute can be at max</p>
        <div>
          <label htmlFor="body">Body - Resisting physical damage</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Body].minimum +
              "/" +
              baseAttributes[AttributesEnum.Body].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Body]}
            value={attributes[AttributesEnum.Body].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Body, event.value);
            }}
            placeholder={"Select an option"}
            className="body"
          />
        </div>
        <div>
          <label htmlFor="agility">Agility - Attack accuracy</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Agility].minimum +
              "/" +
              baseAttributes[AttributesEnum.Agility].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Agility]}
            value={attributes[AttributesEnum.Agility].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Agility, event.value);
            }}
            placeholder={"Select an option"}
            className="agility"
          />
        </div>
        <div>
          <label htmlFor="reaction">Reaction - Initiative, Dodging</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Reaction].minimum +
              "/" +
              baseAttributes[AttributesEnum.Reaction].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Reaction]}
            value={attributes[AttributesEnum.Reaction].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Reaction, event.value);
            }}
            placeholder={"Select an option"}
            className="reaction"
          />
        </div>
        <div>
          <label htmlFor="strength">Strength - Melee damage</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Strength].minimum +
              "/" +
              baseAttributes[AttributesEnum.Strength].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Strength]}
            value={attributes[AttributesEnum.Strength].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Strength, event.value);
            }}
            placeholder={"Select an option"}
            className="strength"
          />
        </div>
        <div>
          <label htmlFor="willpower">
            Willpower - Spell drain, Avoiding stun
          </label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Willpower].minimum +
              "/" +
              baseAttributes[AttributesEnum.Willpower].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Willpower]}
            value={attributes[AttributesEnum.Willpower].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Willpower, event.value);
            }}
            placeholder={"Select an option"}
            className="willpower"
          />
        </div>
        <div>
          <label htmlFor="logic">Logic - Hermetic spell drain</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Logic].minimum +
              "/" +
              baseAttributes[AttributesEnum.Logic].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Logic]}
            value={attributes[AttributesEnum.Logic].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Logic, event.value);
            }}
            placeholder={"Select an option"}
            className="logic"
          />
        </div>
        <div>
          <label htmlFor="intuition">Intuition - Initiative, Dodging</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Intuition].minimum +
              "/" +
              baseAttributes[AttributesEnum.Intuition].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Intuition]}
            value={attributes[AttributesEnum.Intuition].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Intuition, event.value);
            }}
            placeholder={"Select an option"}
            className="intuition"
          />
        </div>
        <div>
          <label htmlFor="charisma">Charisma - Shaman spell drain</label>
          <div>
            {"Min/Max: " +
              baseAttributes[AttributesEnum.Charisma].minimum +
              "/" +
              baseAttributes[AttributesEnum.Charisma].maximum}
          </div>
          <Dropdown
            options={attributeOptions[AttributesEnum.Charisma]}
            value={attributes[AttributesEnum.Charisma].toString()}
            onChange={(event) => {
              changeAttribute(AttributesEnum.Charisma, event.value);
            }}
            placeholder={"Select an option"}
            className="charisma"
          />
        </div>
        <div>
          <label htmlFor="initiative">
            Initiative - (Reaction + Intuition)
          </label>
          <p id="initiative">
            {attributes[AttributesEnum.Reaction] +
              attributes[AttributesEnum.Intuition]}
          </p>
        </div>
      </div>
      <div>
        <p>
          Special Attribute Points Remaining:{" "}
          <span id="special_attribute_points">{specialAttributePoints}</span>
        </p>
        <div id="edge_div">
          <label htmlFor="edge">Edge - Luck</label>
          <div>
            {"Min/Max: " +
              baseSpecialAttributes[SpecialAttributesEnum.Edge].minimum +
              "/" +
              baseSpecialAttributes[SpecialAttributesEnum.Edge].maximum}
          </div>
          <Dropdown
            options={specialAttributeOptions[SpecialAttributesEnum.Edge]}
            value={specialAttributes[SpecialAttributesEnum.Edge].toString()}
            onChange={(event) => {
              changeSpecialAttribute(SpecialAttributesEnum.Edge, event.value);
            }}
            placeholder={"Select an option"}
            className="edge"
          />
        </div>
        <div id="magic_div">
          <label htmlFor="magic">Magic or Resonance - </label>
          {props.magicInfo.magicRating > 0 ? (
            <Fragment>
              <div>
                {"Min/Max: " +
                  baseSpecialAttributes[SpecialAttributesEnum.Magic].minimum +
                  "/" +
                  baseSpecialAttributes[SpecialAttributesEnum.Magic].maximum}
              </div>
              <Dropdown
                options={specialAttributeOptions[SpecialAttributesEnum.Magic]}
                value={specialAttributes[
                  SpecialAttributesEnum.Magic
                ].toString()}
                onChange={(event) => {
                  changeSpecialAttribute(
                    SpecialAttributesEnum.Magic,
                    event.value
                  );
                }}
                placeholder={"Select an option"}
                className="magic"
              />
            </Fragment>
          ) : (
            <p>N/A (Not Awakened)</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AttributesSelect;
