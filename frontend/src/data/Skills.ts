import {
  AttributesEnum,
  SpecialAttributesEnum,
} from "../components/character/AttributesSelect.js";

export interface IActiveSkill {
  name: string;
  id: skillsEnum;
  skillType: skillTypesEnum;
  description: string;
  ability: AttributesEnum | SpecialAttributesEnum;
  default: boolean;
  skillGroup: boolean;
  specialisations?: Array<string>;
}

export enum skillTypesEnum {
  combat,
  physical,
  social,
  magical,
  resonance,
  technical,
  vehicle,
}

export type skillsEnum =
  | activeCombatSkillsEnum
  | activePhysicalSkillsEnum
  | socialSkillsEnum
  | magicalSkillsEnum
  | resonanceSkillsEnum
  | technicalSkillsEnum
  | vehicleSkillsEnum;

export enum activeCombatSkillsEnum {
  Archery,
  Automatics,
  Blades,
  Clubs,
  ExoticMeleeWeapon,
  ExoticRangedWeapon,
  HeavyWeapons,
  Longarms,
  Pistols,
  ThrowingWeapons,
  UnarmedCombat,
}

export const activeCombatSkills: Array<IActiveSkill> = [
  {
    name: "Archery",
    id: activeCombatSkillsEnum.Archery,
    skillType: skillTypesEnum.combat,
    description:
      "Archery is used to fire string-loaded projectile weapons. An archer is familiar with many different styles of bow and the multitude of arrows that can be used to maximum effect.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: false,
    specialisations: [
      "Bow",
      "Crossbow",
      "Non-Standard Ammunition",
      "Slingshot",
    ],
  },
  {
    name: "Automatics",
    id: activeCombatSkillsEnum.Automatics,
    skillType: skillTypesEnum.combat,
    description:
      "The Automatics skill covers a specific subset of firearms larger than handheld pistols but smaller than rifles. This category includes submachine guns and other fully automatic carbines.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: [
      "Assault Rifles",
      "Cyber-Implant",
      "Machine Pistols",
      "Submachine Guns",
    ],
  },
  {
    name: "Blades",
    id: activeCombatSkillsEnum.Blades,
    skillType: skillTypesEnum.combat,
    description:
      "Slice and dice! The Blades skill includes the use of all handheld slashing and stabbing weapons. You can use a range of edged weapons including daggers, swords, and axes.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: ["Axes", "Knives", "Swords", "Parrying"],
  },
  {
    name: "Clubs",
    id: activeCombatSkillsEnum.Clubs,
    skillType: skillTypesEnum.combat,
    description:
      "Clubs governs the use of all hand-held bludgeoning instruments. With this skill you can turn any blunt item, be it a baseball bat, crutch, or mace, into a weapon.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: ["Batons", "Hammers", "Saps", "Staves", "Parrying"],
  },
  {
    name: "Exotic Melee Weapon (Specific)",
    id: activeCombatSkillsEnum.ExoticMeleeWeapon,
    skillType: skillTypesEnum.combat,
    description:
      "Sometimes a regular gun or blade won't do the job and you need something fancier. Or weirder. This skill must be taken once for each unusual melee weapon you want to use. Some examples include balistic shield, and Monofilament chainsaws",
    ability: AttributesEnum.Agility,
    default: false,
    skillGroup: false,
  },
  {
    name: "Exotic Ranged Weapon (Specific)",
    id: activeCombatSkillsEnum.ExoticRangedWeapon,
    skillType: skillTypesEnum.combat,
    description:
      "Sometimes a regular gun or blade won't do the job and you need something fancier. Or weirder. This skill must be taken once for each unusual ranged weapon you want to use. Some examples include blowguns, gyrojet pistols, flamethrowers, and lasers.",
    ability: AttributesEnum.Agility,
    default: false,
    skillGroup: false,
  },
  {
    name: "Heavy Weapons",
    id: activeCombatSkillsEnum.HeavyWeapons,
    skillType: skillTypesEnum.combat,
    description:
      "The term heavy weapon is designated for all projectile weaponry larger than an assault rifle, such as grenade launchers, machine guns, and assault cannons. This skill is exclusive to handheld and non-vehicle-mounted weaponry—if you've got a gun mounted on or in a vehicle, use Gunnery.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: false,
    specialisations: [
      "Assault Cannons",
      "Grenade Launchers",
      "Guided Missiles",
      "Machine Guns",
      "Rocket Launchers",
    ],
  },
  {
    name: "Longarms",
    id: activeCombatSkillsEnum.Longarms,
    skillType: skillTypesEnum.combat,
    description:
      "The Longarms skill is for firing extended-barrel weapons such as sporting rifles and sniper rifles. This grouping also includes weapons like shotguns that are designed to be braced against the shoulder.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: [
      "Extended-Range Shots",
      "Long-Range Shots",
      "Shotguns",
      "Sniper Rifles",
    ],
  },
  {
    name: "Pistols",
    id: activeCombatSkillsEnum.Pistols,
    skillType: skillTypesEnum.combat,
    description:
      "This skill category includes all types of handheld pistols, including tasers, single-shots, semi-automatics, and revolvers.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: ["Holdouts", "Revolvers", "Semi-Automatics", "Tasers"],
  },
  {
    name: "Throwing Weapons",
    id: activeCombatSkillsEnum.ThrowingWeapons,
    skillType: skillTypesEnum.combat,
    description:
      "Throwing Weapons is a broad-based attack skill that can be used for any handheld item that is thrown by the user as a weapon.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: false,
    specialisations: ["Aerodynamic", "Blades", "Non-Aerodynamic"],
  },
  {
    name: "Unarmed Combat",
    id: activeCombatSkillsEnum.UnarmedCombat,
    skillType: skillTypesEnum.combat,
    description:
      "Unarmed Combat covers the various self-defense and attack moves that employ the body as a primary weapon. This includes a wide array of martial arts along with the use of cybernetic implant weaponry and the fighting styles that sprung up around those implants.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: [
      "Blocking",
      "Cyber Implants",
      "Subduing Combat",
      "Specific Martial Art",
    ],
  },
];

