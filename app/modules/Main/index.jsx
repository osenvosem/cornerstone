import React from 'react'
import { Link, Route, Switch, Redirect, Prompt, withRouter } from 'react-router-dom'
import Menu from './components/Menu/'
import Home from '../Home'

const menuItems = [
  { path: '/', label: 'Home'},
  { path: '/one', label: 'One' },
  { path: '/two', label: 'Two' },
  { path: '/missed', label: 'Missed' }
]

export default function Main() {
  const cond = false
  return (
    <div>
      <header>
        <Menu items={menuItems} />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route render={() => <h2>404 Not Found</h2>}/>
        </Switch>
      </main>
    </div>
  )
}

const One = () => (
  <h2>One here</h2>
) 

const Two = () => (
  <h2>Two here </h2>
)


