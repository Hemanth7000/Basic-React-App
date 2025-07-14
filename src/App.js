import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
