import React from 'react'
import './Footer.css'
import card from '../../assets/card.svg';
import market from '../../assets/market.svg';
import fast from '../../assets/fast-delivery.svg';
import fird from '../../assets/return.svg';
import { MdPhone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube, FaWifi } from 'react-icons/fa'


function Footer() {
  return (
    <>
      <div className='footerFirst'>
        <div className="footerFirst_center">
          <div className="footerFirst_card salom1">
            <div className="footerFirst_card1">
              <img src={market} alt="" />
            </div>
            <div className="footerFirst_card2">
              <h2>Endi bozorga borishga hojat yo'q</h2>
              <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
            </div>
          </div>
          <div className="footerFirst_card salom">
            <div className="footerFirst_card1">
              <img src={fast} alt="" />
            </div>
            <div className="footerFirst_card2">
              <h2>Tez yetkazib berish</h2>
              <p>Bizning xizmatimiz sizni ajablantiradi</p>
            </div>
          </div>
          <div className="footerFirst_card">
            <div className="footerFirst_card1">
              <img src={fird} alt="" />
            </div>
            <div className="footerFirst_card2">
              <h2>Siz uchun qulayliklar</h2>
              <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
            </div>
          </div>
          <div className="footerFirst_card">
            <div className="footerFirst_card1">
              <img src={card} alt="" />
            </div>
            <div className="footerFirst_card2">
              <h2>Bo'lib to'lash</h2>
              <p>6 yoki 12 oy davomida oldindan to'lov yo'q</p>
            </div>
          </div>

        </div>
      </div>
      <div className="footerSecond">
        <div className="footerSecond_top">

          <div className="footerSecond_card1">
            <h2>Ma'lumotlar</h2>
            <p>Ko'p so'raladigan savollar</p>
            <p>Olib ketish punktlari</p>
            <p>Blog</p>
            <p>Bizning brendlarimiz</p>
            <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
            <p>Muddatli to'lov asosida sotib olishning umumiy qoidalari</p>
            <p>Biz haqimizda</p>
          </div>
          <div className="footerSecond_card2">
            <h2>Biz bilan aloqa</h2>
            <p> <MdPhone className='footerIcon' /> +998 94 050 44 50</p>
            <p> <AiOutlineMail className='footerIcon' />info@asaxiy.uz</p>
            <p><BiMap className='footerIcon' />Namangan.vil Kosonsoy.tum</p>
            <h2 className='kitob'>Kitob do'konlarimiz</h2>
            <p><BiMap className='footerIcon' />Asaxiy Novza</p>
            <p><BiMap className='footerIcon' />Asaxiy Farhod bozori</p>
            <p><BiMap className='footerIcon' />Asaxiy Panorama</p>
            <p><BiMap className='footerIcon' />Asaxiy Kitob Olami</p>
          </div>
          <div className="footerSecond_card3">
            <h2>Erishgan yutuqlarimiz</h2>
            <p>"Tahsin" mukofoti</p>
            <p>"Shuhrat" medali</p>
            <p>"Kelajak bunyodkori" medali</p>
            <h2 className='kitob2'> Biz ijtimoiy tarmoqlarda</h2>
            <span className='span'><FaFacebook className='ikonka' /> <FaTelegram className='ikonka' /> <FaInstagram className='ikonka' /> <FaYoutube className='ikonka' /> <FaWifi className='ikonka' /></span>
          </div>
          <div className="footerSecond_card4">
            <h2>To'lov turlari</h2>
            <div className="footerSecond_card4Card">
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="" />
              </div>
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
              </div>
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
              </div>
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
              </div>
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
              </div>
              <div className="tolov_turlari">
                <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
        <p className='dokon'>2015-2023 Internet-do'kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
      </div>
    </>
  )
}

export default Footer