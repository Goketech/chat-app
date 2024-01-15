import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './contexts/AuthContext'

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Message from './pages/Message';
import ChatOverviewPage from './pages/ChatOverviewPage';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/messages' element={<Message />} />
        <Route path="/inbox" element={<ChatOverviewPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
