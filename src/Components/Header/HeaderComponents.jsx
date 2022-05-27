import React, { Component } from 'react'
import './HeaderComponents.css'

class HeaderComponents extends Component {
  
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div><a href='https://www.google.com/'>Employee List</a></div>
          </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponents