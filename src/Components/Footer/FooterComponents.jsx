import React, { Component } from 'react'
import './FooterComponent.css'
export class FooterComponents extends Component {
    state = {
        date: ""
      };
    
      componentDidMount() {
        this.getDate();
      }
    
      getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
      };
  render() {
    const {date} = this.state;
    return (
      <div>
          <footer className='footer'>
              <span className='text-muted'>All Right Reserved <br/> {date}</span>
          </footer>
      </div>
    )
  }
}

export default FooterComponents