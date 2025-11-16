import React from 'react'
import './Header.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.</p>

            <button><a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu === 'menu'?'active':''}>View Menu</a></button>
        </div>
        {/* <div>
        <h2>Order your favourite food here</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.</p>
        </div> */}

    </div>
  )
}

export default Header