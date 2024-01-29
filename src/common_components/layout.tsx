import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout(props:any) {
  return (
    <div className='layout'>
      <div className='headerWrap'>header</div>
      <div className='navWrap'>nav</div>
      <div className='outletWrap'>
        <Outlet/>
      </div>
    </div>
  )
}
