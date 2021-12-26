import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import DirtyRead from './components/dirtyRead/DirtyRead'

import HopDong from './components/hopDong/HopDong'
import Home from './components/page/Home'
import Phantom from './components/phantom/Phantom'
import ContextProvider from './context'
import DirtyReadContextProvider from './context/dirtyRead'
import PhantomContextProvider from './context/phantom'

const App = () => {
    return (
        <>
            <Router>
                <ContextProvider>
                    <PhantomContextProvider>
                        <DirtyReadContextProvider>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/hop-dong" element={<HopDong />} />
                                <Route path="/phantom" element={<Phantom />} />
                                <Route
                                    path="/dirtyRead"
                                    element={<DirtyRead />}
                                />
                            </Routes>
                        </DirtyReadContextProvider>
                    </PhantomContextProvider>
                </ContextProvider>
            </Router>
        </>
    )
}

export default App