export enum activePhysicalSkillsEnum {
  Disguise,
  Diving,
  EscapeArtist,
  FreeFall,
  Gymnastics,
  Palming,
  Perception,
  Running,
  Sneaking,
  Survival,
  Swimming,
  Tracking,
}

export const activePhysicalSkills: Array<IActiveSkill> = [
  {
    name: "Disguise",
    id: activePhysicalSkillsEnum.Disguise,
    skillType: skillTypesEnum.physical,
    description:
      "Disguise covers non-magical forms of masking your identity, including makeup and enhancement. See Using Disguise and Impersonation",
    ability: AttributesEnum.Intuition,
    default: true,
    skillGroup: true,
    specialisations: ["Camouflage", "Cosmetic", "Theatrical", "Trideo & Video"],
  },
  {
    name: "Diving",
    id: activePhysicalSkillsEnum.Diving,
    skillType: skillTypesEnum.physical,
    description:
      "Diving brings together a wide array of actions performed underwater. This skill can be applied when diving, swimming underwater, using complex diving equipment, and holding your breath.",
    ability: AttributesEnum.Body,
    default: true,
    skillGroup: false,
    specialisations: [
      "Breathing Apparatus - Liquid Breathing Apparatus",
      "Breathing Apparatus - Mixed Gas",
      "Breathing Apparatus - Oxygen Extraction",
      "Breathing Apparatus - SCUBA",
      "Breathing Apparatus - Other",
      "Condition - Arctic",
      "Condition - Cave",
      "Condition - Commercial",
      "Condition - Military",
      "Condition - Other",
      "Controlled Hyperventilation",
    ],
  },
  {
    name: "Escape Artist",
    id: activePhysicalSkillsEnum.EscapeArtist,
    skillType: skillTypesEnum.physical,
    description:
      "Escape Artist measures the character's ability to escape from bindings by using body contortion and manual dexterity. See Using Escape Artist",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: false,
    specialisations: [
      "Restraint - Cuffs",
      "Restraint - Ropes",
      "Restraint - Zip Ties",
      "Restraint - Other",
      "Contortionism",
    ],
  },
  {
    name: "Free-Fall",
    id: activePhysicalSkillsEnum.FreeFall,
    skillType: skillTypesEnum.physical,
    description:
      "This skill covers any jump from height, including leaps from a third-floor window to jumps from a plane at high altitude. If it involves any kind of attempt to slow or control your fall, this covers it, so it includes skydiving with a parachute, flying a wingsuit, or descending on a line, bungee cord, or zipline.",
    ability: AttributesEnum.Body,
    default: true,
    skillGroup: false,
    specialisations: [
      "BASE Jumping",
      "Break-Fall",
      "Bungee",
      "HALO",
      "Low Altitude",
      "Parachute",
      "Static Line",
      "Wingsuit",
      "Zipline",
    ],
  },
  {
    name: "Gymnastics",
    id: activePhysicalSkillsEnum.Gymnastics,
    skillType: skillTypesEnum.physical,
    description:
      "Gymnastics measures your balance, general athleticism, and all-around ability to use your body. For more information on ways Gymnastics may be applied ingame, see Jumping",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: [
      "Balance",
      "Climbing",
      "Dance",
      "Leaping",
      "Parkour",
      "Rolling",
    ],
  },
  {
    name: "Palming",
    id: activePhysicalSkillsEnum.Palming,
    skillType: skillTypesEnum.physical,
    description:
      "Palming is sleight-of-hand skill that gives a character the ability to snag, hide, and pass off small objects.",
    ability: AttributesEnum.Agility,
    default: false,
    skillGroup: true,
    specialisations: ["Legerdemain", "Pickpocket", "Pilfering"],
  },
  {
    name: "Perception",
    id: activePhysicalSkillsEnum.Perception,
    skillType: skillTypesEnum.physical,
    description:
      "Perception refers to the ability to spot anomalies in everyday situations, making it one of the key skills a shadowrunner needs. See Using Perception",
    ability: AttributesEnum.Intuition,
    default: true,
    skillGroup: false,
    specialisations: [
      "Hearing",
      "Scent",
      "Searching",
      "Taste",
      "Touch",
      "Visual",
    ],
  },
  {
    name: "Running",
    id: activePhysicalSkillsEnum.Running,
    skillType: skillTypesEnum.physical,
    description:
      "Running, as you may guess, is about how much ground you can cover quickly. For more information see Using Running",
    ability: AttributesEnum.Strength,
    default: true,
    skillGroup: true,
    specialisations: [
      "Distance",
      "Sprinting",
      "Terrain - Desert",
      "Terrain - Urban",
      "Terrain - Wilderness",
      "Terrain - Other",
    ],
  },
  {
    name: "Sneaking",
    id: activePhysicalSkillsEnum.Sneaking,
    skillType: skillTypesEnum.physical,
    description:
      "Need to get where you're not supposed to be? This skill allows you to remain inconspicuous in various situations. See Using Stealth Skills",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: true,
    specialisations: [
      "Location Type - Jungle",
      "Location Type - Urban",
      "Location Type - Desert",
      "Location Type - Other",
    ],
  },
  {
    name: "Survival",
    id: activePhysicalSkillsEnum.Survival,
    skillType: skillTypesEnum.physical,
    description:
      "In the desert with nothing more than a tin cup, a poncho, and an iron rod? You'll need this skill to help you get out alive. Survival is the ability to stay alive in extreme environmental conditions for extended periods of time. The skill governs a character's ability to perform vital outdoor tasks such as start a fire, build a shelter, scrounge for food, etc. in hostile environments. See Using Survival",
    ability: AttributesEnum.Willpower,
    default: true,
    skillGroup: true,
    specialisations: [
      "Terrain - Desert",
      "Terrain - Forest",
      "Terrain - Jungle",
      "Terrain - Mountain",
      "Terrain - Polar",
      "Terrain - Urban",
      "Terrain - Other",
    ],
  },
  {
    name: "Swimming",
    id: activePhysicalSkillsEnum.Swimming,
    skillType: skillTypesEnum.physical,
    description:
      "This skill determines the character's ability to swim in various bodies of water. The skill level affects the distance and speed at which a character can swim. See Using Swimming",
    ability: AttributesEnum.Strength,
    default: true,
    skillGroup: true,
    specialisations: ["Dash", "Long Distance"],
  },
  {
    name: "Tracking",
    id: activePhysicalSkillsEnum.Tracking,
    skillType: skillTypesEnum.physical,
    description:
      "This skill confers the ability to detect the passage of metahumans and other game through terrain and use those clues to follow that individual. This skill also allows you to identify unmarked trails and common game paths is various environments. See Using Tracking",
    ability: AttributesEnum.Intuition,
    default: true,
    skillGroup: true,
    specialisations: [
      "Terrain - Desert",
      "Terrain - Forest",
      "Terrain - Jungle",
      "Terrain - Mountain",
      "Terrain - Polar",
      "Terrain - Urban",
      "Terrain - Other",
    ],
  },
];

