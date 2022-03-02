import React, { useEffect, useState } from 'react'
import {useDatas} from '../contexts/FilmsContext'
import Row from './Row'

function Result(props) {
    const {films,filmBanner} = useDatas()
    const totalsFilms = [...films,...filmBanner]
    const nameFilms = totalsFilms?.map(film => film.name)
    const textresults = [...new Set(nameFilms.filter(text => text.toLowerCase().includes(props.searchTerm.toLowerCase())))]
    const [listFilm,setListFilm] = useState([])

    useEffect(()=>{
        setListFilm(totalsFilms?.filter(film => film.name.toLowerCase().includes(props.searchTerm.toLowerCase())))
    },[props.searchTerm])
    
    function splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
        return chunks;
      }
      var alphabetPairs=splitArrayIntoChunksOfLen(listFilm,5);
      console.log(alphabetPairs)
  return (
    <>
        <div className='w-[100vw] h-[100vh] pt-28 '>
                <h2 className='text-2xl text-[#a9aaad] px-[4%]'>Từ khóa tìm kiếm liên quan</h2>
                <div className='flex flex-wrap w-full mt-4 px-[4%]'>
                    { props.value &&
                        textresults.map((text,i) => (
                            <p key={i} 
                                className="text-white rounded-md text-xl p-3 mr-3 mb-3 bg-[#404446] px-[4%] "
                            >{text}</p>
                        ))
                    }
                </div>
                <h2 className='text-2xl text-[#a9aaad] px-[4%]'>Kết quả tìm kiếm cho {props.searchTerm && <span className='text-white'>{` "${props.searchTerm}"`}</span>}</h2>
                {props.searchTerm && 
                    alphabetPairs.map((films,i) => (
                        <Row films={films} test={`${i}-seacrchFilm`} />
                    ))
                }
            </div>
    </>
  )
}

export default Result