import React, { PureComponent } from 'react'
import Configurable from './Configurable'
import { isEmpty } from 'lodash'

class PageBuilder extends PureComponent {

  static getListenedData(reactComponent, sharedData) {
    var componentListenedData = {}
    Object.keys(sharedData).forEach((key) => {
      if (reactComponent.listeners.includes(key)) { 
        componentListenedData = { 
          ...sharedData[key], 
          ...componentListenedData 
        }
      }
    })
    return componentListenedData 
  }

  componentWillMount() {
    this.props.fetchComponents()
    this.props.fetchUsers()
  }


  render() {
    const { components, addSharedData, users, sharedData } = this.props
    const page = isEmpty(components) ? [] : components[0]


    return (
      <Configurable
      users={users}
      component={page} 
      addSharedData={addSharedData}
      sharedData={sharedData} 
      />
    )
  }

}

export default PageBuilder