export enum socialSkillsEnum {
  Con,
  Etiquette,
  Impersonation,
  Instruction,
  Intimidation,
  Leadership,
  Negotiation,
  Performance,
}

export const socialSkills: Array<IActiveSkill> = [
  {
    name: "Con",
    id: socialSkillsEnum.Con,
    skillType: skillTypesEnum.social,
    description:
      "Con governs the ability to manipulate or fool an NPC during a social encounter. This skill covers a range of confidence games as well as the principles behind those cons.",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: ["Fast Talking", "Seduction"],
  },
  {
    name: "Etiquette",
    id: socialSkillsEnum.Etiquette,
    skillType: skillTypesEnum.social,
    description:
      "Etiquette represents the level of understanding and awareness of proper social rituals. The skill works as a sort of social version of Sneak, allowing you to move unimpeded through various social situations. Etiquette also serves as a social safety net in case a player botches a social situation in a way a skilled character would not. See Using Etiquette",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: [
      "Culture/subculture - Corporate",
      "Culture/subculture - High Society",
      "Culture/subculture - Media",
      "Culture/subculture - Mercenary",
      "Culture/subculture - Street",
      "Culture/subculture - Yakuza",
    ],
  },
  {
    name: "Impersonation",
    id: socialSkillsEnum.Impersonation,
    skillType: skillTypesEnum.social,
    description:
      "Impersonation is the ability to assume the identity of another person, including voice and physical mannerisms. The skill is limited by the physical abilities of the character. A dwarf might be able to impersonate a troll over a commlink, but the illusion shatters when he is face to face with his target.",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: [
      "Metahuman - Dwarf",
      "Metahuman - Elf",
      "Metahuman - Human",
      "Metahuman - Ork",
      "Metahuman - Troll",
    ],
  },
  {
    name: "Instruction",
    id: socialSkillsEnum.Instruction,
    skillType: skillTypesEnum.social,
    description:
      "Instruction governs the ability to teach people. The skill level helps determine how comfortable the instructor is delivering new material as well as how complex of a skill may be taught. See Using Instruction",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: false,
    specialisations: [
      "Skill Category - Combat",
      "Skill Category - Language",
      "Skill Category - Magical",
      "Skill Category - Academic Knowledge",
      "Skill Category - Street Knowledge",
      "Skill Category - Other",
    ],
  },
  {
    name: "Intimidation",
    id: socialSkillsEnum.Intimidation,
    skillType: skillTypesEnum.social,
    description:
      "Intimidation is about creating the impression that you are more menacing than another person in order to get them to do what you want. The skill may be applied multiple ways, from negotiation to interrogation. Intimidation is an Opposed Intimidation + Charisma [Social] Test against the target's Charisma + Willpower, modified by the appropriate entries on the Social Modifiers Table",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: false,
    specialisations: ["Interrogation", "Mental", "Physical", "Torture"],
  },
  {
    name: "Leadership",
    id: socialSkillsEnum.Leadership,
    skillType: skillTypesEnum.social,
    description:
      "Leadership is the ability to direct and motivate others. It''s like Con, except rather than using deception you're using a position of authority. This skill is especially helpful in situations where the will of a teammate is shaken or someone is being asked to do something uncomfortable. The Leadership skill is not meant to replace or make up for poor teamwork. When using Leadership make an opposed test Charisma + Leadership. See Using Social Influence Skills, for test modifiers.",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: ["Command", "Direct", "Inspire", "Rally"],
  },
  {
    name: "Negotiation",
    id: socialSkillsEnum.Negotiation,
    skillType: skillTypesEnum.social,
    description: "",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: ["Bargaining", "Contracts", "Diplomacy"],
  },
  {
    name: "Performance",
    id: socialSkillsEnum.Performance,
    skillType: skillTypesEnum.social,
    description:
      "his skill governs the ability to execute a performing art. Performance is to the arts what Artisan is to craft. The performer uses her skill to entertain or even captivate an audience. See Using Performance",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: true,
    specialisations: [
      "Performance Art - Presentation",
      "Performance Art - Acting",
      "Performance Art - Comedy",
      "Performance Art - Specific Musical Instrument",
      "Performance Art - Other",
    ],
  },
];

export enum magicalSkillsEnum {
  Alchemy,
  Arcana,
  Artificing,
  Assensing,
  AstralCombat,
  Banishing,
  Binding,
  Counterspelling,
  Disenchanting,
  RitualSpellcasting,
  Spellcasting,
  Summoning,
}

