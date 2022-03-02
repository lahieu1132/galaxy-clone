import React,{useEffect, useState} from 'react'
import { useDatas } from '../contexts/FilmsContext';
import Row from './Row';
import Banner from './Banner';
import {useAuth} from '../contexts/AuthContext'
import {useList} from '../contexts/ListsContext'

function Home() {

    const {films, filmBanner} = useDatas()

    const {currentUser} = useAuth()
    const {listFilms} = useList()
    const [filmsList,setFilmsList] = useState([])

  useEffect(()=>{
    if(currentUser){
      setFilmsList(listFilms.name)
    }
  },[listFilms,currentUser?.uid])
  return (
    <>
      <Banner films={filmBanner}/>
      {filmsList?.length != 0 &&
        <Row films={filmsList} test='0'/>  
    }
      <Row title="Phim Mới Thịnh Hành Trên Galaxy Play" test='1' films={films} />
      <Row title="50 Sắc Thái tình yêu trên Galaxy Play" test='2'films={films}/>
      <Row title="Galxy film" test='3'films={films} isLargeRow={true}/>
    </>
  )
}

export default Home