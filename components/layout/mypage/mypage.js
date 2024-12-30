import React from 'react'
import Image from 'next/image';
import Dashboard from '../../chapter/mypage/dashboard';
import {Header_mypage} from '../../header/header';


export default function Mypage(props) {
  return (
    <div class="min-h-screen">
      <Header_mypage/>
      <div className="flex ">
        <div className="w-1/4">
          <Dashboard/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}