export const magicalSkills: Array<IActiveSkill> = [
  {
    name: "Alchemy",
    id: magicalSkillsEnum.Alchemy,
    skillType: skillTypesEnum.magical,
    description:
      "Alchemy is used to create substances that store spells. Alchemy is most commonly used to brew potions, distill magical reagents, and even create orichalcum.",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Trigger - Command",
      "Trigger - Contact",
      "Trigger - Time",
      "Spell Type - Combat Spells",
      "Spell Type - Detection Spells",
      "Spell Type - Other",
    ],
  },
  {
    name: "Arcana",
    id: magicalSkillsEnum.Arcana,
    skillType: skillTypesEnum.magical,
    description:
      "Arcana governs the creation of magical formulae used to create spells, foci, and all other manner of magical manipulations. Arcana is required to understand formulae that may be purchased over the counter or discovered by other means.",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: false,
    specialisations: ["Spell Design", "Focus Design", "Spirit Formula"],
  },
  {
    name: "Artificing",
    id: magicalSkillsEnum.Artificing,
    skillType: skillTypesEnum.magical,
    description:
      "Artificing is the process of crafting magical foci. The skill may also be used forensically, in order to assense qualities about an existing focus' creation and purpose. See Artificing",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: ["Focus Analysis", "Crafting (one focus type)"],
  },
  {
    name: "Assensing",
    id: magicalSkillsEnum.Assensing,
    skillType: skillTypesEnum.magical,
    description:
      "Assensing is a magic user's ability to read and interpret fluctuations in the astral world. This skill allows practitioners to learn information by reading astral auras. Only characters capable of astral perception may take this skill. For more information, see Astral Perception",
    ability: AttributesEnum.Intuition,
    default: false,
    skillGroup: false,
    specialisations: [
      "Aura Reading",
      "Astral Signatures",
      "Aura Type - Metahumans",
      "Aura Type - Spirits",
      "Aura Type - Foci",
      "Aura Type - Wards",
      "Aura Type - Other",
    ],
  },
  {
    name: "Astral Combat",
    id: magicalSkillsEnum.AstralCombat,
    skillType: skillTypesEnum.magical,
    description:
      "Fighting in Astral Space requires the Astral Combat skill. Combat in the Astral World relies on a very different set of abilities and attributes than physical combatants. See Astral Combat",
    ability: AttributesEnum.Willpower,
    default: false,
    skillGroup: false,
    specialisations: [
      "Specific Weapon Focus Type",
      "Opponents - Magicians",
      "Opponents - Spirits",
      "Opponents - Mana Barriers",
      "Opponents - Other",
    ],
  },
  {
    name: "Banishing",
    id: magicalSkillsEnum.Banishing,
    skillType: skillTypesEnum.magical,
    description:
      "Banishing is used to disrupt the link between spirits and the physical world. Banished spirits are forced to return to their native plane and are no longer required to complete unfulfilled services.",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Spirit Type - Spirits of Air",
      "Spirit Type - Spirits of Man",
      "Spirit Type - Other",
    ],
  },
  {
    name: "Binding",
    id: magicalSkillsEnum.Binding,
    skillType: skillTypesEnum.magical,
    description:
      "Binding is used to compel a summoned spirit to perform a number of additional services. See Binding",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Spirit Type - Spirits of Air",
      "Spirit Type - Spirits of Man",
      "Spirit Type - Other",
    ],
  },
  {
    name: "Counterspelling",
    id: magicalSkillsEnum.Counterspelling,
    skillType: skillTypesEnum.magical,
    description:
      "Counterspelling is a defensive skill used to defend against magical attacks and dispel sustained magical spells. See Counterspelling",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Spell Type - Combat Spells",
      "Spell Type - Detection Spells",
      "Spell Type - Other",
    ],
  },
  {
    name: "Disenchanting",
    id: magicalSkillsEnum.Disenchanting,
    skillType: skillTypesEnum.magical,
    description:
      "This skill governs a character's ability to remove the enchantment from an item. See Disenchanting",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Type - Alchemical Preparations",
      "Type - Power Foci",
      "Type - Other",
    ],
  },
  {
    name: "Ritual Spellcasting",
    id: magicalSkillsEnum.RitualSpellcasting,
    skillType: skillTypesEnum.magical,
    description:
      "Ritual spellcasting is a spellcasting skill used to cast ritual spells. See Ritual Spellcasting",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Keyword - Anchored",
      "Keyword - Spell",
      "Keyword - Other",
    ],
  },
  {
    name: "Spellcasting",
    id: magicalSkillsEnum.Spellcasting,
    skillType: skillTypesEnum.magical,
    description:
      "The Spellcasting skill permits the character to channel mana into effects known as spells. See Spellcasting",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Spell Type - Combat Spells",
      "Spell Type - Detection Spells",
      "Spell Type - Other",
    ],
  },
  {
    name: "Summoning",
    id: magicalSkillsEnum.Summoning,
    skillType: skillTypesEnum.magical,
    description: "This skill is used to summon spirits. See Summoning",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Spirit Type - Spirits of Air",
      "Spirit Type - Spirits of Man",
      "Spirit Type - Other",
    ],
  },
];

export enum resonanceSkillsEnum {
  Compiling,
  Decompiling,
  Registering,
}

export const resonanceSkills: Array<IActiveSkill> = [
  {
    name: "Compiling",
    id: resonanceSkillsEnum.Compiling,
    skillType: skillTypesEnum.resonance,
    description: "",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Sprite Type - Data Sprites",
      "Sprite Type - Machine Sprites",
      "Sprite Type - Other",
    ],
  },
  {
    name: "Decompiling",
    id: resonanceSkillsEnum.Decompiling,
    skillType: skillTypesEnum.resonance,
    description:
      "This skill allows a technomancer to register sprites on the Matrix, thereby convincing the grids that they are legitimate. See Sprites",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Sprite Type - Data Sprites",
      "Sprite Type - Machine Sprites",
      "Sprite Type - Other",
    ],
  },
  {
    name: "Registering",
    id: resonanceSkillsEnum.Registering,
    skillType: skillTypesEnum.resonance,
    description:
      "This skill allows a technomancer to register sprites on the Matrix, thereby convincing the grids that they are legitimate. See Sprites",
    ability: SpecialAttributesEnum.Magic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Sprite Type - Data Sprites",
      "Sprite Type - Machine Sprites",
      "Sprite Type - Other",
    ],
  },
];

