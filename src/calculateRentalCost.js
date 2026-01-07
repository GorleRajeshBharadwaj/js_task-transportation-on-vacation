/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_COST = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
function calculateRentalCost(days) {
  // write code here
  const cost = days * DAILY_COST;
  if (days >= 7) {
    return cost - LONG_TERM_DISCOUNT;
  } 
  
  if (days >= 3) {
    return cost - SHORT_TERM_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
