import Link from 'next/link';
import React from 'react';
import {LinePlot,LinePlot_invester,LinePlot_buppan,LinePlot_blog} from '../../components/chart/LinePlot';
// import {Doughnutchart,Doughnutchart_bank} from '../../components/chart/Doughnut';
import Mypage from '../../components/layout/mypage/mypage';


export default function Home() {
  return (
    <Mypage>
        <div className="">
            <div className="flex bg-green-200 justify-between  h-20 z-20 mr-4 items-center space-x-4 ">
                <div class="flex items-center">
                    <span className="mx-3 text-3xl">￥8,651,146</span>
                </div>
                <Link href="https://moneyforward.com/">
                    <div class="">
                        <span class="mx-3 text-3xl">MoneyForward</span>
                    </div>
                </Link>
            </div>

            <div className="float-left w-2/6 m-20">
                <Doughnutchart/>
                <Doughnutchart_bank />
            </div>
            <div className="float-left w-2/6 m-20">
                <LinePlot/>
                <LinePlot_invester/>
                <LinePlot_buppan/>
                <LinePlot_blog />
                <div class="flex justify-between m-10">
                    <Link href={`./index`}><button>Dashboard</button></Link>
                    <Link href={`./wisdom`}><button>Wisdom</button></Link>
                </div>
            </div>
        </div>

        </Mypage>
  )
}