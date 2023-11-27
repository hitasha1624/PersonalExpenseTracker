import {dashboard, expenses, logout, transactions, trend} from '../utils/Icons'

export const menuItems = [
  
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "sign out",
        icon: logout,
    }
]