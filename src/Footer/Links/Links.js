import React from 'react'
import "./Links.css"

const iconElem = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

export default function ServicesLink({title,link1,link2,link3,link4,link5}) {
  return (
    <div className='links-container'>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            {iconElem}
            <a href="#">{link1}</a>
          </li>
          <li>
            {iconElem}
            <a href="#">{link2}</a>
          </li>
          <li>
            {iconElem}
            <a href="#">{link3}</a>
          </li>
          <li>
            {iconElem}
            <a href="#">{link4}</a>
          </li>
          <li>
            {iconElem}
            <a href="#">{link5}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
