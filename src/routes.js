import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import StationSearch from './components/StationSearch'
import RoadState from './components/RoadState'
import AirQuality from './components/AirQuality'
import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/StationSearch' component={StationSearch} />
      <Route path='/RoadState' component={RoadState} />
      <Route path='/AirQuality' component={AirQuality} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
