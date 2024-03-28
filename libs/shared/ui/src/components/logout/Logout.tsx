"use client"

import { Auth } from "aws-amplify"

export default function LogoutBtn() {
  return (
    <li className='nav-item cursor-pointer' onClick={()=>{
        Auth.signOut()
        window.localStorage.clear()
        window.location.href = "/"
    }}>
    <a className='nav-link' >
      <div className='d-flex align-items-center'>
        <span className='nav-link-icon'>
          <i className="bi bi-box-arrow-left" />
        </span>
        <span className='nav-link-text'>Logout</span>
      </div>
    </a>
  </li>
  )
}
