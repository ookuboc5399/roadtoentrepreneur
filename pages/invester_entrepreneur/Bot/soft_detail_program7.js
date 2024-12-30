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
      <h4>関数化</h4>
      <p>ここでは関数OrderSelect()にforやwhileなどのループ演算子を併用してループ処理によって注文情報を取得する方法について学習する</p>
      <p>この方法は複数のポジションを同時に決済したり、トレイリングストップを設定したり、保有中のポジションの数を数えたりといったことに使える。</p>
      <p></p>
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ループ(繰り返し処理)</div>
      <div className='text-xl text-red-600'>for演算子</div>
      <p>for演算子は一定のブロックを決められた回数だけ繰り返すのに使われる。カウンターとして整数型の変数を宣言し、それにループの初期値を代入する。</p>
      <p>そしてループを開始するための条件を指定する。その条件がtrueのときにループが実行される。さらに、カウンター変数をいくつずつ増やすかも指定する。</p>
      <p></p>

      <Bot1 />
      <p>「int Counter=1」は変数Counterを値1から開始することを示している。2番目の式「Counter ＜= 3」はブレース({ })内のコードを実行するための条件を示している。</p>
      <p>この条件がtrueの間ループは継続し、falseになったらループから抜けてブレースの後のブロックに進む。</p>
      <p>「Counter++」は「Counterの値を1だけ増やす」ことを意味する。この部分が「Counter--」のときは「Counterの値を1だけ減らす」ことを意味し、「Counter+2」のときは「2だけ増やす」ことを意味する
      </p>
      <p>ループが1回終了するごとにCounter変数は指定した数だけ増減する。そして次のループに進む前に2番目のパラメーターがチェックされ条件を満たせば2回目のループが実行される。</p>
      <p>上の例ではループは3回実行される。それぞれのループが終了するとカウンターは1だけ増え、3回目のループが終了するとループは終了する。</p>

      <div className='text-xl text-red-600'>while演算子</div>
      <p>while演算子もfor演算子と同じくループ処理を行うためのものだがループする回数が事前に分かっている場合はfor演算子を使い、分かっていない場合はwhile演算子を使う。</p>
      <p>Somethingがtrueのときループが実行される。もちろんSomethingの値が変わらなければループは無限に続く。</p>
      <p>したがってSomethingの値を変化させるための条件をループ内に記述する必要がある。</p>
      <div className='flex'>
        <div className='m-4'>
          <Bot2 />
        </div>
        <div className='m-4'>
          <Bot3 />
        </div>
      </div>

      <div className='text-xl text-red-600'>オーダープールのループ処理</div>
      <Bot4 />
      <p>Counterの値を0に設定し、Counterの値が関数OrderTotal()の値-1以下になるまでループを繰り返す。この例ではループが1回終了するたびにCounterの値は1だけ増える。</p>
      <p>関数OrdersTotal()は現在保有中のポジションと待機注文の総数を返してくる。関数OrdersTotal()から1を差し引くのはなぜか。</p>
      <p>オーダープールには私たちのターミナルで現在保有中のポジションと待機注文が出した順番に並べられている。</p>
      <p>インデックス番号は0から始まる。したがって保有中のポジションか待機注文が1つの場合はそのインデックス番号は0になる。</p>
      <p>2番目の注文が発注されるとそのインデックス番号は2、といった具合だ。</p>
      <p className=' text-red-600'>関数OrdersTotal()は現在保有中のポジションと待機注文の総数を返してくる。</p>
      <p>しかしインデックス番号は0から始まるのでカウンター変数にカウントさせたいのは2までだ。</p>
      <p>したがってCounter変数の値をインデックス番号に一致させるためには関数OrdersTotal()から1を差し引かなければならない。</p>
      <p>オーダープール内の待機注文や保有しているポジションが1つクローズされたらプール内のそれよりも新しい注文のインデックス番号は1だけ少なくなる。例えばインデックス
        番号0のポジションが決済されたとするとインデックス番号1の注文のインデックス番号は0になり、インデックス番号2の注文のインデックス番号は1になる。
      </p>
       <p>関数OrderSelect()文はCounter変数の値をインデックス番号として用いる。前述のとおり、オーダープールのループ処理では古い注文から新しい注文の順にループする。</p>
      <p>SELECT_BY_POSパラメーターは注文をチケット番号ではなくオーダープールの中の位置(インデックス)で選ぶことを示している。</p>
      <p>最初のループではCounterの値は0なので関数OrderSelect()を使ってオーダープールのなかから最も古い注文を選ぶ。</p>
      <p>そして関数OrderTicket()や関数OrderStopLoss()等の関数を使って注文情報を調べ、必要に応じて待機注文のキャンセル、保有中のポジションの決済、および注文内容の変更をする</p>
      
      <Bot5 />


      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>取引種別ごとに待機注文と保有中のポジションの数を数えるための関数</div>
      <Bot6 />
      <p>関数TotalOrderCount()は関数のパラメーターとして引き渡したマジック番号に一致し指定したチャートの通貨シンボルの待機注文と保有中のポジションの総数を整数値で返してくる。</p>
      <p>まず変数OrderCountを宣言する。初期値を指定していないのでOrderCountは0で初期化される。</p>
      <p>オーダープールにはほかのEAから出した注文や保有中のポジションがすべて含まれるので対象となるEAが出した注文がどれなのかを知る必要がある。</p>
      <p>まず最初に選択した注文のOrderSymbol()を調べ、それがargSymbolパラメーターに一致することを確認する。次にその注文のマジック番号を調べる。</p>
      <p>OrderMagicNumber()がargMagicNumberパラメーターに一致すればこれが対象となるEAによって出された注文であることが分かる。</p>
      <p className='text-red-400'>成行き注文で買ったポジションだけを数える</p>
      <p>OP_BUYは買いの成行き注文を表す定数である。他の取引種別のポジションや待機注文の数を数えたいのであれば、OP_BUYの部分を数えたい取引種別のポジションや待機注文の定数に置き換え
        関数の名前をそのポジションや待機注文の取引種別を反映する名前に変えればよい。
      </p>
      <p></p>
      <p></p>

      <Bot7 />
      <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>トレイリングストップ</div>
      <p>ループ処理は複数の注文を変更するのにも使える。これの最も一般的な例はトレイリングストップ。</p>
      <p>トレイリングストップとは含み益が出ている状態において損切価格を切り上げたり切り下げたりすることで利益の上乗せを狙う。</p>
      <p>まずトレイリングストップの設定に用いる外部変数を宣言する。</p>
      <Bot8 />
      <p>成行き注文で建てた買いポジションをすべてチェックし、必要に応じて損切価格を変更する</p>
      <Bot9 />
      <p>Ordeて出された注文であることが分かる。</p>
      <p className='text-red-400'>成行き注文で買ったポジションだけを数える</p>
      <p>OP_BUYは買いの成行き注文を表す定数である。他の取引種別のポジションや待機注文の数を数えたいのであれば、OP_BUYの部分を数えたい取引種別のポジションや待機注文の定数に置き換え
        関数の名前をそのポジションや待機注文の取引種別を反映する名前に変えればよい。
      </p>
    
    </Soft>
  )
}





