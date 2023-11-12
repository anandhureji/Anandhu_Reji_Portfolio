import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [brandName, setBrandName] = useState("Durgesh Kumar Tiwari");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 5,
    },
    {
      title: "About",
      link: "/About",
      id: 6,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });


  return (
    <>
    <div className=' h-20 border main flex justify-between items-center px-16 py-7 bg-gray-100'>
    <div>
    <h1 className='text-2xl font-bold'>Anandhu Reji</h1>
    </div>
    <div className='space-x-6'>
    
    {menuLinks.map(link=>(
      <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>
    ))}
  
    
    
    </div>
    <div>
    <button className='px-3 py-2 bg-orange-600 rounded-full text-1xl shadow'> Hire Me</button>
    </div>

    </div>
    </>
  )
}

export default App
