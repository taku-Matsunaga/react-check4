import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Top from '../components/pages/Top'
import Users from '../components/pages/Users'
import Defaultlayout from '../components/templates/DefaultLayout'
import Headeronly from '../components/templates/HeaderOnly'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Defaultlayout>
            <Top />
          </Defaultlayout>
        </Route>
        <Route exact path="/users">
          <Headeronly>
            <Users />
          </Headeronly>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
