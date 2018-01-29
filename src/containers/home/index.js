
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import './home.css'

const View = (props) => (
  <div className="home">
  
  </div>
)

const mapStateToProps = state => ({
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)