/**
 * Calculate bill split among participants
 * @param {number} total - Total bill amount
 * @param {Array} participants - Array of participant objects with {name, share}
 * @param {string} method - 'equal' or 'custom'
 * @returns {Array} Array of {name, amount} for each participant
 */
export const splitBillCalculator = (total, participants, method = 'equal') => {
  if (!participants || participants.length === 0) return [];
  
  if (method === 'equal') {
    const amountPerPerson = total / participants.length;
    return participants.map(p => ({
      name: p.name || p,
      amount: amountPerPerson
    }));
  }
  
  // Custom split based on shares
  const totalShares = participants.reduce((sum, p) => sum + (p.share || 1), 0);
  return participants.map(p => ({
    name: p.name,
    amount: (total * (p.share || 1)) / totalShares
  }));
};

/**
 * Calculate what each person owes after considering who paid
 * @param {number} total - Total bill amount
 * @param {Array} participants - Array of participants
 * @param {string} payer - Name of person who paid
 * @param {string} method - Split method
 * @returns {Array} Array of debts {from, to, amount}
 */
export const calculateDebts = (total, participants, payer, method = 'equal') => {
  const splits = splitBillCalculator(total, participants, method);
  const debts = [];
  
  splits.forEach(split => {
    if (split.name !== payer && split.amount > 0) {
      debts.push({
        from: split.name,
        to: payer,
        amount: split.amount
      });
    }
  });
  
  return debts;
};
