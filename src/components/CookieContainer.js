import React from 'react'
import { connect } from 'react-redux'
import {buyCookie} from '../redux/cookie/cookieActions'

function CookieContainer(props) {
  return (
    <div>
    <h2>Number of cakes - {props.count} </h2>
    <button onClick={props.buyCookie}>Buy COokie</button>
  </div>
  )
}
const mapStateToProps = state => {
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
  )(CookieContainer)