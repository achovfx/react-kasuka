import React from 'react';
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import HeaderBox from "./Box/Box";

export default function Header() {
  return (
    <header className='header-container'>
        <Navbar>
            <li className='active'>خانه</li>
            <li>درباره ما</li>
            <li>خدمات</li>
            <li>نمونه کار ها</li>
            <li>تیم</li>
            <li>لیست کشویی</li>
            <li>تماس با ما</li>
        </Navbar>
        
        <div className="headerMiddle">
            <div className="headerTitle">
                <h1>راه حل های قدرتمند دیجیتال با <p>Kasuka</p></h1>
                <div className="desc">
                    <p>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
                </div>
            </div>

            <div className="headerBoxs">
                <HeaderBox text="اطلاعات ذخیره شده" />
                <HeaderBox text="عملکرد های پایانی" />
                <HeaderBox text="نمونه کارها" />
                <HeaderBox text="نمودار کیفی" />
                <HeaderBox text="متن نمایشی" />
            </div>
        </div>
    </header>
  )
}
