import React from 'react';
import Portfolio from './Portfolio/Portfolio';
import "./Portfolios.css";

export default function Portfolios() {
  return (
    <div className='portfolios-container'>
      <div className="title">
            <h2>نمونه کارها</h2>
            <p>نمونه کارها را بررسی کنید</p>
      </div>

      <div className="btns">
        <ul>
          <li className='active'>همه</li>
          <li>برنامه</li>
          <li>محصول</li>
          <li>اینترنت</li>
        </ul>
      </div>

      <div className="portfolios">
        <Portfolio title="برنامه 1" category="برنامه" image="./img/portfolio-1.jpg" />
        <Portfolio title="اینترنت 1" category="اینترنت" image="./img/portfolio-2.jpg" />
        <Portfolio title="محصول 1" category="محصول" image="./img/portfolio-3.jpg" />
        <Portfolio title="برنامه 2" category="برنامه" image="./img/portfolio-5.jpg" />
        <Portfolio title="محصول 2" category="محصول" image="./img/portfolio-8.jpg" />
        <Portfolio title="برنامه 3" category="برنامه" image="./img/portfolio-6.jpg" />
      </div>

    </div>
  )
}
