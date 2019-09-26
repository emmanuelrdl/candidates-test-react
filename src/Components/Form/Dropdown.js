import React, { PureComponent } from 'react'
import { isEmpty } from 'lodash'

class Dropdown extends PureComponent {
  state = {
    selectedCity: '',
  }
  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const selectedCity = nextProps.selectedCity
    if (!isEmpty(selectedCity)) {
      return {
        selectedCity: selectedCity
      }
    }
    return null
  }

  handleChange(e) {   
    const { addSharedData } = this.props
    const city = e.target.value
    this.setState({ selectedCity: city })
    addSharedData('dropdown', { selectedCity: city })
  }

  render() {
    const { data } = this.props
    const { selectedCity } = this.state
    return (
      <select value={selectedCity} onChange={this.handleChange} style={{  height: '2rem' }}>
        <option value>--Please choose an option--</option>
        {
          data.map((item) => (
            <option
              key={item.id}
              value={item.id}>
              {item.label}
            </option>
          ))
        }
      </select>
    )
  }

}

Dropdown.buildProps = (({
  listenedData,
}) => ({
  selectedCity: listenedData.selectedCity,
}))



export default Dropdown
