import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {Container} from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header';
import BottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
             <Route path="/" exact component={Trending}/>
             <Route path="/movies" component={Movies}/>
             <Route path="/series" component={Series}/>
             <Route path="/search" component={Search}/>
          </Switch>
        </Container>
      </div>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
