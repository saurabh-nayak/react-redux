import React from 'react'
import { connect } from 'react-redux'
import {buyCookie} from '../redux/cookie/cookieActions'
import {useSelector, useDispatch} from 'react-redux'
function CookieContainer(props) {
   const count= useSelector(state=>state.cookie.count)
   const dispatch=useDispatch()
  return (
    <div>
    <h2>Number of cakes - {count} </h2>
<button onClick={()=>dispatch(buyCookie())}>Buy Cookie</button>
  </div>
  )
}

//Without useSelector and useDispatch hooks
 /* const mapStateToProps = state => {
    return {
      count: state.cookie.count
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCookie: () => dispatch(buyCookie()),
    }
  } 
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CookieContainer) */
  
  export default CookieContainer