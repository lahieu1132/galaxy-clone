import React,{useContext, useEffect, useState} from 'react'
import { useAuth } from './AuthContext'
import {db} from '../firebase'
import { arrayUnion, doc, updateDoc,arrayRemove,getDocs,getDoc, collection } from 'firebase/firestore'

const ListsContext = React.createContext()

export function useList() {
    return useContext(ListsContext)
}

export function ListsProvider( {children}) {

    const [listFilms, setFilms] = useState([])
    const {currentUser} = useAuth()
    const [active, setActive] = useState(false)
    
    useEffect(()=>{
      if(currentUser){
        async function getFilms(){
          // const data = await getDocs(useridRef)
          // setFilms(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
            const querySnapshot = await getDocs(collection(db, "UserId"));
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              if(doc.id == currentUser.uid)
                setFilms(doc.data())
            })
          }
        getFilms()
      }
    },[active,currentUser])

    async function addFilm(film) {
      if(currentUser){
        const ListFilmsRef = doc(db, "UserId",currentUser.uid);
        await updateDoc(ListFilmsRef,{
        name: arrayUnion(film),
        filmId: arrayUnion(film?.id)
      })
      }
      setActive(!active)
    }
    async function removeFilm(film){
      if(currentUser){
        const ListFilmsRef = doc(db, "UserId",currentUser.uid);
        await updateDoc(ListFilmsRef,{
        name: arrayRemove(film),
        filmId: arrayRemove(film?.id)
      })
      }
      setActive(!active)
    }
    const value= {
      listFilms,
      addFilm,
      removeFilm
    }
  return (
    <ListsContext.Provider value= {value}>
        {children}
    </ListsContext.Provider>
  )
}

