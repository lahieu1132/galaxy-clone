   
import React,{useState, useRef,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPlay, faPlus, faFilm, faCheck } from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate, generatePath} from 'react-router-dom'
import {useList} from '../contexts/ListsContext'
import {useAuth} from '../contexts/AuthContext'
import Slider from 'react-slick'

function Row(props) {
    const [id, setId] = useState();
    const navigate = useNavigate()
    const filmRef = useRef(null)
    const {
        listFilms,
        addFilm,
        removeFilm
      } = useList()
      const {currentUser} = useAuth()
      const [filmsId,setFilms] = useState([])
      const [active,setActive] = useState(false)
      useEffect(()=>{
        if(currentUser){
          setFilms(listFilms?.filmId)
        }
      },[listFilms,currentUser?.uid])

      const checkedFilm = (id) => {
        return filmsId?.indexOf(id) != -1
      }
    // console.log(filmsId.some(film => film = 'DpRwiSHaHeIl5WBKGA4H'))
    const handleHover = (i) => {
        const filmBefore =  Array.from(document.querySelectorAll(`[data-type='${props.test}']`)).filter((e,index) => index < i)
        const filmAfter =  Array.from(document.querySelectorAll(`[data-type='${props.test}']`)).filter((e,index) => index > i)
        filmBefore.forEach(e => e.classList.add('hover1'))
        filmAfter.forEach(e => e.classList.add('hover2'))
        Array.from(document.querySelectorAll(`[data-type='${props.test}']`))[i].classList.add('hover')
    }
    const handleHover2 = (i) => {
        
        const filmBefore =  Array.from(document.querySelectorAll(`[data-type='${props.test}']`)).filter((e,index) => index < i)
        const filmAfter =  Array.from(document.querySelectorAll(`[data-type='${props.test}']`)).filter((e,index) => index > i)
        filmBefore.forEach(e => e.classList.remove('hover1'))
        filmAfter.forEach(e => e.classList.remove('hover2'))
        Array.from(document.querySelectorAll(`[data-type='${props.test}']`))[i].classList.remove('hover')  
    }
    const handldeClick = async (film) => {
         await checkedFilm(film?.id) ?
        removeFilm(film) : addFilm(film)   
        setActive(!active)
    }

    const settings = {
        slidesToShow: 5,
        infinite: false,
        touchMove:false,
        useCSS:false,
        slidesToScroll:3
    }
   
  return (
    <div className='row w-[100vw] py-[10px] px-[4%]' >
        {
            props.title &&
            <h2 className='text-[1.389vw] text-white font-bold capitalize flex items-center'>{props.title} 
            <FontAwesomeIcon className='ml-4' icon={faAngleRight}/>
            </h2>
        }
        <Slider {...settings} className='row_posters  flex ' >
            {
                props.films?.map((film,i) => (
                        <div  className='row_poster relative top-10 z-10   mr-6 w-[410px] h-[230px] hover:bg-[linear-gradient(42deg, #111 0%, rgba(0,0,0,0) 57%)]' data-type={props.test}
                        ref={filmRef}
                        key={i}
                        >   
                        <Link to={`/watch/${film?.id}`}>
                        
                            <img src={film?.img} alt='' 
                                className='row_poster-img block absolute w-[310px] h-[170px] z-1 rounded'
                                onMouseEnter={()=>handleHover(i)}
                                onMouseOut={()=>handleHover2(i)}
                            />
                        </Link>
                            <div className='row_poster-btn opacity-0 flex items-center justify-center absolute z-10 top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Link
                                    onMouseEnter={()=>handleHover(i)}
                                    to={'/'}
                                    
                                >
                                    <button className='w-8 h-8 flex justify-center items-center mr-4'>
                                        <FontAwesomeIcon icon={faFilm} className={`icon text-xl ${film?.trailer ? 'text-white' : 'text-[#ffffff99] pointer-events-none'}`}/>
                                    </button>
                                </Link>
                                <div className='w-[2px] h-5 bg-white mr-4'></div>
                                <Link
                                    onMouseEnter={()=>handleHover(i)}
                                    to={`/playfilm/${film?.id}`}
                                    
                                >
                                    <button className='btn-play w-12 h-12 flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faPlay} className='icon text-xl text-white'/>
                                    </button>
                                </Link>
                                <div className='w-[2px] h-5 bg-white ml-4'></div>
                                    <button className='w-8 h-8 border flex justify-center items-center ml-4 z-10'
                                        onMouseEnter={()=>handleHover(i)}
                                        onClick={()=>{
                                            handldeClick(film)
                                        }}
                                    >
                                        <FontAwesomeIcon icon={checkedFilm(film?.id) ? faCheck : faPlus} className='icon text-xl text-white'/>
                                    </button>
                            </div>
                            <div 
                                onMouseEnter={()=>handleHover(i)}
                                className='row_poster-name absolute opacity-0 bottom-[4.25rem] left-2 font-bold text-base text-white'>
                                <h1>{film?.name}</h1>
                            </div>
                        </div>
                ))
            }

            
        </Slider>
    </div>
  )
}

export default Row
