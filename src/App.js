import { Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs'
import MoviesPage from './Screens/MoviesPage'
import SingleMovie from './Screens/SingleMovie'
import WatchPage from './Screens/WatchPage'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Profile from './Screens/Dashboard/Profile'
import Aos from 'aos'
import Dashboard from './Screens/Dashboard/Admin/Dashboard'
import Password from './Screens/Dashboard/Password'
import Categories from './Screens/Dashboard/Admin/Categories'
import Users from './Screens/Dashboard/Admin/Users'
import FavouriteMovie from './Screens/Dashboard/FavouriteMovie'
import MovieList from './Screens/Dashboard/Admin/MovieList'
import AddMovie from './Screens/Dashboard/Admin/AddMovie'
import ScrollOnTop from './ScrollOnTop'
function App() {

  Aos.init()

  return (
    <ScrollOnTop>
      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='/watch/:id' element={<WatchPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/password' element={<Password />} />
        <Route path='/favorites' element={<FavouriteMovie />} />
        <Route path='/movieslist' element={<MovieList />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/users' element={<Users />} />
        <Route path='/addmovie' element={<AddMovie />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </ScrollOnTop>
  );
}

export default App;
