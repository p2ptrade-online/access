export const dashboardMetrics = [
  {
    label: 'FY Revenue',
    value: '$848k',
    delta: '+12.5%',
    trend: 'up',
    tone: 'primary',
    icon: 'revenue'
  },
  {
    label: 'FY Expenses',
    value: '$412k',
    delta: '-3.2%',
    trend: 'down',
    tone: 'success',
    icon: 'expenses'
  },
  {
    label: 'FY Orders',
    value: '26,077',
    delta: '+8.1%',
    trend: 'up',
    tone: 'purple',
    icon: 'orders'
  },
  {
    label: 'FY Customers',
    value: '18,254',
    delta: '-15.3%',
    trend: 'down',
    tone: 'orange',
    icon: 'customers'
  }
];

export const revenueTrend = [
  { label: 'Dec 19', value: 2600 },
  { label: 'Dec 22', value: 3200 },
  { label: 'Dec 25', value: 2800 },
  { label: 'Dec 28', value: 3400 },
  { label: 'Dec 31', value: 3100 },
  { label: 'Jan 2', value: 3600 },
  { label: 'Jan 4', value: 3300 },
  { label: 'Jan 6', value: 4100 },
  { label: 'Jan 8', value: 3800 },
  { label: 'Jan 10', value: 4500 },
  { label: 'Jan 12', value: 4200 },
  { label: 'Jan 14', value: 4600 },
  { label: 'Jan 17', value: 3900 }
];

export const expenseBreakdown = [
  { name: 'Food Supplies', value: 23, amount: '$4,500' },
  { name: 'Beverages', value: 6, amount: '$1,200' },
  { name: 'Labor', value: 44, amount: '$8,500' },
  { name: 'Utilities', value: 4, amount: '$800' },
  { name: 'Rent', value: 18, amount: '$3,500' }
];

export const topSellers = [
  { rank: 1, name: 'Grilled Salmon', sold: 156, revenue: '$4,680', delta: '+30.00/ea' },
  { rank: 2, name: 'Ribeye Steak', sold: 132, revenue: '$5,280', delta: '+40.00/ea' },
  { rank: 3, name: 'Pasta Carbonara', sold: 189, revenue: '$3,402', delta: '+18.00/ea' },
  { rank: 4, name: 'Caesar Salad', sold: 245, revenue: '$2,940', delta: '+12.00/ea' },
  { rank: 5, name: 'Margherita Pizza', sold: 178, revenue: '$2,670', delta: '+15.00/ea' }
];

export const peakHours = [
  { hour: '9a', value: 12 },
  { hour: '10a', value: 8 },
  { hour: '11a', value: 62 },
  { hour: '12p', value: 68 },
  { hour: '1p', value: 52 },
  { hour: '2p', value: 61 },
  { hour: '3p', value: 18 },
  { hour: '4p', value: 12 },
  { hour: '5p', value: 16 },
  { hour: '6p', value: 58 },
  { hour: '7p', value: 66 },
  { hour: '8p', value: 64 },
  { hour: '9p', value: 70 },
  { hour: '10p', value: 9 }
];

export const quickStats = [
  { label: 'Orders Today', value: '127', icon: 'orders' },
  { label: 'Avg Order', value: '$32.50', icon: 'revenue' },
  { label: 'Customers', value: '89', icon: 'customers' },
  { label: 'Peak Hour', value: '7-8 PM', icon: 'peak' }
];

export const salesMetrics = [
  { label: 'Total Revenue', value: '$25,926', delta: '+12.5%', icon: 'revenue' },
  { label: 'Total Orders', value: '638', delta: '+8.3%', icon: 'orders' },
  { label: 'Customers', value: '434', delta: '+15.2%', icon: 'customers' },
  { label: 'Tips Collected', value: '$2,894', delta: '-5.7%', icon: 'tips' }
];

export const salesRevenueTrend = [
  { label: 'Dec 19', value: 2600 },
  { label: 'Dec 22', value: 4800 },
  { label: 'Dec 26', value: 3100 },
  { label: 'Dec 29', value: 3900 },
  { label: 'Jan 2', value: 3400 },
  { label: 'Jan 5', value: 4200 },
  { label: 'Jan 9', value: 2800 },
  { label: 'Jan 12', value: 5200 },
  { label: 'Jan 16', value: 3600 }
];

