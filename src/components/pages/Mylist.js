import React,{useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext';
import Row from '../Row';
import {useList} from '../../contexts/ListsContext'

function Mylist(props) {
  const {currentUser} = useAuth()
  const {listFilms} = useList()
  const [films,setFilms] = useState([])

  useEffect(()=>{
    if(currentUser){
      setFilms(listFilms?.name)
    }
  },[listFilms,currentUser?.uid])
  return (
        <div className='pt-[120px] pb-[320px]'>
      {
        films?.length != 0 ? <Row  films={films} title={'Danh sách của tôi'} test={'test1'}/> : 
        <div className='relative flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2'>
          <img src='https://galaxyplay.vn/main/assets/img/my-list-null.svg' className='w-[300px]' alt=''/>
          <h2 className='text-white mt-6 text-2xl'>Hãy thêm phim bạn yêu thích vào đây.</h2>
        </div>
      }
    </div>
  )
}

export default Mylist