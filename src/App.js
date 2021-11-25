import React from 'react'
import './style.css';
import Header from './Header'
import Main from './MainComponents/Main'
import Footer from './Footer'


function App() {
    return (
        <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
        </div>
    )
}


export default App