// Character Types
export type CharacterType = 'vampire' | 'werewolf' | 'mage' | 'human';

// Health levels
export type HealthLevel = 'healthy' | 'bruised' | 'hurt' | 'injured' | 'wounded' | 'mauled' | 'crippled' | 'incapacitated';

// Attributes interface
export interface Attributes {
  // Physical
  strength: number;
  dexterity: number;
  stamina: number;
  
  // Social
  charisma: number;
  manipulation: number;
  appearance: number;
  
  // Mental
  perception: number;
  intelligence: number;
  wits: number;
}

// Skills interface
export interface Skills {
  // Talents
  alertness: number;
  athletics: number;
  awareness: number;
  brawl: number;
  empathy: number;
  expression: number;
  intimidation: number;
  leadership: number;
  streetwise: number;
  subterfuge: number;
  
  // Skills
  animalKen: number;
  crafts: number;
  drive: number;
  etiquette: number;
  firearms: number;
  larceny: number;
  melee: number;
  performance: number;
  stealth: number;
  survival: number;
  
  // Knowledges
  academics: number;
  computer: number;
  finance: number;
  investigation: number;
  law: number;
  medicine: number;
  occult: number;
  politics: number;
  science: number;
  technology: number;
}

// Vampire-specific data
export interface VampireData {
  clan: string;
  generation: number;
  sire: string;
  nature: string;
  demeanor: string;
  concept: string;
  
  // Stats
  bloodPool: number;
  maxBloodPool: number;
  humanity: number;
  willpower: number;
  maxWillpower: number;
  
  // Disciplines
  disciplines: Record<string, number>;
  
  // Clan abilities and flaws
  clanDisciplines: string[];
  clanWeakness: string;
  
  // Experience
  experience: number;
}

// Werewolf-specific data
export interface WerewolfData {
  tribe: string;
  auspice: string;
  breed: string;
  nature: string;
  demeanor: string;
  concept: string;
  
  // Stats
  rage: number;
  maxRage: number;
  gnosis: number;
  maxGnosis: number;
  willpower: number;
  maxWillpower: number;
  
  // Renown
  glory: number;
  honor: number;
  wisdom: number;
  
  // Gifts
  gifts: Record<string, number>;
  
  // Pack information
  pack: string;
  totem: string;
  
  // Experience
  experience: number;
}

// Mage-specific data
export interface MageData {
  tradition: string;
  essence: string;
  nature: string;
  demeanor: string;
  concept: string;
  
  // Stats
  arete: number;
  willpower: number;
  maxWillpower: number;
  quintessence: number;
  maxQuintessence: number;
  paradox: number;
  
  // Spheres
  spheres: {
    correspondence: number;
    entropy: number;
    forces: number;
    life: number;
    matter: number;
    mind: number;
    prime: number;
    spirit: number;
    time: number;
  };
  
  // Focus and tools
  focus: string[];
  avatar: string;
  seekings: string[];
  
  // Experience
  experience: number;
}

// Human-specific data
export interface HumanData {
  nature: string;
  demeanor: string;
  concept: string;
  
  // Basic info
  age: number;
  gender: string;
  
  // Stats
  willpower: number;
  maxWillpower: number;
  
  // Human-specific abilities (Numina, etc.)
  numina: Record<string, number>;
  
  // Experience
  experience: number;
}

// Main character sheet interface
export interface CharacterSheet {
  // Basic information
  id: string;
  name: string;
  player: string;
  chronicle: string;
  type: CharacterType;
  
  // Core stats
  attributes: Attributes;
  skills: Skills;
  
  // Health and damage
  health: HealthLevel[];
  backgrounds: Record<string, number>;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  
  // Type-specific data
  vampire?: VampireData;
  werewolf?: WerewolfData;
  mage?: MageData;
  human?: HumanData;
}

// Dice rolling interfaces
export interface RollResult {
  pool: number;
  difficulty: number;
  rolls: number[];
  successes: number;
  botch: boolean;
  timestamp: Date;
  note?: string;
}

export interface FormattedRollResult extends RollResult {
  formattedTime: string;
  result: string;
}

// Enums and constants
export const CLANS = [
  'Brujah', 'Gangrel', 'Malkavian', 'Nosferatu', 'Toreador', 'Tremere', 'Ventrue',
  'Assamite', 'Followers of Set', 'Giovanni', 'Lasombra', 'Tzimisce',
  'Caitiff', 'Thin-Blood'
] as const;

export const TRIBES = [
  'Black Furies', 'Bone Gnawers', 'Children of Gaia', 'Fianna', 'Get of Fenris',
  'Glass Walkers', 'Red Talons', 'Shadow Lords', 'Silent Striders', 'Silver Fangs',
  'Stargazers', 'Uktena', 'Wendigo'
] as const;

