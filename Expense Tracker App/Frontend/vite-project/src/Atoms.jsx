import {atom} from 'recoil'
const expenseNameState = atom({
    key: 'nameState',
    default: ''
})
const expenseAmountState = atom({
    key: 'amountState',
    default: 0
})

const incomeNameState = atom({
    key: 'nameState',
    default: ''
})

const incomeAmountState = atom({
    key: 'amountState',
    default: 0
})

const allExpensesState = atom({
    key: 'allExpensesState',
    default: []
})
const allIncomeState = atom({
    key: 'allIncomeState',
    default: []
})

export {expenseNameState, expenseAmountState, incomeAmountState, incomeNameState, allExpensesState, allIncomeState}