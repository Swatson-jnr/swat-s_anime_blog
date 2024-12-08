import React from 'react';
import MyNavbar from './MyNavbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';
import Res from './Res';


function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/data/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/Res" element={<Res />}    />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
