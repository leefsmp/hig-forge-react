import Viewer from '../../components/Viewer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import './viewer.css'

const Autodesk = window.Autodesk

class View extends React.Component {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor(props) {

    super (props)

    this.onModelBeginLoad = this.onModelBeginLoad.bind(this)
    this.onViewerCreated = this.onViewerCreated.bind(this)

    this.state = {
      envInitialized: false
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  async componentDidMount () {

    try {

      await this.initialize({
        useConsolidation: true,
        env: 'Local'
      })

      this.setState({
        envInitialized: true
      })

    } catch (ex) {

      return this.props.onError(ex)
    }
  }

  /////////////////////////////////////////////////////////
  // Initialize viewer environment
  //
  /////////////////////////////////////////////////////////
  initialize (options) {

    return new Promise((resolve, reject) => {

      Autodesk.Viewing.Initializer (options, () => {

        resolve ()

      }, (error) => {

        reject (error)
      })
    })
  }

  /////////////////////////////////////////////////////////
  // Load a document from URN
  //
  /////////////////////////////////////////////////////////
  loadDocument (urn) {

    return new Promise((resolve, reject) => {

      const paramUrn = !urn.startsWith('urn:')
        ? 'urn:' + urn : urn

      Autodesk.Viewing.Document.load(paramUrn, (doc) => {

        resolve (doc)

      }, (error) => {

        reject (error)
      })
    })
  }

  /////////////////////////////////////////////////////////
  // Return viewable path: first 3d or 2d item by default
  //
  /////////////////////////////////////////////////////////
  getViewablePath (doc, pathIdx = 0, query = [
      { type: 'geometry', role: '3d' },
      { type: 'geometry', role: '2d' }
    ]) {

    const toArray = (obj) => {

      return obj ? (Array.isArray(obj) ? obj : [obj]) : []
    }

    const rootItem = doc.getRootItem()

    let items = []

    toArray(query).forEach((queryItem) => {

      items = [ ...items,
        ...Autodesk.Viewing.Document.getSubItemsWithProperties(
          rootItem, queryItem, true) ]
    })

    if (!items.length || pathIdx > items.length-1) {

      return null
    }

    return doc.getViewablePath(items[pathIdx])
  }

  /////////////////////////////////////////////////////////
  // 
  //
  /////////////////////////////////////////////////////////
  onViewerCreated (viewer) {

    const {search} = this.props.location

    const params = new URLSearchParams(search)

    const path = params.get('path')

    viewer.start()

    const loadOptions = Object.assign({})

    viewer.loadModel(path, 
      loadOptions, 
      this.onModelBeginLoad)
  }

  /////////////////////////////////////////////////////////
  // 
  //
  /////////////////////////////////////////////////////////
  onModelBeginLoad (model) {

  }

  /////////////////////////////////////////////////////////
  // Return viewable path: first 3d or 2d item by default
  //
  /////////////////////////////////////////////////////////
  render () {

    return (
      <div className="viewer">
        {
          this.state.envInitialized &&
          <Viewer onViewerCreated={this.onViewerCreated}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)