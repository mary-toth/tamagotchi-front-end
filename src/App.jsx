import axios from 'axios'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { HeaderFooter } from './components/HeaderFooter'
import { ListOfPetsPage } from './ListOfPetsPage'
import { PetInfoPage } from './PetInfoPage'

export function App() {
  return (
    <>
      <HeaderFooter></HeaderFooter>
      <Switch>
        <Route exact path="/">
          <ListOfPetsPage />
        </Route>
        <Route exact path="/Pets/:id">
          <PetInfoPage />
        </Route>
        <Route exact path="/2">
          pg 2{' '}
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