export const weeklyComparison = [
  { day: 'Mon', value: 8200 },
  { day: 'Tue', value: 9100 },
  { day: 'Wed', value: 9600 },
  { day: 'Thu', value: 7100 },
  { day: 'Fri', value: 7800 },
  { day: 'Sat', value: 13400 },
  { day: 'Sun', value: 10400 }
];

export const salesTransactions = [
  { id: '#1234', items: 'Ribeye Steak, Wine', amount: '$87.50', time: '2 min ago' },
  { id: '#1233', items: 'Pasta Carbonara x2', amount: '$36.00', time: '5 min ago' },
  { id: '#1232', items: 'Grilled Salmon, Salad', amount: '$52.00', time: '12 min ago' },
  { id: '#1231', items: 'Pizza, Drinks x3', amount: '$45.50', time: '18 min ago' }
];

export const expensesSummary = {
  total: '$19,850',
  delta: '-3.2% less than last month'
};

export const expenseMonthlyTrend = [
  { month: 'Jul', value: 16500 },
  { month: 'Aug', value: 17800 },
  { month: 'Sep', value: 16200 },
  { month: 'Oct', value: 19100 },
  { month: 'Nov', value: 18800 },
  { month: 'Dec', value: 20500 }
];

export const expenseTransactions = [
  { name: 'Sysco Foods', category: 'Food Supplies', amount: '$1250', time: 'Today', icon: 'food' },
  { name: 'Electric Company', category: 'Utilities', amount: '$285', time: 'Yesterday', icon: 'bolt' },
  { name: 'Premium Beverages', category: 'Beverages', amount: '$450', time: '2 days ago', icon: 'drink' },
  { name: 'Facebook Ads', category: 'Marketing', amount: '$200', time: '3 days ago', icon: 'ads' },
  { name: 'Kitchen Equipment Co', category: 'Equipment', amount: '$380', time: '4 days ago', icon: 'gear' }
];

export const menuSummary = [
  { label: 'Revenue', value: '$32.2k', icon: 'revenue' },
  { label: 'Avg Margin', value: '72.1%', icon: 'margin' },
  { label: 'Top Seller', value: 'House', icon: 'award' }
];

export const menuCategories = ['All', 'Appetizers', 'Mains', 'Desserts', 'Beverages', 'Sides', 'Specials'];

export const menuItems = [
  {
    name: 'Grilled Salmon',
    category: 'mains',
    sold: 156,
    price: '$32.00',
    margin: '62.5%',
    cost: '$12.00',
    revenue: '$4,992',
    progress: 62
  },
  {
    name: 'Ribeye Steak',
    category: 'mains',
    sold: 132,
    price: '$45.00',
    margin: '60%',
    cost: '$18.00',
    revenue: '$5,940',
    progress: 60
  },
  {
    name: 'Pasta Carbonara',
    category: 'mains',
    sold: 189,
    price: '$22.00',
    margin: '72.7%',
    cost: '$6.00',
    revenue: '$4,158',
    progress: 72
  },
  {
    name: 'Caesar Salad',
    category: 'appetizers',
    sold: 245,
    price: '$14.00',
    margin: '75%',
    cost: '$3.50',
    revenue: '$3,430',
    progress: 75
  },
  {
    name: 'Margherita Pizza',
    category: 'mains',
    sold: 178,
    price: '$18.00',
    margin: '72.2%',
    cost: '$5.00',
    revenue: '$3,204',
    progress: 72
  }
];

export const settingsAccount = {
  name: "John's Bistro",
  email: 'john@bistro.com',
  plan: 'Pro Plan',
  initials: 'JD'
};

export const settingsSections = {
  account: [
    { title: 'Profile', subtitle: 'Manage your account details' },
    { title: 'Restaurant Info', subtitle: 'Business name, address, hours' }
  ],
  preferences: [
    { title: 'Notifications', subtitle: 'Push, email preferences', type: 'toggle', active: true },
    { title: 'Dark Mode', subtitle: 'Switch to dark theme', type: 'toggle', active: false },
    { title: 'Language', subtitle: 'English (US)' }
  ],
  support: [{ title: 'Help Center', subtitle: 'FAQs and tutorials' }]
};
