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
import NoPageFound from './pages/NoPageFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<NoPageFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>   
    </div>
  );
}

export default App;
