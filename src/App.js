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
import SinglePagination from './components/layouts/SinglePagination/SinglePagination';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/post">
            <SinglePost />
            <SinglePagination />
          </Route>
          <Route exact path="/">
            <PostContainer />
            <Pagination />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