export enum technicalSkillsEnum {
  AeronauticsMechanic,
  AnimalHandling,
  Armourer,
  Artisan,
  AutomotiveMechanic,
  Biotechnology,
  Chemistry,
  Computer,
  Cybercombat,
  Cybertechnology,
  Demolitions,
  ElectronicWarfare,
  FirstAid,
  Forgery,
  Hacking,
  Hardware,
  IndustrialMechanic,
  Locksmith,
  Medicine,
  NauticalMechanic,
  Navigation,
  Software,
}

export const technicalSkills: Array<IActiveSkill> = [
  {
    name: "Aeronautics Mechanic",
    id: technicalSkillsEnum.AeronauticsMechanic,
    skillType: skillTypesEnum.technical,
    description:
      "Aeronautics mechanics have the ability to repair a variety of aerospace vehicles, provided the proper tools and parts are available. See Building & Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Aerospace",
      "Fixed Wing",
      "LTA (blimp)",
      "Rotary Wing",
      "Tilt Wing",
      "Vector Thrust",
    ],
  },
  {
    name: "Animal Handling",
    id: technicalSkillsEnum.AnimalHandling,
    skillType: skillTypesEnum.technical,
    description:
      "This skill governs the training, care, riding (if they're big enough), and control of non-sentient animals. Competent trainers have the ability to handle multiple animals. It is even possible to approach an untrained animal and get it to trust you, or at least not eat you.",
    ability: AttributesEnum.Charisma,
    default: true,
    skillGroup: false,
    specialisations: [
      "Animal - Cat",
      "Animal - Bird",
      "Animal - Hell Hound",
      "Animal - Horse",
      "Animal - Dolphin",
      "Animal - Other",
      "Herding",
      "Riding",
      "Training",
    ],
  },
  {
    name: "Armourer",
    id: technicalSkillsEnum.Armourer,
    skillType: skillTypesEnum.technical,
    description:
      "Armorer encompasses the broad array of skills required to build and maintain weapons and armor. As with all mechanics-based skills, the proper tools and equipment are required to perform any repair or build operation. For thresholds and information on determining success results, see Building & Repairing",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: false,
    specialisations: [
      "Armor",
      "Artillery",
      "Explosives",
      "Firearms",
      "Melee Weapons",
      "Heavy Weapons",
      "Weapon Accessories",
    ],
  },
  {
    name: "Artisan",
    id: technicalSkillsEnum.Artisan,
    skillType: skillTypesEnum.technical,
    description:
      "This skill includes several different forms of artistic impression as well as the handcrafting of fine objects that would otherwise be produced on an assembly line. The world's top artists and crafters are considered artisans.",
    ability: AttributesEnum.Intuition,
    default: false,
    skillGroup: false,
    specialisations: [
      "Discipline - Cooking",
      "Discipline - Sculpting",
      "Discipline - Drawing",
      "Discipline - Carpentry",
      "Discipline - Other",
    ],
  },
  {
    name: "Automotive Mechanic",
    id: technicalSkillsEnum.AutomotiveMechanic,
    skillType: skillTypesEnum.technical,
    description:
      "Automotive mechanics are tasked with fixing all types of ground-based vehicles ranging from commercial automobiles to wheeled drones to tanks. Repairs require the proper tools and time. See Building & Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: ["Walker", "Hover", "Tracked", "Wheeled"],
  },
  {
    name: "Biotechnology",
    id: technicalSkillsEnum.Biotechnology,
    skillType: skillTypesEnum.technical,
    description:
      "Biotechnology is a wide-ranging skill primarily used by doctors and scientists to grow organic body parts. This skill is the basis for cloning as well as all forms of bioware. Provided the right equipment is available, biotechnology can be used to repair damaged bioware, clone new tissue, or detect any bioware in a subject's body. This skill does not allow characters to install or remove bioware.",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: false,
    specialisations: [
      "Bioinformatics",
      "Bioware",
      "Cloning",
      "Gene Therapy",
      "Vat Maintenance",
    ],
  },
  {
    name: "Chemistry",
    id: technicalSkillsEnum.Chemistry,
    skillType: skillTypesEnum.technical,
    description:
      "Chemistry permits the character to create chemical reactions and develop chemical compounds ranging from drugs, to perfumes, to biopolymers like NuSkin. Chemistry can also be used to analyze chemical compounds to determine what they are.",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: false,
    specialisations: [
      "Analytical",
      "Biochemistry",
      "Inorganic",
      "Organic",
      "Physical",
    ],
  },
  {
    name: "Computer",
    id: technicalSkillsEnum.Computer,
    skillType: skillTypesEnum.technical,
    description:
      "Computer is the base skill for interacting with the Matrix. It represents the ability to use computers and other Matrix-connected devices. The Computer skill focuses on understanding multiple operating systems. It does not allow the character to exploit code (Hacking) or strip down mainframes (Hardware). See Using Computer",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: true,
    specialisations: [
      "Action - Edit File",
      "Action - Matrix Perception",
      "Action - Matrix Search",
      "Action - Other",
    ],
  },
  {
    name: "Cybercombat",
    id: technicalSkillsEnum.Cybercombat,
    skillType: skillTypesEnum.technical,
    description:
      "Cybercombat is the skill used by hackers to engage in combat on the Matrix. See Using Cybercombat",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: true,
    specialisations: [
      "Target Type - Devices",
      "Target Type - Grids",
      "Target Type - IC",
      "Target Type - Personas",
      "Target Type - Sprites",
      "Target Type - Other",
    ],
  },
  {
    name: "Cybertechnology",
    id: technicalSkillsEnum.Cybertechnology,
    skillType: skillTypesEnum.technical,
    description:
      "Cybertechnology is the ability to create, maintain, and repair cybernetic parts. A character with the proper tools and parts may repair or even build new cybernetics. Cybertechnology is not a surgical skill. Characters cannot attach or re-attach cybernetics to organic material with this skill. This skill may be used to modify or upgrade cybernetics within cyberlimbs. See Building and Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: ["Bodyware", "Cyberlimbs", "Headware", "Repair"],
  },
  {
    name: "Demolitions",
    id: technicalSkillsEnum.Demolitions,
    skillType: skillTypesEnum.technical,
    description:
      "Demolitions is used to prepare, plant, detonate, and often defuse chemical-based explosives. See Explosives",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: false,
    specialisations: [
      "Commercial Explosives",
      "Defusing",
      "Improvised Explosives",
      "Plastic Explosives",
    ],
  },
  {
    name: "Electronic Warfare",
    id: technicalSkillsEnum.ElectronicWarfare,
    skillType: skillTypesEnum.technical,
    description:
      "Electronic Warfare is the basis of military signals intelligence. It governs the encoding, disruption, spoofing, and decoding of communication systems. Providing the user has the proper equipment, the skill can be used to manipulate or even take over the signal of any item's communication system. See Using Electronic Warfare",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Communications",
      "Encryption",
      "Jamming",
      "Sensor Operations",
    ],
  },
  {
    name: "First Aid",
    id: technicalSkillsEnum.FirstAid,
    skillType: skillTypesEnum.technical,
    description:
      "First Aid is the ability to provide emergency medical assistance similar to that of a paramedic. This skill may be used to stabilize wounds and prevent characters from dying. First Aid cannot be used to perform surgery or repair damaged implants. For more information, see Healing",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: true,
    specialisations: [
      "Treatment - Gunshot Wounds",
      "Treatment - Resuscitation",
      "Treatment - Broken Bones",
      "Treatment - Burns",
      "Treatment - Other",
    ],
  },
  {
    name: "Forgery",
    id: technicalSkillsEnum.Forgery,
    skillType: skillTypesEnum.technical,
    description:
      "Forgery is used to produce counterfeit items or alter existing items to a specific purpose. Depending on the type of forgery, the forger may need specific tools or schematics to complete the task. See Using Forgery",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: false,
    specialisations: [
      "Counterfeiting",
      "Credstick Forgery",
      "False ID",
      "Image Doctoring",
      "Paper Forgery",
    ],
  },
  {
    name: "Hacking",
    id: technicalSkillsEnum.Hacking,
    skillType: skillTypesEnum.technical,
    description:
      "Hacking is used to discover and exploit security flaws in computers and other electronics. For more on how Hacking is used, see Using Hacking",
    ability: AttributesEnum.Logic,
    default: true,
    skillGroup: true,
    specialisations: ["Devices", "Files", "Hosts", "Personas"],
  },
  {
    name: "Hardware",
    id: technicalSkillsEnum.Hardware,
    skillType: skillTypesEnum.technical,
    description:
      "Hardware reflects a characters ability to build and repair electronic devices. A workspace, proper materials, and sufficient build time are required to enact a repair or to build a new device. See Building & Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Hardware Type - Commlinks",
      "Hardware Type - Cyberdecks",
      "Hardware Type - Smartguns",
      "Hardware Type - Other",
    ],
  },
  {
    name: "Industrial Mechanic",
    id: technicalSkillsEnum.IndustrialMechanic,
    skillType: skillTypesEnum.technical,
    description:
      "An industrial mechanic is tasked with repairing or modifying large-scale machines, such as assembly line equipment, power generators, HVAC units, industrial robots, etc. See Building and Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Electrical Power Systems",
      "Hydraulics",
      "HVAC",
      "Industrial Robotics",
      "Structural",
      "Welding",
    ],
  },
  {
    name: "Locksmith",
    id: technicalSkillsEnum.Locksmith,
    skillType: skillTypesEnum.technical,
    description:
      "This skill covers building, repairing, and opening mechanical and electronic locks. While largely banished to antiquity, traditional mechanical locking mechanisms are still in use around the globe, often as throwbacks or backups. Electronic locks are far more common and quite susceptible to your ministrations. See Doors, Windows, & Locks",
    ability: AttributesEnum.Agility,
    default: false,
    skillGroup: false,
    specialisations: [
      "Type - Combination",
      "Type - Keypad",
      "Type - Maglock",
      "Type - Tumbler",
      "Type - Voice Recognition",
      "Type - Other",
    ],
  },
  {
    name: "Medicine",
    id: technicalSkillsEnum.Medicine,
    skillType: skillTypesEnum.technical,
    description:
      "Medicine is used to perform advanced medical procedures such as surgeries. It includes long-term medical support for disease and illness, and the skill can be used to diagnose a character's medical condition. This skill is used to implant or remove cybernetics and bioware but cannot be used to repair or maintain implanted devices. For more information, see Healing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Cosmetic Surgery",
      "Extended Care",
      "Implant Surgery",
      "Magical Health",
      "Organ Culture",
      "Trauma Surgery",
    ],
  },
  {
    name: "Nautical Mechanic",
    id: technicalSkillsEnum.NauticalMechanic,
    skillType: skillTypesEnum.technical,
    description:
      "Nautical Mechanic is concerned with the maintenance and repair of watercraft. This skill is only effective if the necessary equipment and time are available. See Building & Repairing",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: ["Motorboat", "Sailboat", "Ship", "Submarine"],
  },
  {
    name: "Navigation",
    id: technicalSkillsEnum.Navigation,
    skillType: skillTypesEnum.technical,
    description:
      "Navigation governs the use of technology and natural instinct to navigate through territory. This skill enables characters to read maps, use GPS devices, follow AR nav points, or follow a course by landmarks or general direction sense. Navigation applies to both AR and non-AR-enhanced environments.",
    ability: AttributesEnum.Intuition,
    default: true,
    skillGroup: true,
    specialisations: [
      "Augmented Reality Markers",
      "Celestial",
      "Compass",
      "Maps",
      "GPS",
    ],
  },
  {
    name: "Software",
    id: technicalSkillsEnum.Software,
    skillType: skillTypesEnum.technical,
    description:
      "Software is the skill used to create and manipulate programming in the Matrix. See Using Software. It's also what technomancers use when they create their complex forms see Threading",
    ability: AttributesEnum.Logic,
    default: false,
    skillGroup: true,
    specialisations: [
      "Data Bombs",
      "Complex Form - Editor",
      "Complex Form - Resonance Spike",
      "Complex Form - Tattletale",
      "Complex Form - Other",
    ],
  },
];

