import { useState } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Flavor from './components/Flavor'
import Build from './components/Build'
import Catering from './components/Catering'
import Seasonal from './components/Seasonal'
import Loyalty from './components/Loyalty'
import {Routes, Route, Navigate} from 'react-router'
function App() {

  return (
    <>
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/flavors" element={<Flavor />} />
				<Route path="/build-yours" element={<Build />} />
				<Route path="/catering" element={<Catering />} />
				<Route path="/seasonal" element={<Seasonal />} />
				<Route path="/loyalty" element={<Loyalty />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</Layout>
    </>
  )
}

export default App
