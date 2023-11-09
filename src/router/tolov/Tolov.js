import React from 'react'
import "./Tolov.css"

function Tolov() {
  return (
    <div className='tolov'>
      <div className="card">
        <h1>To'lov</h1>
        <p>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
        <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' />
        <button>Tasdiqlash</button>
        <h6>B - buyurtma uchun</h6>
        <h6>A - akkount uchun</h6>
        <h6>M - rassrochkani so'ndirish uchun</h6>
      </div>
    </div>
  )
}

export default Tolov