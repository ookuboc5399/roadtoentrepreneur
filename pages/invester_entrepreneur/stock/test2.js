import Layout from '../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Header_invester from '../../../components/header_invester';
import LinePlot_netincome from '../../../components/chart/toyota/LinePlot_netincome';
import LinePlot_eps from '../../../components/chart/toyota/LinePlot_eps';
import LinePlot_revenue from '../../../components/chart/toyota/LinePlot_revenue';
import LinePlot_dividend from '../../../components/chart/toyota/LinePlot_dividend';



export default function Home() {
  return (
    <div>
      <div className='text-center text-3xl'>
        TOYOTA
      </div>
      <div className="w-full">
        <div className='text-left inline-block w-1/3'>

        </div>
        <div className='text-center inline-block w-1/3'>
          <div className='text-3xl'>企業概況</div>
          4輪世界首位
        </div>
        <div className='text-left inline-block w-1/3'>
        <LinePlot_netincome/>
        <LinePlot_eps/>
        <LinePlot_revenue/>
        <LinePlot_dividend/>
        </div>


      </div>
    </div>

  )
}