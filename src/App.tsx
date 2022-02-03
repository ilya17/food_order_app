import React from 'react';
import { useSelector } from 'react-redux';
import { Cart } from './components/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals';
import { allState } from './core/store';

function App() {

  const isShowModal = useSelector((state: allState) => state.isShowModal);

  return (
    <>
      {isShowModal && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
