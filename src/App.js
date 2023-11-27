import logo from './mercedes-benz-9 (1).svg';
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import CocktailsPage from './page/CocktailsPage';
import CocktailRandomPage from './page/CocktailRandomPage';
import CategoriesPage from './page/CategoriesPage';
import Header from './component/Header';
import IngredientsPage from './component/IngredientsPage';
import CocktailDetailsPage from './page/CocktailDetailsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
       
       <BrowserRouter>
       
       <Routes>
        <Route path='/' element={<Header/>}/>
        
        <Route path="/liste" element={<CocktailsPage/>}/>
        <Route path="/random" element={<CocktailRandomPage/>}/>
        <Route path='/categorie' element={<CategoriesPage/>} />
        <Route path='/ingredients' element={<IngredientsPage/>}/>
        <Route path='/liste/detailsPage/:id' element={<CocktailDetailsPage />}/>
       </Routes>
       </BrowserRouter>
       
      </header>
      
    </div>
  );
}

export default App;
