import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Layout from './view/Layout';
import Friend from './view/components/Friend';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/11" element={<Friend />} />
        </Route>
      </Routes>
    </Router>
  );
}

