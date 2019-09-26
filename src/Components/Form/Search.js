import React, { PureComponent } from 'react'
import { isEmpty  } from 'lodash'

class Search extends PureComponent {

  static getDerivedStateFromProps(nextProps, prevState) {
    const selectedUser = nextProps.selectedUser
    if (!isEmpty(selectedUser)) {
      return {
        selectedUser: selectedUser
      }
    }
    return null
  }

  static getFullName(user) {
   if (isEmpty(user)) {
    return ''
   }
   return `${user.nom} - ${user.prenom}`.toLowerCase()
  }

  state = {
    filteredUsers: [],
    selectedUser: '',
  }

  constructor(props) {
    super()
    this.filterUsers = this.filterUsers.bind(this)
    this.addSelectedUser = this.addSelectedUser.bind(this)
    this.clearSelectedUser = this.clearSelectedUser.bind(this)
  }

  filterUsers(e) {
    const { users } = this.props
    const filter = e.target.value.toLowerCase() 
    if (isEmpty(filter)) {
      this.setState(() => ({ filteredUsers: [] }))
      return null
    }
    const filteredUsers = users.filter( (user) => { 
      const fullName = Search.getFullName(user) 
      return (fullName.includes(filter))
    })
    this.setState(() => ({ filteredUsers: filteredUsers }))
  }

  addSelectedUser(id) {
    const { users, addSharedData } = this.props
    const selectedUser = users.find(u => u.id === id)
    addSharedData('search', { selectedUser: selectedUser })
    this.setState(() => ({ selectedUser: selectedUser }))
  }

  clearSelectedUser() {
    const { addSharedData } = this.props
    const { selectedUser } = this.state
    if (selectedUser) {   
      this.setState(() => ({ selectedUser: null }))
      addSharedData('search', { selectedUser: null })
    }
  }
  
  render() {
    const { filteredUsers, selectedUser } = this.state
    return (
      <div>
       <input 
        onChange={this.filterUsers}
        onClick={this.clearSelectedUser}
        style={{ height: '2rem' }} 
        value={Search.getFullName(selectedUser)}
        size='50' >
      </input>
      {
        !isEmpty(filteredUsers) && !selectedUser &&
        <ul style={{ border: 'solid 1px' }}> 
         {
            filteredUsers.map((user) => {
              const fullName = Search.getFullName(user)   
              return (
                <div 
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.addSelectedUser(user.id)} 
                  key={user.id}> 
                  {fullName} 
                </div>
              )
            })
          }
        </ul>

      }

      </div>
    )
  }
}

Search.buildProps = (({
  listenedData,
}) => ({
  selectedUser: listenedData.selectedUser,
}))

export default Search
