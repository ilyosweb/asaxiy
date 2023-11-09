import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'
import { BsCreditCard } from 'react-icons/bs'
import { LiaCarSideSolid } from 'react-icons/lia'
import { PiShoppingCartSimple } from 'react-icons/pi'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlGlobe } from 'react-icons/sl'
import { LuUser } from 'react-icons/lu'



function Navbar() {
  return (
    <>
      <div className='navbar'>
        <NavLink className="logo" to={"/home"}>  <div >
          <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
        </div></NavLink>

        <button className="nav_btn">
          <span>

            <VscMenu className='nav_btnIcon' />
            <h2>Bo'limlar</h2>
          </span>
        </button>


        <div className="search">
          <input type="text" placeholder='Qidirish...' />
          <button>Qidirish</button>
        </div>

        <div className="icons">
          <div className="iconka">
            <NavLink className="iconka" to={"/tolov"}>
              <BsCreditCard className='navIcon' />
              To'lov
            </NavLink>
          </div>
          <div className="iconka">
            <NavLink className="iconka" to={"/trek"}>
              <LiaCarSideSolid className='navIcon' />
              Trek
            </NavLink>
          </div>
          <div className="iconka"><div>0</div>
            <PiShoppingCartSimple className='navIcon' />
            Savatcha
          </div>
          <div className="iconka"><div>0</div>
            <AiOutlineHeart className='navIcon' />
            Sevimlilar
          </div>
          <div className="iconka">
            <SlGlobe className='navIcon til' />
            Tillar
          </div>
          <div className="iconka">
            <LuUser className='navIcon' />
            Kirish
          </div>
        </div>



      </div>
      <div className="navbar_bottom">
        <h2>Chegirmalar</h2>
        <h2>Sport buyumlari</h2>
        <h2>Yangi kelganlar</h2>
        <h2>Kitoblar</h2>
        <h2>Telefon va gatjetlar</h2>
        <h2>Noutbuklar</h2>
        <h2>Maishiy texnika</h2>
      </div>
    </>
  )
}

export default Navbar