import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddPlayer from './Pages/AddPlayer/AddPlayer';
import Home from './Pages/Home/Home';
import PlayerInfo from './Pages/Home/PlayerInfo';
import UpcomingInfo from './Pages/Home/UpcomingInfo';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Practice from './Practice/Practice';
import MealDb from './Practice/MealDb';
import RestCountries from './Practice/RestCountries';
import DayPicker from './Practice/DatePicker';
import RestApi from './Practice/RestApi';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<RequireAuth><About /></RequireAuth>}></Route>
        <Route path='/practice' element={<RequireAuth><Practice /></RequireAuth>}>
          <Route index element={<MealDb />}></Route>
          <Route path='dayPicker' element={<DayPicker />}></Route>
          <Route path='restCountries' element={<RestCountries />}></Route>
          <Route path='restApi' element={<RestApi />}></Route>
        </Route>
        <Route path='/addPlayer' element={<RequireAuth><AddPlayer /></RequireAuth>}></Route>
        <Route path='player/:playerId' element={<RequireAuth><PlayerInfo /></RequireAuth>}></Route>
        <Route path='upcomeing/:upcomeingInfo' element={<RequireAuth><UpcomingInfo /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
