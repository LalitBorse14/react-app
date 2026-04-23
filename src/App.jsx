import React, {useState, useEffect} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App(){
  const [route, setRoute] = useState(window.location.hash || '#/home')

  useEffect(()=>{
    const onHash = ()=> setRoute(window.location.hash || '#/home')
    window.addEventListener('hashchange', onHash)
    return ()=> window.removeEventListener('hashchange', onHash)
  },[])

  let Page = Home
  if(route === '#/about') Page = About
  else if(route === '#/gallery') Page = Gallery
  else if(route === '#/contact') Page = Contact

  return (
    <div>
      

      <main>
        <Page />
      </main>
    </div>
  )
}
