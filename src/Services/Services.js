import React from 'react'
import Service from './Service/Service'
import './Services.css'

export default function Services() {
  return (
    <div className='services-container'>
        <div className="title">
            <h2>خدمات</h2>
            <p>خدمات ما را بررسی کنید</p>
        </div>
        <div className="services">
            <Service title="دردهای بزرگ" desc="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <Service title="اما همانطور که مشاهده می کنید" desc="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <Service title="دردهای بزرگ" desc="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
        </div>
        <div className="services">
            <Service title="هیچکس دیگر" desc="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />
            <Service title="لولا را پاک کنید" desc="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <Service title="دیوا دان" desc="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />
        </div>
    </div>
  )
}
