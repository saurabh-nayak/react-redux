import { BUY_CAKE, REFUND_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const refundCake=(number=1)=>{
    return {
        type:REFUND_CAKE,
        payloca:number
    }
}