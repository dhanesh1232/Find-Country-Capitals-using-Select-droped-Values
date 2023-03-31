import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {isActiveValue: countryAndCapitalsList[0].id}

  onChangeOptionValues = event => {
    this.setState({isActiveValue: event.target.value})
  }

  getCountry = () => {
    const {isActiveValue} = this.state
    const activeValue = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveValue,
    )
    return activeValue.country
  }

  render() {
    const {isActiveValue} = this.state
    const country = this.getCountry(isActiveValue)
    return (
      <div className="container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="drop-box">
            <select
              className="select-drop"
              onChange={this.onChangeOptionValues}
              value={isActiveValue}
            >
              {countryAndCapitalsList.map(each => (
                <option className="values" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