export enum vehicleSkillsEnum {
  Gunnery,
  PilotAerospace,
  PilotAircraft,
  PilotWalker,
  PilotExoticVehicle,
  PilotGroundCraft,
  PilotWatercraft,
}

export const vehicleSkills: Array<IActiveSkill> = [
  {
    name: "Gunnery",
    id: vehicleSkillsEnum.Gunnery,
    skillType: skillTypesEnum.vehicle,
    description:
      "Gunnery is used when firing any vehicle-mounted weapon, regardless of how or where the weapon is mounted. This skill extends to manual and sensor-enhanced gunnery.",
    ability: AttributesEnum.Agility,
    default: true,
    skillGroup: false,
    specialisations: [
      "Artillery",
      "Ballistic",
      "Energy",
      "Guided Missile",
      "Rocket",
    ],
  },
  {
    name: "Pilot Aerospace",
    id: vehicleSkillsEnum.PilotAerospace,
    skillType: skillTypesEnum.vehicle,
    description:
      "Aerospace vehicles include all reduced and zero-gravity aircraft capable of suborbital or extra-orbital flight.",
    ability: AttributesEnum.Reaction,
    default: false,
    skillGroup: false,
    specialisations: [
      "Deep Space",
      "Launch Craft",
      "Remote Operation",
      "Semiballistic",
      "Suborbital",
    ],
  },
  {
    name: "Pilot Aircraft",
    id: vehicleSkillsEnum.PilotAircraft,
    skillType: skillTypesEnum.vehicle,
    description:
      "This skill is used to pilot any manned or unmanned aircraft operating solely within planetary atmosphere.",
    ability: AttributesEnum.Reaction,
    default: false,
    skillGroup: false,
    specialisations: [
      "Fixed-Wing",
      "Lighter-Than-Air",
      "Remote Operation",
      "Rotary Wing",
      "Tilt Wing",
      "Vectored Thrust",
    ],
  },
  {
    name: "Pilot Walker",
    id: vehicleSkillsEnum.PilotWalker,
    skillType: skillTypesEnum.vehicle,
    description:
      "Any vehicle that walks on two or more legs is piloted through this skill. Characters may control the walker physically or remotely.",
    ability: AttributesEnum.Reaction,
    default: false,
    skillGroup: false,
    specialisations: ["Biped", "Multiped", "Quadruped", "Remote"],
  },
  {
    name: "Pilot Exotic Vehicle",
    id: vehicleSkillsEnum.PilotExoticVehicle,
    skillType: skillTypesEnum.vehicle,
    description:
      "Characters must take this skill one time for each specific exotic vehicle. Characters may control the vehicle remotely with this skill where possible.",
    ability: AttributesEnum.Reaction,
    default: false,
    skillGroup: false,
  },
  {
    name: "Pilot Ground Craft",
    id: vehicleSkillsEnum.PilotGroundCraft,
    skillType: skillTypesEnum.vehicle,
    description:
      "This skill is used to pilot any ground-based vehicle, excluding legged vehicles. This skill applies whether the pilot is in the vehicle or controlling the vehicle via remote access.",
    ability: AttributesEnum.Reaction,
    default: true,
    skillGroup: false,
    specialisations: [
      "Bike",
      "Hovercraft",
      "Remote Operation",
      "Tracked",
      "Wheeled",
    ],
  },
  {
    name: "Pilot Watercraft",
    id: vehicleSkillsEnum.PilotWatercraft,
    skillType: skillTypesEnum.vehicle,
    description:
      "This skill is used to pilot any waterborne vehicle, whether from inside it or by remote control.",
    ability: AttributesEnum.Reaction,
    default: true,
    skillGroup: false,
    specialisations: [
      "Hydrofoil",
      "Motorboat",
      "Remote Operation",
      "Sail",
      "Ship",
      "Submarine",
    ],
  },
];

