import React from 'react'
import { connect } from 'react-redux'
import { buyCake , refundCake} from '../redux/cake/cakeActions'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button className='btn btn-primary' onClick={props.refundCake}>Refund Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    refundCake:()=>dispatch(refundCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)