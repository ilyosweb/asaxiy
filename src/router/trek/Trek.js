import React from 'react'
import './Trek.css'

function Trek() {
  return (
    <div className='trek'>
      <div className="trek_card">
        <div className="trek_cart1">
          <h1>Buyurtma holati</h1>
          <p>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>

          <p>Buyurtma raqami*</p>
          <br />
          <input type="text" />
          <br /><br />
          <p>Buyurtma raqami*</p>
          <br />
          <input type="text" />

          <div className="cartcha">
            <div className="pitichka"></div>
            <p>Я не робот</p>
          </div>

          <button></button>
        </div>
        <div className="trek_cart2">
          <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Trek