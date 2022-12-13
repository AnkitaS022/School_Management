import './App.css'
import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Team from './components/team/Team'
import FAQS from './components/FAQ/FAQS'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'



function App() {
  return (
    <>
    <Router>
       <Header />
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        <Route path='/team' exact component={Team} />
        <Route path='/FAQs' exact component={FAQS}/>
        <Route path='/contact' exact component={Contact}/>
        
       </Switch>
       <Footer />
     </Router>
    </>
  )
}

export default App