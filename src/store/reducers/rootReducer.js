import accountReducer from './accountReducer'
import leaseReducer from './leaseReducer'
import loanReducer from './loanReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  account: accountReducer,
  leasing: leaseReducer,
  loans: loanReducer
});

export default rootReducer;
