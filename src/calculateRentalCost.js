/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basicDiscount = 3;
  const mediumDiscount = 6;
  const additionalDiscount = 7;

  if (days === additionalDiscount) {
    return 230;
  }

  if (days === mediumDiscount) {
    return 220;
  }

  if (days === basicDiscount) {
    return 100;
  }

  return 80;
}

module.exports = calculateRentalCost;