const Bot1 = () => {
  const test = `
  for(int Counter = 1; Counter <= 3; Counter++)
    {
      //ループ本体
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
  while(Something == true)
    {
      //ループ本体
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
  int Counter = 1;
  while(Counter <= 3)
    {
      Counter++;
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
  for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
    {
      OrderSelect(Counter,SELECT_BY_POS);
      //条件の評価
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
  int OpenBuyOrder(string argSymbol, double argLotSize, double argSlippage, double argMagicNumber, string argComment = "Buy Order")
    {
      while(IsTradeContexBusy()) Sleep(10);

      //買い注文の発注
      int Ticket = OrderSend(argSymbol, OP_BUY,argLotSize,MarketInfo(argSymbol,MODE_ASK),argSlippage,0,0,argComment,argMagicNumber,0,Green);

      //エラー処理
      if(Ticket == -1)
        {
          int ErrorCode = GetLastError();
          string ErrDesc = ErrorDescription(ErrorCode);

          string ErrAlert = StringConcatenate("Open Buy Order - Error",ErrorCode,":",ErrDesc);
          Alert(ErrAlert);

          string ErrLog = StringConcatenate("Bid: ",MarketInfo(argSymbol,MODE_BID),"Ask: ",MarketInfo(argSymbol,MODE_ASK),"Lots: ",argLotSize);
          Print(ErrLog)
        }
      return(Ticket);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
  int BuyMarketCount(string argSymbol, int argMagicNumber)
    {
      int OrderCount;
      for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
        {
          OrderSelect(Counter,SELECT_BY_POS);
          if(OrderMagicNumber() == argMagicNumber && OrderSymbol() == argSymbol && OrderType() == OP_BUY)
          {
            OrderCount++;
          }
        }
      return(OrderCount);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot7 = () => {
  const test = `
  int BuyMarketCount(string argSymbol, int argMagicNumber)
    {
      int OrderCount;
      for(Counter = 0; Counter <= OrdersTotal()-1; Counter++)
        {
          OrderSelect(Counter,SELECT_BY_POS);
          if(OrderMagicNumber() == argMagicNumber && OrderSymbol() == argSymbol && OrderType() == OP_BUY)
          {
            OrderCount++;
          }
        }
      return(OrderCount);
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot8 = () => {
  const test = `
  extern double TrailingStop = 50;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot9 = () => {
  const test = `
  extern double TrailingStop = 50;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};