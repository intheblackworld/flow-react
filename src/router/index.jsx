import * as React from 'react'
import {
  BrowserRouter, Switch, NavLink as Link, Route,
} from 'react-router-dom'
import loadable from 'react-loadable'

import './index.scss'

// import Home from 'containers/Home'
// import About from 'containers/About'
// import Contact from 'containers/Contact'

const LoadingComponent = () => <h3>Please Wait ...</h3>

const Home = loadable({
  loader: () => import('containers/Home/Home'),
  loading: LoadingComponent,
})

const About = loadable({
  loader: () => import('containers/About/About'),
  loading: LoadingComponent,
})

const Contact = loadable({
  loader: () => import('containers/Contact/Contact'),
  loading: LoadingComponent,
})

const Demo = loadable({
  loader: () => import('containers/Demo/Demo'),
  loading: LoadingComponent,
})

class Router extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="menu">
            <Link exact to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/about" activeClassName="active">
              About
            </Link>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
            <Link to="/demo" activeClassName="active">
              Demo
            </Link>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/demo" component={Demo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
