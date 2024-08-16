import React from 'react'
import Count from './Count/Count';
import "./Counts.css"


export default function Counts() {
  return (
    <div className='counts-container'>
        <div className="img">
            <img src="./img/counts-img.jpg" alt="" />
        </div>

        <div className="details">
            <div className="title">
                <h3>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
            </div>
            <div className="counts">
                <Count title="65" desc="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم." icon="" />
                <Count title="85" desc="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد" icon="" />
                <Count title="35" desc="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد" icon="" />
                <Count title="20" desc="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند" icon="" />
            </div>
        </div>
    </div>
  )
}
