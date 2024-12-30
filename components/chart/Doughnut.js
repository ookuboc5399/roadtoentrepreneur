import React from 'react';
import { Doughnut } from 'react-chartjs-2';

//Doughnutchart
 const graphdata = {
   datasets: [
     {
       data: [15, 25, 35],
       backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
     },
   ],
   labels: ['仮想通貨', '国債', '株式'],
 };

 const doughnutOptions = {
   legend: {
     display: false,
   },
   plugins: {
     doughnutlabel: {
       labels: [
         {
           text: 'ITEMS',
           color: '#666666',
           font: {
             size: 30,
           },
         },
         {
           text: 'TEST',
           color: '#888888',
         },
       ],
     },
   },
 };

export const Doughnutchart = () => {
    return (
      <div>
        <h2>ポートフォリオ</h2>
        <Doughnut
          data={graphdata}
        />
      </div>
    );
  }
  

//Doughnutstock_japan
const graphdata_japan = {
  datasets: [
    {
      data: [54.3, 1.4, 4.3, 10.0, 27.4, 2.7],
      backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
    },
  ],
  labels: ['現金・預金', '債務証券', '投資信託', '株式等', '保険・年金・定型保証', 'その他'],
};

const doughnutOptions_japan = {
  legend: {
    display: false,
  },
  plugins: {
    doughnutlabel: {
      labels: [
        {
          text: 'ITEMS',
          color: '#666666',
          font: {
            size: 30,
          },
        },
        {
          text: 'TEST',
          color: '#888888',
        },
      ],
    },
  },
};

export const Doughnutstock_japan = () => {
   return (
     <div>
       <h2>日本</h2>
       <Doughnut
         data={graphdata_japan}
       />
     </div>
   );
 }

//Doughnutstock_euro
const graphdata_euro = {
  datasets: [
    {
      data: [34.3, 1.8, 9.6, 18.2, 33.8, 2.3],
      backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
    },
  ],
  labels: ['現金・預金', '債務証券', '投資信託', '株式等', '保険・年金・定型保証', 'その他'],
};

const doughnutOptions_euro = {
  legend: {
    display: false,
  },
  plugins: {
    doughnutlabel: {
      labels: [
        {
          text: 'ITEMS',
          color: '#666666',
          font: {
            size: 30,
          },
        },
        {
          text: 'TEST',
          color: '#888888',
        },
      ],
    },
  },
};

export const Doughnutstock_euro = () => {
   return (
     <div>
       <h2>ユーロ</h2>
       <Doughnut
         data={graphdata_euro}
       />
     </div>
   );
 }

//Doughnutstock_america
const graphdata_america = {
  datasets: [
    {
      data: [13.3, 4.2, 13.2, 37.8, 29.0, 2.5],
      backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
    },
  ],
  labels: ['現金・預金', '債務証券', '投資信託', '株式等', '保険・年金・定型保証', 'その他'],
};

const doughnutOptions_america = {
  legend: {
    display: false,
  },
  plugins: {
    doughnutlabel: {
      labels: [
        {
          text: 'ITEMS',
          color: '#666666',
          font: {
            size: 30,
          },
        },
        {
          text: 'TEST',
          color: '#888888',
        },
      ],
    },
  },
};

export const Doughnutstock_america = () => {
   return (
     <div>
       <h2>アメリカ</h2>
       <Doughnut
         data={graphdata_america}
       />
     </div>
   );
 }

//Doughnutchart_bank
const graphdata_bank = {
  datasets: [
    {
      data: [10, 10, 3, 0.3, 5, 0.3, 0.2],
      backgroundColor: ['#B9D8F7', '#BDF7B9', '#FFE5EC', '#F7F1B9','#E0B9F7', '#B9F7E6',  '#DEDFE0'],
    },
  ],
  labels: ['Exness', 'XMTrading', 'IFCMarkets','BINANCE','楽天証券','SBI証券','bitwallet'],
};

const doughnutOptions_bank = {
  legend: {
    display: false,
  },
  plugins: {
    doughnutlabel: {
      labels: [
        {
          text: 'ITEMS',
          color: '#666666',
          font: {
            size: 30,
          },
        },
        {
          text: 'TEST',
          color: '#888888',
        },
      ],
    },
  },
};

export const Doughnutchart_bank = () => {
 const sum =28.8*100
   return (
     <div>
       <h2>ポートフォリオ口座別(百万円)</h2>
       <h3>{sum}(万円)</h3>
       <Doughnut
         data={graphdata_bank}
       />
     </div>
   );
 }

//Doughnutchart