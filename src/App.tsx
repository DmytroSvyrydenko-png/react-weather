import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header /> {/* outside the Routes to be displayed on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
