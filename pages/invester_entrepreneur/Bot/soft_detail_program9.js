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
      <h4>iCustom関数</h4>
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>iCustom関数を使ってRSIシステムを構築</div>
       <h5>条件</h5>
      <p>買いエントリー：RSIが30以下になった場合</p>
      <p>買いポジションの決済：RSIが70以上になった場合</p>
      <p>売りエントリー：RSIが70以上になった場合</p>
      <p>売りポジションの決済：RSIが30以下になった場合</p>
      <h5>条件文を記述</h5>
      <div className='text-xl text-red-600'></div>
      <div className='flex'>
        <div className='m-4 w-1/2'>
          <Bot1 />
        </div>
        <div className='m-4 w-1/2'>
          <Bot2 />
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">iCustom関数</h5>
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
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>iCustom関数を使ってボリンジャーバンドを構築</div>
       <h5>条件</h5>
      <p>買いエントリー：バー(ローソク足)の終値が下バンドを下回った場合</p>
      <p>買いポジションの決済：バーの終値が上バンドを上回った場合</p>
      <p>売りエントリー：バーの終値が上バンドを上回った場合</p>
      <p>売りポジションの決済：バーの終値が下バンドを下回った場合</p>
      <h5>条件</h5>
      <p>Bandsのパラメーター数は3つあります</p>
      <p>BandsPeriod：ボリンジャーバンドの期間設定。初期値20。</p>
      <p>BandsShift：ボリンジャーバンドを右にシフトする設定。初期値0。</p>
      <p>BandsDeviations：標準偏差の設定。初期値2.0。</p>
      <h5>条件文を記述</h5>
      <div className='text-xl text-red-600'></div>
      <div className='flex'>
        <div className='m-4 w-1/2'>
          <Bot3 />
        </div>
        <div className='m-4 w-1/2'>
          <Bot4 />
        </div>

      </div>
    </Soft>
  )
}





const Bot1 = () => {
  const test = `
  #define MAGIC 2424

  // パラメーターの設定//
  extern double Lots = 1.0; // 取引ロット数
  extern int Slip = 10; // 許容スリッページ数
  extern string Comments = ""; // コメント
  
  // 変数の設定//
  int Ticket_L = 0; // 買い注文の結果をキャッチする変数
  int Ticket_S = 0; // 売り注文の結果をキャッチする変数
  int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
  int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数
  
  int start()
  {
  
     // 買いポジションのエグジット
     if(   iCustom(NULL,0,"RSI",12,0,1) >= 70
        && ( Ticket_L != 0 && Ticket_L != -1 ))
        {
           Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
           if( Exit_L == 1 ) {Ticket_L = 0;}
        }
     
     // 売りポジションのエグジット
     if(   iCustom(NULL,0,"RSI",12,0,1) <=30
        && ( Ticket_S != 0 && Ticket_S != -1 ))
        {
           Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
           if( Exit_S == 1 ) {Ticket_S = 0;}
        }
        
     // 買いエントリー
     if(   iCustom(NULL,0,"RSI",12,0,1) > <=30
        && ( Ticket_L == 0 || Ticket_L == -1 )
        && ( Ticket_S == 0 || Ticket_S == -1 ))
        {
           Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
        }
        
     // 売りエントリー
     if(   iCustom(NULL,0,"RSI",12,0,1) >= 70
        && ( Ticket_S == 0 || Ticket_S == -1 )
        && ( Ticket_L == 0 || Ticket_L == -1 ))
        {
           Ticket_S = OrderSend(Symbol(),OP_SELL,Lots,Bid,Slip,0,0,Comments,MAGIC,0,Blue);
        }
        
  return(0);
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot2 = () => {
  const test = `
  //マジックナンバーの定義
  システム(プログラム)に2424と名前を付けました

  // パラメーターの設定//
  取引ロット数をパラメーター化します。最初は1.0ロットと設定
  許容スリッページをパラメーター化します。最初は10と設定
  注文に付けるコメントをパラメーター化します。最初は空欄に設定
  
  // 変数の設定//
  整数を入れる「Ticket_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_S」という変数を用意します。最初は「0」と設定
  
  メインのプログラムが始まります。
  {
  
     // 買いポジションのエグジット
     もしRSIが70以上、
        かつ、買いポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Lに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Lを0にします。
        }
     
     // 売りポジションのエグジット
     もしRSIが30以下、
        かつ、売りポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Sに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Sを0にします。
        }
        
     // 買いエントリー
     もしRSIが30以下、
        かつ、買いポジションを持っていない、
        かつ、売りポジションを持っていない場合、
        {
           買い注文を出します。約定結果はTicket_Lに入れます。
        }
        
     // 売りエントリー
     もしRSIが70以上、
       かつ、買いポジションを持っていない、
       かつ、売りポジションを持っていない場合、
        {
           売り注文を出します。約定結果はTicket_Sに入れます。
        }
        
  プログラムを終わります
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
  //マジックナンバーの定義
  システム(プログラム)に2424と名前を付けました

  // パラメーターの設定//
  取引ロット数をパラメーター化します。最初は1.0ロットと設定
  許容スリッページをパラメーター化します。最初は10と設定
  注文に付けるコメントをパラメーター化します。最初は空欄に設定
  
  // 変数の設定//
  整数を入れる「Ticket_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_S」という変数を用意します。最初は「0」と設定
  
  メインのプログラムが始まります。
  {
  
     // 買いポジションのエグジット
     もしRSIが70以上、
        かつ、買いポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Lに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Lを0にします。
        }
     
     // 売りポジションのエグジット
     もしRSIが30以下、
        かつ、売りポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Sに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Sを0にします。
        }
        
     // 買いエントリー
     もしRSIが30以下、
        かつ、買いポジションを持っていない、
        かつ、売りポジションを持っていない場合、
        {
           買い注文を出します。約定結果はTicket_Lに入れます。
        }
        
     // 売りエントリー
     もしRSIが70以上、
       かつ、買いポジションを持っていない、
       かつ、売りポジションを持っていない場合、
        {
           売り注文を出します。約定結果はTicket_Sに入れます。
        }
        
  プログラムを終わります
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
  //マジックナンバーの定義
  システム(プログラム)に2424と名前を付けました

  // パラメーターの設定//
  取引ロット数をパラメーター化します。最初は1.0ロットと設定
  許容スリッページをパラメーター化します。最初は10と設定
  注文に付けるコメントをパラメーター化します。最初は空欄に設定
  
  // 変数の設定//
  整数を入れる「Ticket_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Ticket_S」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_L」という変数を用意します。最初は「0」と設定
  整数を入れる「Exit_S」という変数を用意します。最初は「0」と設定
  
  メインのプログラムが始まります。
  {
  
     // 買いポジションのエグジット
     もしRSIが70以上、
        かつ、買いポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Lに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Lを0にします。
        }
     
     // 売りポジションのエグジット
     もしRSIが30以下、
        かつ、売りポジションを持っている場合
        {
           決済注文を出します。約定結果はExit_Sに入れます。
           もし決済に成功した場合、もう決済注文を出さないようにTicket_Sを0にします。
        }
        
     // 買いエントリー
     もしRSIが30以下、
        かつ、買いポジションを持っていない、
        かつ、売りポジションを持っていない場合、
        {
           買い注文を出します。約定結果はTicket_Lに入れます。
        }
        
     // 売りエントリー
     もしRSIが70以上、
       かつ、買いポジションを持っていない、
       かつ、売りポジションを持っていない場合、
        {
           売り注文を出します。約定結果はTicket_Sに入れます。
        }
        
  プログラムを終わります
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
