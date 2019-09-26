import React from 'react'
import indentities from '../ComponentsIdentity'
import { isEmpty, get, isEqual } from 'lodash'


const getListenedData = (reactComponent, sharedData) => {
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




const Configurable = (props) => {
  const { component } = props
  const { sharedData, ...newProps } = props
  if (isEmpty(component)) {
    return null
  }
  const indentifier = get(component, 'component_identifier')
  const built = indentities.find( id => isEqual(id.code, indentifier) )  
  const reactComponent = built
  const CurrentComponent = get(reactComponent, "component")
  const key = get(component, "code")
  const children = get(component, "children")
  const listenedData =  getListenedData(reactComponent, sharedData) 
  const builtProps = { 
    ...newProps,
    ...listenedData,
  }
  return (
    <CurrentComponent key={key} {...builtProps} >
    {
      !isEmpty(children) && children.map( (child) => (
        <Configurable 
        {...builtProps}
        data={child.data}
        component={child} 
        sharedData={sharedData}
        key={child.code}
        /> 
      )) 
    }
    </CurrentComponent>
  )
}


export default Configurable
