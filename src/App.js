
import './App.css';
import { Routes , Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddingProduct from './pages/AddingProduct';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/add-product' element={<AddingProduct />} />
    </Routes>
    </>
  );
}

export default App;
