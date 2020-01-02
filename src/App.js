import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/Homepage'
// import LabelPage from './pages/LabelPage'
// import ConfigPage from './pages/ConfigPage'

export default function App() {
  return (
<Switch>
  <Route exact path="/" component={HomePage} />
  {/* <Route path="/label" component={LabelPage} />
  <Route path="/config" component={ConfigPage} /> */}
</Switch>
  )
}