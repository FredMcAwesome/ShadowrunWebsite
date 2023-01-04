export enum PrioritiesEnum {
  Metatype,
  Attributes,
  Magic,
  Skills,
  Resources,
}
export enum PriorityLevelEnum {
  A,
  B,
  C,
  D,
  E,
}
export type PriorityLevelKey = keyof typeof PriorityLevelEnum;

export enum MetatypeEnum {
  Human,
  Elf,
  Dwarf,
  Ork,
  Troll,
}
type MetatypeKey = keyof typeof MetatypeEnum;
const Metatypes: Array<MetatypeKey> = ["Human", "Elf", "Dwarf", "Ork", "Troll"];
type SpecialAttributes = number;
interface IMetatypeInfo {
  metatype: MetatypeKey;
  specialAttributes: SpecialAttributes;
}

export enum MagicTypeEnum {
  Adept,
  AspectedMagician,
  Magician,
  MysticAdept,
  NotAwakened,
  Technomancer,
}
type MagicTypeKey = keyof typeof MagicTypeEnum;
export const MagicTypes: Array<MagicTypeKey> = [
  "Adept",
  "AspectedMagician",
  "Magician",
  "MysticAdept",
  "NotAwakened",
  "Technomancer",
];
type MagicRating = number;
type Spells = number;
export interface IMagicInfo {
  magicType: MagicTypeKey;
  magicRating: MagicRating;
  spells: Spells;
  other: string;
}

export interface ISkills {
  skillPoints: number;
  skillGroupPoints: number;
}

export interface IPriorities {
  MetatypePriority: PriorityLevelEnum;
  MetatypeSubselection: MetatypeEnum;
  AttributesPriority: PriorityLevelEnum;
  MagicPriority: PriorityLevelEnum;
  MagicSubselection: MagicTypeEnum;
  SkillsPriority: PriorityLevelEnum;
  ResourcesPriority: PriorityLevelEnum;
}

export interface IPriorityRow {
  priority: PriorityLevelEnum;
  metatypeInfo: Array<IMetatypeInfo>;
  attributes: number;
  magicInfo: Array<IMagicInfo>;
  skills: ISkills;
  resources: number;
}

export const priorityOptions: Array<IPriorityRow> = [
  {
    priority: PriorityLevelEnum.A,
    metatypeInfo: [
      { metatype: Metatypes[MetatypeEnum.Human], specialAttributes: 9 },
      { metatype: Metatypes[MetatypeEnum.Elf], specialAttributes: 8 },
      { metatype: Metatypes[MetatypeEnum.Dwarf], specialAttributes: 7 },
      { metatype: Metatypes[MetatypeEnum.Ork], specialAttributes: 7 },
      { metatype: Metatypes[MetatypeEnum.Troll], specialAttributes: 5 },
    ],
    attributes: 24,
    magicInfo: [
      {
        magicType: MagicTypes[MagicTypeEnum.Magician],
        magicRating: 6,
        other: "two Rating 5 Magical skills",
        spells: 10,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.MysticAdept],
        magicRating: 6,
        other: "two Rating 5 Magical skills",
        spells: 10,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.Technomancer],
        magicRating: 6,
        other:
          "three Rating 5 skills from Resonance, Electronics, or Cracking skills groups",
        spells: 7,
      },
    ],
    skills: { skillPoints: 46, skillGroupPoints: 10 },
    resources: 450000,
  },
  {
    priority: PriorityLevelEnum.B,
    metatypeInfo: [
      { metatype: Metatypes[MetatypeEnum.Human], specialAttributes: 7 },
      { metatype: Metatypes[MetatypeEnum.Elf], specialAttributes: 6 },
      { metatype: Metatypes[MetatypeEnum.Dwarf], specialAttributes: 4 },
      { metatype: Metatypes[MetatypeEnum.Ork], specialAttributes: 4 },
      { metatype: Metatypes[MetatypeEnum.Troll], specialAttributes: 0 },
    ],
    attributes: 20,
    magicInfo: [
      {
        magicType: MagicTypes[MagicTypeEnum.Magician],
        magicRating: 4,
        other: "two Rating 4 Magical skills",
        spells: 7,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.MysticAdept],
        magicRating: 4,
        other: "two Rating 4 Magical skills",
        spells: 7,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.Technomancer],
        magicRating: 4,
        other:
          "three Rating 4 skills from Resonance, Electronics, or Cracking skills groups",
        spells: 4,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.Adept],
        magicRating: 6,
        other: "one Rating 4 Active skill",
        spells: 0,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.AspectedMagician],
        magicRating: 5,
        other: "one Rating 4 Magical skill group",
        spells: 0,
      },
    ],
    skills: { skillPoints: 36, skillGroupPoints: 5 },
    resources: 275000,
  },
  {
    priority: PriorityLevelEnum.C,
    metatypeInfo: [
      { metatype: Metatypes[MetatypeEnum.Human], specialAttributes: 5 },
      { metatype: Metatypes[MetatypeEnum.Elf], specialAttributes: 3 },
      { metatype: Metatypes[MetatypeEnum.Dwarf], specialAttributes: 1 },
      { metatype: Metatypes[MetatypeEnum.Ork], specialAttributes: 0 },
    ],
    attributes: 16,
    magicInfo: [
      {
        magicType: MagicTypes[MagicTypeEnum.Magician],
        magicRating: 3,
        other: "",
        spells: 5,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.MysticAdept],
        magicRating: 3,
        other: "",
        spells: 5,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.Technomancer],
        magicRating: 3,
        other:
          "three Rating 2 skills from Resonance, Electronics, or Cracking skills groups",
        spells: 3,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.Adept],
        magicRating: 4,
        other: "one Rating 2 Active skill",
        spells: 0,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.AspectedMagician],
        magicRating: 3,
        other: "one Rating 2 Magical skill group",
        spells: 0,
      },
    ],
    skills: { skillPoints: 28, skillGroupPoints: 2 },
    resources: 140000,
  },
  {
    priority: PriorityLevelEnum.D,
    metatypeInfo: [
      { metatype: Metatypes[MetatypeEnum.Human], specialAttributes: 3 },
      { metatype: Metatypes[MetatypeEnum.Elf], specialAttributes: 0 },
    ],
    attributes: 14,
    magicInfo: [
      {
        magicType: MagicTypes[MagicTypeEnum.Adept],
        magicRating: 2,
        other: "",
        spells: 0,
      },
      {
        magicType: MagicTypes[MagicTypeEnum.AspectedMagician],
        magicRating: 2,
        other: "",
        spells: 0,
      },
    ],
    skills: { skillPoints: 22, skillGroupPoints: 0 },
    resources: 50000,
  },
  {
    priority: PriorityLevelEnum.E,
    metatypeInfo: [
      { metatype: Metatypes[MetatypeEnum.Human], specialAttributes: 1 },
    ],
    attributes: 12,
    magicInfo: [
      {
        magicType: MagicTypes[MagicTypeEnum.NotAwakened],
        magicRating: 0,
        other: "",
        spells: 0,
      },
    ],
    skills: { skillPoints: 18, skillGroupPoints: 0 },
    resources: 6000,
  },
];
