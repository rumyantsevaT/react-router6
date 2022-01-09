import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Hero from './Hero';
import FullCard from './FullCard';
import './App.css';

const App = () => {
  const data = [
    {
      title: 'Html',
      description: 'This is Html'
    },
    {
      title: 'Css',
      description: 'This is Css'
    },
    {
      title: 'JavaScript',
      description: 'This is JavaScript'
    },
    {
      title: 'React',
      description: 'This is React'
    },
    {
      title: 'Vue',
      description: 'This is Vue'
    },
    {
      title: 'Angular',
      description: 'This is Angular'
    },
  ]
  return (
    
    <Router >
      <Routes>
        <Route path="/" element={<Hero data={data}/>} />
        <Route path="/cards/:title" element={<FullCard data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
