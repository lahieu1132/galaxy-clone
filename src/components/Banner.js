import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import SliderButtons from './SliderButtons'
import Button from './Button'
function Banner(props) {
    
  const [active, setActive] = useState(1)

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1 ) : str
  }

  return (
    <header 
      className='banner text-[white] object-contain '
      >
          {props.films.map((film,i) => {
            return (
                <div key={i} className={ i+1 === active ? 'py-[10px] px-[4%] banner__contents relative active' : 'py-[10px] px-[4%] banner__contents relative' }
                  style={{
                  backgroundImage:`linear-gradient(42deg, #111 0%, rgba(0,0,0,0) 57%), url(${film.img})`
                  }}
                >
                  <div className='absolute top-[50%]'>
                    <h1 className='text-5xl font-[800] pb-2'>
                      { film.name }
                    </h1>
                    <Button film={film}/>
                    <h1 className='max-w-[415px] lg:max-w-[600px]  h-20 text-[1.4vw]'>
                      {truncate(film.desc, 150)}
                      <Link className='banner__detail ml-4 inline-flex items-center text-[22px] text-[#ffffff8c] hover:text-[white]'
                      to={`/watch/${film.id}`}
                      >Xem chi tiết
                      <FontAwesomeIcon className='text-[30px] ml-3' icon={faAngleRight}/>
                      </Link>
                    </h1>
                  </div>
                  <SliderButtons setActive={setActive} active={active} dotLength={props.films.length}/>
            </div>
            )
          })}
    </header>
  )
}

export default Banner