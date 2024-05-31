import {atom} from 'recoil'
const expenseNameState = atom({
    key: 'nameState',
    default: ''
})
const expenseAmountState = atom({
    key: 'amountState',
    default: 0
})

export {expenseNameState, expenseAmountState}