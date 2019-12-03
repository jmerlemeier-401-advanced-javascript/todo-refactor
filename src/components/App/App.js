import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Form from '../Form/Form';
import NewItem from '../NewItem/NewItem';

const App = () => {
  return (
    <>
    <p>Welcome to your To Do App!</p>
    <Header />
    <Form />
    <NewItem />
    </>
  )
}

export default App;
