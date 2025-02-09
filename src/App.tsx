import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <div>Serverless Social Media React App</div>
      <Router>
        <Routes>
          <Route path='/Serverless-Social-Media-App/' element={<Login/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/posts' element={<Posts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
