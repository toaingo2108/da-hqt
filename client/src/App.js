import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import HopDong from './components/hopDong/HopDong'
import Home from './components/page/Home'
import ContextProvider from './context'

const App = () => {
    return (
        <>
            <Router>
                <ContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hop-dong" element={<HopDong />} />
                    </Routes>
                </ContextProvider>
            </Router>
        </>
    )
}

export default App
