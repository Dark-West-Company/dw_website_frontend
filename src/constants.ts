// XP progression type constants
export const XP_TYPE_ATTRIBUTE = 'attribute';
export const XP_TYPE_ABILITY = 'ability';
export const XP_TYPE_WILLPOWER = 'willpower';
export const XP_TYPE_BACKGROUND = 'background';
export const XP_TYPE_VAMPIRE_DISCIPLINE = 'vampire_discipline';
export const XP_TYPE_VAMPIRE_VIRTUE = 'vampire_virtue';
export const XP_TYPE_VAMPIRE_PATH = 'vampire_path';
export const XP_TYPE_WEREWOLF_GIFT = 'werewolf_gift';
export const XP_TYPE_WEREWOLF_RAGE = 'werewolf_rage';
export const XP_TYPE_WEREWOLF_GNOSIS = 'werewolf_gnosis';
export const XP_TYPE_MAGE_SPHERE = 'mage_sphere';
export const XP_TYPE_MAGE_ARETE = 'mage_arete';
// Character Types
export type CharacterType = 'vampire' | 'werewolf' | 'mage' | 'human';

// Vampire-specific data (dw_sheets_vampire)
export interface VampireData {
  nature: string;
  demeanor: string;
  generation: number;
  sire: string;
  talent_awareness: number;
  talent_awareness_specialty?: string;
  skill_animal_ken: number;
  skill_animal_ken_specialty?: string;
  skill_larceny: number;
  skill_larceny_specialty?: string;
  skill_performance: number;
  skill_performance_specialty?: string;
  knowledge_finance: number;
  knowledge_finance_specialty?: string;
  knowledge_politics: number;
  knowledge_politics_specialty?: string;
  knowledge_technology: number;
  knowledge_technology_specialty?: string;
  disciplines: { name: string; level: number }[];
  virtue_conscience: number;
  virtue_conscience_specialty?: string;
  virtue_self_control: number;
  virtue_self_control_specialty?: string;
  virtue_courage: number;
  virtue_courage_specialty?: string;
  humanity_path_rating: number;
  humanity_path_name: string;
  blood_pool_current: number;
  blood_pool_max: number;
  blood_per_turn: number;
  weakness: string;
  experience: number;
  created_at: string;
  updated_at: string;
}

// Werewolf-specific data (dw_sheets_werewolf)
export interface WerewolfData {
  tribe: string;
  auspice: string;
  breed: string;
  pack_name: string;
  pack_totem: string;
  talent_primal_urge: number;
  talent_primal_urge_specialty?: string;
  skill_animal_ken: number;
  skill_animal_ken_specialty?: string;
  skill_larceny: number;
  skill_larceny_specialty?: string;
  skill_performance: number;
  skill_performance_specialty?: string;
  knowledge_enigmas: number;
  knowledge_enigmas_specialty?: string;
  knowledge_rituals: number;
  knowledge_rituals_specialty?: string;
  knowledge_technology: number;
  knowledge_technology_specialty?: string;
  renown_permanent: number;
  renown_current: number;
  rage_permanent: number;
  rage_current: number;
  gnosis_permanent: number;
  gnosis_current: number;
  rank: string;
  gifts: number[]; // array of gift IDs
  experience: number;
  created_at: string;
  updated_at: string;
}

