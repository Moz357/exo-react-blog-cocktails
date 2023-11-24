import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import CocktailsPage from './page/CocktailsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <BrowserRouter>
       <Routes>
        <Route path="/cocktail" element={<CocktailsPage/>}/>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
