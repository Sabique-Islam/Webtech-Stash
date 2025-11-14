# Components Directory

This directory contains all reusable React components for the CampusCash application.

## Component Organization

Components are organized in two ways:
1. **By Category** (in subdirectories like `charts/`, `forms/`, etc.)
2. **By Name** (individual folders like `ChartContainer/`, `ExpenseForm/`, etc.)

Both structures are available for flexibility.

## Available Components

### Layout Components
- **MainLayout** (`layout/MainLayout.jsx`) - Main application layout with TopNav and SideNav

### Navigation Components
- **TopNav** (`TopNav/TopNav.jsx`) - Top navigation bar with logo, notifications, and profile
- **SideNav** (`SideNav/SideNav.jsx`) - Sidebar navigation menu

### Display Components
- **StatCard** (`StatCard/StatCard.jsx`) - Statistics display card with icon
- **ChartContainer** (`ChartContainer/ChartContainer.jsx`) - Wrapper for charts (pie/line)
- **SavingsProgress** (`SavingsProgress/SavingsProgress.jsx`) - Savings goal progress bar

### Form Components
- **ExpenseForm** (`ExpenseForm/ExpenseForm.jsx`) - Modal form for adding/editing expenses

### Modal Components
- **SplitBillModal** (`SplitBillModal/SplitBillModal.jsx`) - Modal for splitting bills
- **SavingsGoalModal** (`modals/SavingsGoalModal.jsx`) - Modal for creating savings goals

### List Components
- **ExpenseList** (`lists/ExpenseList.jsx`) - List view of expenses
- **TransactionList** (`TransactionList/TransactionList.jsx`) - List view of transactions

### UI Components
- **NotificationBell** (`NotificationBell/NotificationBell.jsx`) - Notification dropdown
- **ProfileMenu** (`ProfileMenu/ProfileMenu.jsx`) - User profile dropdown menu

## Import Patterns

### Option 1: Import from component folder
\`\`\`jsx
import TopNav from '@/components/TopNav';
import StatCard from '@/components/StatCard';
\`\`\`

### Option 2: Import from category folder
\`\`\`jsx
import TopNav from '@/components/navigation/TopNav';
import StatCard from '@/components/common/StatCard';
\`\`\`

### Option 3: Batch import from index
\`\`\`jsx
import { TopNav, SideNav, StatCard, ChartContainer } from '@/components';
\`\`\`

## Component Structure

Each component follows this structure:
\`\`\`
ComponentName/
├── ComponentName.jsx    # Component logic
├── ComponentName.css    # Component styles
└── index.js            # Barrel export
\`\`\`

## Styling Guidelines

1. Every component has its own CSS file
2. Use CSS variables from `index.css` for consistency
3. Follow BEM naming convention for CSS classes
4. Material-UI components styled with \`sx\` prop

## Component Props

### StatCard
- \`title\`: Card title (string)
- \`value\`: Main value to display (string/number)
- \`icon\`: React icon component
- \`color\`: Color variant ('primary'|'success'|'warning'|'danger')
- \`subtitle\`: Additional info (string, optional)

### ChartContainer
- \`title\`: Chart title (string)
- \`type\`: Chart type ('pie'|'line')
- \`data\`: Chart data array

### TransactionList
- \`transactions\`: Array of transaction objects
- \`limit\`: Maximum items to display (number, optional)

### NotificationBell
- \`notifications\`: Array of notification objects

### SavingsProgress
- \`goal\`: Savings goal object with currentAmount, targetAmount, etc.

### ExpenseForm
- \`open\`: Modal open state (boolean)
- \`onClose\`: Close handler function
- \`expense\`: Expense object for editing (optional)

### SplitBillModal
- \`open\`: Modal open state (boolean)
- \`onClose\`: Close handler function

## Adding New Components

1. Create component folder: \`components/NewComponent/\`
2. Create \`NewComponent.jsx\` and \`NewComponent.css\`
3. Create \`index.js\` with: \`export { default } from './NewComponent.jsx';\`
4. Add to \`components/index.js\` for batch exports
5. Document props and usage in this README
