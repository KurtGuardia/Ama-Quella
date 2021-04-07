const initState = {
  incomesBills: [],
  expensesBills: [],
};

export const billsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCOME_BILL_ADDED':
      return {
        ...state,
        incomesBills: [...state.incomesBills, action.payload],
      };
    case 'EXPENSE_BILL_ADDED':
      return {
        ...state,
        expensesBills: [...state.expensesBills, action.payload],
      };
    default:
      return state;
  }
};
