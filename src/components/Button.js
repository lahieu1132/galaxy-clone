import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import {useList} from '../contexts/ListsContext'
import {useAuth} from '../contexts/AuthContext'

function Button(props) {
  const {
    listFilms,
    addFilm,
    removeFilm
  } = useList()
  const [filmsId,setFilms] = useState([])
  const {currentUser} = useAuth()
  const [active,setActive] = useState(false)

  const checkedFilm = (id) => {
    return filmsId?.indexOf(id) != -1
  }
  useEffect(()=>{
    if(currentUser){
      setFilms(listFilms?.filmId)
    }
  },[listFilms,currentUser?.uid])
  const handldeClick = async (film) => {
    await checkedFilm(film?.id) ?
   removeFilm(film) : addFilm(film)   
   setActive(!active)
}
  return (
    <div className='banner__buttons mb-3 text-2xl '>
      <Link to={`/playfilm/${props.film?.id}`}>
    <button className='inline-flex items-center hover:bg-[#0079c8] '>
        <FontAwesomeIcon className='text-[30px] font-[600] mr-3' icon={faCaretRight}/>
      Xem Phim
    </button>
      </Link>
    <button className='ml-4 inline-flex items-center font-[600] ' 
      onClick={()=>{
        handldeClick(props.film)
    }}
    >
      <FontAwesomeIcon icon={checkedFilm(props.film?.id) ? faCheck : faPlus} className='icon text-xl text-white border rounded-full p-2 mr-1'/>
      Danh sách của tôi
    </button>
  </div>
  )
}

export default Button