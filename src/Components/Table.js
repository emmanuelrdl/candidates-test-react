import React, { PureComponent } from 'react'
import { get, isEmpty } from 'lodash'

class Table extends PureComponent {

  componentDidMount(){
    console.log('mounting Table')
  }

  componentWillUnmount(){
    console.log('unmounting Table')
  }
  
  
  render() {
    console.log('render Table component', this.props)
    const { selectedUsers } = this.props
    const hasUsers = !isEmpty(selectedUsers)
    const tableStyle = { margin: 'auto', width: '20rem' } 
    return (
      <div style={tableStyle}> 
      {
        hasUsers ? (
          <table>
            <thead>
              {
                Object.keys(selectedUsers[0]).map((key) => {
                  return (<th key={key}> {key} </th>)
                })
              }  
            </thead>
            <tbody>
              {
                selectedUsers.map((user) => {
                  return ( 
                    <tr key={user.id}> 
                      {
                        Object.values(user).map(cell => <td key={cell}> { cell } </td>)
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        ) : (
          <div> no data </div>
        )
      }
      </div>
    )
  }

}

Table.buildProps = (({
  listenedData,
}) => ({
  selectedUsers: get(listenedData, 'selectedUsers'),
}))


export default Table
