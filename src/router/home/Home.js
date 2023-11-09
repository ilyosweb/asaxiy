import React from 'react'
import { PRODUCTS } from '../../static'
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import './Home.css'

function Home() {
  return (
    <div className='purchases'>
      {
        PRODUCTS.map((item) =>
          <div key={item.id} className='purchases_cards'>
            <img src={item.foto} alt="" />
            <div className='foiz'><h3>Yangi</h3></div>
            <button className='like'><FiHeart /></button>
            <h2>{item.nomi}</h2>
            <del>{item.del}</del>
            <h3 className='narx'>{item.narx}</h3>
            <button className='nasiya'>{item.nasiya}</button>

            <div className="button">
              <button className='harid'>Muddatli to'lov</button>
              <button className='savat'><FiShoppingCart /></button>
            </div>
          </div>)
      }
    </div>
  )
}

export default Home