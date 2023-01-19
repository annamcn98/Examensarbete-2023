import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/Product';
import Products from './pages/Products';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Kontakt from './pages/Kontakt';
import NoPageFound from './pages/NoPageFound';
import Vases from './pages/Vases';
import Flowers from './pages/Flowers';
import Omoss from './pages/Omoss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/vases' element={<Vases />} />
          <Route path='/products/flowers' element={<Flowers />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/omoss' element={<Omoss />} />
          <Route path='*' element={<NoPageFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
