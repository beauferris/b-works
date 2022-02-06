import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import ProjectInfo from './components/ProjectInfo';
import Model from './components/Model'
import './App.css'
import About from './components/About';

import Projects from './components/Projects';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Project from './components/Project';

export default function App() {

  return (
    <div className="App">
      <Router>
        <div className='info'>
          <div className='project-container'>
            <Link className='link' to='/'>hamzey</Link><br></br>
            <Link className='link' to='/Projects' >projects</Link>
          </div>

          <div className="social-media">
            <a href='https://github.com/' exact target="_blank" rel="noreferrer" className='link'>
              <img style={{ height: '50px' }} src='/images/github.svg' alt=''></img> </a>
          </div>
        </div>


        <Canvas className="model">
          <ambientLight intensity={0.4} />
          <directionalLight />
          <Suspense fallback={null}>
            <Model scale={1.2} position={[0, -6, 0]} />
          </Suspense>
        </Canvas>

        <Routes>
          <Route path='/' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' 
            element={<ProjectInfo  />} />
        </Routes>
      </Router>

      <p className='foot'>© 2021 Hamzey Beauferris. All Rights Reserved.</p> 
    </div>
  )
}

