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
      <h4>日付時刻型変数</h4>
      <p>MQL4では日付時刻型変数は1970年1月1日空経過した秒数で表される。例えば2009年6月15日の午前0時は1245024000となる</p>
      <p>日時を表すこの形式の利点は過去と未来の時間の比較および数学的操作が簡単に行えることだ</p>
      <p></p>
      <h4>日付時刻定数</h4>
      <p>日付時刻定数は日時をyyyy.mm.dd hh:mmという文字列の形式で表したものだ。</p>
      <p>例えば2009年6月15日の午前0時をこの形式で表すと2009.06.15 0:00になる。</p>
      <p>日付型変数を文字列の定数に変換するには関数TimeToStr()を使う</p>
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">関数TimeToStr()</h5>
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
      <h4>日付時刻関数</h4>
      <p>現在の時間を返す関数は2つある。関数TimeCurrent()と関数TimeLocal()だ。</p>
      <p>関数TimeCurrent()は現在のサーバー時間を返し、関数TimeLocal()はあなたのコンピューター時間(ローカル時間)を返す。</p>
      <p>CurrentTimeという名前の変数に現在のローカル時間とサーバー時間のいずれかを代入する</p>
      <Bot1 />
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>タイマーの作成</div>
      <p>MQLでは日時を使ってタイマーを作成することが出来る。</p>
      <p>トレーダーによってはトレーディングを1日のうちで市場が最もアクティブな時間帯だけに限定したり、材料が出たり、非農業部門雇用者数が発表されたりして、市場ボラティリティーが高まる時間帯でのトレーディングは避けたいと考える人がいる</p>
      <p>そんな時に便利なのがタイマーだ。</p>

      <Bot2 />
      <p>TradeAllowedは新規トレードを行うかどうかを決定するためのものだ。UseTimerがfalseに設定されていればTradeAllowedは自動的にtrueに設定される</p>
      <p>そうでないときは開始時間と終了時間を現在の時間と比較してトレーディングを許可するかどうかを決定する。</p>
      <p>まず開始時間を日付時刻型変数StartTimeに変換する。if(StartMonth ==12&&StartDay == 31&&EndMonth ==1)で開始日と終了日で年をまたいでいるかどうかを調べる</p>
      <p>もしそうなら最終年は自動的に1だけ増える。そうでない場合は現在の年としてEndYearを使う。</p>
      <p>次に終了時間を日付時間型変数EndTimeに変換し、使いたいCurrentTime(サーバー時間かローカル時間か)を選択する。</p>
      <p>最後のifブロックでは現在の時間が開始時間と終了時間の間にあるかどうかを調べる。もしそうなら、TradeAllowedはtrueに設定される。</p>
      <p></p>

      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>新しい足の始値でトレードを実行する</div>
      <p>EAは初期設定ではティックごとにつまりリアルタイムで実行される。しかし場合によってはトレード条件を足単位でチェックしたほうがよいこともある。</p>
      <p>最新の足が完成するのを待つことでそのトレード条件が整い、シグナルが有効であることを確認することが出来るからだ。</p>
      <p>トレードをリアルタイムで実行すればダマシのシグナルに引っかかる可能性が高くなる。</p>
      <p>また、足単位でトレードを実行することでStrategy Testerの結果はより正確なものになる。メタトレーダーのStrategy Testerには限界があるためテストモデルとして「Every tick」を使えばバックテストの
        結果は正確さを欠いたものになる。なぜならStrategy TesterではティックデータとしてM!データを使うことが多いからだ。
      </p>
      <p>つまり、Strategy Testerで生成されるトレードはリアルタイムのトレードとは必ずしも一致しないということである。</p>
      <p>しかし足の完成時にトレードを仕掛け、テストモデルとして「Open prices only」を使えばリアルタイムのトレードをより正確に反映したバックテスト結果を得ることが出来る。</p>
      <p>足単位でトレードする場合の欠点はティック単位と比べてトレードの執行が遅れる点だ。特にその足が形成されている途中で価格が大きく変動する場合はそうである。</p>
      <p></p>
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>証拠金を調べる</div>
      <p>メタトレーダーには注文を出す前に現在の余剰証拠金やストップアウトレベルを調べるための関数が組み込まれている。</p>
      <p>ストップアウトレベルとは業者が決める水準で余剰証拠金がある水準以下になったら注文を出せなくなることをいう。</p>
      <p>自分でストップアウトレベルを決め、現在の資産がその水準を下回ったらトレーディングを停止することができる。</p>
      <p>そのためにはまず外部変数MinimumEquityを宣言する。これは注文を出すのに必要となる必要最低口座資産である。</p>
      <p>現在の口座資産が必要最低口座資産を下回ったら注文を出すことが出来ず、警告メッセージが表れてその状態を知らせてくれるようにする。</p>
      <p>例えば現在の口座資産が1万ドルだとする。その資産が20%減少したら注文は出せないようにしたい。</p>
      <Bot3 />
      <p>外部変数MinimumEquityはファイルの最初に宣言する。</p>
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スプレッドを調べる</div>
      <p>スプレッドが通常よりも拡大した時には注文を出すのを避けたいものだ。</p>
      <p>そのためには最大許容スプレッドを設定しておき、トレーディングを行う前に現在のスプレッドを調べるようにするとよい。</p>
      <p>まず外部変数MaximumSpreadを宣言し、関数MarketInfo()を使って現在のスプレッドを調べる。</p>
      <p>最低必要口座資産とスプレッドのチェックは注文を出す前に行う。これらの条件の1つがfalseであればelseブロックに飛んでどちらの条件がfalseなのかを調べ警告メッセージを表示させる</p>
      <Bot4 />
     
    </Soft>
  )
}