export interface ISkillGroup {
  name: string;
  id: skillGroupsEnum;
  skills: Array<IActiveSkill>;
}

export enum skillGroupsEnum {
  Acting,
  Atheletics,
  Biotech,
  CloseCombat,
  Conjuring,
  Cracking,
  Electronics,
  Enchanting,
  Firearms,
  Influence,
  Engineering,
  Outdoors,
  Sorcery,
  Stealth,
  Tasking,
}

export const skillGroups: Array<ISkillGroup> = [
  {
    name: "Acting",
    id: skillGroupsEnum.Acting,
    skills: [
      socialSkills[socialSkillsEnum.Con],
      socialSkills[socialSkillsEnum.Impersonation],
      socialSkills[socialSkillsEnum.Performance],
    ],
  },
  {
    name: "Atheletics",
    id: skillGroupsEnum.Atheletics,
    skills: [
      activePhysicalSkills[activePhysicalSkillsEnum.Gymnastics],
      activePhysicalSkills[activePhysicalSkillsEnum.Running],
      activePhysicalSkills[activePhysicalSkillsEnum.Swimming],
    ],
  },
  {
    name: "Biotech",
    id: skillGroupsEnum.Biotech,
    skills: [
      technicalSkills[technicalSkillsEnum.Cybertechnology],
      technicalSkills[technicalSkillsEnum.FirstAid],
      technicalSkills[technicalSkillsEnum.Medicine],
    ],
  },
  {
    name: "Close Combat",
    id: skillGroupsEnum.CloseCombat,
    skills: [
      activeCombatSkills[activeCombatSkillsEnum.Blades],
      activeCombatSkills[activeCombatSkillsEnum.Clubs],
      activeCombatSkills[activeCombatSkillsEnum.UnarmedCombat],
    ],
  },
  {
    name: "Conjuring",
    id: skillGroupsEnum.Conjuring,
    skills: [
      magicalSkills[magicalSkillsEnum.Banishing],
      magicalSkills[magicalSkillsEnum.Binding],
      magicalSkills[magicalSkillsEnum.Summoning],
    ],
  },
  {
    name: "Cracking",
    id: skillGroupsEnum.Cracking,
    skills: [
      technicalSkills[technicalSkillsEnum.Cybercombat],
      technicalSkills[technicalSkillsEnum.ElectronicWarfare],
      technicalSkills[technicalSkillsEnum.Hacking],
    ],
  },
  {
    name: "Electronics",
    id: skillGroupsEnum.Electronics,
    skills: [
      technicalSkills[technicalSkillsEnum.Computer],
      technicalSkills[technicalSkillsEnum.Hardware],
      technicalSkills[technicalSkillsEnum.Software],
    ],
  },
  {
    name: "Enchanting",
    id: skillGroupsEnum.Enchanting,
    skills: [
      magicalSkills[magicalSkillsEnum.Alchemy],
      magicalSkills[magicalSkillsEnum.Artificing],
      magicalSkills[magicalSkillsEnum.Disenchanting],
    ],
  },
  {
    name: "Firearms",
    id: skillGroupsEnum.Firearms,
    skills: [
      activeCombatSkills[activeCombatSkillsEnum.Automatics],
      activeCombatSkills[activeCombatSkillsEnum.Longarms],
      activeCombatSkills[activeCombatSkillsEnum.Pistols],
    ],
  },
  {
    name: "Influence",
    id: skillGroupsEnum.Influence,
    skills: [
      socialSkills[socialSkillsEnum.Etiquette],
      socialSkills[socialSkillsEnum.Leadership],
      socialSkills[socialSkillsEnum.Negotiation],
    ],
  },
  {
    name: "Engineering",
    id: skillGroupsEnum.Engineering,
    skills: [
      technicalSkills[technicalSkillsEnum.AeronauticsMechanic],
      technicalSkills[technicalSkillsEnum.AutomotiveMechanic],
      technicalSkills[technicalSkillsEnum.IndustrialMechanic],
      technicalSkills[technicalSkillsEnum.NauticalMechanic],
    ],
  },
  {
    name: "Outdoors",
    id: skillGroupsEnum.Outdoors,
    skills: [
      technicalSkills[technicalSkillsEnum.Navigation],
      activePhysicalSkills[activePhysicalSkillsEnum.Survival],
      activePhysicalSkills[activePhysicalSkillsEnum.Tracking],
    ],
  },
  {
    name: "Sorcery",
    id: skillGroupsEnum.Sorcery,
    skills: [
      magicalSkills[magicalSkillsEnum.Counterspelling],
      magicalSkills[magicalSkillsEnum.RitualSpellcasting],
      magicalSkills[magicalSkillsEnum.Spellcasting],
    ],
  },
  {
    name: "Stealth",
    id: skillGroupsEnum.Stealth,
    skills: [
      activePhysicalSkills[activePhysicalSkillsEnum.Disguise],
      activePhysicalSkills[activePhysicalSkillsEnum.Palming],
      activePhysicalSkills[activePhysicalSkillsEnum.Sneaking],
    ],
  },
  {
    name: "Tasking",
    id: skillGroupsEnum.Tasking,
    skills: [
      resonanceSkills[resonanceSkillsEnum.Compiling],
      resonanceSkills[resonanceSkillsEnum.Decompiling],
      resonanceSkills[resonanceSkillsEnum.Registering],
    ],
  },
];

