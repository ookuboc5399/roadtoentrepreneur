import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { EA } from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <EA>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>MACD</div>
            <Bot1 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Moving Average</div>
            <Bot2 />
          </EA>
        ) : id == 2 ? (
          <EA>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>一目均衡表システム</div>
            <Bot8 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>一目均衡表システム（遅行スパン編）</div>
            <Bot9 />
          </EA>
        ) : id == 3 ? (
          <EA>
            <h4>注文を出す手順</h4>
            <ul>
              <li>注文種別　買いか売りか。また、逆指値注文か、成行き注文か、指値注文か。</li>
              <li>売買する通貨ペア　</li>
              <li>ロット数</li>
              <li>仕掛け価格　</li>
              <li>損切り価格</li>
              <li>利食い価格　</li>
              <li>マジック番号</li>
            </ul>
            <div className='text-xl text-red-600'>関数OrderSend()</div>
            <p>関数OrderSend()はMQLで注文を出すときに用いられる関数。</p>
            <Bot10 />
          </EA>
        ) : id == 4 ? (
          <EA>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>平均足システム</div>
            <Bot11 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>NY_Box</div>
            <Bot12 />
          </EA>
        ) : id == 5 ? (
          <EA>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>「早起きは5ピップの得」システム</div>
            <Bot13 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>RSIシステム</div>
            <Bot14 />
          </EA>
        ) : id == 6 ? (
          <EA>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ボリンジャーバンドシステム</div>
            <Bot15 />
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ボリンジャーバンドとRSIシステム</div>
            <Bot16 />

          </EA>
        ) : id == 7 ? (
          <EA>
            <h4>注文を出す手順</h4>
            <div className='text-xl text-red-600'>定型パターン</div>
            <div className='flex'>
              <div className='m-4 w-1/2'>
                <Bot17 />
              </div>
              <div className='m-4 w-1/2'>
                <Bot18 />
              </div>

            </div>
            <p>関数OrderSend()はMQLで注文を出すときに用いられる関数。</p>
          </EA>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Bot1 = () => {
  const test = `
  //+------------------------------------------------------------------+
  //|                                                  MACD Sample.mq4 |
  //|                   Copyright 2005-2014, MetaQuotes Software Corp. |
  //|                                              http://www.mql4.com |
  //+------------------------------------------------------------------+
  #property copyright   "2005-2014, MetaQuotes Software Corp."
  #property link        "http://www.mql4.com"
  
  //--- 利食いpoint
  input double TakeProfit    =50;
  //--- ロット数
  input double Lots          =0.1;
  //--- トレーリングストップpoint
  input double TrailingStop  =30;
  //--- MACD:0から3point以上離れる。エントリー条件に使う
  input double MACDOpenLevel =3;
  //--- MACD:0から2point以上離れる。クローズ条件に使う
  input double MACDCloseLevel=2;
  //--- 移動平均線の平均期間
  input int    MATrendPeriod =26;
  //+------------------------------------------------------------------+
  //|                                                                  |
  //+------------------------------------------------------------------+
  void OnTick(void){
    //--- 現在と１本前のMACDの値を入れる変数
    double MacdCurrent,MacdPrevious;
    //--- 現在と１本前のシグナルの値を入れる変数
    double SignalCurrent,SignalPrevious;
    //--- 現在と１本前の移動平均線の値を入れる変数
    double MaCurrent,MaPrevious;
    //--- ループ用、チケット用、ポジション合計用の変数
    int    cnt,ticket,total;
    //---
    // initial data checks
    // it is important to make sure that the expert works with a normal
    // chart and the user did not make any mistakes setting external 
    // variables (Lots, StopLoss, TakeProfit, 
    // TrailingStop) in our case, we check TakeProfit
    // on a chart of less than 100 bars
    //---
  
    //--- バーが100未満で処理終了
    if(Bars< 100){
      Print("bars less than 100");
      return;
    }
    //--- 利食いpointが10未満で処理終了
    if(TakeProfit< 10){
      Print("TakeProfit less than 10");
      return;
    }
    //--- to simplify the coding and speed up access data are put into internal variables
    //--- MACD,シグナル,移動平均線を変数に代入
    MacdCurrent=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_MAIN,0);
    MacdPrevious=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_MAIN,1);
    SignalCurrent=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_SIGNAL,0);
    SignalPrevious=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_SIGNAL,1);
    MaCurrent=iMA(NULL,0,MATrendPeriod,0,MODE_EMA,PRICE_CLOSE,0);
    MaPrevious=iMA(NULL,0,MATrendPeriod,0,MODE_EMA,PRICE_CLOSE,1);
    
    //--- 待機中、保有中のポジションの合計
    total=OrdersTotal();
    //--- ポジションが０なら
    if(total<1){
      //--- no opened orders identified
      //--- 余剰証拠金が(10000×ロット)ドル未満なら処理終了
      if(AccountFreeMargin()<(1000*Lots)){
        Print("We have no money. Free Margin = ",AccountFreeMargin());
        return;
      }
      //--- check for long position (BUY) possibility
      //--- 買エントリー条件 現MACDが0より大,現MACDが現シグナルより大,前MACDより前シグナルが大
      if(MacdCurrent< 0 && MacdCurrent>SignalCurrent && MacdPrevious< SignalPrevious && 
        //--- 現MACDがMACDOpenLevelポイントより大,現移動平均線が前移動平均線より大
        MathAbs(MacdCurrent)>(MACDOpenLevel*Point) && MaCurrent>MaPrevious){
  
        //--- 買エントリー
        ticket=OrderSend(Symbol(),OP_BUY,Lots,Ask,3,0,Ask+TakeProfit*Point,"macd sample",16384,0,Green);
        //--- ポジションがあったら約定価格をPrint
        if(ticket>0){
          if(OrderSelect(ticket,SELECT_BY_TICKET,MODE_TRADES)){
            Print("BUY order opened : ",OrderOpenPrice());
          }
        }else{
          //--- 約定できなかったらエラーを吐き
          Print("Error opening BUY order : ",GetLastError());
        }
        //--- 処理終了
        return;
      }
      //--- check for short position (SELL) possibility
      //--- 売エントリー条件　買と全く逆
      if(MacdCurrent>0 && MacdCurrent< SignalCurrent && MacdPrevious>SignalPrevious && 
        MacdCurrent>(MACDOpenLevel*Point) && MaCurrent< MaPrevious){
        
        //--- 売りエントリー
        ticket=OrderSend(Symbol(),OP_SELL,Lots,Bid,3,0,Bid-TakeProfit*Point,"macd sample",16384,0,Red);
        //--- 約定できたら約定価格をPrint
        if(ticket>0){
          if(OrderSelect(ticket,SELECT_BY_TICKET,MODE_TRADES)){
            Print("SELL order opened : ",OrderOpenPrice());
          }
        }else{
          //--- 約定できなかったらエラーを吐い
          Print("Error opening SELL order : ",GetLastError());
        }
      }
      //--- exit from the "no opened orders" block
      //--- 処理終了
      return;
    }
    
    //--- it is important to enter the market correctly, but it is more important to exit it correctly...   
    //--- ポジションを検索
    for(cnt=0;cnt< total;cnt++){
      //--- ポジションを選択できなかったら、次のcntへ
      if(!OrderSelect(cnt,SELECT_BY_POS,MODE_TRADES)){continue;}
      //--- 待機注文じゃなく、開いている通貨ペアと注文した通貨ペアが一致していたら
      if(OrderType()<=OP_SELL &&   // check for opened position 
        OrderSymbol()==Symbol()){  // check for symbol
        
        //--- long position is opened
        //--- 買いポジションなら
        if(OrderType()==OP_BUY){
          //--- should it be closed?
          //--- 現MACDより０が小、現MACDより現シグナルが大,前MACDが前シグナルより大
          if(MacdCurrent>0 && MacdCurrent< SignalCurrent && MacdPrevious>SignalPrevious && 
            //--- MACDCloseLevelポイントより現MACDが大
            MacdCurrent>(MACDCloseLevel*Point)){
  
            //--- close order and exit
            //-- 買ポジション決済できなかったらエラーを吐いて
            if(!OrderClose(OrderTicket(),OrderLots(),Bid,3,Violet)){
              Print("OrderClose error ",GetLastError());
            }
            //--- 処理終了
            return;
          }
          //--- check for trailing stop
          //--- 買ポジション、トレーリングストップが０より大
          if(TrailingStop>0){
            //--- (現売値-約定価格)がTrailingStopポイントより大
            if(Bid-OrderOpenPrice()>Point*TrailingStop){
              //--- 待機損失決済より(現売値-トレーリングストップポイント)が大
              if(OrderStopLoss()< Bid-Point*TrailingStop){
                //--- modify order and exit
                //--- 待機決済価格変更ができなかったらエラーを吐いて
                if(!OrderModify(OrderTicket(),OrderOpenPrice(),Bid-Point*TrailingStop,OrderTakeProfit(),0,Green)){
                  Print("OrderModify error ",GetLastError());
                }
                //--- 処理終了
                return;
              }
            }
          }
        //--- 売ポジション
        }else{ // go to short position
        
        //--- should it be closed?
        //--- 現MACDより0が大、現MACDが現シグナルより大
        if(MacdCurrent< 0 && MacdCurrent>SignalCurrent && 
          //--- 前MACDより前シグナルが大、現MACDがMACDCloseLevelポイントより大
          MacdPrevious< SignalPrevious && MathAbs(MacdCurrent)>(MACDCloseLevel*Point)){
          
          //--- close order and exit
          //--- 売ポジション、決済できなかったらエラーを吐いて
          if(!OrderClose(OrderTicket(),OrderLots(),Ask,3,Violet)){
            Print("OrderClose error ",GetLastError());
          }
          //--- 処理終了
          return;
        }
        //--- check for trailing stop
        //--- 売ポジション、トレーリングストップが０より上
        if(TrailingStop>0){
          //--- (約定価格-現買値)がTrailingStopポイントより大
          if((OrderOpenPrice()-Ask)>(Point*TrailingStop)){
            //--- 待機損失決済が(現買値-トレーリングストップポイント)より大　または、待機損失決済がない場合
            if((OrderStopLoss()>(Ask+Point*TrailingStop)) || (OrderStopLoss()==0)){
              //--- modify order and exit
              //--- 待機決済価格の変更ができなかったらエラーを吐いて
              if(!OrderModify(OrderTicket(),OrderOpenPrice(),Ask+Point*TrailingStop,OrderTakeProfit(),0,Red)){
                Print("OrderModify error ",GetLastError());
              }
              //--- 処理終了
              return;
            }
          }
        }
      }
    }
  }
  //---
    }
  //+------------------------------------------------------------------+
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot2 = () => {
  const test = `
//+------------------------------------------------------------------+
//|                                               Moving Average.mq4 |
//|                   Copyright 2005-2014, MetaQuotes Software Corp. |
//|                                              http://www.mql4.com |
//+------------------------------------------------------------------+
#property copyright   "2005-2014, MetaQuotes Software Corp."
#property link        "http://www.mql4.com"
#property description "移動平均線EA"
#property description "日本語翻訳-最大ポジション保有数は1つ"

//--- 定数のマジックナンバー
#define MAGICMA  20131111

//--- 入力変数（外部変数）
//--- ロット数
input double Lots          =0.1;
//--- リスクロット調整（％）
input double MaximumRisk   =0.02;
//--- ロット減少調整数値
input double DecreaseFactor=3;
//--- 移動平均線の期間
input int    MovingPeriod  =12;
//--- 移動平均線のシフト
input int    MovingShift   =6;
//+------------------------------------------------------------------+
//| 保有中のポジションの計算                                              |
//+------------------------------------------------------------------+
int CalculateCurrentOrders(string symbol){
	//--- ポジションの数を0で初期化（買、売）
	int buys=0,sells=0;

	//--- 全ての保有中＆待機中のポジションを検索
	for(int i=0;i< OrdersTotal();i++){
		//---　ポジションを選択出来なければループを抜ける
		if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES)==false) break;
		//--- 注文時の通貨ペアとマジックナンバーを検証
		if(OrderSymbol()==Symbol() && OrderMagicNumber()==MAGICMA){
			//--- ポジションが買ポジションならばbuysに+1
			if(OrderType()==OP_BUY)  buys++;
			//--- ポジションが売りポジションならばsellsに+1
			if(OrderType()==OP_SELL) sells++;
		}
	}//ループ終了
	
	//--- ポジションの数を返す
	if(buys>0) return(buys);   //--- 買いポジションの数
	else       return(-sells); //--- 売りポジションの数(-をつけて返す)
}
//+------------------------------------------------------------------+
//| ロットの計算                                                        |
//+------------------------------------------------------------------+
double LotsOptimized(){
	double lot=Lots;
	int    orders=HistoryTotal();     // 全ポジション履歴
	int    losses=0;                  // 負数を入れる変数（0で初期化）
	//--- 余剰証拠金×リスク％÷1000の答えを少数点第１位に丸める
	lot=NormalizeDouble(AccountFreeMargin()*MaximumRisk/1000.0,1);
	//--- ロットの減少調整数値がが０以上ならば
	if(DecreaseFactor>0){
		for(int i=orders-1;i>=0;i--){
			//--- ポジションの履歴がない場合ループを抜ける
			if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)==false){
				Print("Error in history!");
				break;
			}
			
			//--- 注文時の通貨ペアと開いて選択している通貨ペアが違う
			//--- 又は
			//--- 保留中の注文の削除履歴の場合。次へ
			if(OrderSymbol()!=Symbol() || OrderType()>OP_SELL) continue;
			
			//---　利益が出ていたらループを抜ける
			if(OrderProfit()>0) break;
			//---　損失ならlossesに+1
			if(OrderProfit()<0) losses++;
		}//ループ終了
		
		//---　連敗が1より多ければ
		if(losses>1){
			//---　ロットの数を再調整
			lot=NormalizeDouble(lot-lot*losses/DecreaseFactor,1);
		}
	}
	//--- ロット数が0.1未満なら0.1をロットにする
	if(lot<0.1) lot=0.1;
	//---　ロット数を返す
	return(lot);
}
//+------------------------------------------------------------------+
//| エントリー関数                                                      |
//+------------------------------------------------------------------+
void CheckForOpen(){
	//---　移動平均線の値を格納する変数を宣言
	double ma;
	//---　注文の返り値を入れる変数を宣言
	int    res;
	
	//--- 現在の出来高が1より大きければ処理終了
	if(Volume[0]>1) return;
	
	//--- 移動平均線の値を取得
	ma=iMA(NULL,0,MovingPeriod,MovingShift,MODE_SMA,PRICE_CLOSE,0);
	
	//--- 売りのエントリー条件
	if(Open[1]>ma && Close[1]< ma){
		//--- エントリー      
		res=OrderSend(Symbol(),OP_SELL,LotsOptimized(),Bid,3,0,0,"",MAGICMA,0,Red);
		return;
	}
	//--- 買いのエントリー条件
	if(Open[1]< ma && Close[1]>ma){
		//--- エントリー
		res=OrderSend(Symbol(),OP_BUY,LotsOptimized(),Ask,3,0,0,"",MAGICMA,0,Blue);
		return;
	}
}
//+------------------------------------------------------------------+
//| クローズ関数                                                        |
//+------------------------------------------------------------------+
void CheckForClose(){
	//移動平均線の値を入れる変数を宣言
	double ma;
	//--- 現在の出来高が1より大き場合は処理終了
	if(Volume[0]>1) return;
	
	//--- 移動平均線の値を取得
	ma=iMA(NULL,0,MovingPeriod,MovingShift,MODE_SMA,PRICE_CLOSE,0);
	
	//--- 全ての保有中＆待機中のポジションを検索
	for(int i=0;i< OrdersTotal();i++){
		//--- ポジションを選択できない場合ループを抜ける
		if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES)==false) break;
		
		//--- 注文時の通貨ペアとマジックナンバーが一致していない場合次へ
		if(OrderMagicNumber()!=MAGICMA || OrderSymbol()!=Symbol()) continue;
		
		//--- 買ポジションなら
		if(OrderType()==OP_BUY){
			//--- 決済条件
			if(Open[1]>ma && Close[1]< ma){
				//--- 決済処理
				if(!OrderClose(OrderTicket(),OrderLots(),Bid,3,White)){
					//--- 決済に失敗した場合にエラーを吐く
					Print("OrderClose error ",GetLastError());
				}
			}
			break;
		}
		//--- 売ポジションなら
		if(OrderType()==OP_SELL){
			//--- 決済条件
			if(Open[1]< ma && Close[1]>ma){
				//--- 決済処理
				if(!OrderClose(OrderTicket(),OrderLots(),Ask,3,White)){
					//--- 決済に失敗ならエラーを吐く
					Print("OrderClose error ",GetLastError());
				}
			}
			break;
		}
	}//ループ終了
}
//+------------------------------------------------------------------+
//| OnTick function                                                  |
//+------------------------------------------------------------------+
void OnTick(){
//--- バーの数が100未満又は、自動売買が許可されていない場合処理終了
	if(Bars< 100 || IsTradeAllowed()==false) return;
	
	//--- ポジションを保有していない場合はエントリー関数を呼ぶ
	if(CalculateCurrentOrders(Symbol())==0){
		CheckForOpen();
	//--- ポジションを保有してたらクローズ関数を呼ぶ
	}else{                                    
		CheckForClose();
	} 
}
//+------------------------------------------------------------------+
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot3 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELL,LotSize,Bid,Slippage,SellStopLoss,SellTakeProfit,"Sell Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot4 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUYSTOP,LotSize,PendingPrices,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Stop Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot5 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELLSTOP,LotSize,PendingPrice,Slippage,SellStopLoss,SellTakeProfit,"Sell Stop Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUYLIMIT,LotSize,PendingPrice,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Limit Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot7 = () => {
  const test = `
  OrderSend(Symbol(),OP_SELLLIMIT,LotSize,PendingPrice,Slippage,SellStopLoss,SellTakeProfit,"Sell Limit Order",MagicNumber,0,Red)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot8 = () => {
  const test = `
 // マジックナンバーの定義
 #define MAGIC 1234
 
 // パラメーターの設定//
 extern int Tenkan = 6; // 転換線の期間設定
 extern int Kijun = 26; // 基準線の期間設定
 extern int Senkou = 52; // 先行線の期間設定
 
 extern double Lots = 1.0; // 取引ロット数
 extern int Slip = 10; // 許容スリッページ数
 extern string Comments = " "; // コメント
 
 // 変数の設定//
 int Ticket_L = 0; // 買い注文の結果をキャッチする変数
 int Ticket_S = 0; // 売り注文の結果をキャッチする変数
 int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
 int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数
 
 double SenkouA_2 = 0; /*2 本前のバーの先行スパンA に変身したiCustom
 　　　　　　　　　　　　　関数を代入する変数*/
 double SenkouB_2 = 0; /*2 本前のバーの先行スパンB に変身したiCustom
 　　　　　　　　　　　　　関数を代入する変数*/
 double SenkouA_1 = 0; /*1 本前のバーの先行スパンA に変身したiCustom
 　　　　　　　　　　　　　関数を代入する変数*/
 double SenkouB_1 = 0; /*1 本前のバーの先行スパンB に変身したiCustom
 　　　　　　　　　　　　　関数を代入する変数*/
 
 
 int start()
 {
 
    SenkouA_2 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,5,2);
    SenkouB_2 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,6,2);
    SenkouA_1 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,5,1);
    SenkouB_1 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,6,1);
 
    // 買いポジションのエグジット
    if( ( SenkouA_2 <= Close[2] || SenkouB_2 <= Close[2] )
       && SenkouA_1 > Close[1] && SenkouB_1 > Close[1]
       && ( Ticket_L != 0 && Ticket_L != -1 ))
       {
          Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
          if( Exit_L == 1 ) {Ticket_L = 0;}
       }
       
    // 売りポジションのエグジット
    if( ( SenkouA_2 >= Close[2] || SenkouB_2 >= Close[2] )
       && SenkouA_1 < Close[1] && SenkouB_1 < Close[1]
       && ( Ticket_S != 0 && Ticket_S != -1 ))
       {
          Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
          if( Exit_S == 1 ) {Ticket_S = 0;}
       }
       
    // 買いエントリー
    if( ( SenkouA_2 >= Close[2] || SenkouB_2 >= Close[2] )
       && SenkouA_1 < Close[1] && SenkouB_1 < Close[1]
       && ( Ticket_L == 0 || Ticket_L == -1 )
       && ( Ticket_S == 0 || Ticket_S == -1 ))
       {
          Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
       }
       
    // 売りエントリー
    if( ( SenkouA_2 <= Close[2] || SenkouB_2 <= Close[2] )
       && SenkouA_1 > Close[1] && SenkouB_1 > Close[1]
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

const Bot9 = () => {
  const test = `
 // マジックナンバーの定義
 #define MAGIC 1919
 
 // パラメーターの設定//
 extern int Tenkan = 6; // 転換線の期間設定
 extern int Kijun = 26; // 基準線の期間設定
 extern int Senkou = 52; // 先行線の期間設定
 
 extern double Lots = 1.0; // 取引ロット数
 extern int Slip = 10; // 許容スリッページ数
 extern string Comments = " "; // コメント
 
 // 変数の設定//
 int Ticket_L = 0; // 買い注文の結果をキャッチする変数
 int Ticket_S = 0; // 売り注文の結果をキャッチする変数
 int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
 int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数
 
 double Chikou_2 = 0; /*Kijun+2 本前のバーの遅行スパンに変身した
                      iCustom 関数を代入する変数*/
 double Chikou_1 = 0; /*Kijun+1 本前のバーの遅行スパンに変身した
                      iCustom 関数を代入する変数*/
 
 int start()
 {
 
    Chikou_2 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,4,Kijun+2);
    Chikou_1 = iCustom(NULL,0,"Ichimoku",Tenkan,Kijun,Senkou,4,Kijun+1);
    
    // 買いポジションのエグジット
    if(   Chikou_2 >= Close[Kijun+2]
       && Chikou_1 < Close[Kijun+1]
       && ( Ticket_L != 0 && Ticket_L != -1 ))
       {
          Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
          if( Exit_L == 1 ) {Ticket_L = 0;}
       }
       
    // 売りポジションのエグジット
    if(   Chikou_2 <= Close[Kijun+2]
       && Chikou_1 > Close[Kijun+1]
       && ( Ticket_S != 0 && Ticket_S != -1 ))
       {
          Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
          if( Exit_S == 1 ) {Ticket_S = 0;}
       }
       
    // 買いエントリー
    if(   Chikou_2 <= Close[Kijun+2]
       && Chikou_1 > Close[Kijun+1]
       && ( Ticket_L == 0 || Ticket_L == -1 )
       && ( Ticket_S == 0 || Ticket_S == -1 ))
       {
          Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
       }
       
    // 売りエントリー
    if(   Chikou_2 >= Close[Kijun+2]
       && Chikou_1 < Close[Kijun+1]
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

const Bot10 = () => {
  const test = `
  extern double Lots = 0.02;       //ロット
  extern int Slippage = 30;        //スリッページ
  extern double Profitrate = 20;   //Take Profit 値幅（pips）
  extern double SLrate = 20;       //Stop Loss 損切り（pips）
  
  //+------------------------------------------------------------------+
  //| Expert initialization function                                   |
  //+------------------------------------------------------------------+
  int OnInit()
    {
  //---
  
  
  //---
     return(INIT_SUCCEEDED);
    }
  //+------------------------------------------------------------------+
  //| Expert deinitialization function                                 |
  //+------------------------------------------------------------------+
  void OnDeinit(const int reason)
    {
  //---
     
    }
  //+------------------------------------------------------------------+
  //| Expert tick function                                             |
  //+------------------------------------------------------------------+
  void OnTick()
    {
  //---
  
    //売買の処理はここで書く
    
    //ロングの際の書き方
    //Org_Long(Lots,Slippage,SLrate,Profitrate,MAGIC);
  
    //ショートの際の書き方
    //Org_Long(Lots,Slippage,SLrate,Profitrate,MAGIC);
  
    }
  
  //+------------------------------------------------------------------+
  //| ロング
  //| OP_BUYのエントリー。リトライあり
  //| 引数： my_lot = ロット
  //|       my_slipage = スリッページ
  //|       my_sl = 損切り
  //|       my_tp = 利益
  //+------------------------------------------------------------------+
  void Org_Long(double my_lot,int my_slipage , double my_sl, double my_tp, int my_magic){
  
     //ticket no
     int ticket_no=0;
     int errorcode=0;               // エラーコード
  
     double losscut_normalize=0;
     double profit_normalize=0;
     double losscut_rate=0;
     double profit_rate=0;
  
     // ロスカット価格
     losscut_rate  = Ask - ( 10 * Point() * my_sl); 
  
     // 決済価格
     profit_rate   = Ask + ( 10 * Point() * my_tp); 
  
  
     //正規化
     losscut_normalize = NormalizeDouble(losscut_rate,int(MarketInfo(Symbol(),MODE_DIGITS)));
     profit_normalize  = NormalizeDouble(profit_rate,int(MarketInfo(Symbol(),MODE_DIGITS)));
  
  
     //ロングエントリー処理
     ticket_no = OrderSend(Symbol(),OP_BUY,my_lot,Ask,my_slipage,losscut_normalize,profit_normalize,"Buy order",my_magic,0,clrBlue);
     printf("OrderSend OP_BUY , price=%f , sl=%f , tp=%f",Ask,losscut_normalize,profit_normalize);
  
     if(ticket_no < 0){
        errorcode = GetLastError();      // エラーコード取得
        printf("Send Error! error_code:%d , detail:%s ",errorcode , ErrorDescription(errorcode));
  
        //再設定
        losscut_rate  = Ask - ( 10 * Point() * my_sl); 
        profit_rate   = Ask + ( 10 * Point() * my_tp); 
        losscut_normalize = NormalizeDouble(losscut_rate,int(MarketInfo(Symbol(),MODE_DIGITS)));
        profit_normalize  = NormalizeDouble(profit_normalize,int(MarketInfo(Symbol(),MODE_DIGITS)));
  
        //オーダー送信と同時に損切り、利益設定エラー対策
        ticket_no = OrderSend(Symbol(),OP_BUY,my_lot,Ask,my_slipage,0,0,"Buy order",my_magic,0,clrBlue);
        printf("Resend OrderSend OP_BUY , price=%f , sl=%f , tp=%f",Ask,losscut_normalize,profit_normalize);
  
        //オーダー修正
        LimitStop_Set(ticket_no,OP_BUY,clrBlue);
  
     }else {
        printf("Send Done. Ticket NO = %d",ticket_no);
     }
  }
  
  //+------------------------------------------------------------------+
  //| ショート
  //| OP_SELLのエントリー。リトライあり
  //| 引数： my_lot = ロット
  //|       my_slipage = スリッページ
  //|       my_sl = 損切り
  //|       my_tp = 利益
  //+------------------------------------------------------------------+
  void Org_Short(double my_lot,int my_slipage , double my_sl, double my_tp, int my_magic){
  
     //ticket no
     int ticket_no=0;
     int errorcode=0;               // エラーコード
  
     double losscut_normalize=0;
     double profit_normalize=0;
     double losscut_rate=0;
     double profit_rate=0;
  
    // ロスカット価格
     losscut_rate  = Bid + ( 10 * Point() * my_sl); 
  
     // 決済価格
     profit_rate   = Bid - ( 10 * Point() * my_tp); 
  
  
     //正規化
     losscut_normalize = NormalizeDouble(losscut_rate,Digits());
     profit_normalize  = NormalizeDouble(profit_rate,Digits());
  
  
     //shortエントリー処理
     ticket_no = OrderSend(Symbol(),OP_SELL,my_lot,Bid,my_slipage,losscut_normalize,profit_normalize,"Sell order",my_magic,0,clrRed);
     printf("OrderSend OP_SELL , price=%f , sl=%f , tp=%f",Bid,losscut_normalize,profit_normalize);
  
     //エラー？
     if(ticket_no < 0){
        errorcode = GetLastError();      // エラーコード取得
        printf("Send Error! error_code:%d , detail:%s ",errorcode , ErrorDescription(errorcode));
   
       // 再設定
        losscut_rate  = Bid + ( 10 * Point() * my_sl); 
        profit_rate   = Bid - ( 10 * Point() * my_tp); 
        losscut_normalize = NormalizeDouble(losscut_rate,int(MarketInfo(Symbol(),MODE_DIGITS)));
        profit_normalize  = NormalizeDouble(profit_normalize,int(MarketInfo(Symbol(),MODE_DIGITS)));
  
        //オーダー送信と同時に損切り、利益設定エラー対策
        ticket_no = OrderSend(Symbol(),OP_SELL,my_lot,Bid,my_slipage,0,0,"Sell order",my_magic,0,clrRed);
        printf("Resend sOrderSend OP_SELL , price=%f , sl=%f , tp=%f",Bid,losscut_normalize,profit_normalize);
  
        //オーダー修正
        LimitStop_Set(ticket_no,OP_SELL,clrRed);
  
  
     }else {
        printf("Send Done. Ticket NO = %d",ticket_no);
     }
  
  }
  
  //+------------------------------------------------------------------+
  //| エントリー中のポジションのリミット・ストップを変更
  //| 引数 int in_ticket_no = Ticket no
  //|     double my_sl = Stopp Loss
  //|     double my_tp = Take Profit
  //+------------------------------------------------------------------+
  // 
  void LimitStop_Set( int in_ticket_no, int buysell_type , color mycolor) {
  
      int    modify_resend_num;       // 変更試行回数
      bool   modify_ret;              // 変更判定
      int    errorcode;
      bool   selbool;
      double limit_rate,stop_rate;
      int    my_ticket_no;
  
      // オーダー中のチケット選択(チケットNo指定)
      selbool = OrderSelect(in_ticket_no, SELECT_BY_TICKET); 
  
      if (buysell_type == OP_BUY){
         limit_rate = OrderOpenPrice() + ( 10 * Point() * Profitrate);
         stop_rate  = OrderOpenPrice() - ( 10 * Point() * SLrate);
       }else{
         limit_rate = OrderOpenPrice() - ( 10 * Point() * Profitrate);
         stop_rate  = OrderOpenPrice() + ( 10 * Point() * SLrate);
      }
  
      limit_rate = NormalizeDouble(limit_rate , Digits() );  // リミット価格    を正規化
      stop_rate  = NormalizeDouble(stop_rate  , Digits() );  // ストップロス価格を正規化
  
      my_ticket_no = OrderTicket();
  
      for( modify_resend_num = 0; modify_resend_num < 30; modify_resend_num++ ) {
          modify_ret = OrderModify(
                                   my_ticket_no,      // チケットNo
                                   OrderOpenPrice(),  // 注文価格
                                   stop_rate,            // ストップロス価格
                                   limit_rate,           // リミット価格
                                   OrderExpiration(), // 有効期限
                                   mycolor               // 色
  
                       );
  
          printf("OrderModify ticket_no:%d , sl=%f , tp=%f",my_ticket_no , stop_rate,limit_rate);
  
          if ( modify_ret == false ) {             // 注文変更拒否
              Sleep(300);                         // 300msec待ち
              errorcode = GetLastError();        // エラーコード取得
              printf( "[%d]Modify Error! error_code:%d ,detail:%s ",
                                          modify_resend_num+1, errorcode ,  ErrorDescription(errorcode));
          } else {                                 // 決済注文約定
              Print("Done. Ticket NO=",in_ticket_no);
              break;
          }
      }
  }
  
  //+------------------------------------------------------------------+
  //| ポジション決済                                             |
  //+------------------------------------------------------------------+
  void ClosePositions_BUY(int my_magic){
     int i;
     int my_ticket_no;
     double my_lots;
     double my_price = NormalizeDouble(Ask,int(MarketInfo(Symbol(),MODE_DIGITS)));
     bool chk;
     int errorcode;
  
     for(i=0;i<OrdersTotal();i++){
        if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES) == false){
           break;
        }
   
        if(OrderMagicNumber() != my_magic || OrderSymbol() != Symbol()){
           continue;
        }
  
        my_ticket_no = OrderTicket();
        my_lots = OrderLots();
        
        //買いポジションのチェック
        if(OrderType() == OP_BUY){
           chk = OrderClose(my_ticket_no,my_lots,my_price,Slippage,White);
           printf("OrderClose ret=%d , ticket_no=%d , lots=%f , BUY price=%f",chk,my_ticket_no,my_lots,my_price);
           
           if(chk == False){
              errorcode = GetLastError();      // エラーコード取得
              printf("OrderClose Error! error_code:%d , detail:%s ",errorcode , ErrorDescription(errorcode));
           }else{
              printf("OrderClose Done!");
           }
           break;
        }
        
  
        // ループを抜ける
        break;
     }
  }
  
  void ClosePositions_SELL(int my_magic){
     int i;
     int my_ticket_no;
     double my_lots;
     double my_price = NormalizeDouble(Ask,int(MarketInfo(Symbol(),MODE_DIGITS)));
     bool chk;
     int errorcode;
  
     for(i=0;i<OrdersTotal();i++){
        if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES) == false){
           break;
        }
   
        if(OrderMagicNumber() != my_magic || OrderSymbol() != Symbol()){
           continue;
        }
        
        my_ticket_no = OrderTicket();
        my_lots = OrderLots();
  
        //売りポジションのチェック
        if(OrderType() == OP_SELL){
           chk = OrderClose(my_ticket_no,my_lots,my_price,Slippage,White);
           printf("OrderClose ret=%d , ticket_no=%d , lots=%f , SELL price=%f",chk,my_ticket_no,my_lots,my_price);
  
           if(chk == False){
              errorcode = GetLastError();      // エラーコード取得
              printf("OrderClose Error! error_code:%d , detail:%s ",errorcode , ErrorDescription(errorcode));
           }else{
              printf("OrderClose Done!");
           }
  
           break;
        }
  
        // ループを抜ける
        break;
     }
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot11 = () => {
  const test = `
 
// マジックナンバーの定義
#define MAGIC 1192

// パラメーターの設定//
extern double Lots = 1.0; // 取引ロット数
extern int Slip = 10; // 許容スリッページ数
extern string Comments = " "; // コメント

// 変数の設定//
int Ticket_L = 0; // 買い注文の結果をキャッチする変数
int Ticket_S = 0; // 売り注文の結果をキャッチする変数
int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数

double Heiken_Open_2 = 0; /*2 本前のバーの平均足の始値に変身した　　
　　　　　　　　　　　　　 iCustom 関数を代入する変数*/
double Heiken_Close_2 = 0; /*2 本前のバーの平均足の終値に変身した
　　　　　　　　　　　　　 iCustom 関数を代入する変数*/
double Heiken_Open_1 = 0; /*1 本前のバーの平均足の始値に変身した
　　　　　　　　　　　　　iCustom 関数を代入する変数*/
double Heiken_Close_1 = 0; /*1 本前のバーの平均足の終値に変身した
                          iCustom 関数を代入する変数*/


int start()
{

   Heiken_Open_2 = iCustom(NULL,0,"Heiken Ashi",0,2);
   Heiken_Close_2 = iCustom(NULL,0,"Heiken Ashi",3,2);
   Heiken_Open_1 = iCustom(NULL,0,"Heiken Ashi",0,1);
   Heiken_Close_1 = iCustom(NULL,0,"Heiken Ashi",3,1);
   
   // 買いポジションのエグジット
   if(   Heiken_Open_2 <= Heiken_Close_2
      && Heiken_Open_1 > Heiken_Close_1
      && ( Ticket_L != 0 && Ticket_L != -1 ))
      {
         Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
         if( Exit_L ==1 ) {Ticket_L = 0;}
      }
      
   // 売りポジションのエグジット
   if(   Heiken_Open_2 >= Heiken_Close_2
      && Heiken_Open_1 < Heiken_Close_1
      && ( Ticket_S != 0 && Ticket_S != -1 ))
      {
         Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
         if( Exit_S ==1 ) {Ticket_S = 0;}
      }
      
   // 買いエントリー
   if(   Heiken_Open_2 >= Heiken_Close_2
      && Heiken_Open_1 < Heiken_Close_1
      && ( Ticket_L == 0 || Ticket_L == -1 )
      && ( Ticket_S == 0 || Ticket_S == -1 ))
      {
         Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
      }
      
   // 売りエントリー
   if(   Heiken_Open_2 <= Heiken_Close_2
      && Heiken_Open_1 > Heiken_Close_1
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

const Bot12 = () => {
  const test = `
  //+------------------------------------------------------------------+
//|                                                       NY_Box.mq4 |
//|                                                                  |
//|                                                                  |
//+------------------------------------------------------------------+
#property indicator_chart_window
#property indicator_buffers 2
#property indicator_color1 Red
#property indicator_color2 Blue

extern int Start_Hour =10;
extern int End_Hour   =17;

//指標バッファ
double Buf0[];
double Buf1[];

double HH  = 0;
double LL  = 999999;


//+------------------------------------------------------------------+
//| Custom indicator initialization function                         |
//+------------------------------------------------------------------+

int init()
{
 
   SetIndexBuffer(0,Buf0);
   SetIndexBuffer(1,Buf1);
   SetIndexLabel(0,"HighestHigh");
   SetIndexLabel(1,"LowestLow");

   return(0);
}

//+------------------------------------------------------------------+
//| Custom indicator iteration function                              |
//+------------------------------------------------------------------+

int start()
{
   
   int limit = Bars-IndicatorCounted();
   if(limit==1) return(0);
 
   for(int i=limit-2; i>=0; i--)
    {        
      if(    (Start_Hour <  End_Hour &&  TimeHour(iTime(NULL,0,i+1)) >= Start_Hour && TimeHour(iTime(NULL,0,i+1)) < End_Hour )
          || (Start_Hour >  End_Hour && (TimeHour(iTime(NULL,0,i+1)) >= Start_Hour || TimeHour(iTime(NULL,0,i+1)) < End_Hour )) 
          ||  Start_Hour == End_Hour )
       {         
         if( HH < High[i+1] )
          {
            HH = High[i+1];             
          }
                     
         if( LL > Low[i+1] )
          {
            LL = Low[i+1];             
          }
       }
       
        
      if( TimeHour(iTime(NULL,0,i+1)) != End_Hour && TimeHour(iTime(NULL,0,i)) == End_Hour )
       {
         Buf0[i] = HH; 
         Buf1[i] = LL; 
         HH = 0;
         LL = 999999; 
       }  
      else
       {
         Buf0[i]= Buf0[i+1]; 
         Buf1[i]= Buf1[i+1];      
       }
       
   }

   return(0);
}
//+----------------------------
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot13 = () => {
  const test = `
  
//マジックナンバーの定義
#define MAGIC  1919        

//パラメーターの設定//
extern int RSIPeriod   = 12; //RSIの期間
extern int Long_Point  = 30; //買いエントリーポイント
extern int Short_Point = 60; //売りエントリーポイント
extern int EntryTime   = 6;  //エントリー時間
extern int ExitTime    = 10; //エグジット時間
extern int TP          = 50;  //利益確定ポイント数

extern double Lots     = 1.0;//取引ロット数
extern int Slip        = 10; //許容スリッページ数
extern string Comments = "Hayaoki";//コメント

//変数の設定//
int Ticket_L = 0; //買い注文の結果をキャッチする変数
int Ticket_S = 0; //売り注文の結果をキャッチする変数
int Exit_L   = 0; //買いポジションの決済注文の結果をキャッチする変数
int Exit_S   = 0; //売りポジションの決済注文の結果をキャッチする変数


int start()
  {
    
   //買いポジションの利益確定
   OrderSelect(Ticket_L, SELECT_BY_TICKET);
   
   if(    OrderOpenPrice() + TP * Point <=  Bid
       && ( Ticket_L != 0 && Ticket_L != -1 ) )
    {    
      Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
      if( Exit_L ==1 ) {Ticket_L = 0;}
    }       
    
   //売りポジションの利益確定
   OrderSelect(Ticket_S, SELECT_BY_TICKET);
   
   if(    OrderOpenPrice() - TP * Point >=  Ask
       && ( Ticket_S != 0 && Ticket_S != -1 ) )
    {    
      Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
      if( Exit_S ==1 ) {Ticket_S = 0;}
    }     
      
      
   //買いポジションのエグジット
   if(    Hour() == ExitTime
       && ( Ticket_L != 0 && Ticket_L != -1 )  )
    {     
      Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
      if( Exit_L ==1 ) {Ticket_L = 0;}
    }    
    
   //売りポジションのエグジット
   if(    Hour() == ExitTime
       && ( Ticket_S != 0 && Ticket_S != -1 ) )
    {     
      Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
      if( Exit_S ==1 ) {Ticket_S = 0;} 
    }   
   
   //買いエントリー
   if(    Hour() == EntryTime && iCustom(NULL,0,"RSI",RSIPeriod,0,1) <= Long_Point 
       && ( Ticket_L == 0 || Ticket_L == -1 ) 
       && ( Ticket_S == 0 || Ticket_S == -1 ))
    {  
      Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
    }
    
   //売りエントリー
   if(    Hour() == EntryTime && iCustom(NULL, 0,"RSI",RSIPeriod,0,1) >= Short_Point 
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

const Bot14 = () => {
  const test = `
  
#define MAGIC 777

// パラメーターの設定//
extern int RSIPeriod = 12; //RSI の期間設定
extern int Long_Point = 30; // 買いエントリーするポイント
extern int Short_Point = 70; // 売りエントリーするポイント
extern int Long_ExitPoint = 70; // 買いポジションを決済するポイント
extern int Short_ExitPoint = 30; // 売りポジションを決済するポイント

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
   if(   iCustom(NULL,0,"RSI",RSIPeriod,0,2) < Long_ExitPoint
      && iCustom(NULL,0,"RSI",RSIPeriod,0,1) >= Long_ExitPoint
      && ( Ticket_L != 0 && Ticket_L != -1 ))
      {
         Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
         if( Exit_L == 1 ) {Ticket_L = 0;}
      }
   
   // 売りポジションのエグジット
   if(   iCustom(NULL,0,"RSI",RSIPeriod,0,2) > Short_ExitPoint
      && iCustom(NULL,0,"RSI",RSIPeriod,0,1) <= Short_ExitPoint
      && ( Ticket_S != 0 && Ticket_S != -1 ))
      {
         Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
         if( Exit_S == 1 ) {Ticket_S = 0;}
      }
      
   // 買いエントリー
   if(   iCustom(NULL,0,"RSI",RSIPeriod,0,2) > Long_Point
      && iCustom(NULL,0,"RSI",RSIPeriod,0,1) <= Long_Point
      && ( Ticket_L == 0 || Ticket_L == -1 )
      && ( Ticket_S == 0 || Ticket_S == -1 ))
      {
         Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
      }
      
   // 売りエントリー
   if(   iCustom(NULL,0,"RSI",RSIPeriod,0,2) < Short_Point
      && iCustom(NULL,0,"RSI",RSIPeriod,0,1) >= Short_Point
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

const Bot15 = () => {
  const test = `
 
// マジックナンバーの定義
#define MAGIC 3986

// パラメーターの設定//
extern int BandsPeriod = 20; // ボリンジャーバンドの期間設定
extern int BandsShift = 0; // ボリンジャーバンドを右にシフトする設定
extern double BandsDeviations = 2.0; // 標準偏差の設定

extern double Lots = 1.0; // 取引ロット数
extern int Slip = 10; // 許容スリッページ数
extern string Comments = " "; // コメント

// 変数の設定//
int Ticket_L = 0; // 買い注文の結果をキャッチする変数
int Ticket_S = 0; // 売り注文の結果をキャッチする変数
int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数


int start()
{

   // 買いポジションのエグジット
   if(   iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,1,2) >= Close[2]
      && iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,1,1) < Close[1]
      && ( Ticket_L != 0 && Ticket_L != -1 ))
      {
         Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
         if( Exit_L == 1 ) {Ticket_L = 0;}
      }
      
   // 売りポジションのエグジット
   if(   iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,2,2) <= Close[2]
      && iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,2,1) > Close[1]
      && ( Ticket_S != 0 && Ticket_S != -1 ))
      {
         Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
         if( Exit_S == 1 ) {Ticket_S = 0;}
      }
      
   // 買いエントリー
   if(   iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,2,2) <= Close[2]
      && iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,2,1) > Close[1]
      && ( Ticket_L == 0 || Ticket_L == -1 )
      && ( Ticket_S == 0 || Ticket_S == -1 ))
      {
         Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0, Comments,MAGIC,0,Red);
      }
      
   // 売りエントリー
   if(   iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,1,2) >= Close[2]
      && iCustom(NULL,0,"Bands",BandsPeriod,BandsShift,BandsDeviations,1,1) < Close[1]
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

const Bot16 = () => {
  const test = `
  
// マジックナンバーの定義
#define MAGIC 1835

// パラメーターの設定//
extern int BandsPeriod = 20; // ボリンジャーバンドの期間設定
extern int BandsShift = 0; // ボリンジャーバンドを右にシフトする設定
extern double BandsDeviations = 2.0;// 標準偏差の設定
extern int RSIPeriod = 12; //RSI の期間設定

extern double Lots = 1.0; // 取引ロット数
extern int Slip = 10; // 許容スリッページ数
extern string Comments = " "; // コメント

// 変数の設定//
int Ticket_L = 0; // 買い注文の結果をキャッチする変数
int Ticket_S = 0; // 売り注文の結果をキャッチする変数
int Exit_L = 0; // 買いポジションの決済注文の結果をキャッチする変数
int Exit_S = 0; // 売りポジションの決済注文の結果をキャッチする変数

double BB_Upper_2 = 0; /*2 本前のバーの上バンドに変身したiCustom 関数
                       を代入する変数*/
double BB_Lower_2 = 0; /*2 本前のバーの下バンドに変身したiCustom 関数
                       を代入する変数*/
double BB_Upper_1 = 0; /*1 本前のバーの上バンドに変身したiCustom 関数
                       を代入する変数*/
double BB_Lower_1 = 0; /*1 本前のバーの下バンドに変身したiCustom 関数
                       を代入する変数*/
double RSI_2 = 0; /*2 本前のバーのRSI に変身したiCustom 関数を代入する
                  変数*/
double RSI_1 = 0; /*1 本前のバーのRSI に変身したiCustom 関数を代入する
                  変数*/

int start()
{

   BB_Upper_2 = iCustom(NULL,0,"Bands",BandsPeriod,
                            BandsShift,BandsDeviations,1,2);
   BB_Lower_2 = iCustom(NULL,0,"Bands",BandsPeriod,
                            BandsShift,BandsDeviations,2,2);
   BB_Upper_1 = iCustom(NULL,0,"Bands",BandsPeriod,
                            BandsShift,BandsDeviations,1,1);
   BB_Lower_1 = iCustom(NULL,0,"Bands",BandsPeriod,
                            BandsShift,BandsDeviations,2,1);
                            
   RSI_2 = iCustom(NULL,0,"RSI",RSIPeriod,0,2);
   RSI_1 = iCustom(NULL,0,"RSI",RSIPeriod,0,1);
   
   
   // 買いポジションのエグジット
   if(   ( BB_Upper_1 < Close[1] && RSI_2 < 70 && RSI_1 >= 70 )
      || ( BB_Upper_2 >= Close[2] && BB_Upper_1 < Close[1] && RSI_1 >= 70)
      && ( Ticket_L != 0 && Ticket_L != -1 ))
      {
         Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
         if( Exit_L == 1 ) {Ticket_L = 0;}
      }
      
   // 売りポジションのエグジット
   if(   ( BB_Lower_1 > Close[1] && RSI_2 > 30 && RSI_1 <= 30 )
      || ( BB_Lower_2 <= Close[2] && BB_Lower_1 > Close[1] && RSI_1 <= 30)
      && ( Ticket_S != 0 && Ticket_S != -1 ))
      {
         Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
         if( Exit_S == 1 ) {Ticket_S = 0;}
      }
      
   // 買いエントリー
   if(   ( BB_Lower_1 > Close[1] && RSI_2 > 30 && RSI_1 <= 30 )
      || ( BB_Lower_2 <= Close[2] && BB_Lower_1 > Close[1] && RSI_1 <= 30)
      && ( Ticket_L == 0 || Ticket_L == -1 )
      && ( Ticket_S == 0 || Ticket_S == -1 ))
      {
         Ticket_L = OrderSend(Symbol(),OP_BUY,
         Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
      }
      
   // 売りエントリー
   if(   ( BB_Upper_1 < Close[1] && RSI_2 < 70 && RSI_1 >= 70 )
      || ( BB_Upper_2 >= Close[2] && BB_Upper_1 < Close[1] && RSI_1 >= 70)
      && ( Ticket_S == 0 || Ticket_S == -1 )
      && ( Ticket_L == 0 || Ticket_L == -1 ))
      {
         Ticket_S = OrderSend(Symbol(),OP_SELL,
         Lots,Bid,Slip,0,0,Comments,MAGIC,0,Blue);
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

const Bot17 = () => {
  const test = `
 
//マジックナンバーの定義
#define MAGIC  4649        

//パラメーターの設定//
extern double Lots = 1.0;     //取引ロット数
extern int Slip = 10;         //許容スリッページ数
extern string Comments =  ""; //コメント

//変数の設定//
int Ticket_L = 0; //買い注文の結果をキャッチする変数
int Ticket_S = 0; //売り注文の結果をキャッチする変数
int Exit_L = 0;   //買いポジションの決済注文の結果をキャッチする変数
int Exit_S = 0;   //売りポジションの決済注文の結果をキャッチする変数


int start()
  {
     
   //買いポジションのエグジット
   if(    ■■■■
       && ( Ticket_L != 0 && Ticket_L != -1 ))
    {     
      Exit_L = OrderClose(Ticket_L,Lots,Bid,Slip,Red);
      if( Exit_L ==1 ) {Ticket_L = 0;}
    }    
    
   //売りポジションのエグジット
   if(    □□□□
       && ( Ticket_S != 0 && Ticket_S != -1 ))
    {     
      Exit_S = OrderClose(Ticket_S,Lots,Ask,Slip,Blue);
      if( Exit_S ==1 ) {Ticket_S = 0;} 
    }   
    
   //買いエントリー
   if(    ▲▲▲▲
       && ( Ticket_L == 0 || Ticket_L == -1 ) 
       && ( Ticket_S == 0 || Ticket_S == -1 ))
    {  
      Ticket_L = OrderSend(Symbol(),OP_BUY,Lots,Ask,Slip,0,0,Comments,MAGIC,0,Red);
    }
    
   //売りエントリー
   if(    △△△△
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

const Bot18 = () => {
  const test = `
  1.システムに4649と名前を付けました
  2.取引ロット数をパラメーター化します。最初は1.0ロットに設定します。
  3.許容スリッページの設定をパラメーター化します。最初は10ポイントに設定します。
  4.注文に付けるコメントの設定をパラメーター化します。最初は空欄に設定します。
  5.エントリー注文の結果がどうなったか(約定に成功したか、失敗したか)を把握するためにあるもの。最初は注文を出していないためゼロを設定します。
  Ticket_Lでは買い注文、Ticket_Sでは売り注文の約定結果を把握します。
  6.エグジット注文の結果(約定に成功したか失敗したか)を把握するためにあるもの。最初は注文を出していないためゼロを設定します。
  Exit_Lでは買いポジションのエグジット注文、Exit_Sでは売りポジションのエグジット注文の約定結果を把握します。
  7.「もし　」
  8.「&&」は複数の条件を満たさなくてはいけないことを指します。「Ticket_L==0」はまだ一度も買い注文の発注をしていない状態という意味です。
  「||」はいずれか一方の条件を満たせばよいことを指します。「➉」は買い注文を発注したが約定に失敗した状態という意味です。
  9.(Ticket_S==0||Ticket_S=-1)で売りポジションを持っていないという意味になります
  10.「Ticket_L=」とは注文が約定に成功したか失敗したかすなわち注文の約定結果を把握するものです。約定した場合は「5010000」などの約定番号が、未約定の場合は「-1」が入ります。
  11.エントリー注文内容の設定です。
  12.「Ticket_S=」とは注文が約定に成功したか失敗したかすなわち注文の約定結果を把握するものです。約定した場合は「5010000」などの約定番号が、未約定の場合は「-1」が入ります。
  13.ポジションのエグジット条件が入ります。
  14.「Ticket_L!=」は買い注文を発注した状態を意味します。したがってこの一文全体(Ticket_L!=0&&Ticket_L!=-1)で買いポジションを持っているという意味になります。
  同様に「(Ticket_S!=0&&Ticket_S!=-1)」で売りポジションを持っているという意味になります。
  15.「Exit_L=」や「Exit_S=」はエグジット注文が約定に成功したか失敗したかすなわち注文の約定結果を把握するものです。
  約定した場合は「1」が未約定の場合は「-1」が入ります。
  16.エグジット注文内容の設定です。
  17.「if(Exit_L==1)」や「if(Exit_S==1)」はもしエグジット注文が約定したらという意味です
  18.「Ticket_L=0;」や「Ticket_S=0;」はもうエグジット注文を出さないという意味です。
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot19 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUY,LotSize,Ask,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Order",MagicNumber,0,Green)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};