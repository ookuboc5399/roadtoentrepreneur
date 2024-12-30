import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import {Bot} from '../../../../../components/layout/invester/bot/bot_detail_program';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Bot>
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
          <Bot1 />
    
        </Bot>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Bot1 = () => {
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

const Bot2 = () => {
  const test = `
  OrderSend(Symbol(),OP_BUY,LotSize,Ask,Slippage,BuyStopLoss,BuyTakeProfit,"Buy Order",MagicNumber,0,Green)
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