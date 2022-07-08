import React,{useState,useEffect} from 'react'
import './Header.css'

function Header() {
    const [show, setShow] = useState(false)
  
    useEffect(() => {
          window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setShow(true)
            } else{setShow(false)}
          })
        
          return () => {
            window.removeEventListener("scroll",()=>{})
          }
        }, [])
    


 return(
    <div className={`nav ${show && 'nav-black'}`}>
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo" />

        <img className='nav_avatar' src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" alt="" />
    </div>
  )
}

export default Header


// 
  // 
    // 