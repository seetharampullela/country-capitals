import {Component} from 'react'

import Country from '../Country'

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
  state = {activeId: countryAndCapitalsList[0].id}

  updateActiveId = event => {
    this.setState({activeId: event.target.value})
  }

  getFilteredData = () => {
    const {activeId} = this.state
    const filteredData = countryAndCapitalsList.filter(
      each => each.id === activeId,
    )
    return filteredData
  }

  render() {
    const filteredData = this.getFilteredData()
    const {activeId} = this.state

    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1>Countries And Capitals </h1>
          <div className="question">
            <form>
              <select value={activeId} onChange={this.updateActiveId}>
                {countryAndCapitalsList.map(eachCountry => (
                  <Country country={eachCountry} key={eachCountry.id} />
                ))}
              </select>
            </form>
            <b> is capital of which country?</b>
          </div>
          <p className="country-name">
            {filteredData.map(each => each.country)}
          </p>
        </div>
      </div>
    )
  }
}

export default Capitals
