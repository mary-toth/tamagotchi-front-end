import React from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { ListOfPetsPage } from './ListOfPetsPage'

export function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ListOfPetsPage />
        </Route>
        <Route exact path="/Pets/:id">
          <ListOfPetsPage />
        </Route>
        <Route exact path="/2">
          pg 2{' '}
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}