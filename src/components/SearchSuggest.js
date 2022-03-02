import React,{useEffect, useState, useRef} from 'react'
import {db} from '../firebase'
import {collection , getDocs} from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {useDatas} from '../contexts/FilmsContext'
import { Link } from 'react-router-dom'

function SearchSuggest(props) {
  const [items, setItems] = useState([])
  const useridRef = collection(db,'Suggest-Item')
  const [visible, setVisible] = useState(3)
  const [more, setMore] = useState(false)
  const suggestMainRef = useRef(null)
  const {films,filmBanner} = useDatas()
  const totalsFilms = [...films,...filmBanner]
  const shuffled = totalsFilms?.sort(() => 0.5 - Math.random());
  useEffect(()=>{
    const getUserIds = async () => {
      const data = await getDocs(useridRef)
      setItems(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUserIds()
  },[])

  const showMore = () => {
    setVisible(items?.length)
    setMore(!more)
  }
  const showLess = () => {
    setVisible(3)
    setMore(!more)
  }
  useEffect(()=>{
    document.addEventListener('mousedown',(e)=>{
      if(!suggestMainRef.current.contains(e.target)){
        props.setShow(false)
      }
    })
  },[props.show])

  return (
    <div ref={suggestMainRef} className={`search-suggest__main absolute ${!props.show && 'hidden'}  right-0 top-16 bg-black w-[500px] pb-5 text-white`}
      // onClick={props.setShow}
      onM
    >
        <div className='flex flex-wrap justify-around '>
            {
              items?.slice(0, visible).map(item => (
                <div className='suggest-item w-[150px] h-[83px] relative cursor-pointer overflow-hidden mt-2' key={item.title}>
                  <img src={item.src} alt=''/>
                  <h3 className='absolute text-lg font-bold left-1 bottom-1'>{item.title}</h3>
                </div>
              ))
            }
        </div>
        <div>
          <button 
            className='flex items-center py-4 w-full justify-center border-b-[1px] border-solid border-[#ccc]'
          onClick={more ? showLess : showMore }>
            <FontAwesomeIcon icon={more ? faAngleUp : faAngleDown} />
              <p className='ml-2 text-lg font-semibold'>{more ? 'Thu gọn' :'Xem thêm' }</p>
            </button>
        </div>
        <div className='mt-4 px-2'>
          <h2 className='text-lg font-medium'>Có thể bạn quan tâm</h2>
          <div className='grid-cols-2 grid'>
            {
              shuffled.slice(0,10).map((film,i) => (
                <Link to={`/watch/${film.id}`}>
                  <div className=' flex flex-row '>
                  <p className='mr-2'>{i+1}</p>
                  <p>{film.name}</p>
                  </div>
                </Link>
              ))
            }
            
          </div>
        </div>
    </div>
  )
}

export default SearchSuggest