const Bot1 = () => {
  const test = `
  if(UseLocalTime == true) datetime CurrentTime = TimeLocal();  //ローカル時間
  else CurrentTime = TimeCurrent();                             //サーバー時間
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot2 = () => {
  const test = `
  if(UseTimer == true)
    {
      //開始時間の変換
      string StartConstant = StringConcatenate(Year(),".",StartMonth,".",StartDay,".",StartHour,":",StartMinute);
      datetime StartTime = StrToTime(StartConstant);

      if(StartMonth == 12 && StartDay == 31 && EndMonth ==1) int EndYear = Year() + 1;
      else EndYear = Year();

      //終了時間の変換
      string EndConstant = StringConcatenate(EndYear,".",EndMonth,".",EndDay,".",EndHour,":",EndMinute);

      datetime EndTime = StrToTime(EndConstant);

      //ローカル時間かサーバー時間かを選ぶ
      if(UseLocalTime == true) datetime CurrentTime = TimeLocal();
      else CurrentTime = TimeCurrent();

      //トレード条件チェックする
      if(StartTime <= CurrentTime && EndTime > CurrentTime)
        {
          bool TradeAllowed = true;
        }
      else TradeAllowed = false;
    }
  else TradeAllowed = true;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot3 = () => {
  const test = `
  //外部変数
  extern int MinimumEquity = 8000;

  //注文の発注
  if(AccountEquity()>MinimumEquity)
    {
      //注文を出す
    }
  else if(AccountEquity()<=MinimumEquity)
    {
      Alert("Current equity is less than minimum equity! Order not placed.");
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
  //外部変数
  extern int MaximumSpread = 5;
  extern ini MinimumEquity = 8000;

  if(AccountEquity() > MinimumEquity && MarketInfo(Symbol(),MODE_SPREAD) < MaximumSpread)
    {
      //注文を出す
    }
  else
    {
      if(AccountEquity() <= MinimumEquity) Alert("Current equity is less than minimum equity! Order not placed.");

      if(MarketInfo(Symbol(),MODE_SPREAD) > MaximumSpread) Alert("Current spread is greater than maximum spread! Order not placed.");
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
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


