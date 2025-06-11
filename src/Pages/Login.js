import React, { useEffect } from 'react'

export default function Login() {

  useEffect(()=>{
    localStorage.setItem("sang", "tin")
    sessionStorage.setItem("sang", "tin")
  })

  return (
    <div>
      this is login
    </div>
  )
}
