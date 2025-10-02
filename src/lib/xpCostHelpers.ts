export function getUpgradeXpCost(type: string, currentLevel: number, targetLevel: number): number {
  let xpCost = 0;

  if (type === 'attribute') {
    xpCost = calcAttributeXPCost(currentLevel, targetLevel);
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
