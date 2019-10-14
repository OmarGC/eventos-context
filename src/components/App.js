import React, { Fragment } from 'react'
import './App.css'
import Header from './Header/Header'
import FormClassComponent from './Formulario/FormClassComponent'
import CategoriasProvider from '../context/CategoriasContext'

const App = () => {
  return (
    <CategoriasProvider>
      <Header />
      <div className="uk-container">
        <FormClassComponent />
      </div>
    </CategoriasProvider>
  )
}

export default App

