import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Create />}></Route>
        <Route path='/read' element={<Read />}></Route>
        <Route path='/update' element={<Update />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