export const AUSPICES = [
  'Ragabash', 'Theurge', 'Philodox', 'Galliard', 'Ahroun'
] as const;

export const BREEDS = [
  'Homid', 'Metis', 'Lupus'
] as const;

export const TRADITIONS = [
  'Akashic Brotherhood', 'Celestial Chorus', 'Cult of Ecstasy', 'Dreamspeakers',
  'Euthanatos', 'Order of Hermes', 'Sons of Ether', 'Verbena', 'Virtual Adepts',
  'Hollow Ones', 'Orphan'
] as const;

export const ESSENCES = [
  'Dynamic', 'Pattern', 'Primordial', 'Questing'
] as const;

// Skill categories for UI organization
export const SKILL_CATEGORIES = {
  talents: [
    'alertness', 'athletics', 'awareness', 'brawl', 'empathy',
    'expression', 'intimidation', 'leadership', 'streetwise', 'subterfuge'
  ],
  skills: [
    'animalKen', 'crafts', 'drive', 'etiquette', 'firearms',
    'larceny', 'melee', 'performance', 'stealth', 'survival'
  ],
  knowledges: [
    'academics', 'computer', 'finance', 'investigation', 'law',
    'medicine', 'occult', 'politics', 'science', 'technology'
  ]
} as const;

// Labels for display
export const SKILL_LABELS: Record<string, string> = {
  // Talents
  alertness: 'Alertness',
  athletics: 'Athletics',
  awareness: 'Awareness',
  brawl: 'Brawl',
  empathy: 'Empathy',
  expression: 'Expression',
  intimidation: 'Intimidation',
  leadership: 'Leadership',
  streetwise: 'Streetwise',
  subterfuge: 'Subterfuge',
  
  // Skills
  animalKen: 'Animal Ken',
  crafts: 'Crafts',
  drive: 'Drive',
  etiquette: 'Etiquette',
  firearms: 'Firearms',
  larceny: 'Larceny',
  melee: 'Melee',
  performance: 'Performance',
  stealth: 'Stealth',
  survival: 'Survival',
  
  // Knowledges
  academics: 'Academics',
  computer: 'Computer',
  finance: 'Finance',
  investigation: 'Investigation',
  law: 'Law',
  medicine: 'Medicine',
  occult: 'Occult',
  politics: 'Politics',
  science: 'Science',
  technology: 'Technology'
};

export const ATTRIBUTE_LABELS: Record<string, string> = {
  // Physical
  strength: 'Strength',
  dexterity: 'Dexterity',
  stamina: 'Stamina',
  
  // Social
  charisma: 'Charisma',
  manipulation: 'Manipulation',
  appearance: 'Appearance',
  
  // Mental
  perception: 'Perception',
  intelligence: 'Intelligence',
  wits: 'Wits'
};

// Default character data
export const DEFAULT_ATTRIBUTES: Attributes = {
  strength: 1, dexterity: 1, stamina: 1,
  charisma: 1, manipulation: 1, appearance: 1,
  perception: 1, intelligence: 1, wits: 1
};

export const DEFAULT_SKILLS: Skills = {
  alertness: 0, athletics: 0, awareness: 0, brawl: 0, empathy: 0,
  expression: 0, intimidation: 0, leadership: 0, streetwise: 0, subterfuge: 0,
  animalKen: 0, crafts: 0, drive: 0, etiquette: 0, firearms: 0,
  larceny: 0, melee: 0, performance: 0, stealth: 0, survival: 0,
  academics: 0, computer: 0, finance: 0, investigation: 0, law: 0,
  medicine: 0, occult: 0, politics: 0, science: 0, technology: 0
};

// Utility functions
export function rollDice(pool: number, difficulty: number = 6): RollResult {
  const rolls: number[] = [];
  let successes = 0;
  let ones = 0;
  
  for (let i = 0; i < pool; i++) {
    const roll = Math.floor(Math.random() * 10) + 1;
    rolls.push(roll);
    
    if (roll >= difficulty) {
      successes++;
    } else if (roll === 1) {
      ones++;
    }
  }
  
  // Check for botch (no successes and at least one 1)
  const botch = successes === 0 && ones > 0;
  
  // Subtract ones from successes for net result
  const netSuccesses = Math.max(0, successes - ones);
  
  return {
    pool,
    difficulty,
    rolls,
    successes: botch ? -1 : netSuccesses,
    botch,
    timestamp: new Date()
  };
}

export function formatRollResult(result: RollResult): FormattedRollResult {
  const formattedTime = result.timestamp.toLocaleTimeString();
  
  let resultText: string;
  if (result.botch) {
    resultText = 'Botch!';
  } else if (result.successes === 0) {
    resultText = 'Failure';
  } else if (result.successes === 1) {
    resultText = '1 Success';
  } else {
    resultText = `${result.successes} Successes`;
  }
  
  return {
    ...result,
    formattedTime,
    result: resultText
  };
}