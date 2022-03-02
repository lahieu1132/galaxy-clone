import React,{useState,useEffect} from 'react'
import {useDatas} from '../../contexts/FilmsContext'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
function PlayFilm() {

  let navigate = useNavigate()
    const [filmId] = useState(window.location.pathname.replace('/playfilm/',''))
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
    <>
        <iframe src={film?.url} className='w-[100vw] h-[100vh] relative' frameBorder="0"></iframe>
        <div className='absolute top-14 left-16 text-5xl text-white cursor-pointer' onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </div>
    </>
  )
}

export default PlayFilm