// Mage-specific data (dw_sheets_mage)
export interface MageData {
  nature: string;
  demeanor: string;
  affiliation: string;
  sect: string;
  essence: string;
  talent_art: number;
  talent_art_specialty?: string;
  talent_awareness: number;
  talent_awareness_specialty?: string;
  skill_martial_arts: number;
  skill_martial_arts_specialty?: string;
  skill_meditation: number;
  skill_meditation_specialty?: string;
  skill_research: number;
  skill_research_specialty?: string;
  skill_technology: number;
  skill_technology_specialty?: string;
  knowledge_cosmology: number;
  knowledge_cosmology_specialty?: string;
  knowledge_esoterica: number;
  knowledge_esoterica_specialty?: string;
  knowledge_enigmas: number;
  knowledge_enigmas_specialty?: string;
  knowledge_politics: number;
  knowledge_politics_specialty?: string;
  sphere_correspondence: number;
  sphere_correspondence_affinity: boolean;
  sphere_entropy: number;
  sphere_entropy_affinity: boolean;
  sphere_forces: number;
  sphere_forces_affinity: boolean;
  sphere_life: number;
  sphere_life_affinity: boolean;
  sphere_matter: number;
  sphere_matter_affinity: boolean;
  sphere_mind: number;
  sphere_mind_affinity: boolean;
  sphere_prime: number;
  sphere_prime_affinity: boolean;
  sphere_spirit: number;
  sphere_spirit_affinity: boolean;
  sphere_time: number;
  sphere_time_affinity: boolean;
  arete: number;
  quintessence: number;
  paradox: number;
  focus_items: string[];
  avatar_description: string;
  other_traits: { name: string; level: number }[];
  experience: number;
  created_at: string;
  updated_at: string;
}

// Human-specific data (dw_sheets_human)
export interface HumanData {
  gender: string;
  age: number;
  talent_awareness: number;
  talent_awareness_specialty?: string;
  skill_animal_ken: number;
  skill_animal_ken_specialty?: string;
  skill_larceny: number;
  skill_larceny_specialty?: string;
  skill_performance: number;
  skill_performance_specialty?: string;
  knowledge_finance: number;
  knowledge_finance_specialty?: string;
  knowledge_politics: number;
  knowledge_politics_specialty?: string;
  knowledge_technology: number;
  knowledge_technology_specialty?: string;
  other_traits: { name: string; level: number }[];
  created_at: string;
  updated_at: string;
}

// Gift type definition
export type Gift = {
  id: number;
  gift_name: string;
  gift_description: string;
  gift_level: number;
  created_at: string;
  updated_at: string;
};

// Ability label arrays per subtype (for DiceRoller and other utilities)
export const HUMAN_ABILITIES = {
  talents: ['alertness', 'athletics', 'awareness', 'brawl', 'empathy', 'expression', 'intimidation', 'leadership', 'streetwise', 'subterfuge'],
  skills: ['animal_ken', 'crafts', 'drive', 'etiquette', 'firearms', 'larceny', 'melee', 'performance', 'stealth', 'survival'],
  knowledges: ['academics', 'computer', 'finance', 'investigation', 'law', 'medicine', 'occult', 'politics', 'science', 'technology'],
};

export const VAMPIRE_ABILITIES = {
  talents: ['alertness', 'athletics', 'awareness', 'brawl', 'empathy', 'expression', 'intimidation', 'leadership', 'streetwise', 'subterfuge'],
  skills: ['animal_ken', 'crafts', 'drive', 'etiquette', 'firearms', 'larceny', 'melee', 'performance', 'stealth', 'survival'],
  knowledges: ['academics', 'computer', 'finance', 'investigation', 'law', 'medicine', 'occult', 'politics', 'science', 'technology'],
};

export const WEREWOLF_ABILITIES = {
  talents: ['alertness', 'athletics', 'brawl', 'empathy', 'expression', 'intimidation', 'leadership', 'primal_urge', 'streetwise', 'subterfuge'],
  skills: ['animal_ken', 'crafts', 'drive', 'etiquette', 'firearms', 'larceny', 'melee', 'performance', 'stealth', 'survival'],
  knowledges: ['academics', 'computer', 'enigmas', 'investigation', 'law', 'medicine', 'occult', 'rituals', 'science', 'technology'],
};

export const MAGE_ABILITIES = {
  talents: ['alertness', 'art', 'athletics', 'awareness', 'brawl', 'empathy', 'expression', 'intimidation', 'leadership', 'streetwise', 'subterfuge'],
  skills: ['crafts', 'drive', 'etiquette', 'firearms', 'martial_arts', 'meditation', 'melee', 'research', 'stealth', 'survival', 'technology'],
  knowledges: ['academics', 'computer', 'cosmology', 'esoterica', 'enigmas', 'investigation', 'law', 'medicine', 'occult', 'politics', 'science'],
};
