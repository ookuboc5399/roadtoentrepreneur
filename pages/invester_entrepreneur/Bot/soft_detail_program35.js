import Layout from '../../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Soft from '../../../components/layout/invester/bot/soft_detail_program';


export default function Home() {
  return (
    <Soft>
      <h4>決済</h4>
      <p>「Ticket_Sが0ではなく-1でもない場合に」、つまり「Ticket_S」に5010000などの約定番号がはいっているときにエグジット注文が発注されるわけです。</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>

      <div className='flex'>
        <div className='m-4 w-1/2'>
          <Bot1 />
        </div>
        <div className='m-4 w-1/2'>
          <p></p>
          <p></p>
          <Bot2 />
        </div>
      </div>
      <h3>利食い</h3>
      <div className='flex'>
        <div className='m-4 w-1/2'>
          <p>。</p>
          <p>。</p>
          <Bot6 />
        </div>
        <div className='m-4 w-1/2'>
          <p></p>
          <p></p>
          <Bot7 />
        </div>
      </div>
      <p className='text-red-400'>常に0.01または0.0001を返してくれる関数</p>
      <Bot2 />
      <p>文字列のパラメーターCurrencyはポイント値を計算する対象となる通貨ペアのシンボルである。</p>
      <p>関数MarketInfo()のパラメーターにMODE_DIGITSを入力するとその通貨ペアの小数点以下の桁数を返してくる。</p>
      <p>if-else文は小数点以下の桁数に基づいて変数CalcPointに適切なポイント値を代入する</p>
      <div className='flex'>
        <div className='m-4 w-1/2'>
          <p>EURUSD</p>
          <p>結果は0.0001</p>
          <Bot3 />
        </div>
        <div className='m-4 w-1/2'>
          <p>USDJPY</p>
          <p>結果は0.01</p>
          <Bot4 />
        </div>
      </div>
      <div className="text-center">
        <div className="text-3xl m-4">
          関連記事
        </div>
        <div class="flex flex-nowrap">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数MarketInfo()</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="http://www.agile-software.site/2021/07/10/django-summernote/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OrderClose()</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="http://www.agile-software.site/2022/05/21/%e9%96%a2%e6%95%b0orderclose/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
      <p className='text-red-400'>売ったポジションの損切</p>

      <p>OP_SELLは売りの成行き注文であることを示している。</p>
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>逆指値注文</div>
      <p className='text-red-400'>買い</p>

      <p>。</p>
      <p>ry」です。</p>
      <p>Fy」です。</p>
      <p className='text-red-400'>売り</p>
      <Bot5 />

      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>指値注文</div>
      <p className='text-red-400'>買い</p>
      <Bot6 />
      <p className='text-red-400'>売り</p>
      <Bot7 />
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>注文やポジションの情報の取得</div>
      <p>注文を出した後、注文の変更やポジションの決済を行うには、まずその注文やポジションの状態を調べる必要がある。</p>
      <p>そのためにはまず関数OrderSelect()を使って対象となる注文やポジションを選択しなければならない。</p>
            <p>選択方法としては注文番号であるチケット番号で選択する方法とインデックス(オーダープールの中における位置)で選択する方法がある。</p>
      <p>関数OrderSelect()は注文やポジションの選択に成功すればtrueを返し、失敗すればfalseを返してくる。</p>
      <p>Fy」です。</p>
      <div className="text-center">
        <div className="text-3xl m-4">
          関連記事
        </div>
        <div class="flex flex-nowrap">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数OrderSelect()</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="http://www.agile-software.site/2021/07/10/django-summernote/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </Soft>
  )
}





const Bot1 = () => {
  const test = `
  //エグジット
  if(Ticket_S!=0 && Ticket_S!=-1)
    {
      OrderClose(Ticket_S,1,Ask,10,Blue);
    }
    return(0);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot2 = () => {
  const test = `
  もし売りポジションを持っている場合
  {
    決済注文を出します
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot3 = () => {
  const test = `
  int Exit_S=0;//決済注文の結果をキャッチする変数

  int start()
    {
      Exit_S=OrderClose(Ticket_S,1,Ask,10,Blue);

  return(0);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot4 = () => {
  const test = `
  整数を入れる「Exit_S」という変数を用意します。最初は「0」と設定します

  メインのプログラムが始まります
    {
      決済注文を出します。約定結果はExit_Sに入れます。

  プログラムを終わります
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot5 = () => {
  const test = `
  double OpenPrice = Bid;
  if(StopLoss>0" double SellStopLoss = OpenPrice + (StopLoss * UsePoint)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
  if(TakeProfit > 0) double BuyTakeProfit = OpenPrice + (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot7 = () => {
  const test = `
  if(TakeProfit > 0) double SellTakeProfit = OpenPrice - (TakeProfit * UsePoint);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};