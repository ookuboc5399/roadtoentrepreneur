import React from 'react';
import {Line} from 'react-chartjs-2';

//revenue
const data_revenue = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '売上高',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_revenue= () => {
  return (
    <div>
      <h2>運動量(売上高)</h2>
      <Line
        data={data_revenue}
      />
    </div>
  );
}

//pretaxmargin
const data_pretaxmargin = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '税引前利益',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_pretaxmargin = () => {
  return (
    <div>
      <h2>運動成果(税引前利益)</h2>
      <Line
        data={data_pretaxmargin}
      />
    </div>
  );
}

//operatingcf
const data_operatingcf = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '営業CF',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};


export const LinePlot_operatingcf = () => {
  return (
    <div>
      <h2>血液生産量(営業CF)</h2>
      <Line
        data={data_operatingcf}
      />
    </div>
  );
}

//netincome
const data_netincome = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '純利益',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_netincome = () => {
  return (
    <div>
      <h2>純利益</h2>
      <Line
        data={data_netincome}
      />
    </div>
  );
}

//investingcf
const data_investingcf = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '投資CF',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_investingcf = () => {
  return (
    <div>
      <h2>筋トレ量(投資CF)</h2>
      <Line
        data={data_investingcf}
      />
    </div>
  );
}

//eps
const data_eps = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'EPS',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_eps = () => {
  return (
    <div>
      <h2>EPS</h2>
      <Line
        data={data_eps}
      />
    </div>
  );
}

//dividend
const data_dividend = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '年間配当額推移',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 0, 0, 0, 0, 55, 60, 75, 90, 95, 105, 110]
    }
  ]
};

export const LinePlot_dividend = () => {
  return (
    <div>
      <h2>年間配当額推移</h2>
      <Line
        data={data_dividend}
      />
    </div>
  );
}

//capitalratio
const data_capitalratio = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '自己資本比率',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_capitalratio = () => {
  return (
    <div>
      <h2>骨の太さ(自己資本比率)</h2>
      <Line
        data={data_capitalratio}
      />
    </div>
  );
}

//totalassets
const data_totalassets = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: '総資産',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_totalassets = () => {
  return (
    <div>
      <h2>体の大きさ(総資産)</h2>
      <Line
        data={data_totalassets}
      />
    </div>
  );
}

//blog
const data_blog = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Febrary', 'Octorber', 'Novenver', 'Decenver'],
  datasets: [
    {
      label: 'ブログ収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_blog = () => {
  return (
    <div>
      <h2>ブログ収支</h2>
      <Line
        data={data_blog}
      />
    </div>
  );
}

//buppan
const data_buppan = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Febrary', 'Octorber', 'Novenver', 'Decenver'],
  datasets: [
    {
      label: '物販収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_buppan = () => {
  return (
    <div>
      <h2>物販収支</h2>
      <Line
        data={data_buppan}
      />
    </div>
  );
}

//etfjapan
const data_etfjapan = {
  labels: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
  datasets: [
    {
      label: '日銀によるETF買い入れ額',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [284, 8003, 6397, 10953, 12845, 30694, 43820, 56069, 62100, 40880, 68450]
      
    }    
  ]
  
};

export const LinePlotetfjapan = () => {
  return (
    <div>
      <h2>日本銀行によるETF買い入れ額の推移</h2>
      <Line
        data={data_etfjapan}
      />
    </div>
  );
}

//etf
const data_etf = {
  labels: ['0年目', '3年目', '6年目', '9年目', '12年目', '15年目', '18年目', '21年目', '24年目', '27年目', '30年目'],
  datasets: [
    {
      label: '収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1000, 1092, 1194, 1304, 1425, 1557, 1702, 1860, 2032, 2221, 2427]
      
    }    
  ]
  
};

const data_etf2 = {
  labels: ['0年目', '3年目', '6年目', '9年目', '12年目', '15年目', '18年目', '21年目', '24年目', '27年目', '30年目'],
  datasets: [
    {
      label: '収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(254,97,132,0.8)',
      borderColor: 'rgba(254,97,132,0.8)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(254,97,132,0.8)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(254,97,132,0.8)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1000, 1061, 1126, 1195, 1268, 1345, 1428, 1515, 1608, 1706, 1811]
      
    }
    
  ]
  
};

export const LinePlotetf = () => {
  return (
    <div>
      <h2>収支</h2>
      <Line
        data={data_etf}
        data2={data_etf2}
      />
    </div>
  );
}

//invester
const data_invester = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Febrary', 'Octorber', 'Novenver', 'Decenver'],
  datasets: [
    {
      label: '投資収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot_invester = () => {
  return (
    <div>
      <h2>投資収支</h2>
      <Line
        data={data_invester}
      />
    </div>
  );
}

//
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Febrary', 'Octorber', 'Novenver', 'Decenver'],
  datasets: [
    {
      label: '収支',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48, 31, 34, 40, 48, 48]
    }
  ]
};

export const LinePlot = () => {
  return (
    <div>
      <h2>合計収支</h2>
      <Line
        data={data}
      />
    </div>
  );
}