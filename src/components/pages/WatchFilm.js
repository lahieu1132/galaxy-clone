import React,{useEffect, useState,} from 'react'
import Nav from '../Nav'
import WatchBanner from '../WatchBanner'
import {useDatas} from '../../contexts/FilmsContext'
function WatchFilm() {
  
  const [filmId] = useState(window.location.pathname.replace('/watch/',''))
  const {filmBanner, films} = useDatas()
  const [film,setFilm] = useState({})
  const totalsFilm = [...films,...filmBanner]
  useEffect(()=>{
    let mounted = true
    
    if(mounted) {
      setFilm(totalsFilm.find(i=> i.id == filmId))

    }

    return (()=>{
      mounted = false
    })
  },[totalsFilm])
  return (

    <div >

      <Nav />
      <div className='w-full pt-[45%] relative px-[4%]'
        style={{
          backgroundImage:`url(${film?.img}) , linear-gradient(42deg, #111 0%, rgba(0,0,0,0) 57%)`,
          backgroundPosition:'center center',
          backgroundSize:'100%'
          }}
      >
        <WatchBanner film={film}/>
      </div>
    </div>
  )
}

export default WatchFilm