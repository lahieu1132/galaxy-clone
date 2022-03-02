import React, {useContext, useState, useEffect} from 'react'
import {db} from '../firebase'
import { setDoc, collection , getDocs, doc} from 'firebase/firestore'

const FilmsContext = React.createContext()

export function useDatas() {
    return useContext(FilmsContext)
}
export  function FilmsProvider( {children} ) {

    const [films, setFilms] = useState([])
    const [navbar, setNavbar] = useState([])
    const [filmBanner, setFilmBanner] = useState([])
    const [userId, setUserId] = useState(10)
    const filmsCollectionRef = collection(db, 'Phim')
    const navCollectionRef = collection(db,'SidebarData')
    const filmBannerRef = collection(db,'PhimBanner')
    const useridRef = collection(db, 'UserId')

    const addUserId = async (uid) => {

      if(typeof userId != 'number'){
        if(userId.map(user => user.id).indexOf(uid) == -1){
          await setDoc(doc(db, "UserId", uid), {
            name: [],
            filmId:[]
          })
        }
      }
      
    }
    
    useEffect(() => {
      const getUserIds = async () => {
        const data = await getDocs(useridRef)
        setUserId(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      }
      getUserIds()
      const getNavbars  = async () => {
        const data = await getDocs(navCollectionRef)
        setNavbar(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      }
      getNavbars()
        const getFilms  = async () => {
          const data = await getDocs(filmsCollectionRef)
          setFilms(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        getFilms()
      const getFilmsBanner = async () => {
        const data = await getDocs(filmBannerRef)
        setFilmBanner(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
      }
      getFilmsBanner()

      },[])
    const value = {
        films,
        navbar,
        filmBanner,
        addUserId,userId
    }
  return (
    <FilmsContext.Provider value= {value}>
        {children}
    </FilmsContext.Provider>
  )
}
