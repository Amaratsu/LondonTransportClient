import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>
          <li><NavLink to='/StationSearch'>Station search</NavLink></li>
          <li><NavLink to='/RoadState'>Road state</NavLink></li>
          <li><NavLink to='/AirQuality'>Air Quality</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
