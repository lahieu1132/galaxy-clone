import React, {useState, useRef, useEffect} from 'react'
import { Link, useNavigate,Routes,Route, } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../App.css'
import BannerFooter from './BannerFooter'
import Nav from './Nav';
import Mylist from './pages/Mylist';
import Home from './Home';
import WatchFilm from './pages/WatchFilm'
import { useDatas } from '../contexts/FilmsContext';


export default function Dashboard() {
  const { currentUser} = useAuth()
  const {addUserId, userId} = useDatas()
  const [showSearch, setShowSearch] = useState(false)
  
  useEffect(()=>{
    addUserId(currentUser.uid)
  },[userId,currentUser.uid])
  

  return (
    <div className='dashboard '>
      <Nav showSearch={showSearch} setShowSearch={setShowSearch}/>
      { !showSearch &&
        <Routes>
        <Route path='/mylist' element={<Mylist props={'asdhasu'} />}/>
        <Route path='*' element={<Home />}/>
        <Route path='/watch' exact element={<WatchFilm />} />
        <Route path='/watch/:id' element={<WatchFilm />} />
        </Routes>

      }
      
      <BannerFooter />
      
      
    </div>
  )
}
