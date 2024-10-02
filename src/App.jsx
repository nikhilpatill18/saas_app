import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <Hero />
            <Features />
            <Pricing />
        </div>
    )
}

export default App
