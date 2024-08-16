import React from 'react';
import Team from './Team/Team';
import "./Teams.css";

export default function Teams() {
  return (
    <div className='teams-container'>
        <div className="title">
            <h2>تیم</h2>
            <p>تیم ما را بررسی کنید</p>
        </div>
        <div className="teams">
            <Team name="عرفان گندمریزی" role="برنامه نویس" img="./img/team-1.jpg" />
            <Team name="والتر وایت" role="مدیر ارشد اجرایی" img="./img/team-2.jpg" />
            <Team name="مانکی دی لوفی" role="مدیر تولید" img="./img/team-3.jpg" />
            <Team name="ناروتو اوزوماکی" role="حسابدار" img="./img/team-4.jpg" />
        </div>
    </div>
  )
}
