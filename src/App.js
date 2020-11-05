import React from 'react';
import Header from './components/layouts/Header/Header';
import Menu from './components/layouts/Menu/Menu';
import PostContainer from './components/body/PostContainer/PostContainer';
import Footer from './components/layouts/Footer/Footer';
import Pagination from './components/layouts/Pagination/Pagination';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <PostContainer />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
