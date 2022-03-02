import React,{useEffect, useRef, useState} from 'react'
import {useSearchParams, useNavigate} from 'react-router-dom'

const users = ['hieu','huwng']

export default function Auth() {
  const [search, setSearch] = useSearchParams()
  const searchTerm = search.get('name') || '';
  const [value, setvalue] = useState('')

  const handleOnchage = (event) => {
    setvalue(event.target.value)
    const name = event.target.value
    if(name) setSearch({name})
    else setSearch({});
  }
  

  return (
    <>
    <input  type='text' value={searchTerm} onChange={handleOnchage}/>
    <ul>
      { value ?
        users.filter(user => user.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((user,i) => (
          <li key={i}>{user}</li>
        )) : <h1>boyasd</h1>
      }
    </ul>
    </>
  )
}