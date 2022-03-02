import React,{useState,useEffect,useRef} from 'react'
import Button from './Button'

function WatchBanner(props) {
    
    const [casts, setCasts] = useState([])
    const [genres, setGenres] = useState([])

    const overviewRef = useRef(null)
    const detailsRef = useRef(null)
    const navitem1Ref = useRef(null)
    const navitem2Ref = useRef(null)

    useEffect(()=>{
        let mounted = true
        if(typeof props.film?.Casts === 'string' && mounted)
        setCasts(props.film?.Casts.split(','))

        if(typeof props.film?.Genres === 'string' && mounted)
        setGenres(props.film?.Genres.split(','))

        return (()=>{
            mounted = false
        })
    },[props.film])

    const minCasts = casts?.filter((cast,i) => i <= 2)
    const handleBtn1 = () => {
        navitem1Ref.current.classList.add('active')
        navitem2Ref.current.classList.remove('active')
        overviewRef.current.style.display='block'
        detailsRef.current.style.display='none'
    }
    const handleBtn2 = () => {
        navitem2Ref.current.classList.add('active')
        navitem1Ref.current.classList.remove('active')
        overviewRef.current.style.display='none'
        detailsRef.current.style.display='block'
    }
    
  return (
    <>
        <div ref={overviewRef} className=' film--overview text-white absolute w-full h-full top-0 left-0 ml-[4%] pt-[8%]'>
            <h1 className=' text-5xl font-[800] mb-4'>{props.film?.name}</h1>
            <p className='w-[600px] text-lg font-medium mb-8'>{props.film?.desc}</p>
            <div className='mb-12'>
                <div className='flex flex-row items-center leading-8'>
                    <h3 className='text-base font-bold w-28 '>Diễn viên:</h3> 
                    <span className='text-[rgba(255,255,255,0.6)] text-base' >{minCasts?.join(',')}</span> 
                </div>
                <div className='flex flex-row items-center leading-8'> 
                    <h3 className='text-base font-bold w-28 '>Thể loại:</h3> 
                    <span className='text-[rgba(255,255,255,0.6)] text-base'  >{props.film?.Genres}</span> 
                </div>
            </div>
            <Button film={props.film}/>
        </div>
        {/* <div className='film--trailer'>
            
        </div> */}
        <div ref={detailsRef} className='hidden film--details text-white absolute w-full h-full top-0 left-0 ml-[4%] pt-[8%]'
            style={{
                backgroundImage:''
            }}
        >
            <h1 className=' text-5xl font-[800] mb-4'>{props.film?.name}</h1>
            <div className='flex flex-row gap-12'>
                <div>
                    <h2 className='font-bold text-lg'>Diễn viên</h2>
                    {
                        casts.map(cast=>(
                            <p className='text-[rgba(255,255,255,0.6)]' key={cast}>{cast}</p>
                        ))
                    }
                </div>
                <div>
                    <h2 className='font-bold text-lg'>Thể loại</h2>
                    {
                        genres.map(genre=>(
                            <p className='text-[rgba(255,255,255,0.6)]' key={genre}>{genre}</p>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
            <ul className='flex gap-32 text-[#ffffff8c] font-[500] uppercase text-2xl'>
                <li ref={navitem1Ref} className='nav-item active hover:text-white cursor-pointer' 
                    onClick={handleBtn1}>Tổng quan</li>
                <li ref={navitem2Ref} className='nav-item hover:text-white cursor-pointer'  
                    onClick={handleBtn2}
                >Chi tiết</li>
            </ul>
        </div>
    </>
  )
}

export default WatchBanner