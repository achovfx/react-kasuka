import React from 'react'
import Feature from './Feature/Feature'
import './Features.css'

export default function Features() {
  return (
    <div className='features-container'>
        <div className="img">
            <img src="./img/features.jpg" alt="Feature img" />
        </div>
        <div className="featureItems">
            <Feature title="تبلیغ سختی است" desc="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"> </Feature>
            <Feature title="کدام یک از اینهاست" desc="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" />
            <Feature title="یا کور شده است" desc="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" />
            <Feature title="حقیقت مبارک" desc="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" />
        </div>
    </div>
  )
}
