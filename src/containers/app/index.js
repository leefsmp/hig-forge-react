import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { GlobalNav } from 'hig-react'
import 'hig-react/lib/hig-react.css'
import PropTypes from 'prop-types'
import Controls from '../controls'
import Viewer from '../viewer'
import About from '../about'
import Home from '../home'
import React from 'react'
import menu from './menu'
import './app.css'
import {
  changeModule
} from '../../reducers/app'

const App = (props) => {

  const globalNavProps = {
    activeModuleId: props.activeModuleId,
    onModuleChange: changeModule,
    submodules: menu.submodules,
    sideNavOpenByDefault: true,
    modules: menu.modules,
    showSubNav: true,
    sideNav: {
      superHeaderLabel: 'Autodesk HIG',
      headerLabel: 'Forge React Boiler',
    }
  }

  return ( 
    <div className="app">
      <GlobalNav {...globalNavProps}>
        <main>
          <Route exact path="/controls" component={Controls}/>
          <Route exact path="/viewer" component={Viewer}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
        </main>
      </GlobalNav>
    </div>
  )
}

App.propTypes = {
  activeModuleId: PropTypes.string.isRequired,
  changeModule: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeModule
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)