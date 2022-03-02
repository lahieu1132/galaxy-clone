import React from 'react'
import '../index.css'
import SignUp from './SignUp'
import {AuthProvider} from '../contexts/AuthContext'
import {FilmsProvider} from '../contexts/FilmsContext'
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import PlayFilm from './pages/PlayFilm'
import {ListsProvider} from '../contexts/ListsContext'

function App() {
 

  return (
    
      <div className="App ">
        <AuthProvider>
          <FilmsProvider>
            <ListsProvider>
              <Routes>
                  <Route
              path="/*"
              element={
                <PrivateRoute redirectTo="/login">
                  <Dashboard />
                </PrivateRoute>
              }
              />
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/playfilm' exact element={<PlayFilm />}/>
                <Route path='/playfilm/:id' element={<PlayFilm />}/>
              </Routes>
            </ListsProvider>
          </FilmsProvider>
        </AuthProvider>
      </div>
    
    
  );
}

export default App;
