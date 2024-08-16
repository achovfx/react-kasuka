import React from 'react';
import "./GoTop.css";

export default function GoTop() {
  return (
    <div className='goTop-Btn'>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>
  )
}

// Show || Hide - Button
window.addEventListener("scroll",()=>{
    let scrollYNumber = window.scrollY;
    if(scrollYNumber > 1300){
        document.querySelector(".goTop-Btn").classList.add("showGoTop");
    }else{
        document.querySelector(".goTop-Btn").classList.remove("showGoTop");
    }
})

// Go To Top Func
document.querySelector(".goTop-Btn").addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo(0,0);
})