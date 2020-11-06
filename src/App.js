import React from 'react';
import Header from './components/layouts/Header/Header';
import Menu from './components/layouts/Menu/Menu';
import PostContainer from './components/body/PostContainer/PostContainer';
import Footer from './components/layouts/Footer/Footer';
import Pagination from './components/layouts/Pagination/Pagination';
import SinglePost from './components/body/SinglePost/SinglePost';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/body/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/post">
            <SinglePost />
          </Route>
          <Route exact path="/">
            <PostContainer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Pagination />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
