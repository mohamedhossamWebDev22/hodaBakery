import React from 'react'
import NaviBar from '../components/navBar'
import Foot from '../components/foot'
import Animator from '../components/Animator'

export default function Contact() {
  return (
    <>
      <NaviBar/>
      <Animator>
        <div className="my-5 py-5 text-center">
          <div className="my-5">
            <h1 className="font-title display-1">هيبقى موجود قريب</h1>
          </div>
        </div>
      </Animator>
      <Foot/>
    </>
  )
}
