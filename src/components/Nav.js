import React,{useEffect, useState, useRef} from 'react'
import { useDatas } from '../contexts/FilmsContext';
import '../App.css'
import { Link, NavLink, useSearchParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AuthDeatil from './AuthDeatil'
import SearchSuggest from './SearchSuggest'
import Result from './Result';

const users = ['hieu','huwng']

function Nav(props) {
    const [search, setSearch] = useSearchParams()
    const searchTerm = search.get('name') || '';
    const [scroll, setScroll] = useState(false)
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('')
    const { navbar } = useDatas()
    const searchInputRef = useRef(null) 
    const searchBtnRef = useRef(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const handlescroll = ()=>{
            if(window.scrollY > 100) {
                setScroll(true)
            }else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handlescroll)

        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
      },[])
      const handleOnchage = (event) => {
          setValue(event.target.value)
          const name = event.target.value
          if(name) setSearch({name})
          else setSearch({});
          props.setShowSearch(true)
         
      }

      const focusOut = (e) => {
            searchInputRef.current.classList.remove('onfocus')
            searchBtnRef.current.classList.remove('outfocus')
            e.target.value = ''
      }

      const handleClick = (e) => {
        setShow(true)
        searchInputRef.current.classList.add('onfocus')
        searchBtnRef.current.classList.add('outfocus')
        searchInputRef.current.focus()
      }
  return (
    <div>
        <nav  className={`navbar ${scroll && "active"}  a py-[10px] px-[4%] fixed lg:flex justify-between items-center flex-row left-0 top-0 w-full h-[74px] z-50  `}    >
        <div className='lg:flex '>
                <Link to='/'>
                    <img className='h-[70px] py-[10px]' src='https://assets.glxplay.io/web/images/logoglx.svg' alt=''/>    
                </Link>
                <ul className='flex items-center'>
                    {
                        navbar?.map((link,i) => (
                            <NavLink activeclassname='active' to={link.path} key={link.title} 
                                onClick={()=>props.setShowSearch(false)}
                            >
                                <li  className={ `${i==0 && 'font-semibold'} lg:ml-8 text-xl  hover:text-white `}
                                >
                                        {link.title}
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
        </div>
        
            <div className='flex flex-row items-center relative'>
                <div className='flex items-center mr-20 relative'>
                    <button ref={searchBtnRef} className='search-btn block text-white text-2xl ' onClick={handleClick}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input ref={searchInputRef} value={searchTerm}  className='search-input relative py-1 bg-transparent outline-none w-0'
                        onBlur={(e)=>focusOut(e)}
                        onChange={handleOnchage}
                    />
                    <SearchSuggest show={show} setShow={setShow} searchInputRef={searchInputRef}/>
                </div>
                <div className='ml-8 relative '>
                    <div className='w-[45px] h-[45px] dropdown relative cursor-pointer'>
                        <img className='w-[45px] rounded-full' src='https://assets.glxplay.io/static/avatars/Avatar%20Profile-12.png' alt=''/>
                    </div>
                    <AuthDeatil />
                </div>
            </div>
        </nav>
        {props.showSearch && 
            <Result  value={value} searchTerm={searchTerm}/>
        }
    </div>
  )
}

export default Nav