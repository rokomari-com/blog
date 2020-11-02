import React from 'react';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Menu from './components/layouts/Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
