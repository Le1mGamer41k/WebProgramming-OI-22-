import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AvailableApartments from './components/AvailableApartments';
import MyBookings from './components/MyBookings';
import BookingForm from './components/BookingForm';
import Contacts from './components/Contacts';
import './styles/styles.css';

const App = () => {
  return (
      <Router>
        <header>
          <nav>
            <ul>
              <li><Link to="/"> Головна</Link></li>
              <li><Link to="/available"> Доступні квартири</Link></li>
              <li><Link to="/bookings"> Мої бронювання</Link></li>
              <li><Link to="/contacts"> Контакти</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available" element={<AvailableApartments />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <footer>
          <a> Контактна інформація: buhilvy@gmail.com | +38 068 351 1546</a>
        </footer>
      </Router>
  );
};

export default App;
