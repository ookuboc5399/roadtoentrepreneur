import React from 'react';
import {Stock_detail} from '../../../components/layout/invester/invester';
import Form_Stock from '../../../components/form.js/stock_detail_brand_sector';

export default function Home() {
  return (
    <div className='h-full'>

        <Form_Stock />
      <div className="flex">
        <div className='m-4 w-1/3'>
          <p className='text-xl'>時価総額ランキング</p>
          <table class="table-auto border-2 border-green-400">
            <thead>
              <tr>
                <th>コード</th>
                <th>企業名</th>
                <th>業種</th>
                <th>時価総額(百万HK$)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00700</td>
                <td>テンセント</td>
                <td>IT・ソフトウェア</td>
                <td>4,485,290 </td>
              </tr>
              <tr>
                <td>09988</td>
                <td>アリババ集団</td>
                <td>IT・ソフトウェア</td>
                <td>3,467,801</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className='m-4 w-1/3'>
          <p className='text-xl'>高ROEランキング</p>
          <table class="table-auto border-2 border-green-400">
            <thead>
              <tr>
                <th>コード</th>
                <th>企業名</th>
                <th>業種</th>
                <th>ROE(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01919</td>
                <td>中遠海運</td>
                <td>運輸・倉庫</td>
                <td>91.93</td>
              </tr>
              <tr>
                <td>00135</td>
                <td>昆能源</td>
                <td>石油・石炭</td>
                <td>76.31</td>
              </tr>

            </tbody>
          </table>

        </div>
        <div className='m-4 w-1/3'>
          <p className='text-xl'>高ROAランキング</p>
          <table class="table-auto border-2 border-green-400">
            <thead>
              <tr>
                <th>コード</th>
                <th>企業名</th>
                <th>業種</th>
                <th>ROA(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01177</td>
                <td>中国生物製薬</td>
                <td>医薬・バイオ</td>
                <td>30.18 </td>
              </tr>
              <tr>
                <td>06969</td>
                <td>思摩国際</td>
                <td>その他製造</td>
                <td>28.09</td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}