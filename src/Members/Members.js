import React from 'react';
import "./Members.css";

export default function Members() {
  return (
    <div className='members-container'>
        <div className="profile">
            <img src="./img/member.jpg" alt="Members" />
            <h4>حسین گندمریزی</h4>
            <p>برنامه نویس</p>
        </div>
        <div className="desc">
          <p>زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از بسیاری ندارد ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.</p>
        </div>
    </div>
  )
}
