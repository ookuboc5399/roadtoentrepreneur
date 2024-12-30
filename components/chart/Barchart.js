import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

//
const data = {
  // x 軸のラベル
  labels: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月'],
  datasets: [
    {
      label: 'Dataset',
      // データの値
      data: [65, 59, 80, 81, 56, 55, 40],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
    },
  ],
};

export const Barchart = () => {
  return (
    <div>
      <h2>収支</h2>
      <Bar
        data={data}
      />
    </div>
  );
}

//Barchartvc
const data_vc = {
  // x 軸のラベル
  labels: ['2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
  datasets: [
    {
      label: 'VC投資金額',
      // データの値
      data: [260, 300, 370, 460, 500, 360, 470, 650, 610, 720, 1130, 1510, 1590, 1830, 3080, 2570, 3210],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
    },

  ],
};

export const Barchartvc = () => {
  return (
    <div>
      <h2>グローバルのVC投資金額の推移</h2>
      <Bar
        data={data_vc}
      />
    </div>
  );
}

//Barchartpan
const data_pan = {
  labels: ['コストコ'],
  datasets: [
    {
      label: '売上原価',
      data: [87],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
    },
    {
      label: '販管費',
      data: [10],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
      ],
    },
    {
      label: '営業利益',
      data: [3],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
    },
  ],
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  }
};

export const Barchartpan = () => {
  return (
    <div>
      <h2>収支</h2>
      <Bar
        data={data_pan}
      />
    </div>
  );
}

//Barchartetf
const data_etf = {
  // x 軸のラベル
  labels: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
  datasets: [
    {
      label: '新興国株式',
      // データの値
      data: [5.46, -21.94, 32.12, 18.97, 12.31, -14.56, 7.79, 33.63, -15.76, 17.35, 12.12],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
    },
    {
      label: '国内債券',
      data: [2.44, 1.87, 1.86, 1.99, 4.25, 1.07, 2.97, 0.18, 0.95, 1.56, -0.75],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1,
    },
    {
      label: '国内株式',
      data: [0.96, -17.0, 20.86, 54.41, 10.27, 12.06, 0.31, 22.23, -15.97, 18.12, 7.39],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgb(75, 192, 192)',
      ],
      borderWidth: 1,
    },
    {
      label: '新興国債券',
      data: [-0.69, 2.41, 30.79, 15.33, 22.88, 1.23, 6.39, 6.95, -5.95, 13.54, -0.56],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgb(54, 162, 235)',
      ],
      borderWidth: 1,
    },
    {
      label: '先進国株式',
      data: [-0.91, -8.40, 30.7, 55.04, 21.69, -1.17, 4.98, 19.26, -9.41, 27.51, 10.18],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1,
    },
    {
      label: '先進国債券',
      data: [-11.3, 0.77, 19.33, 22.92, 16.76, -4.8, -3.42, 5.20, -3.68, 5.14, 5.33,],
      backgroundColor: [
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
};

export const Barchartetf = () => {
  return (
    <div>
      <h2>収支</h2>
      <Bar
        data={data_etf}
      />
    </div>
  );
}

//Barchart_entre
const data_entre = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgb(11,227,210)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,0,54,0.4)',
      hoverBorderColor: 'rgb(0,88,101)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export const Barchart_entre = () => {
  return (
    <div>
      <h2>収支</h2>
      <HorizontalBar
        data={data_entre}
      />
    </div>
  );
}
  //Barchartvc

  //Barchartvc