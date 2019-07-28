import React from 'react'
import styled from 'styled-components'
import AboutText from './main-text.js'
import {
    Link
} from 'react-router-dom'


//  text
//  Clock
//  cover-page-button
//  contact-button

const StyledLink = styled(Link)`
  color:grey;
  text-decoration: none;
  font-size: 1.2em;
`;

export default function About (props) {
  return (
    <div className='wrapper'>
      <div className='left-part'>
        <p>
          <StyledLink to='/'>Cover page</StyledLink>
        </p>
        <p>
          <StyledLink to='/contact'>Contact</StyledLink>
        </p>
      </div>
      <div className='main-part'>
        <AboutText />
      </div>
      <Clock/>
    </div>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.startDate = new Date("2017-09-09T12:00:00Z");
    this.state = {
      date: new Date(),
      differenceTime: new Date() - this.startDate
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      differenceTime: new Date()-this.startDate
    });
  }

  render() {
    return (
      <div className='clock'>
        <h3>It is {this.state.date.toLocaleTimeString()},</h3>
        <h4>and I've been around for {this.state.differenceTime.toLocaleString().slice(0,-4)} seconds.</h4>
      </div>
    );
  }
}