export enum KnowledgeCategoryEnum {
  Academic,
  Interests,
  Professional,
  Street,
}

export interface IKnowledgeSkill {
  name: string;
  category: KnowledgeCategoryEnum;
}

export const knowledgeExampleSkills: Array<IKnowledgeSkill> = [
  {
    name: "Biology",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Medicine",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Magic Theory",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Politics",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Philosophy",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Literature",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "History",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Music",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Parabotany",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Parazoology",
    category: KnowledgeCategoryEnum.Academic,
  },
  {
    name: "Current Simsense Movies",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Popular Trideo Shows",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "20th Century Trivia",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Elven Wine",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Urban Brawl",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Combat Biking",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Pop Music",
    category: KnowledgeCategoryEnum.Interests,
  },
  {
    name: "Journalism",
    category: KnowledgeCategoryEnum.Professional,
  },
  {
    name: "Business Law",
    category: KnowledgeCategoryEnum.Professional,
  },
  {
    name: "Military Service",
    category: KnowledgeCategoryEnum.Professional,
  },
  {
    name: "Gang Identification",
    category: KnowledgeCategoryEnum.Street,
  },
  {
    name: "Criminal Organisations",
    category: KnowledgeCategoryEnum.Street,
  },
  {
    name: "Smuggling Routes",
    category: KnowledgeCategoryEnum.Street,
  },
  {
    name: "Fences",
    category: KnowledgeCategoryEnum.Street,
  },
];
