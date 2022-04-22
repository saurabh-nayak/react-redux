import { BUY_CAKE, REFUND_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    case REFUND_CAKE: return{
        ...state,
        numOfCakes:state.numOfCakes+1
    }

    default: return state
  }
}

export default cakeReducer