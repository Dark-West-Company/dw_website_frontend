import {
  XP_TYPE_ATTRIBUTE,
  XP_TYPE_ABILITY,
  XP_TYPE_WILLPOWER,
  XP_TYPE_BACKGROUND,
  XP_TYPE_VAMPIRE_DISCIPLINE,
  XP_TYPE_VAMPIRE_VIRTUE,
  XP_TYPE_VAMPIRE_PATH,
  XP_TYPE_WEREWOLF_GIFT,
  XP_TYPE_WEREWOLF_RAGE,
  XP_TYPE_WEREWOLF_GNOSIS,
  XP_TYPE_MAGE_SPHERE,
  XP_TYPE_MAGE_ARETE,
} from '../constants';

export function getUpgradeXpCost(type: string, currentLevel: number, targetLevel: number): number {
  let xpCost = 0;

  if (type === XP_TYPE_ATTRIBUTE) {
    xpCost = calcAttributeXPCost(currentLevel, targetLevel);
  } else if (type === XP_TYPE_ABILITY) {
    xpCost = calcAbilityXPCost(currentLevel, targetLevel);
  } else if (type === XP_TYPE_WILLPOWER) {
    xpCost = calcWillpowerXPCost(currentLevel, targetLevel);
  } else if (type === XP_TYPE_BACKGROUND) {
    xpCost = calcBackgroundXPCost(currentLevel, targetLevel);
  } else if (type.startsWith(XP_TYPE_VAMPIRE_DISCIPLINE)) {
    // TODO clan thing
    xpCost = calcVampireDisciplineXPCost(currentLevel, targetLevel, '');
  } else if (type === XP_TYPE_VAMPIRE_VIRTUE) {
    xpCost = calcVampireVirtueXPCost(currentLevel, targetLevel);
  } else if (type === XP_TYPE_VAMPIRE_PATH) {
    // TODO primary/secondary thing
    xpCost = calcVampirePathXPCost(currentLevel, targetLevel, true);
  } else if (type.startsWith(XP_TYPE_WEREWOLF_GIFT)) {
    // TODO outside gift thing
    xpCost = calcWerewolfGiftXPCost(currentLevel, targetLevel, false);
  } else if (type === XP_TYPE_WEREWOLF_RAGE) {
    xpCost = calcWerewolfRageXPCost(currentLevel, targetLevel);
  } else if (type === XP_TYPE_WEREWOLF_GNOSIS) {
    xpCost = calcWerewolfGnosisXPCost(currentLevel, targetLevel);
  } else if (type.startsWith(XP_TYPE_MAGE_SPHERE)) {
    // TODO affinity thing
    xpCost = calcMageSphereXPCost(currentLevel, targetLevel, true);
  } else if (type === XP_TYPE_MAGE_ARETE) {
    xpCost = calcMageAreteXPCost(currentLevel, targetLevel);
  }

  return xpCost;
}

const calcAttributeXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for attributes
  // for WoD this is current level times 4 for the next level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 4;
  }

  return totalCost;
};

const calcAbilityXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for abilities
  // for WoD this is current level times 2 for the next level
  // New ability costs 3 XP

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    if (level === 0) {
      totalCost += 3; // New ability cost
    } else {
      totalCost += level * 2;
    }
  }

  return totalCost;
};

const calcWillpowerXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for willpower
  // for WoD this is the current level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level;
  }

  return totalCost;
};

const calcBackgroundXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for backgrounds
  // for WoD this is current level times 3 for the next level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 3;
  }

  return totalCost;
};

//===============================================================
// Vampire specific XP cost calculations
//===============================================================
const calcVampireDisciplineXPCost = (currentLevel: number, targetLevel: number, clan: string): number => {
  // Example XP cost calculation for vampire disciplines
  // for WoD this is current level times 5 for the next level
  // new discipline costs 10 XP

  // TODO clan disciplines are 5x, others are 7x

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    if (level === 0) {
      totalCost += 10; // New discipline cost
    } else {
      totalCost += level * 5;
    }
  }

  return totalCost;
};

const calcVampireVirtueXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for vampire virtues
  // for WoD this is current level times 2 for the next level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 2;
  }

  return totalCost;
};

// humanity or path
const calcVampirePathXPCost = (currentLevel: number, targetLevel: number, primary: boolean): number => {
  // Example XP cost calculation for vampire paths
  // for WoD this is current level times 2 for the next level
  // I think a new path is 7 XP

  // TODO primary is 2x, secondary is 4x

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    if (level === 0) {
      totalCost += 7; // New path cost
    } else {
      totalCost += level * 2;
    }
  }

  return totalCost;
};

//===============================================================
// Werewolf specific XP cost calculations
//===============================================================
const calcWerewolfGiftXPCost = (currentLevel: number, targetLevel: number, outsideGift: boolean): number => {
  // Example XP cost calculation for werewolf gifts
  // for WoD this is current level times 3 for the next level

  // TODO outside gifts are 5x

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 3;
  }

  return totalCost;
};

const calcWerewolfRageXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for werewolf rage
  // for WoD this is the current level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level;
  }

  return totalCost;
};

const calcWerewolfGnosisXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for werewolf gnosis
  // for WoD this is current level times 2 for the next level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 2;
  }

  return totalCost;
};

//===============================================================
// Mage specific XP cost calculations
//===============================================================
const calcMageSphereXPCost = (currentLevel: number, targetLevel: number, affinity: boolean): number => {
  // Example XP cost calculation for mage spheres
  // for WoD this is current level times 7 for the next level
  // new sphere costs 10 XP

  // TODO affinity spheres are 7x, others are 8x

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    if (level === 0) {
      totalCost += 10; // New sphere cost
    } else if (affinity) {
      totalCost += level * 7;
    } else {
      totalCost += level * 8;
    }
  }

  return totalCost;
};

const calcMageAreteXPCost = (currentLevel: number, targetLevel: number): number => {
  // Example XP cost calculation for mage arete
  // for WoD this is current level times 8 for the next level

  let totalCost = 0;

  for (let level = currentLevel; level < targetLevel; level++) {
    totalCost += level * 8;
  }

  return totalCost;
};
