import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
        </div>
    )
}

export default App
