import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'


const StyledLink = styled(Link)`
  color:grey;
  text-decoration: none;
  font-size: 1.2em;
`;

const address =
<div>
  <p>
    <span>Erenköy Mah. </span>
    <span>Kadıköy 34738 İstanbul / Turkey </span>
  </p>
  <p>
    <span>Tel </span>
    <a href='tel:+905324178479'> +905324178479 </a>
  </p>
  <p>
    Email <a href='mailto:engin.gokmen@icloud.com'> engin.gokmen@icloud.com </a>
  </p>

</div>

export default function Contact () {
  return (
    <div className='wrapper'>
      <div className='left-part'>
        <p>
          <StyledLink to='/'>Cover page</StyledLink>
        </p>
        <p>
          <StyledLink to='/about'>About</StyledLink>
        </p>
      </div>
      <div className='main-part'>
        {address}
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
