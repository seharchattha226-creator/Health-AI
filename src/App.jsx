import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AIForm from './Components/AIForm'
import BMI from './Components/BMI'
import MealPlan from './Components/MealPlan'
import AIChat from './Components/AIChat'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AIForm/>
      <BMI/>
      <MealPlan/>
      <AIChat/>
      <Footer/>
    </div>
  )
}

export default App