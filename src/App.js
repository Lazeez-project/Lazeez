import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import './App.css';

import OwnerPath from './resturantOwner/OwnerPath'
import AdminPath from './admin/AdminPath'

import MealCard from './components/MealCard';
import ResturantCard from './components/ResturantCard';

import meals from './Json/Meals';
import res from './Json/ResturantCard'

const Land = () => (
  <>
    <Link to="/resturant/owner/" >Resturant Owner</Link>
    <br />
    <Link to="/admin/" >Admin</Link>
  </>
)

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Land/>} />       

          <Route path="/card/meal" element={
            <>
            {
              meals.map((item,index)=>(
                <MealCard key={index} meal={item} />
              ))
            }
            </>
          } />

          <Route path="/card/res" element={
            <>
              {
                res.map((item,index)=>(
                  <ResturantCard key={index} res={item}  />
                ))
              }
            </>
          } />

          <Route path="/resturant/owner/*" element={<OwnerPath />} />
          <Route path="/admin/*" element={<AdminPath />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
