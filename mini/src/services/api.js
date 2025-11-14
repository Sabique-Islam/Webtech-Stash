// Mock API service for CampusCash
// In production, replace these with actual API calls

const mockDelay = () => new Promise(resolve => setTimeout(resolve, 300));

// Mock data stores
let expenses = [
  { id: 1, description: 'Lunch at Canteen', amount: 150, category: 'Food', date: new Date().toISOString(), notes: 'Quick lunch between classes', type: 'expense' },
  { id: 2, description: 'Coffee with friends', amount: 80, category: 'Food', date: new Date(Date.now() - 86400000).toISOString(), notes: '', type: 'expense' },
  { id: 3, description: 'Uber Ride', amount: 200, category: 'Transport', date: new Date(Date.now() - 172800000).toISOString(), notes: 'Ride to mall', type: 'expense' },
];

let bills = [
  { 
    id: 1, 
    description: 'Dinner Split', 
    totalAmount: 800, 
    shares: [
      { userId: 'user1', name: 'You', amount: 267 },
      { userId: 'user2', name: 'Priya', amount: 267 },
      { userId: 'user3', name: 'Rahul', amount: 266 }
    ],
    settled: false, 
    date: new Date().toISOString() 
  },
  { 
    id: 2, 
    description: 'Movie Tickets', 
    totalAmount: 600, 
    shares: [
      { userId: 'user1', name: 'You', amount: 300 },
      { userId: 'user2', name: 'Rahul', amount: 300 }
    ],
    settled: false, 
    date: new Date(Date.now() - 86400000).toISOString() 
  },
];

let savingsGoals = [
  { id: 1, name: 'New Laptop', targetAmount: 50000, currentAmount: 15000, targetDate: '2025-12-31' },
  { id: 2, name: 'Weekend Trip', targetAmount: 8000, currentAmount: 5000, targetDate: '2025-11-30' },
  { id: 3, name: 'Emergency Fund', targetAmount: 20000, currentAmount: 8000, targetDate: '2026-06-30' },
];

let notifications = [
  { id: 1, type: 'bill', title: 'Movie Tickets payment due', message: 'You owe ₹300 to Rahul', date: new Date().toISOString(), read: false },
  { id: 2, type: 'savings', title: 'Laptop fund progress', message: '30% of goal reached!', date: new Date(Date.now() - 86400000).toISOString(), read: false },
  { id: 3, type: 'expense', title: 'Monthly budget alert', message: 'You have used 75% of monthly budget', date: new Date(Date.now() - 172800000).toISOString(), read: true },
];

let transactions = [];

// Initialize transactions from expenses and bills
const initTransactions = () => {
  transactions = [
    ...expenses.map(e => ({ ...e, type: 'expense' })),
    ...bills.map(b => ({ 
      id: `bill-${b.id}`,
      description: b.description, 
      type: 'bill', 
      amount: b.totalAmount,
      date: b.date,
      category: 'Bills'
    }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date));
};

initTransactions();

// Expenses API
export const getExpenses = async () => {
  await mockDelay();
  return { success: true, data: expenses };
};

export const addExpense = async (expense) => {
  await mockDelay();
  const newExpense = {
    id: expenses.length + 1,
    ...expense,
    date: new Date().toISOString(),
    type: 'expense'
  };
  expenses.push(newExpense);
  initTransactions();
  return { success: true, data: newExpense };
};

export const updateExpense = async (id, updates) => {
  await mockDelay();
  const index = expenses.findIndex(e => e.id === id);
  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updates };
    initTransactions();
    return { success: true, data: expenses[index] };
  }
  return { success: false, error: 'Expense not found' };
};

export const deleteExpense = async (id) => {
  await mockDelay();
  expenses = expenses.filter(e => e.id !== id);
  initTransactions();
  return { success: true };
};

// Bills API
export const getBills = async () => {
  await mockDelay();
  return { success: true, data: bills };
};

export const addBill = async (bill) => {
  await mockDelay();
  const newBill = {
    id: bills.length + 1,
    ...bill,
    settled: false,
    date: new Date().toISOString()
  };
  bills.push(newBill);
  initTransactions();
  return { success: true, data: newBill };
};

export const settleBill = async (id) => {
  await mockDelay();
  const index = bills.findIndex(b => b.id === id);
  if (index !== -1) {
    bills[index].settled = true;
    return { success: true, data: bills[index] };
  }
  return { success: false, error: 'Bill not found' };
};

export const deleteBill = async (id) => {
  await mockDelay();
  bills = bills.filter(b => b.id !== id);
  initTransactions();
  return { success: true };
};

// Savings API
export const getSavingsGoals = async () => {
  await mockDelay();
  return { success: true, data: savingsGoals };
};

export const addSavingsGoal = async (goal) => {
  await mockDelay();
  const newGoal = {
    id: savingsGoals.length + 1,
    ...goal,
    currentAmount: goal.currentAmount || 0
  };
  savingsGoals.push(newGoal);
  return { success: true, data: newGoal };
};

export const addDeposit = async (goalId, amount) => {
  await mockDelay();
  const index = savingsGoals.findIndex(g => g.id === goalId);
  if (index !== -1) {
    savingsGoals[index].currentAmount += amount;
    return { success: true, data: savingsGoals[index] };
  }
  return { success: false, error: 'Goal not found' };
};

// Transactions API
export const getTransactions = async (filters = {}) => {
  await mockDelay();
  let filtered = [...transactions];
  
  if (filters.type && filters.type !== 'all') {
    filtered = filtered.filter(t => t.type === filters.type);
  }
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(t => t.category === filters.category);
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(t => 
      t.description?.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters.startDate) {
    filtered = filtered.filter(t => new Date(t.date) >= new Date(filters.startDate));
  }
  
  if (filters.endDate) {
    filtered = filtered.filter(t => new Date(t.date) <= new Date(filters.endDate));
  }
  
  return { success: true, data: filtered };
};

// User API
export const getUser = async () => {
  await mockDelay();
  return {
    success: true,
    data: {
      name: 'Student Name',
      email: 'student@college.edu',
      phone: '+91 9876543210',
      year: '3rd Year',
      college: 'XYZ Engineering College',
      avatar: null
    }
  };
};

export const updateUser = async (updates) => {
  await mockDelay();
  return { success: true, data: updates };
};

// Notifications API
export const getNotifications = async () => {
  await mockDelay();
  return {
    success: true,
    data: notifications
  };
};

export const markNotificationRead = async (id) => {
  await mockDelay();
  const index = notifications.findIndex(n => n.id === id);
  if (index !== -1) {
    notifications[index].read = true;
  }
  return { success: true };
};
