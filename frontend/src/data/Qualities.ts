export enum QualityEnum {
  Ambidextrous,
  AnalyticalMind,
  Apititude,
  AstralChamelon,
  Bilingual,
  Blandness,
  Catlike,
  Codeslinger,
  DoubleJointed,
  ExceptionalAttribute,
  FirstImpression,
  FocusedConcentration,
  Gearhead,
  Guts,
  HighPainTolerance,
  HomeGround,
  HumanLooking,
  Indomitable,
  Juryrigger,
  Lucky,
  MagicalResistance,
  MentorSpirit,
  NaturalAthelete,
  NaturalHardening,
  NaturalImmunity,
  PhotographicMemory,
  QuickHealer,
  ResistanceToPathogensToxins,
  SpiritAffinity,
  Toughness,
  WillToLive,
  Addition,
  Allergy,
  AstralBeacon,
  BadLuck,
  BadRep,
  CodeOfHonor,
  Codeblock,
  CombatParalysis,
  Dependents,
  DistinctiveStyle,
  ElfPoser,
  Gremlins,
  Incompetent,
  Insomnia,
  LossOfConfidence,
  LowPainTolerance,
  OrkPoser,
  Prejudiced,
  Scorched,
  SensitiveSystem,
  SimsenseVertigo,
  SINnerLayered,
  SocialStress,
  SpiritBane,
  Uncouth,
  Uneducated,
  UnsteadyHands,
  WeakImmuneSystem,
}

export enum QualitySubqualityEnum {
  HomeGround_AstralAcclimation,
  HomeGround_YouKnowAGuy,
  HomeGround_DigitalTurf,
  HomeGround_TheTransporter,
  HomeGround_OnTheLam,
  HomeGround_StreetPolitics,
  Addition_Mild,
  Addition_Moderate,
  Addition_Severe,
  Addition_Burnout,
  Alergy_Uncommon_Mild,
  Alergy_Uncommon_Moderate,
  Alergy_Uncommon_Severe,
  Alergy_Uncommon_Extreme,
  Alergy_Common_Mild,
  Alergy_Common_Moderate,
  Alergy_Common_Severe,
  Alergy_Common_Extreme,
  Prejudiced_CommonGroup_Biased,
  Prejudiced_CommonGroup_Outspoken,
  Prejudiced_CommonGroup_Radical,
  Prejudiced_SpecificGroup_Biased,
  Prejudiced_SpecificGroup_Outspoken,
  Prejudiced_SpecificGroup_Radical,
  Scorched_MemoryLossShort,
  Scorched_MemoryLossLong,
  Scorched_Blackout,
  Scorched_Migraines,
  Scorched_ParanoiaAnxiety,
  SINnerLayered_NationalSIN,
  SINnerLayered_CriminalSIN,
  SINnerLayered_CorporateLimitedSIN,
  SINnerLayered_CorporateSIN,
}

export type CostRange = Array<number>;

export interface IQuality {
  name: string;
  id: QualityEnum;
  positive: boolean;
  cost: number | CostRange;
  maxRating?: number;
  description: string;
  subqualities?: Array<ISubquality>;
}
export interface ISubquality {
  name: string;
  id: QualitySubqualityEnum;
  description: string;
  cost?: number;
}

