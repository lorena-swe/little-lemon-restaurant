import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
// import Read from './components/Read';
// import Update from './components/Update';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import Reservations from './components/Reservations';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        {/* <Route path='/read' element={<Read />}></Route>
        <Route path='/update' element={<Update />}></Route> */}
        <Route path="/booking-page" element={<BookingPage />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
