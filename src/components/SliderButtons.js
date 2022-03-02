import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function SliderButtons(props) {
    const handleNext = () => {
        if(props.active !==  props.dotLength) {
          props.setActive(props.active + 1)
        }
        else if(props.active === props.dotLength) {
          props.setActive(1)
        }
      }
        useEffect(()=>{
          const time = setTimeout(()=>{
            handleNext()
          },4000)

          return () => clearTimeout(time)
        },[props.active])
        
      const handlePrev = () => {
        if(props.active !==  1) {
          props.setActive(props.active - 1)
        }
        else if(props.active === 1) {
          props.setActive(props.dotLength)
        }
      }
  return (
    <div className='flex items-center absolute bottom-[20%] right-[10%]'>
        <div className=' flex items-center z-20'>
            {Array.from({length: props.dotLength}).map((item,i) => (
              <span key={i} className={i+1 == props.active ? 'dot active ml-4 h-3 w-3 bg-[#ebebeb]' :'dot ml-2 h-3 w-3 bg-[#9b9b9b]'} onClick={()=>props.setActive(i+1)}></span>
            ))
            }
          </div>
          <button className='ml-6 slider__btn inline-flex items-center text-white hover:text-[#1d1d1f66] ' onClick={handlePrev}>
            <FontAwesomeIcon className='icon text-[20px] rounded-[50%] p-1 border-[3px] border-white' icon={faArrowLeft}/>
          </button>
          <button className=' inline-flex items-center slider__btn text-white hover:text-[#1d1d1f66]  ' onClick={handleNext}>
            <FontAwesomeIcon className='icon text-[20px] rounded-[50%] p-1 border-[3px] border-white ' icon={faArrowRight}/>
          </button>
    </div>
  )
}

export default SliderButtons