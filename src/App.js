import './App.css'
import {BrowserRouter,Route,Switch,NavLink,Redirect} from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Article from './Pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/articles/:id'>
            <Article />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
