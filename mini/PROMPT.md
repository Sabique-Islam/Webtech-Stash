You are an expert frontend engineer and UI/UX architect.
Build a **complete, production-ready React project skeleton** matching the exact specs below.
Do **not** skip anything.
Do **not** use Tailwind; every component gets its own `.css` file.

---

# **PROJECT: “CampusCash”**

A college-student-focused personal finance dashboard with features for:

* Expense tracking
* Bill splitting
* Savings & goals
* Insights/analytics
* Transactions history
* Notifications
* Profile/settings

The UI theme:
**Clean, modern, flat, rounded corners, light background, deep-blue primary (#1A3D7C), teal accents (#47B3A3), yellow CTA (#F8C53A)**.
Typography: **Inter** or **Poppins**.

---

# **GLOBAL TECH RULES**

* React (functional components, hooks)
* **Every `.jsx` must have a `.css` next to it.**
* No Tailwind. No styled-components. No inline global styling.
* Use **Material UI v5** ONLY for low-level elements: `<Button>`, `<TextField>`, `<IconButton>`, icons, etc.
* Layout, spacing, card structure = **your own CSS**.
* Strong modularity. Small components.
* Routing via React Router.
* Charts via Recharts or Chart.js.
* Create mock API layer & React Context global stores.

---

# **REQUIRED FOLDER STRUCTURE**

```
package.json
public/index.html

src/
  index.jsx
  index.css
  App.jsx
  App.css

  router/
    AppRouter.jsx
    AppRouter.css

  pages/
    Dashboard/
      Dashboard.jsx
      Dashboard.css

    Expenses/
      Expenses.jsx
      Expenses.css

    Bills/
      Bills.jsx
      Bills.css

    Savings/
      Savings.jsx
      Savings.css

    Transactions/
      Transactions.jsx
      Transactions.css

    Insights/
      Insights.jsx
      Insights.css

    Notifications/
      Notifications.jsx
      Notifications.css

    Profile/
      Profile.jsx
      Profile.css

  components/
    TopNav/
      TopNav.jsx
      TopNav.css
    
    SideNav/
      SideNav.jsx
      SideNav.css

    StatCard/
      StatCard.jsx
      StatCard.css

    ExpenseForm/
      ExpenseForm.jsx
      ExpenseForm.css

    SplitBillModal/
      SplitBillModal.jsx
      SplitBillModal.css

    TransactionList/
      TransactionList.jsx
      TransactionList.css

    SavingsProgress/
      SavingsProgress.jsx
      SavingsProgress.css

    ChartContainer/
      ChartContainer.jsx
      ChartContainer.css

    NotificationBell/
      NotificationBell.jsx
      NotificationBell.css

    ProfileMenu/
      ProfileMenu.jsx
      ProfileMenu.css

  services/
    api.js

  context/
    AuthContext.jsx
    TransactionsContext.jsx
    BillsContext.jsx

  utils/
    formatCurrency.js
    splitBillCalculator.js
    dateHelpers.js

README.md
```

---

# **DESCRIBE THE UI EXACTLY LIKE THIS**

Claude must treat these descriptions as the wireframe truth.

---

## **1. Top Navigation Bar**

* Full-width horizontal bar at top
* Left: Logo “CampusCash”
* Right: Notification bell, profile avatar (opens ProfileMenu)
* Background: white
* Slight shadow
* Height ~65px

---

## **2. Side Navigation**

Vertical left sidebar with icons + labels:

* Dashboard
* Expenses
* Bills
* Savings
* Transactions
* Insights
* Notifications
* Profile

Fixed width ~220px.

---

# **PAGE DETAILS (THIS REPLACES THE PDF)**

---

## **Dashboard Page**

Sections arranged **two-column grid**:

**A. Stat cards row (3–4 cards):**

* Total Spent (₹)
* You Owe (bill splits)
* Savings Progress (%)
* Monthly Budget Used (%)

Each card: rounded rectangle, icon top-left, number large & bold.

**B. Quick Actions**

* Add Expense → opens ExpenseForm modal
* Create Split Bill → opens SplitBillModal

**C. Charts**

* Monthly spending bar chart
* Category breakdown pie chart

---

## **Expenses Page**

* Filter row: Category dropdown, Member dropdown, Date range
* “Add Expense” button
* List of expenses grouped by date
  Each expense row:
* Title
* Amount
* Category
* Payer avatar
* Edit icon, Delete icon

---

## **Bills Page (Bill Splitting)**

Show active bills:

Each bill card:

* Bill title
* Total
* Participants
* “Settle”, “View Details”

Button “Split a New Bill” → opens SplitBillModal:
Inside modal:

* Bill Title
* Total Amount
* Participants (multi-select)
* Split Method: Equal | Custom Shares
* Computed owed amounts (use splitBillCalculator.js)

---

## **Savings Page**

Show savings goals grid.

Each goal card:

* Goal name
* Target ₹
* Current saved ₹
* Progress bar
* “Add Deposit” button

Also show monthly savings line chart.

---

## **Transactions Page**

* Search bar
* Filters: category, date
* Paginated transaction list
  Each row:
* Icon
* Title
* Amount
* Date
* Type (expense or split settlement)

Include “Export CSV” (mock).

---

## **Insights Page**

Two charts minimum:

* Spending by category pie
* Month-over-month bar

Also show:

* Largest category this month
* Most frequent expense type
* Total number of transactions

---

## **Notifications Page**

Simple list:

* Due bills
* Completed splits
* Goal progress alerts
* Expense reminders

Each item:

* Icon + title + timestamp
* Click to open related page

---

## **Profile Page**

* User info fields (name, email, year, college)
* Toggle for dark/light theme
* Notification toggles
* Logout button

Card layout, centered on page.

---

# **COMPONENT DEFINITIONS (EXACT)**

Claude must implement:

### **StatCard**

* icon, label, value
* small footer text optional
* simple rectangular card

### **ExpenseForm**

Modal with fields:

* Title
* Amount
* Category
* Payer
* Participants
* Date

### **SplitBillModal**

Handles:

* total
* participants
* equal/custom split
* outputs “Alice owes X”, “Bob owes Y”

### **TransactionList**

Reusable table-like list.

### **SavingsProgress**

Goal name + progress bar.

### **ChartContainer**

Wrapper with title + chart component.

### **NotificationBell**

Icon button → dropdown list.

### **ProfileMenu**

Dropdown with Profile, Settings, Logout.

---

# **LOGIC LAYER REQUIREMENTS**

### **Mock API (`services/api.js`)**

Provide functions like:

```
getExpenses()
addExpense()
getBills()
addBill()
getTransactions()
```

All return Promises with placeholder JSON.

### **React Contexts**

* AuthContext → user + login/logout
* TransactionsContext → expenses & transactions
* BillsContext → splits

---

# **UTILS**

```
formatCurrency(value)
splitBillCalculator(total, participants)
dateHelpers.parseDate()
```

---

# **WHAT TO RETURN**

Claude must output:

1. **Full project folder tree**
2. **Full code for all MAJOR files**:

   * package.json
   * index.jsx + index.css
   * App.jsx + App.css
   * AppRouter.jsx + AppRouter.css
   * All page.jsx + page.css
   * All components (jsx + css)
   * All context files
   * All utils
   * api.js
   * README.md
3. Developer guide:

   * Styling conventions
   * Component structure
   * How to integrate backend later
4. Checklist of TODOs

---