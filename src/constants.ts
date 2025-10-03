// Character Types
export type CharacterType = 'vampire' | 'werewolf' | 'mage' | 'human';

// Vampire-specific data (dw_sheets_vampire)
export interface VampireData {
  nature: string;
  demeanor: string;
  generation: number;
  sire: string;
  talent_awareness: number;
  skill_animal_ken: number;
  skill_larceny: number;
  skill_performance: number;
  knowledge_finance: number;
  knowledge_politics: number;
  knowledge_technology: number;
  disciplines: { name: string; level: number }[];
  virtue_conscience: number;
  virtue_self_control: number;
  virtue_courage: number;
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
  skill_animal_ken: number;
  skill_larceny: number;
  skill_performance: number;
  knowledge_enigmas: number;
  knowledge_rituals: number;
  knowledge_technology: number;
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
  talent_awareness: number;
  skill_martial_arts: number;
  skill_meditation: number;
  skill_research: number;
  skill_technology: number;
  knowledge_cosmology: number;
  knowledge_esoterica: number;
  knowledge_enigmas: number;
  knowledge_politics: number;
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
  skill_animal_ken: number;
  skill_larceny: number;
  skill_performance: number;
  knowledge_finance: number;
  knowledge_politics: number;
  knowledge_technology: number;
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
