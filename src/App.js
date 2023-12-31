import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/home/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/signin/signin.component';

const Shop = () => {
  return(
    <div>Shoping items</div>
  )
}

const App = () => {
 
return (
  <Routes>
    <Route path='/' element={<Navigation />} >
<Route index element={<Home />} />
<Route path='shop' element={<Shop />} />
<Route path='sign-in' element={<SignIn />} />
</Route>
  </Routes>
 
)
}

export default App;