const unfrozenQualities: Array<IQuality> = [
  {
    name: "Ambidextrous",
    id: QualityEnum.Ambidextrous,
    positive: true,
    cost: 4,
    description:
      "The Ambidextrous character can handle objects equally well with either hand. Without this quality, any action per-formed solely with the off-hand (i.e., firing a gun) suffers a -2 dice pool modifier (see Attacker Using Off-Hand Weapon).",
  },
  {
    name: "Analytical Mind",
    id: QualityEnum.AnalyticalMind,
    positive: true,
    cost: 5,
    description:
      "Analytical Mind describes the uncanny ability to logically analyze information, deduce solutions to problems, or separate vital information from distractions and noise. It's useful in cracking cyphers, solving puzzles, figuring out traps, and  through data. This quality gives the character a +2 dice pool modifier to any Logic Tests involving pattern recognition, evidence analysis, clue hunting, or solving puzzles. This quality also reduces the time it takes the character to solve a problem by half.",
  },
  {
    name: "Aptitude",
    id: QualityEnum.Apititude,
    positive: true,
    cost: 14,
    description:
      "This quality is how you become even better than the best in the world. The standard limit for skills is 12. Every so often, there is a character who can exceed limitations and be truly exceptional in a particular skill. With this particular quality, the character can have one skill rated at 7 at character creation, and may eventually build that skill up to rating 13. Characters may only take the Aptitude quality once.",
  },
  {
    name: "Astral Chamelon",
    id: QualityEnum.AstralChamelon,
    positive: true,
    cost: 10,
    description:
      "With the Astral Chameleon quality, the character’s astral signature blends into the background of astral space and is difficult to detect. All signatures left by the character last only half as long as other astral signatures. Any individuals assensing astral signatures left behind by a character with this quality receive a –2 dice pool modifier for the Assensing Test. Only characters with a Magic rating and capable of leaving astral signatures may have this quality.",
  },
  {
    name: "Bilingual",
    id: QualityEnum.Bilingual,
    positive: true,
    cost: 5,
    description:
      "A character with this quality reads, writes, and speaks a second language fluently. They can list a second language as a native tongue (see Language Skills). This quality can only be acquired at character creation; selecting it gives the character a second free language skill during Step Five: Purchase Active, Knowledge, and Language Skills",
  },
  {
    name: "Blandness",
    id: QualityEnum.Blandness,
    positive: true,
    cost: 8,
    description:
      "This character blends into a crowd; he's seldom noticed and easily forgotten. He is unremarkable in every aspect of physical appearance. Anyone attempting to describe the character cannot come up with anything more precise than “average height, average build, average hair, etc.” Increase the threshold for anyone to recall specific details about the character by 1. This means a Memory Test with a difficulty of Average (threshold of 2) becomes a Hard test (threshold of 3). Individuals attempting to shadow or physically locate a character with the Blandness quality in a populated setting receive a -2 dice pool modifier on all tests related to their search. The same penalty applies if they're asking around about the person based on the individual's physical appearance. The modifier does not, however, apply to magical or Matrix searches. If the character acquires any visible tattoos, scars, obvious cyberware, or other distinguishing features, the bonuses from the Blandness quality go away until the distinctive features are removed from the character's appearance. In certain circumstances and specific situations, the gamemaster may determine that Blandness does not apply. For example, a troll with the Blandness quality still towers head and shoulders over a crowd of humans and so still stands out, no matter how average their horns may be. The character only regains his bonus by leaving the situation where he stands out.",
  },
  {
    name: "Catlike",
    id: QualityEnum.Catlike,
    positive: true,
    cost: 7,
    description:
      "A character with the Catlike quality is gifted with an uncanny elegance, a stealthy gait, and an almost preternatural ability to move without making a sound. They also claim they land on their feet when dropped, though they tend not to let people test this. This quality adds a +2 dice pool modifier to Sneaking skill tests.",
  },
  {
    name: "Codeslinger",
    id: QualityEnum.Codeslinger,
    positive: true,
    cost: 10,
    description:
      "Ones and zeroes are practically a native language to a Codeslinger. The character is adept at performing a particular Matrix action (which she selects when she selects this quality) and receives a +2 dice pool modifier to that Matrix action. This can only be selected for Matrix Actions that have a test associated with them.",
  },
  {
    name: "Double-Jointed",
    id: QualityEnum.DoubleJointed,
    positive: true,
    cost: 6,
    description:
      "A Double-Jointed character has unusually flexible joints and can bend and contort his body into extreme positions. The character receives a +2 dice pool modifier for Escape Artist tests. The character may also be able to squeeze into small, cramped spaces where less limber characters cannot. They're also great at parties and bars.",
  },
  {
    name: "Exceptional Attribute",
    id: QualityEnum.ExceptionalAttribute,
    positive: true,
    cost: 14,
    description:
      "The Exceptional Attribute quality is how you get to be the charismatic troll, or the agile dwarf. It allows you to possess one attribute at a level one point above the metatype maximum limit. For example, an ork character with the Exceptional Attribute quality for Strength could take his Strength attribute up to 10 before augmentations are applied, instead of the normal limit of 9. Exceptional Attribute also applies toward Special Attributes such as Magic and Resonance. Edge cannot affected by the Exceptional Attribute (Edge is raised by another quality called Lucky). A character may only take Exceptional Attribute once, and only with the gamemaster's approval.",
  },
  {
    name: "First Impression",
    id: QualityEnum.FirstImpression,
    positive: true,
    cost: 11,
    description:
      "The First Impression quality enables a character to slide easily into new environments, situations, groups, and jobs. Whether infiltrating a gang, making contacts in a new city, or wrangling an invite to a private meet, the character gains a temporary +2 dice pool modifier for relevant Social Tests such as Negotiation and Conduring the first meeting. This modifier does not apply to second and subsequent encounters",
  },
  {
    name: "Focused Concentration",
    id: QualityEnum.FocusedConcentration,
    positive: true,
    cost: 4,
    maxRating: 6,
    description:
      "A technomancer or magic user with the Focused Concentration quality has the discipline to manipulate mana or Resonance more precisely than otherwise possible. This precision reduces stress to the magic user's or technomancer's body. She is able to sustain one spell/complex form with a force/level equal to her Focused Concentration rating without suffering any penalties. For example, a magic user with Focused Concentration rating 3 may sustain a Force 3 Armor spell without taking the negative dice pool modifier for sustaining a spell. Sustaining any additional spells or complex forms incurs the standard -2 dice pool modifier per spell or complex form sustained. This quality may only be taken by magic user characters that are able to cast spells and technomancers.",
  },
  {
    name: "Gearhead",
    id: QualityEnum.Gearhead,
    positive: true,
    cost: 11,
    description:
      "The Gearhead is who you look for when it's time to stomp on the gas and move. She's a natural-born driver or pilot. When she's at the wheel/stick/controls of a vehicle or drone, she has an intuitive understanding of its limitations and its capabilities and is able to coax whatever machine she's controlling to perform at its best. During vehicle or chase combat, a Gearhead can increase the Speed of her vehicle or drone by 20 percent or increase the Handling modifier by +1 (player's choice). She also receives a +2 dice pool modifier when attempting difficult maneuvers or stunts in the vehicle. This bonus lasts for 1D6 minutes. The player can choose to make this bonus last up to an additional 1D6 minutes if she wants. Doing so pushes the vehicle or drone well beyond its design limits and risks catastrophic damage. For each minute the character pushes the vehicle past its initial bonus period, the vehicle automatically takes one point of stress damage (unresisted)",
  },
  {
    name: "Guts",
    id: QualityEnum.Guts,
    positive: true,
    cost: 10,
    description:
      "When a spirit with dripping fangs comes calling, the character with Guts is the one most likely to stand and fight instead of freaking the hell out. Guts gives a character a +2 dice pool modifier on tests to resist fear and intimidation, including magically induced fear from spells or critter powers.",
  },
  {
    name: "High Pain Tolerance",
    id: QualityEnum.HighPainTolerance,
    positive: true,
    cost: 7,
    maxRating: 3,
    description:
      "High Pain Tolerance lets a character keep delivering the pain even if she's had plenty piled on her own head. A character with High Pain Tolerance can ignore one box of damage per rating point of this quality when calculating wound modifiers (see Wound Modifiers). So a character with this quality at Rating 2 can take 4 boxes of damage but carry on without wound modifiers as if she only had 2 boxes of damage. The -1 wound modifier would then kick in when the character takes her fifth box in damage. This quality may not be used with the Pain Resistance adept power, pain editor bioware, or damage compensator bioware.",
  },
  {
    name: "Home Ground",
    id: QualityEnum.HomeGround,
    positive: true,
    cost: 10,
    description:
      "If a character knows her neighborhood better than anyone—the shortcuts, the hiding places, and the people she can trust—then she probably has the Home Ground quality. She knows the families who live there, their stories, and what the kids who moved out are doing; she knows the streets better than GridGuide, knows things that aren't on GridGuide, and knows when GridGuide is wrong. She knows the politics of the gangs, who's running for whom and who's running from whom. But it's not just the physical streets. Depending on the character, her Home Ground quality can manifest in ways specific to who and what she is. When choosing this quality, select one of the bonuses below:",
    subqualities: [
      {
        name: "Astral Acclimation",
        id: QualitySubqualityEnum.HomeGround_AstralAcclimation,
        description:
          "The character has become acclimated to the background count of her Home Ground. Through a lifetime of familiarity she's learned to work around it, enabling her to ignore up to two points of background count. For example, if the background count on her Home Ground is 3, she sees only a reduction of 1 to her Magic tests; if the background count is 5, for her it is only a 3, and so on. This quality works only on her Home Ground and has no benefit anywhere else.",
      },
      {
        name: "You Know a Guy",
        id: QualitySubqualityEnum.HomeGround_YouKnowAGuy,
        description:
          "The character has built uplong-lasting relationships with people from her neighborhood. These people are not contacts, but they know her as one of their own and are more likely to do favors for or talk to her. NPCs from the character's Home Ground neighborhood are considered friendly toward her wherever she encounters them (unless she has done something to change that).The character receives +2 Street Cred for any Negotiation with people from her Home Ground.",
      },
      {
        name: "Digital Turf",
        id: QualitySubqualityEnum.HomeGround_DigitalTurf,
        description:
          "This is for a decker or technomancer who has a specific host that she calls her own. She may actually own the spot, or it can be a place she frequents enough to consider home. The character receives a +2 bonus to Matrix Tests while in her Home Ground host. Bonuses from other Qualities may stack with Home Ground. If the character has not frequented this host for more than six months, she loses the Home Ground quality because she is no longer as familiar as she should be.",
      },
      {
        name: "The Transporter",
        id: QualitySubqualityEnum.HomeGround_TheTransporter,
        description:
          " This character knows the layout of streets, back alleys, service tunnels, etc., like the back of her hand. She knows when GridGuide is wrong and when GridGuide is out of date. When the transporter is on her Home Ground, she has a +2 dice pool modifier for Evasion Tests.",
      },
      {
        name: "On the Lam",
        id: QualitySubqualityEnum.HomeGround_OnTheLam,
        description:
          " Hiding out and lying low are part of a shadowrunner's daily life. On the Lam means a character has an encyclopedic knowledge of safehouses, bolt holes, abandoned buildings, just about any out-of-the-way place not claimed by gangs or squatters. When she needs to find a safe location in a hurry, this character receives a +2 dice pool bonus to her Intuition + appropriate street knowledge skill to find a suitable place to hole up fast.",
      },
      {
        name: "Street Politics",
        id: QualitySubqualityEnum.HomeGround_StreetPolitics,
        description:
          " This character knows the street gangs, the criminal operations, and the beneath-the-surface affiliations that are the social and political fabric of her Home Ground. She receives a +2 dice pool modifier for Knowledge Tests relating to gangs or their operations.",
      },
    ],
  },
  {
    name: "Human-Looking",
    id: QualityEnum.HumanLooking,
    positive: true,
    cost: 6,
    description:
      "metahuman character with the Human-Looking quality can pass for human in most circumstances. Human NPCs respond with neutral attitudes toward such characters when making Social skill tests, even those humans who are particularly biased against metahumans. The character may suffer increased animosity from metahuman NPCs who are prejudiced against humans and who either mistake him for human or distrust his motives for trying to look human. Only elves, dwarfs, and orks can take the Human-Looking quality.",
  },
  {
    name: "Indomitable",
    id: QualityEnum.Indomitable,
    positive: true,
    cost: 8,
    maxRating: 3,
    description:
      "Bodies and minds have limits, but some people have the will to push right through those boundaries. For each level of Indomitable, a character receives a +1 increase to an Inherent limit of his choice (Mental, Physical, or Social). He can take up to three levels and can apply them in any way he chooses (+3 to one Inherent Limit, for example; or +2 to one Inherent and +1 to another; or +1 to all three).",
  },
  {
    name: "Juryrigger",
    id: QualityEnum.Juryrigger,
    positive: true,
    cost: 10,
    description:
      "Juryrigger gives a character an intuitive grasp of the inner workings and underlying principles of mechanical and electronic devices. She knows how to repair the broken, rejuvenate the worn, improve a device's efficiency, or coax it into doing things it's designers hadn't intended. Characters with the Juryrigger quality receive a +2 dice pool modifier for Mechanical Tests when juryrigging gear. If the gamemaster decides what the character wants to accomplish is in fact possible, he determines the threshold for her success using the Build/Repair Table as a guideline, then reduces the threshold for the test by 1. While a successful Mechanics Skill Test enables the Juryrigger to perform amazing technical feats, everything she devises is temporary. Examples of what a character may be able to do with Juryrigger include: Juryrig a destroyed device so that it will operate just one more time (for 1D6 minutes). Tweak an electronic device to function at a rating one higher than normal for 1D6 Combat Turns.Temporarily coax extra performance from a vehicle's or drone's components, increasing its Sensor or Handling by +1 (if combined with bonuses from Gearhead, the vehicle's or drone's critical components completely burn out at the end of the duration from being pushed well beyond their limits; at that point, the vehicle or drone becomes a big paperweight). Improvise a one-shot device or weapon from disparate components (the gamemaster has final say on whether suitable parts are available). Devise an impromptu means to bypass a security measure, such as a trip beam or pressure plate.",
  },
  {
    name: "Lucky",
    id: QualityEnum.Lucky,
    positive: true,
    cost: 12,
    description:
      "The dice roll and the coin flips this character's way more often than not, giving her the chance to drop jaws in amazement at her good fortune. Lucky allows a character to possess an Edge attribute one point higher than his metatype maximum (for example, a human character could raise her Edge to 8). Note that taking this quality does not actually increase the character's current Edge rating, it just allows her the opportunity to do so; the Karma cost for gaining the extra point must still be paid. This quality may only be taken once and must be approved by the gamemaster. The Lucky quality cannot be combined with Exceptional Attribute.",
  },
  {
    name: "Magic Resistance",
    id: QualityEnum.MagicalResistance,
    positive: true,
    cost: 6,
    maxRating: 4,
    description:
      "This is the wonderful ability to potentially make a Fireball bounce away. For every 6 Karma spent on Magic Resistance, a character receives 1 additional die for Spell Resistance Tests. The Magical Resistance quality, however, is always “on”—the character cannot lower it to receive beneficial spells such as Heal. A character with Magic Resistance cannot take part in spells that require a voluntary subject; such spells automatically fail when used on magic-resistant characters. Characters with a Magic rating cannot take this quality.",
  },
  {
    name: "Mentor Spirit",
    id: QualityEnum.MentorSpirit,
    positive: true,
    cost: 5,
    description:
      "Everyone needs some help in life, even if it comes from someone relatively filmy and insubstantial. Mentor Spirit means the character follows a patron spirit (see Mentor Spirits) that guides him in his practice of magic and provides certain advantages and disadvantages to his natural abilities. A character may change mentor spirits, but he may have only one mentor spirit at a time. To change mentor spirits, the character must first buy off the current mentor spirit as if it were a Negative quality. He can then purchase the quality again to follow a different mentor spirit. This cost represents the toll of divorcing from one mentor spirit and bonding with a new one. Each tradition has a different name for a mentor spirit. Hermetic mages prefer the term “mentor spirit,” while shamans use the word “totem” for the spirit that they follow. While the names may vary, the way the mentor works is consistent. This quality is only available to characters that possess a Magic attribute rating.",
  },
  {
    name: "Natural Athelete",
    id: QualityEnum.NaturalAthelete,
    positive: true,
    cost: 7,
    description:
      "A character with this quality has an innate combination of physical fitness, spatial awareness, and natural athletic or gymnastic talent. While the character may not be a world-class athlete and may require training to achieve peak performance, he is in prime physical shape for his size and weight class. The Natural Athlete adds a +2 dice pool modifier for Running and Gymnastics skill tests.",
  },
  {
    name: "Natural Hardening",
    id: QualityEnum.NaturalHardening,
    positive: true,
    cost: 10,
    description:
      "This quality makes the character's neural structure resistant to feedback. This gives her 1 point of natural biofeed-back filtering, which is cumulative with a Biofeedback Filter program or a technomancer's firewall",
  },
  {
    name: "Natural Immunity",
    id: QualityEnum.NaturalImmunity,
    positive: true,
    cost: [4, 10],
    description:
      "The ability to casually sip poison can never be overrated. A character with Natural Immunity has an innate or developed immunity to one single disease or toxin. This quality is available at two levels. If purchased at the 4 Karma level, the character is immune to a single natural disease or toxin. If Natural Immunity is purchased at the full 10 Karma level, the character is immune to a single, synthetic (artificially created) disease or toxin. Natural Immunity does not affect diseases or toxins that are magically based, such as HMHVV. The player and gamemaster must agree on the disease, drug, or poison to which the character is immune. The character can take one dose of the drug or poison and experience one exposure to the disease every six hours with no ill effects. Any subsequent dosing or exposure during the next six hours causes normal damage, but the character's recovery time is halved. Note that characters with Natural Immunity to a disease can be a carrier, infecting other characters while suffering no ill effects.",
  },
  {
    name: "Photographic Memory",
    id: QualityEnum.PhotographicMemory,
    positive: true,
    cost: 6,
    description:
      "A character with Photographic Memory can instantly recall facts, dates, numbers, or anything else he has seen or heard. The character gains a +2 dice pool modifier to all Memory Tests.",
  },
  {
    name: "Quick Healer",
    id: QualityEnum.QuickHealer,
    positive: true,
    cost: 3,
    description:
      "A character with the Quick Healer quality receives a +2 dice pool modifier to all Healing Tests made on/for/by her, including magical healing.",
  },
  {
    name: "Resistance to Pathogens/Toxins",
    id: QualityEnum.ResistanceToPathogensToxins,
    positive: true,
    cost: [4, 8],
    description:
      "A character with Resistance to Pathogens/Toxins can fight off diseases and drugs more easily than other characters and receives a +1 dice pool modifier to Resistance Tests. This quality comes at two levels: at 4 Karma the character is resistant to either pathogens or toxins, not both. If the character purchases this quality at 8 Karma, she receives the +1 modifier for resisting both.",
  },
  {
    name: "Spirit Affinity",
    id: QualityEnum.SpiritAffinity,
    positive: true,
    cost: 7,
    description:
      "Available only to magic users, the Spirit Affinity quality allows a character to be attuned to one type of spirit (see Spirits). These spirits find the character interesting, are drawn to her, and are more inclined to assist her. They may be reluctant to attack the character, and if forced to do so they are likely to use nonlethal power. Watchers and minions do not count for this quality as they are constructed and are not summoned like normal spirits. Spirit Affinity provides magicians with 1 additional spirit service for each spirit of that type, and it also provides a +1 dice pool modifier for Binding Tests. Magic users may possess this quality for a type of spirit that is not part of their magical tradition.",
  },
  {
    name: "Toughness",
    id: QualityEnum.Toughness,
    positive: true,
    cost: 9,
    description:
      "Characters with the Toughness quality shrug off damage more easily than others. Such characters gain a +1 dice pool modifier to their Body when making Damage Resistance tests.",
  },
  {
    name: "Will to Live",
    id: QualityEnum.WillToLive,
    positive: true,
    cost: 3,
    maxRating: 3,
    description:
      "For each rating point in Will to Live, the character gains 1 additional Damage Overflow Box. These additional boxes only allow the character to sustain additional damage before dying; they do not raise the threshold at which the character becomes unconscious or incapacitated, nor do they affect modifiers from the damage the character has taken.",
  },
  {
    name: "Addition",
    id: QualityEnum.Addition,
    positive: false,
    cost: [4, 9, 20, 25],
    description:
      "A character with the Addiction quality is hooked on chemical substances, such as street drugs (novacoke, bliss, tempo); technological or magical devices, such as better-than-life (BTL) chips or foci; or potentially ad dictive activities such as gambling or sex. Physiological Addictions affect the Body's functions, producing pain, nausea, shakes, and other side effects that can impair the runner, particularly during withdrawal. Some possible effects of psychological Addictions include paranoia, anxiety, insomnia, poor concentration, mood disorders, and depression. The bonus Karma value of this quality depends on how severe the addiction is. Levels of addiction include: Mild, Moderate, Severe, or Burnout. Addictions get worse over prolonged periods of time without treatment. Each level of Addiction has a starting dosage level that tells the character how much of a substance or activity they must use for a craving to be sated. This level can be increased if the character has augmentations. The more severe a character's Addiction, the more substance or time devoted to the activity he needs to satisfy his cravings. At the lower end of the spectrum for the Addiction quality (Mild, Moderate), it is easier to hide the effects of an Addiction. At the most severe levels (Severe, Burnout), there are noticeable physical and mental signs of Addiction. These signs negatively impact his Social Tests even if he is not suffering the effects of withdrawal. The gamemaster has discretion as to whether or not she should call for Withdrawal Tests during an Addicted character's downtime, depending on to what degree the gamemaster wants the addiction to impact gameplay for the character.",
    subqualities: [
      {
        name: "Mild/1 dose or 1 hour of habit-related activity",
        id: QualitySubqualityEnum.Addition_Mild,
        description:
          "Mild cravings occur once a month for the character. If a character fails his Withdrawal Test, he suffers symptoms of withdrawal and must actively seek out and use the substance or engage in the activity to find relief. On a run, this could mean delaying plans that the runner team may have meticulously put together for a job, especially if the character is busy gambling with a bookie or slotting a BTL instead of being available for the run. While the character is suffering withdrawal symptoms, apply a -2 dice pool modifier to all of the character's Mental-attribute-based tests (if psychological dependency) or to all the character's Physical-attribute-based tests (if physiological dependency). If the character succeeds on his Withdrawal Test, the character does not suffer withdrawal symptoms and does not need the substance or participate in that habit until the character makes their next Withdrawal Test (in one month). He is able to stay clean for that month.",
        cost: 4,
      },
      {
        name: "Moderate/1 dose or 1 hour of habit-related activity",
        id: QualitySubqualityEnum.Addition_Moderate,
        description:
          "A craving at the Moderate level occurs roughly every two weeks. If the character experiences withdrawal, he suffers a -4 to all Mental-attribute-based tests (if psychological dependency) or -4 to all Physical-attribute-based tests (if physiological dependency) until the craving is satisfied.",
        cost: 9,
      },
      {
        name: "Severe/2 doses or 2 hours of habit-related activity",
        id: QualitySubqualityEnum.Addition_Severe,
        description:
          "The addiction is spiraling out of control. The addict experiences cravings once a week. If he fails a Withdrawal Test, he suffers a -4 dice pool modifier to either their Mental- or Physical-based tests (as appropriate for their dependency) while in withdrawal. In addition, he suffers a -2 dice pool modifier to all Social Tests, whether he is in withdrawal or not. It is all but impossible now for the character to hide his addiction, even when he's had his fix. The physical and psychological symptoms of the damage caused by his Addiction are readily apparent to the close observer.",
        cost: 20,
      },
      {
        name: "Burnout 3 doses/3 hours (minimum) of habit-related activity",
        id: QualitySubqualityEnum.Addition_Burnout,
        description:
          "Burnout is the final progression of the Addiction quality. The addict experiences cravings for their drug or habit of choice every day. Until they satisfy their craving with a fix, the character suffers a -6 penalty to either his Mental- or Physical-based tests (whichever one is appropriate for their dependency) while in withdrawal. Because his Addiction is now obvious to even the most casual observer, the character suffers a -3 dice pool modifier for all Social Tests, whether he is in withdrawal or not.",
        cost: 25,
      },
    ],
  },
  {
    name: "Allergy",
    id: QualityEnum.Allergy,
    positive: false,
    cost: [5, 10, 15, 20, 10, 15, 20, 25],
    description:
      "A character with the Allergy quality is allergic to a substance or condition found in their environment. The value of this quality depends on two factors. The first is whether the substance or condition is Uncommon (2 Karma) or Common (7 Karma). Next, determine the severity of the symptoms: Mild (3 Karma), Moderate (8 Karma), Severe (13 Karma), or Extreme (18 Karma). Add the appropriate point values together to find the final value. For example, the value of an Uncommon Moderate Allergy (Silver) is 10 Karma (2+8 Karma). If a character is attacked with a substance to which they are allergic, they lose 1 die from their Resistance Test for each stage of severity of the Allergy (e.g., 1 die for a Mild allergy, 2 dice for a Moderate allergy, etc.).",
    subqualities: [
      {
        name: "Uncommon, Mild",
        id: QualitySubqualityEnum.Alergy_Uncommon_Mild,
        description:
          "The substance or condition is rare for the local environment. Examples: silver, gold, antibiotics, grass. Symptoms are discomfiting and distracting. Apply a -2 dice pool modifier to the character's Physical Tests while under the effects of the Allergy.",
        cost: 5,
      },
      {
        name: "Uncommon, Moderate",
        id: QualitySubqualityEnum.Alergy_Uncommon_Moderate,
        description:
          "The substance or condition is rare for the local environment. Examples: silver, gold, antibiotics, grass. Contact with the allergen produces intense pain. Apply a -4 dice pool modifier to all Physical Tests made while a character experiences the symptoms.",
        cost: 10,
      },
      {
        name: "Uncommon, Severe",
        id: QualitySubqualityEnum.Alergy_Uncommon_Severe,
        description:
          "The substance or condition is rare for the local environment. Examples: silver, gold, antibiotics, grass. Contact with the allergen results in extreme pain and actual physical damage. Apply a -4 dice pool modifier to all tests made while a character experiences symptoms. The character also suffers 1 box of Physical Damage (unresisted) for every 1 minute they are exposed to the allergen.",
        cost: 15,
      },
      {
        name: "Uncommon, Extreme",
        id: QualitySubqualityEnum.Alergy_Uncommon_Extreme,
        description:
          "The substance or condition is rare for the local environment. Examples: silver, gold, antibiotics, grass. A character at this level, when exposed to the allergen, goes into full anaphylactic shock. The character receives a -6 dice pool modifier for anything they do. The character is considered to be in excruciating agony. The character suffers 1 box of Physical Damage (unresisted) for every 30 seconds they are exposed to the allergen. First Aid, Medicine, or magical means can stop the damage taken from the anaphylactic shock.",
        cost: 20,
      },
      {
        name: "Common, Mild",
        id: QualitySubqualityEnum.Alergy_Common_Mild,
        description:
          "The substance or condition is prevalent in the local environment. Examples: sunlight, seafood, bees, pollen, pollutants, Wi-Fi sensitivity, soy, wheat. Symptoms are discomfiting and distracting. Apply a -2 dice pool modifier to the character's Physical Tests while under the effects of the Allergy.",
        cost: 10,
      },
      {
        name: "Common, Moderate",
        id: QualitySubqualityEnum.Alergy_Common_Moderate,
        description:
          "The substance or condition is prevalent in the local environment. Examples: sunlight, seafood, bees, pollen, pollutants, Wi-Fi sensitivity, soy, wheat. Contact with the allergen produces intense pain. Apply a -4 dice pool modifier to all Physical Tests made while a character experiences the symptoms.",
        cost: 15,
      },
      {
        name: "Common, Severe",
        id: QualitySubqualityEnum.Alergy_Common_Severe,
        description:
          "The substance or condition is prevalent in the local environment. Examples: sunlight, seafood, bees, pollen, pollutants, Wi-Fi sensitivity, soy, wheat. Contact with the allergen results in extreme pain and actual physical damage. Apply a -4 dice pool modifier to all tests made while a character experiences symptoms. The character also suffers 1 box of Physical Damage (unresisted) for every 1 minute they are exposed to the allergen.",
        cost: 20,
      },
      {
        name: "Common, Extreme",
        id: QualitySubqualityEnum.Alergy_Common_Extreme,
        description:
          "The substance or condition is prevalent in the local environment. Examples: sunlight, seafood, bees, pollen, pollutants, Wi-Fi sensitivity, soy, wheat. A character at this level, when exposed to the allergen, goes into full anaphylactic shock. The character receives a -6 dice pool modifier for anything they do. The character is considered to be in excruciating agony. The character suffers 1 box of Physical Damage (unresisted) for every 30 seconds they are exposed to the allergen. First Aid, Medicine, or magical means can stop the damage taken from the anaphylactic shock.",
        cost: 25,
      },
    ],
  },
  {
    name: "Astral Beacon",
    id: QualityEnum.AstralBeacon,
    positive: false,
    cost: 10,
    description:
      "The astral signature of a character with the Astral Beacon quality is like, well, a beacon—highly visible on the astral plane. The signature also lasts twice as long as it would without the Astral Beacon quality and others assensing it receive a -1 to the threshold of their Assensing Test for gathering information about it. Only characters with a Magic rating may take this quality.",
  },
  {
    name: "Bad Luck",
    id: QualityEnum.BadLuck,
    positive: false,
    cost: 12,
    description:
      "This character is cursed—his own luck often turns against him. When the character uses Edge, roll 1D6. On a result of 1, the point of Edge is spent, but it has the exact opposite effect intended. For example, if a character hopes to gain additional dice he loses that many dice from his dice pool. If a character spends Edge to go first in an Initiative Pass, he ends up going last. If a character spent Edge to negate a glitch, Bad Luck turns it into a critical glitch. The character suffers Bad Luck on only one Edge roll per game session. After the character has suffered his Bad Luck, he does not need to roll the test for Bad Luck for any more expenditures of Edge for the duration of that game session.",
  },
  {
    name: "Bad Rep",
    id: QualityEnum.BadRep,
    positive: false,
    cost: 7,
    description:
      "A character with a Bad Rep quality has a dark and lasting stain on her reputation. She may be a former Knight Errant cop known to have been particularly brutal in dealing with shadowrunners. Or word on the street might be that she once killed a member of her own runner team. If she's Awakened and comes from a polluted region, it may be generally accepted that she's a toxic shaman. Whether she is actually guilty of any wrongdoing is not relevant. What people believe she has done has permanently tainted the way they see her and how they deal with her. Whatever the reason, the character starts play with 3 points of Notoriety that can only be removed or decreased by confronting and resolving the source of the bad reputation. Only then may the Bad Rep quality be bought off with Karma.",
  },
  {
    name: "Code Of Honour",
    id: QualityEnum.CodeOfHonor,
    positive: false,
    cost: 15,
    description:
      "The character has a binding Code of Honour when it comes to killing members of a specific group; it's a matter of unwavering principle. The character with the Code of Honor quality chooses a specific group that they will not kill or allow others to kill. Examples of this group could include women, children, innocent bystanders, or a specific metatype. A character can choose to protect specific paracritters, but only if the specified paracritter possesses the Sapience power. The gamemaster must approve the group that the character designates as being “off limits.” If the group (such as children) is not regularly encountered in campaigns, the gamemaster can reject the choice. If the player feels strongly about his choice, the gamemaster may allow the player to take two groups they will not harm, (i.e., women and children), one of which must be likely to be encountered in the campaign. A magician can legitimately choose to not destroy any type of spirit from which their Mentor Spirit bestows a bonus for summoning. This Code of Honor respects their Mentor Spirit and is worthy of the Karma. Characters can't pick an obscure or non-existent group to acquire this quality—you can't acquire Karma by vowing to never kill sapient hamsters, for example. Any time anyone attempts to kill a member of the character's protected list, the character must make a Charisma + Willpower (4) Test. A failed roll means the character must immediately put a stop the violence against the member of their protected group. If the situation forces the character to take action against any of his protected group, he will always choose non-lethal methods. Killing a member of the group he has sworn to protect is a line he will not cross for any reason. There are drawbacks to having a Code of Honor. For example, it can leave witnesses behind. For each person in the protected group the character leaves alive and who is in a position to remember them, increase the character's Public Awareness by 1. The character's job options are also limited—he will not take a job if the objective is the death of a member of his protected group and will have reservations about taking part in a mission with a high probability of causing collateral harm to members of his protected group. There is always a chance things will go wrong whenever non-lethal force is used. A person may have a life-threatening allergic reaction to a usually harmless knockout drug, or a heart condition that makes a taser shock deadly. For this reason, each time the character takes a violent action or allows others to take violent action against a member of his chosen group, the gamemaster makes a secret roll of 1D6. On a roll of 1, there is an unforeseen complication from the use of non-lethal force. With a metahuman it could be a life-threatening medical condition; with a spirit, an attempt to banish rather than destroy may in fact set the spirit free. When a complication arises, the gamemaster makes a secret Perception (4) Test for the character to notice if anything has gone wrong. If a person in the character's chosen group is killed, whether intentionally or inadvertently, the character loses a point of Karma for that adventure for each person in their “protected group” that is killed. The Code of Honor can take other forms as well. For example: Assassin's Creed: A character never kills anyone that they are not paid to kill. Being precise as an assassin, not leaving collateral damage, and being invisible are important hallmarks of those who believe in the Assassin's Creed. Characters who take this version of Code of Honor lose 1 point of Karma for every unintentional and/or unpaid murder they commit, and their Public Awareness goes up by 1 for each such death. Warrior's Code: The character who follows a Warrior's Code maintains a strict sense of personal honor. In 2075, this likely means a character will not kill an unarmed person, take lethal action against an opponent who is unaware or unprepared for an attack (i.e., a guard who doesn't know the runner is there), or knowingly take an action that could kill someone who is defenseless (i.e., from a stray bullet or allow someone to be killed from a sniper shot). The character loses 1 Karma per unarmed or defenseless person that they kill or allow to be killed through their actions.",
  },
  {
    name: "Codeblock",
    id: QualityEnum.Codeblock,
    positive: false,
    cost: 10,
    description:
      "A character with the Codeblock quality always has trouble with a particular Matrix action. He receives a -2 dice pool modifier any time he attempts that type of Matrix action. Codeblock only applies to Matrix actions with an associated test; it does not apply to actions that do not require a test. Characters cannot apply Codeblock toward hacking actions they are never likely to take.",
  },
  {
    name: "Combat Paralysis",
    id: QualityEnum.CombatParalysis,
    positive: false,
    cost: 12,
    description:
      "A character with Combat Paralysis freezes in combat. On the character's first Initiative Test, the character divides their Initiative Score for that round in half (round-ed up). In subsequent Combat Turns, the character may roll their normal Initiative. Combat Paralysis also gives the character a -3 dice pool modifier on Surprise Tests. If the character must make a Composure Test while under fire or in a similar combat situation, the gamemaster applies a +1 threshold modifier.",
  },
  {
    name: "Dependent/s",
    id: QualityEnum.Dependents,
    positive: false,
    cost: [3, 6, 9],
    description:
      "A character with the Dependents quality has one or more loved ones who depend on them for emotional support and financial aid. Dependents may include children, parents, a spouse or lover, a sibling, or an old friend. Meeting the needs of a dependent should take up a fair amount of the character's time, as well as some of the character's money. Increase the amount of time it takes to learn a new skill or improve an existing skill by fifty percent. See the Character Advancement section for more information on how long it takes to improve skills. Also increase the base time for any long-term projects by fifty percent. A dependent could also be a hindrance in other ways—getting underfoot, sharing living space, involving herself in the character's work, borrowing the car, calling at the most inopportune moments, etc. For 3 Karma, the dependent is an occasional nuisance: dropping in unexpectedly (such as when the character must go to a meet), needing emotional support, favors, or other confirmations of friendship/commitment, and occasionally money. Examples of dependents at this level include: slacker sibling, long-term boyfriend/girlfriend, or a child not living with the character but for whom the character pays child support and visits regularly. Raise the character's lifestyle cost by 10 percent each month. For 6 Karma, the dependent is a regular inconvenience: needing attention and commitment on a regular basis, getting involved in the character's affairs, sharing living space. Examples of dependents at this level include: a live-in lover/wife/husband or family member, a child for whom the character shares custody and rou tinely has in his home (every other weekend, etc.), or a young child or close sibling for whom the character is responsible. Increase the character's lifestyle cost by 20 percent each month. At the 9 Karma level, the dependent is close family or a life partner and lives with the character. The dependent  a strain on the character's time and resources, and/or requires special care and attention that limits the character's availability for missions or specific actions. Examples of these dependents include large family sharing the living space, parents or grandparents with medical or physical needs, and full custody of any children. Increase the lifestyle cost for the character by 30 percent each .",
  },
  {
    name: "Distinctive Style",
    id: QualityEnum.DistinctiveStyle,
    positive: false,
    cost: 5,
    description:
      "A character with the Distinctive Style quality has at least one aspect of his appearance, mannerism, or personality that makes him inconveniently memorable. Choices for Distinctive Style include, but are by no means limited to: tattoos that cannot be easily concealed, an accent or atypical manner of speaking, bizarre fashion choices, scars, gang or prison signs, flashy custom augmentations, or non-metahuman modifications like a tail. Note that what's distinctive in one culture or location may not be in another. Whatever Distinctive Style the player selects makes her character easy to remember. Anyone who attempts to identify, trace, or physically locate this character (or gain information about him via legwork) receives a +2 dice pool modifier for relevant tests. If an NPC makes a Memory Test to determine how much they recall about the character, reduce the Difficulty Threshold by 1, to a minimum of 1. This quality is physical in nature and does not apply to astral searches. This quality may only be taken once. This quality is incompatible with Blandness.",
  },
  {
    name: "Elf Poser",
    id: QualityEnum.ElfPoser,
    positive: false,
    cost: 6,
    description:
      "The Elf Poser is a human character who wants to be an elf. She associates with elves as much as possible, talks like elves, and alters her appearance to resemble an elf. Characters with this quality may undergo cosmetic surgery to get elf ears and elf eyes, and they may successfully pass as elves and avoid any negative Social modifiers associated with being a non-elf. Real elves consider Elf Posers an embarrassment, many humans think of them as sellouts, and other metatypes generally consider posers to be pathetic. If an elf discovers the character's secret, the elf is likely to treat her with contempt and hostility (see Social Modifiers Table). An outed elf poser may also face stigma from prejudiced humans as a “race traitor.” Only human characters may take the Elf Poser quality.",
  },
  {
    name: "Gremlins",
    id: QualityEnum.Gremlins,
    positive: false,
    cost: 4,
    maxRating: 4,
    description:
      "Characters with the Gremlins quality don't get along with technology. Devices malfunction inexplicably, software crashes unexpectedly, vehicles refuse to start, components become unusually fragile at his touch, and wireless links suffer faltering connections and odd interference whenever he's involved. For each level (maximum of 4), reduce the number of rolled 1s necessary to get a glitch by 1 whenever the character is attempting to use a moderately sophisticated device. For example, a character with a dice pool of 8 and Gremlins level 2 (8 Karma) would trigger a glitch if two or more 1s result from the test (instead of the normal 4). The gamemaster may also require the character to make a test for operation that would otherwise succeed automatically to see whether or not a glitch occurs. When describing the effects of a Gremlin-induced glitch, gamemasters should play up the notion of a particularly weird mechanical or electronics malfunction. Some examples of Gremlin-induced glitches include: the magazine falling out of a pistol when attempting a critical shot, a keypad inexplicably burning out while entering a code to disarm an alarm system, or the commlink interface converting to Sperethiel mid-sentence when attempting to access a restricted node. Note that Gremlins is a Negative quality—its effects hinder the character (and probably entertain others). The character cannot use his Gremlins quality to damage an opponent's high-tech equipment merely by touching it. Anything the character attempts to sabotage using only Gremlins will function flawlessly. (Obviously, he can try any ordinary means of sabotage, but Gremlins will haunt his efforts.) The effect only applies to external equipment and does not affect cyberware, bioware, or other implants.",
  },
  {
    name: "Incompetent",
    id: QualityEnum.Incompetent,
    positive: false,
    cost: 5,
    description:
      "An Incompetent character possesses a total lack of knowledge or ability with a certain Active skill group—or, perhaps worse, they have some vague knowledge or the skills contained in the group, but they have neither the coordination nor the comprehension to come anywhere close to carrying it off properly. No matter how much effort they put into this area, they simply cannot grasp it—it would take a miracle for them to somehow, someday advance to the level of “poor” in those skills. Incompetent may not be applied to Language or Knowledge skills. The Incompetent character is treated as having skill level of “unaware” for all skills in the skill group (see the Skill Rating Table).In some cases, a Success Test may be required for tasks most people take for granted. Characters may not possess that skill group for which they have the Incompetent quality. If gear grants a bonus or requires the use of a specific skill in which the character is Incompetent, the character gains no benefits from the gear. Gamemasters are free to reject any choices that would prove irrelevant or exploitative in actual play, such as Incompetent: Outdoors in a campaign based entirely inside an arcology. (This should go without saying, but just in case: Characters may never choose Incompetent for any skill group that they are physically incapable of using. A non-magician cannot take Incompetent in Sorcery, Conjuring, or Enchanting; a non-technomancer cannot be Incompetent in a skill that requires Resonance; and so on.) Incompetent may be purchased only once.",
  },
  {
    name: "Insomnia",
    id: QualityEnum.Insomnia,
    positive: false,
    cost: [10, 15],
    description:
      "A character with the Insomnia quality has trouble falling asleep and seldom feels well rested. Usually, this is only an annoyance. For runners, however, this can become a major problem when they are dependent on being able to rest at every opportunity to remain sharp. Insomnia can lengthen the amount of time it takes for a character to recover Stun damage. At the 10 Karma level, before a character rolls his Body + Willpower to recover Stun damage, the character rolls an Intuition + Willpower (4) Test. If the character succeeds on this test, the character is not impeded by Insomnia and the character regains Stun damage as normal. He also regains 1 point of Edge after 8 hours of restful sleep. If the character fails, double the amount of time it normally would take for a character to recover their Stun damage. So instead of healing a number of boxes of Stun damage in an hour, it now takes two hours per roll. If the character is affected by Insomnia, the character does not have his Edge refreshed and may not have it refreshed for up to another 24 hours. At the 15 Karma level, a failed Willpower + Intuition (4) Test means that all efforts to regain Stun damage through rest are negated during that time period, and the character must try again later. No Stun damage is regained from the attempt due to the insomnia the character experiences, and the character must wait for 24 hours before their Edge refreshes.",
  },
  {
    name: "Loss of Confidence",
    id: QualityEnum.LossOfConfidence,
    positive: false,
    cost: 10,
    description:
      "The Loss of Confidence quality means something has caused the character to lose confidence in himself and one of his abilities. Though a skilled decker, he failed to hack into a Stuffer Shack host, or despite high Agility, he glitched an easy Climbing Test and fell into a dumpster—whatever the reason, he now doubts himself and his abilities. In tests involving the affected skill, the character suffers a -2 dice pool modifier. If the character has a specialization with the skill, the character cannot use that specialization while suffering a loss of confidence. The skill chosen for the character to have a Loss of Confidence must be one that the character prides himself in and has invested in building. Only skills with a rating 4 or higher may suffer the Loss of Confidence quality. Edge may not be used for tests involving this skill when the character is suffering Loss of Confidence.",
  },
  {
    name: "Low Pain Tolerance",
    id: QualityEnum.LowPainTolerance,
    positive: false,
    cost: 9,
    description:
      "Characters with Low Pain Tolerance are particularly sensitive to pain; they incur a -1 wound modifier for every 2 boxes of cumulative damage, instead of the normal 3 boxes. This affects both Physical and Stun damage tracks.",
  },
  {
    name: "Ork Poser",
    id: QualityEnum.OrkPoser,
    positive: false,
    cost: 6,
    description:
      "Influenced by Goblin Rock or over-hyped orxploitation trends, an Ork Poser is an elf or human character who alters her appearance to appear as an ork. Various cosmetic biomods—tusk implants, steroids, larynx alterations, etc.—allow him to successfully pass as an ork. Ork posers are an embarrassment to many orks, but some tolerate, if not appreciate, the compliment behind the effort. This means an ork who discovers the character's secret may either become very hostile toward him or be willing to let the character join the “family”—provided he passes an appropriate hazing ritual to prove his “orkness.” An outed ork poser may also face stigma from other humans or elves as “race traitors,” if those humans/elves harbor any prejudice against orks. Only humans and elves may take the Ork Poser quality.",
  },
  {
    name: "Prejudiced",
    id: QualityEnum.Prejudiced,
    positive: false,
    cost: [5, 7, 10, 3, 5, 8],
    description:
      "With this quality the character is Prejudiced against members of a specific group of people: metahumans, Awakened, non-metahuman sapient critters, or some other group. The character is not merely intolerant—he is outspoken about his beliefs and may actively work against the target of his prejudice. Depending upon the degree of prejudice, this quality can get the character into trouble for expressing his views or when forced to confront the targets of his prejudice. The Karma bonus granted by this quality varies depending upon how common the hated group is, how often the character is likely to encounter members of the group, and the to which the character is openly antagonistic toward them. Refer to the Prejudiced Table to determine the Karma value of the quality based on the prevalence of the hated group and the degree of prejudice. When dealing with the target of their prejudice, a character receives a -2 dice pool modifier per level of severity of the Prejudiced quality for all Social Tests. If negotiations are a part of the encounter, the target receives a +2 modifier per level of the Prejudiced quality. So if a character who is radical in their prejudiced views against the Awakened tries to negotiate with the targetof their prejudice, they receive a -6 to their Negotiation Test while the target receives a +6 dice pool modifier.",
    subqualities: [
      {
        name: "Common group, Biased",
        id: QualitySubqualityEnum.Prejudiced_CommonGroup_Biased,
        description: "e.g, humans, metahumans - closet meta-hater",
        cost: 5,
      },
      {
        name: "Common group, Outspoken",
        id: QualitySubqualityEnum.Prejudiced_CommonGroup_Outspoken,
        description: "e.g, humans, metahumans - typical member of Humanis",
        cost: 7,
      },
      {
        name: "Common group, Radical",
        id: QualitySubqualityEnum.Prejudiced_CommonGroup_Radical,
        description: "e.g, humans, metahumans - racial supremacist",
        cost: 10,
      },
      {
        name: "Specific group, Biased",
        id: QualitySubqualityEnum.Prejudiced_SpecificGroup_Biased,
        description:
          "e.g., the Awakened, technomancers, shapeshifters, aspected magicians - closet meta-hater",
        cost: 3,
      },
      {
        name: "Specific group, Outspoken",
        id: QualitySubqualityEnum.Prejudiced_SpecificGroup_Outspoken,
        description:
          "e.g., the Awakened, technomancers, shapeshifters, aspected magicians - typical member of Humanis",
        cost: 5,
      },
      {
        name: "Specific group, Radical",
        id: QualitySubqualityEnum.Prejudiced_SpecificGroup_Radical,
        description:
          "e.g., the Awakened, technomancers, shapeshifters, aspected magicians - racial supremacist",
        cost: 8,
      },
    ],
  },
  {
    name: "Scorched",
    id: QualityEnum.Scorched,
    positive: false,
    cost: 10,
    description:
      "A Scorched character is coping with neurological problems brought on by damage caused in some way by Black IC, Psychotropic IC, or BTL. The problem can manifest as short- or long-term memory loss, unexpected blackouts, frequent migraines, diminished senses (sight, touch, smell, etc.), and mood disorders such as paranoia and anxiety. The player chooses one specific effect of Scorched, and its effect should be pronounced enough to hinder the character and present potential plot hooks for the gamemaster. Whenever he enters VR or slots a BTL chip, the character must make a Body + Willpower (4) Test. On a failed roll, he experiences the specified physical effects for six hours. A glitch or critical glitch on this test results in suffering the effects for 24 hours. The only way to eliminate the Scorched quality is to get the medical treatment necessary to repair the damage, then spend the Karma to buy off the Negative quality. Once Scorched, though, the character remains susceptible to the condition. Another bad encounter with Black or Psychotropic IC or a BTL will bring this quality back. In addition to the physical side effects the character may experience from being Scorched, the character is vulnerable to damage inflicted by either Black or Psychotropic IC or BTLs. When faced with this IC, the character must make a Willpower (3) Test to be able to confront it without panicking. If he is able to confront the IC that caused their Scorched condition, the character suffers a -2 to Damage Resistance Tests when these programs are inflicting damage. To take the Scorched quality for BTLs, the character must have at least a Mild Addiction to BTLs and possess the gear necessary to use BTLs. To take the Scorched quality for Black and/or Psychotropic IC, the character must be either a decker or a technomancer.",
    subqualities: [
      {
        name: "Memory Loss: (short term)",
        id: QualitySubqualityEnum.Scorched_MemoryLossShort,
        description:
          "The character does not remember slotting a BTL chip. The character makes another Withdrawal Test immediately. A failed test means the craving comes back immediately, as do the symptoms of withdrawal. Character must slot another chip. For encountering IC, a character must make a Memory Test with a threshold increased by +1. A failed Memory Test results in gaps in memory and possible disorientation while in host.",
      },
      {
        name: "Memory Loss: (long term)",
        id: QualitySubqualityEnum.Scorched_MemoryLossLong,
        description:
          "The same effects of Memory Loss (short term) apply. In addition, for the duration of the effect, the character loses access to one active skill. He simply does not remember how to use it (for example, the Pistols skill). Treat as unaware in that skill until symptoms abate.",
      },
      {
        name: "Blackout",
        id: QualitySubqualityEnum.Scorched_Blackout,
        description:
          "For the duration of the effect, the character retains no memories of events during that time frame. Memory cannot be restored by technological or magical means.",
      },
      {
        name: "Migraines",
        id: QualitySubqualityEnum.Scorched_Migraines,
        description:
          "The character receives -2 to all Physical and Mental tests, sensitivity to light, and nausea",
      },
      {
        name: "Paranoia/Anxiety",
        id: QualitySubqualityEnum.Scorched_ParanoiaAnxiety,
        description:
          "Character must make Social Tests for even basic interactions. These are Success Tests with a threshold of 5. If no apparent skill applies, the character must default to Charisma -1. Failure means the character reacts with paranoia or anxiety in that situation for the duration of the effect.",
      },
    ],
  },
  {
    name: "Senstive System",
    id: QualityEnum.SensitiveSystem,
    positive: false,
    cost: 12,
    description:
      "A character with the Sensitive System quality has immuno-suppressive problems with cybernetic implants. Double all Essence losses caused by cyberware. Bioware implants, regardless of how they are grown or designed, are rejected by the character's body. This quality works differently for characters who are technomancers or Awakened and therefore never plan to take implants. Awakened individuals or technomancers remain fully capable of channeling mana or using Resonance, but they are potentially more susceptible to Drain or Fading. A magic user or technomancer with a Sensitive System must make a Willpower (2) Test before any Drain or Fading Tests. Failure on this test results in Drain or Fading Values being increased by +2 for that particular Drain or Fading Test, as the energy traveling through their body does more damage to their Sensitive System.",
  },
  {
    name: "Simsense Vertigo",
    id: QualityEnum.SimsenseVertigo,
    positive: false,
    cost: 5,
    description:
      "Characters who suffer from Simsense Vertigo experience feelings of disorientation whenever they work with augmented reality, virtual reality, or simsense (including smartlinks, simrigs, and image links). Such characters receive a -2 dice pool modifier to all tests when interacting with AR, VR, or simsense.",
  },
  {
    name: "SINner (Layered)",
    id: QualityEnum.SINnerLayered,
    positive: false,
    cost: [5, 10, 15, 25],
    description:
      "There are four types of SINs that fall under the SINner (Layered) quality: National SIN, Criminal SIN (either Corporate or National), Corporate Limited SIN, or Corporate Born. Individuals with SINs are required by law to always broadcast their SINs. A legal SIN is required for all legal purchases. This makes them very useful things to have, so those who are SINless generally get by with the use of fake SINs just so they can participate in society.",
    subqualities: [
      {
        name: "NATIONAL SIN",
        id: QualitySubqualityEnum.SINnerLayered_NationalSIN,
        description:
          "The character has what is called a National SIN. The character's parents were legal citizens of a nation (such as the UCAS or CAS) and he has been a citizen of that nation from birth. He has the right to vote, qualify for passports issued by his nation, enlist in the national military, or work in the national government. A National SIN is required for any national security clearance or any form of national military career. A character with a National SIN pays fifteen percent of their gross income in taxes. He is also in no way connected to any of the megacorporations. The main drawback to having a legal National SIN is the character is in the system. The nation in the player character's background has the character's biometric data (DNA, fingerprints, retinal scans) on file, and that biometric data is shared with law enforcement agencies through the Global SIN Registry. This makes it much easier to track a character should a job go sideways. Also, nations typically sell the personal information tied to the character's SIN to corporations. Those with a legal SIN get nearly three times as much spam as those who don't have a SIN or rely on fake SINs, and the spam messages they receive are disturbingly tailored to their preferences (based on their buying and browsing habits).",
        cost: 5,
      },
      {
        name: "CRIMINAL SIN",
        id: QualitySubqualityEnum.SINnerLayered_CriminalSIN,
        description:
          "The character has a Criminal SIN (either Corporate or National); his Criminal SIN replaces any previous SIN. At some point in his life, the character was arrested and served time for a felony-level offense and was branded a criminal for the rest of his life. He is legally required to broadcast his Criminal SIN at all times; failure to do so is a felony and can lead to re-incarceration. He is shunned by law-abiding society. Law-abiding citizens will, if they must, deal with a SIN-less character before they'd have any interaction with a known criminal. With his Criminal SIN, the character will experience prejudiced views, suspicion, and/or open hostility from most people with SINs. He will often be denied entry to certain locations (high-end stores, car dealerships, museums, galleries, etc.) and will have difficulty finding legal employment. He can expect to be brought in and held up to 48 hours for questioning anytime a crime is committed in his area. The judicial system in 2075 is more an assembly line than institution of justice. Suspects are treated as guilty unless proven innocent, plausible  evidence is often sufficient for conviction, and sentencing has more to do with the judge's mood than the crime. In this environment it's likely the cops will be more interested in closing the case than solving any crime; they may try to pin crimes on the character with the Criminal SIN whether or not she had anything to do with it. Some degree of “adjusting” facts and “interpreting” witness accounts to support allegations is common; fabricating evidence, if only to meet conviction productivity goals, is not rare. Magic users tend to receive much harsher treatment from the judicial system than mundane criminals. If the character is a magic user with a Criminal SIN, he is registered with local law enforcement. He can expect regular—but usually not scheduled—checks to confirm he lives and to ensure he is not using forbidden spell formula, foci, or other magical gear. The nation or corporation that issued the Criminal SIN will keep close tabs on the character, if he fails to update residential information or appears in any way to be trying to evade their oversight, he is subject to arrest. He is also required to pay a fifteen percent tax on his gross income to the entity that issued his Criminal SIN.",
        cost: 10,
      },
      {
        name: "CORPORATE LIMITED SIN",
        id: QualitySubqualityEnum.SINnerLayered_CorporateLimitedSIN,
        description:
          "The character has the Corporate Limited SIN; he has somehow gained a position in a megacorporation from the outside. He may have been hired as a wageslave (or been the minor child of a person hired as a wageslave), or perhaps brought in by someone in the megacorp who saw advantage in his skill, talent, area of expertise, or some other useful attribute. Under most circumstances the Corporate Limited SIN replaces any National SIN. His Corporate Limited SIN becomes part of the Global SIN Registry, to which law enforcement agencies and security corporations alike have access. Many of these Corporate Limited SINs record whether or not the character is Awakened. The Corporate Limited SIN allows the character to be employed by the megacorp under most circumstances, and it replaces any National SIN that the character may have had previously. With the Corporate SIN, the character can be gainfully employed by the issuing megacorporation as a wageslave, a low-ranking member of the corporation's security services, or an enlisted member of the corporation's military. Though he could have a secret-level security clearance to perform his duties, he cannot rise to a leadership position, become an officer, or be part of the megacorporation's Special Forces (such as the Red Samurai). As a group, characters that possess Corporate Limited SINs are believed to either know something valuable about the inner workings of the megacorporation or have a skill set rival megacorps would want; as such they are considered valid targets for extraction, even if they are no longer active with the corporation. Characters with the Corporate Limited SIN experience prejudice and hostility from those in the shadows who are SINless. The SINless believe the corporations deliberately keep them poor and powerless so they can be exploited. The character with the Corporate Limited SIN may find himself being personally blamed for his corporation's actions—protesting he has no real authority and no connection with the actions in question usually does little good. To the SINless and neo-anarchists the character with the Corporate Limited SIN has sold out and chosen a corrupt and oppressive system over his own people. The character pays twenty percent of his gross income in taxes to his megacorporation.",
        cost: 15,
      },
      {
        name: "CORPORATE SIN",
        id: QualitySubqualityEnum.SINnerLayered_CorporateSIN,
        description:
          "The character has the Corporate Born SIN. The character with this ID was probably born into a mega corporation, or belonged to one when it achieved extra-territoriality. At least one of his parents probably had the Corporate Born SIN as well. He grew up in the corporation, his social involvement, education, and almost every aspect of his life was managed by the corporation. His skills and aptitudes were evaluated constantly, and he was groomed for the career path to which he was best suited; his whole world was the corporation. Characters with the Corporate Born SIN had the potential and the opportunity to advance through the corporation hierarchy. He could have been a department administrator, a finance strategist, an agent of corporate intelligence, an officer in a megacorp's military, or even a member of Corporate Special Forces (Renraku's Red Samurai or Ares' Firewatch). With a Corporate Born SIN, he could have enjoyed top-secret clearance within the corporation and access to nearly unlimited resources. Then something happened. An unforgivably costly mistake, the machinations of a rival, a supervisor in need of a scapegoat—something pushed the character out of the corporation and into the cold and unforgiving shadows. In the shadows a SIN that had been the key to opportunity is now a deadly liability. Most in the shadows see the Corporate Born as the privileged few, the aristocrats in the armored limousines who look down on them, oppress them, exploit them and deny them their basic rights. If the SINless discover the character's Corporate Born SIN, reactions will range from deep suspicion to violent hostility; serious injury and death are real possibilities. The character's loyalty to his corporation is never questioned, which can be an insurmountable liability in a culture that works against the megacorps. Would-be runners have been killed for holding Corporate Born SINs. Fortunately, Corporate Born records are limited to the megacorporation that generated them. Files in the Global SIN Registry can confirm she has a valid SIN, but do not contain any additional information. Those with Corporate Born SINs pay a tax of ten percent of their gross income to their corporation.",
        cost: 25,
      },
    ],
  },
  {
    name: "Social Stress",
    id: QualityEnum.SocialStress,
    positive: false,
    cost: 8,
    description:
      "Whether as a result of loss or trauma or due to innate psychological makeup, the Social Stress quality burdens the character with emotions that interfere with his ability to interact with others. A specific cause and trigger for the Social Stress must be established. For example, if his Social Stress is caused by survivor's guilt after the loss of a close friend, unexpectedly encountering someone who looks similar to the lost friend will heighten stress. When a character is using Leadership or Etiquette skills, reduce the number of 1s required to glitch the test by 1. Gamemasters should call for more Social Tests for characters with Social Stress to determine how a character reacts to others, particularly if a situation related to the cause of their stress arises.",
  },
  {
    name: "Spirit Bane",
    id: QualityEnum.SpiritBane,
    positive: false,
    cost: 7,
    description:
      "A character with a Spirit Bane really torques off a certain type of spirit. Whether the character has a reputation for harming this sort of spirit or something about her aura enrages them, spirits of the type affected by the Spirit Bane are likely to harass the character when she is in their presence, and they may be reluctant to obey or perform favors for the character or her friends. If spirits of this type are ordered to attack a party that includes the character, these spirits will single her out and attempt to destroy her first. Affected spirits will always use lethal force against these characters with the Spirit Bane quality. If the character with Spirit Bane tries to summon or bind this spirit, she suffers a -2 dice pool modifier for the attempt. If the summoner tries to banish a spirit of this type, the spirit receives a +2 dice pool modifier for resisting her attempt. Watchers and minions do not count for Spirit Bane, as they are constructs that are not summoned like normal spirits. This quality may only be taken by magic users. Magic users may possess this quality for a type of spirit that is not a part of their magical tradition.",
  },
  {
    name: "Uncouth",
    id: QualityEnum.Uncouth,
    positive: false,
    cost: 14,
    description:
      "The character with the Uncouth quality has difficulty interacting with others. He acts impulsively, overreacts to any perceived provocation, and tends to do whatever pops into his head without considering the consequences (i.e., flipping off Mr. Johnson, calling a drunk troll a “Trog,” or responding to casual trash talk from a rival runner by punching her in the face). All Social Tests made by the character to resist acting improperly or impulsively receive a -2 dice pool modifier. Additionally, the cost for learning or improving Social Skills is double for Uncouth characters (including at character creation), and they may never learn any Social skill groups. Uncouth characters are treated as “unaware” in any Social skills that they do not possess at Rating 1 or higher (see Skill Ratings). The gamemaster may require the character to make Success Tests for social situations that pose no difficulty for normal characters.",
  },
  {
    name: "Uneducated",
    id: QualityEnum.Uneducated,
    positive: false,
    cost: 8,
    description:
      "An Uneducated character is not mentally impaired—she just never had the opportunity to learn. Whether because she and her family were isolated squatters, or were SIN-less, or otherwise underprivileged, she was denied access to the education system. She has only a rudimentary knowledge of reading, writing, and arithmetic. Characters with the Uneducated quality are considered “unaware” in Technical, Academic Knowledge, and Professional Knowledge skills they do not possess (see Skill Ratings), and they may not default on skill tests for those skills. The gamemaster may also require the character to make Success Tests for ordinary tasks that the typical sprawl-dweller takes for granted. Additionally, the Karma cost for learning new skills or improving existing ones in these categories is twice the normal rating (including at character creation), and it's possible the character will never learn some skill groups belonging to these categories.",
  },
  {
    name: "Unsteady Hands",
    id: QualityEnum.UnsteadyHands,
    positive: false,
    cost: 7,
    description:
      "A character with Unsteady Hands has mild shakes that affect the dexterity and finesse in his hands. The character suffers a –2 dice pool modifier for all Agility-based tests when symptoms manifest themselves. The condition could be physiological (an untreated genetic disorder or damaged nerves, for example), caused by psychological trauma, or even be symptomatic of age. Certain augmentations or medications can mask these symptoms under normal circumstances. Under more stressful situations in the course of the run, there is a chance the Unsteady Hands condition can reappear. The character makes an Agility + Body (4) Test following a stressful encounter (combat, for example). A successful test means the character does not experience the symptoms of this condition (this time). A failed test causes the difficulties associated with unsteady hands to re-emerge, and they remain with the character for the remainder of the run.",
  },
  {
    name: "Weak Immune System",
    id: QualityEnum.WeakImmuneSystem,
    positive: false,
    cost: 10,
    description:
      "A character with a Weak Immune System has reduced resistance to infections and disease. Increase the Power of any disease by +2 for every Resistance Test. A character with Weak Immune System cannot take the Natural Immunity or Resistance to Pathogens/Toxins qualities. A Weak Immune System often results from immune-suppression treatments used in cybersurgery and bio-genetic procedures, so it is reasonable to believe that characters that have undergone extensive body modifications are more likely to acquire this quality.",
  },
];

// sanity check here to catch bugs, previously I was doing a .find() on this array and was modifying the result
// now that it is frozen the elements of this array can't be modified
for (const quality of unfrozenQualities) {
  Object.freeze(quality);
}

export const Qualities = unfrozenQualities;
