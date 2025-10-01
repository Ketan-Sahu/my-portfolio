import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'


const Home = lazy(() => import('./pages/Home'))
// If you want separate pages: About, Projects, Contact etc. lazy-load them too.


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</Suspense>
</main>
<Footer />
</div>
)
}