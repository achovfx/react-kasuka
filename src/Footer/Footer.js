import React from 'react'
import Info from './Info/Info'
import Links from './Links/Links'
import Newspaper from './Newspaper/Newpaper'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='footer-container'>
        <div className="top">
            <Info />
            <Links title="لینک های مفید" link1="خانه" link2="درباره ما" link3="خدمات" link4="شرایط استفاده از خدمات" link5="سیاست حفط حریم خصوصی" />
            <Links title="خدمات ما" link1="طراحی وب سایت" link2="توسعه وب" link3="مدریت تولید" link4="بازاریابی" link5="طراحی گرافیک" />
            <Newspaper />
        </div>
        <div className="footer">
          <p className='copyright'>Kasuka همه حقوق محفوظ است</p>
          <p className='created'>طراحی شده توسط <span>Erfan Gandomrizi (Achovfx)</span></p>
        </div>
    </footer>
  )
}
