import React from 'react'
import Navigation from './components/Navigation/Navigation'
import "./App.css"
import ContactHeader from './components/Navigation/ContactHeader/ContactHeader'
const App = () => {
  return (
    <div>
      <Navigation/>
      <ContactHeader/>
    </div>
  )
}

export default App