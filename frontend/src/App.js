import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar';
import Explore from './component/Explore/Explore';
import Problems from './component/Problems/Problems';
import Discuss from './component/Discuss/Discuss';
import OnlineInterview from './component/OnlineInterview/OnlineInterview';
import Assessment from './component/Assessment/Assessment';
import Redeem from './component/Redeem/Redeem';
import Premium from './component/Premium/Premium';
import Footer from './component/Footer/Footer';
import Payment from './component/Premium/Payment'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/interview/online" element={<OnlineInterview />} />
        <Route path="/interview/assessment" element={<Assessment />} />
        <Route path="/store/redeem" element={<Redeem />} />
        <Route path="/store/premium" element={<Premium />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/payment/:plan" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

