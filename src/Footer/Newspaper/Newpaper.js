import React from 'react'
import "./Newpaper.css"

export default function Newpaper() {
  return (
    <div className='newpaper-container'>

      <div className="title">
        <h2>خبرنامه ها</h2>
        <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
      </div>

      <form action="#">
        <input type="email" placeholder='ایمیل' />
        <input type="submit" value="دنبال کردن" />
      </form>
    </div>
  )
}
