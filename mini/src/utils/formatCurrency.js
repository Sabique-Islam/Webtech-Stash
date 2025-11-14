/**
 * Format a number as Indian currency (₹)
 * @param {number} value - The amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  if (value === null || value === undefined) return '₹0';
  
  const num = parseFloat(value);
  if (isNaN(num)) return '₹0';
  
  return `₹${num.toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })}`;
};

/**
 * Parse currency string back to number
 * @param {string} str - Currency string to parse
 * @returns {number} Parsed number
 */
export const parseCurrency = (str) => {
  if (!str) return 0;
  const cleaned = str.replace(/[₹,\s]/g, '');
  return parseFloat(cleaned) || 0;
};
