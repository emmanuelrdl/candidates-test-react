import React, { PureComponent } from 'react'
import { get, isEmpty } from 'lodash'

class Form extends PureComponent {
  
  static getSelectedUsers(selectedUser, selectedCity, users) {
    console.log('selectedUser', selectedUser)
    console.log('selectedCity', selectedCity)
    if (!isEmpty(selectedUser) && !isEmpty(selectedCity)) {
      const validCity = selectedUser.ville.toLowerCase() === selectedCity
      return validCity ? [ selectedUser ] : []
    } else if (!isEmpty(selectedCity)) {
      return users.filter(user => user.ville.toLowerCase() === selectedCity)
    } else {
      return [ selectedUser ]
    }
  }
  
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { selectedUser, addSharedData, selectedCity, users } = this.props
    addSharedData('form', { selectedUsers: Form.getSelectedUsers(selectedUser, selectedCity, users) })
  }
  
  render() {
    const formStyle = { 
      display: 'flex', 
      flexDirection: 'row', 
      width: '40rem', 
      margin: 'auto', 
      height: '2.4rem', 
      marginTop: '2rem',
      justifyContent: 'space-between',
      marginBottom: '10rem',
    }
    return (
      <>
       <div style={formStyle}> 
        { this.props.children }
        <button
          onClick={() => this.handleSubmit() }
          > 
          Run 
        </button>
       </div>
      </>
    )
  }

}

Form.buildProps = (({
  listenedData,
}) => ({
  selectedUser: get(listenedData, 'selectedUser'),
  selectedCity: get(listenedData, 'selectedCity'),
}))



export default Form
