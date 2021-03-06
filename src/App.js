import './App.css';
import NavBar from './Components/NavBar'
import { Switch, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
