import Header from "./components/layouts/Header"
import Nav from "./components/layouts/Nav"
import Footer from "./components/layouts/Footer"
import "./styles/components/layouts/Header.css"
import "./styles/components/layouts/Nav.css"
import "./styles/components/layouts/Footer.css"
import "./styles/components/pages/HomePage.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/"exact component={HomePage}/>
      </Switch>
      <Footer/>
      </Router>

    </div>

  );
}

export default App;
