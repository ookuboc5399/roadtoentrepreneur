import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Bot } from '../../../../components/layout/invester/invester';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "programing_detail" ? (
          <Bot>
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Pythonから金融庁のEDINET APIを使って有価証券報告書を取得する</div>
          <p>金融庁は電子開示システム「EDINET」のWeb APIを公開しています。この記事は、PythonからEDINET APIを使って有価証券報告書を検索したり、有価証券報告書を取得する方法を紹介しています。</p>
          <Bot0 />
          <h4>requests、jsonモジュールのインストール</h4>
          <p></p>
          <p></p>
          <p></p>
    
          <p></p>
          <p></p>
    
          <Bot1 />
          <h4>提出書類一覧データおよびメタデータの取得</h4>
          <p>メタデータとは、日付ごとの提出書類一覧に関する基礎情報のことである。メタデータには、件数や更新日時などが含まれる。</p>
          <p>EDINETからメタデータを取得するには、書類一覧APIを使う。</p>
          <h4>EDINET書類一覧API</h4>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    エンドポイント
                  </th>
                  <td class="px-6 py-4">
                    https://disclosure.edinet-fsa.go.jp/api/バージョン/documents.json
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    HTTPメソッド
                  </th>
                  <td class="px-6 py-4">
                    GET
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    応答形式
                  </th>
                  <td class="px-6 py-4">
                    JSON
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    暗号化
                  </th>
                  <td class="px-6 py-4">
                    TLS (Transport Layer Security)
                  </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    クロスドメイン通信
                  </th>
                  <td class="px-6 py-4">
                    許可しない
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
          <h4>EDINET書類一覧APIのリクエストパラメータ</h4>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    date
                  </th>
                  <td class="px-6 py-4">
                    ファイル日付
                  </td>
                  <td class="px-6 py-4">
                    Yes
                  </td>
                  <td class="px-6 py-4">
                    日付（YYYY-MM-DD形式）
                  </td>
                  <td class="px-6 py-4">
                    出力対象とする提出書類一覧のファイル日付を指定します。
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    type
                  </th>
                  <td class="px-6 py-4">
                    取得情報
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class="px-6 py-4">
                    メタデータのみを取得します。指定が無い場合のデフォルト値です。
                  </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    type
                  </th>
                  <td class="px-6 py-4">
                    取得情報
                  </td>
                  <td class="px-6 py-4">
                    No
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    提出書類一覧及びメタデータを取得します。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>PythonからEDINET書類一覧APIを使ってメタデータを取得するサンプル</h4>
          <Bot2 />
          <p>以下のような結果が得られます。</p>
          <Bot3 />
          <h4>resultsデータの取得</h4>
          <p>実際のドキュメントのデータを取得するために、docID、docDescription、filerNameを使いたいので、上記のresをjsonに変換してpythonで扱えるようにします。</p>
          <Bot4 />
          <p>以下のような結果が得られます。</p>
          <Bot5 />
    
          <h4>決算データの取得</h4>
          <Bot6 />
          <Bot7 />
          <h4>zipファイルの取得</h4>
          <p>先程取得したresultsリストの0番目（サイバーエージェント）のXBRLデータを取得したいと思います。</p>
          <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 text-xl" role="alert">
            <span class="font-medium">XBRLとは</span> <p>XBRLとは、決算短信等の各種財務報告用の情報について、その作成・流通・利用の促進を可能とするために、XBRL Internationalによって国際的に標準化された電子開示に適したコンピュータ言語です。
            XBRL文書は、勘定科目や項目名などの要素名、表示名、属性（金額、日付等）、各要素間の関係（様式、親子関係等）などについて定義した用語集であるタクソノミと、会計システム等のシステムから作成されたデータ（財務諸表数値など）に、タクソノミで定義された意味付け（タグ付け）をすることで、コンピュータが理解できるようにした報告書データの本体としてのインスタンス文書から構成されています。
            決算短信等の開示についてXBRLが導入されることにより、情報の作成者・利用者について、以下の効果が期待できます。</p>
          </div>
          <Bot8 />
          <p>このdocidを使って、zipファイルを取得するコードを書きます。</p>
          <Bot9 />
          <p>これで現在のフォルダに「S100FOJX.zip」というzipファイルができていると思います。</p>
          <h4>zipファイルの解凍</h4>
          <p>このzipファイルを手動で解凍しても良いのですが、それだとファイル数が増えたときに大変なので、解凍も自動化したいと思います。</p>
          <p>zipファイルの解凍にはzipfileというモジュールをインポートします。</p>
          <p> 以下のコードで現在のフォルダに解凍されたフォルダが展開されます。</p>
          <Bot10 />
          <p>S100FOJXという名前のフォルダが出来上がり、以下のようなフォルダ構成になっているかと思います。</p>
          <Bot11 />
          <h4>htmファイルの取得</h4>
          <p>先程のフォルダの中の「0101010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm」というファイルに売上高、経常利益などが記載されていますので、そのhtmファイルをpythonで扱えるようにしたいと思います。</p>
          <p>フォルダ内のファイルを取得するのには、globというモジュールをインポートします。</p>
          <Bot12 />
          <p>以下のコードでhtmlファイルとして読み込むことができます。</p>
          <Bot13 />
          <h4>BeautifulSoupでhtml内のデータを取得</h4>
          <p>上記のコードでhtmlファイルとして読み込むことができたので、最後にBeautifuSoupでデータを取得したいと思います。</p>
          <Bot14 />
          <p>以下のような結果が得られていると思います。</p>
          <Bot15 />
          <p>あとはスクレイピング。</p>
        </Bot>
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
        ) : id == 6 ?(
          <EA>
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ボリンジャーバンドシステム</div>
          <Bot15 />
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ボリンジャーバンドとRSIシステム</div>
          <Bot16 />
            
              </EA>
        ): id == 7 ?(
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
        ): (
          <></>
        )}
    </div>
  )
}

export default Post


const Bot0 = () => {
  const test = `
  import requests
  import json
  import zipfile
  import glob
  from bs4 import BeautifulSoup
  
  
  # 書類一覧APIのエンドポイント
  url = "https://disclosure.edinet-fsa.go.jp/api/v1/documents.json"
  # 書類一覧APIのリクエストパラメータ
  params = {
    "date" : '2019-04-25',
    "type" : 2
  }
  
  # 書類一覧APIの呼び出し
  res = requests.get(url, params=params, verify=False)
  
  # resultデータ取得
  res_text = json.loads(res.text)
  results= res_text["results"]
  
  # 決算データに絞る
  kessan = []
  for result in results:
      if result['docDescription'] is not None:
          if '四半期' in result['docDescription']:
              kessan.append(result)
  
  
  # zipファイル取得
  docid = kessan[0]['docID']
  url = 'https://disclosure.edinet-fsa.go.jp/api/v1/documents/' + docid
  params = {
    "type" : 1
  }
  res = requests.get(url, params = params, verify=False)
  
  # ファイルへ出力
  filename = docid + ".zip"
  if res.status_code == 200:
      with open(filename, 'wb') as f:
          for chunk in res.iter_content(chunk_size=1024):
              f.write(chunk)
  
  # zipファイル解凍
  with zipfile.ZipFile(filename) as existing_zip:
      existing_zip.extractall(docid)
  
  # 対象htmの取得
  filepath = docid + '/XBRL/PublicDoc/'
  files = glob.glob(filepath+'*.htm')
  files = sorted(files)
  target_file = files[1]
  
  with open(target_file , encoding='utf-8') as f:
      html = f.read()
  
  # htmデータの取得
  soup = BeautifulSoup(html, 'html.parser')
  
  tag_p = soup.find_all('p')
  for p in tag_p:
      print(p.text)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot1 = () => {
  const test = `
  import requests
  import json
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot2 = () => {
  const test = `
  import requests

# 書類一覧APIのエンドポイント
url = "https://disclosure.edinet-fsa.go.jp/api/v1/documents.json"

# 書類一覧APIのリクエストパラメータ
params = {
  "date" : "2019-04-25"
  "type" : 2
}

# 書類一覧APIの呼び出し
res = requests.get(url, params=params, verify=False)

# レスポンス（JSON）の表示
print(res.text)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot3 = () => {
  const test = `
  {
    "metadata":
        {
            "title": "提出された書類を把握するためのAPI",
            "parameter":
                {
                    "date": "2019-04-25",
                    "type": "2"
                },
            "resultset":
                {
                    "count": 370
                },
            "processDateTime": "2019-10-22 00:01",
            "status": "200",
            "message": "OK"
        },
    "results": [
        {
            "seqNumber": 1,
            "docID": "S100FIZV",
            "edinetCode": "E11764",
            "secCode": null,
            "JCN": "1010401064261",
            "filerName": "Ｔ＆Ｄアセットマネジメント株式会社",
            "fundCode": "G08875",
            "ordinanceCode": "030",
            "formCode": "07A000",
            "docTypeCode": "120",
            "periodStart": "2018-07-26",
            "periodEnd": "2019-01-25",
            "submitDateTime": "2019-04-25 09:00",
            "docDescription": "有価証券報告書（内国投資信託受益証券）－第13期(平成30年7月26日－平成31年1月25日)",
            "issuerEdinetCode": null,
            "subjectEdinetCode": null,
            "subsidiaryEdinetCode": null,
            "currentReportReason": null,
            "parentDocID": null,
            "opeDateTime": null,
            "withdrawalStatus": "0",
            "docInfoEditStatus": "0",
            "disclosureStatus": "0",
            "xbrlFlag": "1",
            "pdfFlag": "1",
            "attachDocFlag": "1",
            "englishDocFlag": "0"
        },
        {
            "seqNumber": 2,
            "docID": "S100FNKK",
            "edinetCode": "E12448",

--- 以下省略 ---
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot4 = () => {
  const test = `
  #APIの結果をjson形式に変換
res_text = json.loads(res.text)

#res_text内のresultsの内容を取得
results= res_text["results"]

#resultsの中身（docID, docDescription, filerName）を表示
for result in results:
    print(result['docID'], result['docDescription'],result['filerName'])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot5 = () => {
  const test = `
  S100FIZV 有価証券報告書（内国投資信託受益証券）－第13期(平成30年7月26日－平成31年1月25日) Ｔ＆Ｄアセットマネジメント株式会社
S100FNKK 臨時報告書（内国特定有価証券） 明治安田アセットマネジメント株式会社
S100EU0W 半期報告書（内国投資信託受益証券）－第9期(平成30年7月26日－平成31年7月25日) 三井住友トラスト・アセットマネジメント株式会社
S100FJ03 訂正有価証券届出書（内国投資信託受益証券） Ｔ＆Ｄアセットマネジメント株式会社
S100F0BR 半期報告書（内国投資信託受益証券）－第19期(平成30年7月26日－平成31年7月25日) アセットマネジメントＯｎｅ株式会社
S100F8D7 有価証券報告書（内国投資信託受益証券）－第11期(平成30年7月27日－平成31年1月28日) 新生インベストメント・マネジメント株式会社
S100FGIF 訂正有価証券届出書（内国投資信託受益証券） 野村アセットマネジメント株式会社
--- 以下省略 ---
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot6 = () => {
  const test = `
  kessan = []
for result in results:
    if result['docDescription'] is not None:
        if '四半期' in result['docDescription']:
            print(result['docID'], result['docDescription'],result['filerName'])
            kessan.append(result)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot7 = () => {
  const test = `
  S100FOJX 四半期報告書－第22期第2四半期(平成31年1月1日－平成31年3月31日) 株式会社サイバーエージェント
S100FOK3 四半期報告書－第38期第1四半期(平成31年1月1日－平成31年3月31日) 株式会社ブロンコビリー
S100E3QC 四半期報告書－第19期第2四半期(平成30年5月1日－平成30年7月31日) 株式会社Ｍマート
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot8 = () => {
  const test = `
  #0番目のdocumentのdocID（S100FOJX）を取得
  docid = kessan[0]['docID'] 
  print(docid)
  
  >> 'S100FOJX'
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot9 = () => {
  const test = `
  # 書類取得APIのエンドポイント
  url = "https://disclosure.edinet-fsa.go.jp/api/v1/documents/" + docid
  
  # 書類取得APIのリクエストパラメータ
  params = {
    "type" : 1
  }
  
  # 出力ファイル名
  filename = docid + ".zip"
  
  # 書類取得APIの呼び出し
  res = requests.get(url, params=params, verify=False)
  
  # ファイルへ出力
  if res.status_code == 200:
    with open(filename, 'wb') as f:
      for chunk in res.iter_content(chunk_size=1024):
        f.write(chunk)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot10 = () => {
  const test = `
  import zipfile
  with zipfile.ZipFile(filename) as existing_zip:
      existing_zip.extractall(docid)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot11 = () => {
  const test = `
  S100FOJX/
  └── XBRL
      ├── AuditDoc
      │   ├── jpaud-qrr-cc-001_E05072-000_2019-03-31_01_2019-04-25.xbrl
      │   ├── jpaud-qrr-cc-001_E05072-000_2019-03-31_01_2019-04-25.xsd
      │   ├── jpaud-qrr-cc-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
      │   ├── jpaud-qrr-cc-001_E05072-000_2019-03-31_01_2019-04-25_pre.xml
      │   └── manifest_AuditDoc.xml
      └── PublicDoc
          ├── 0000000_header_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0101010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0102010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0103010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104000_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104020_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104035_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104050_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104100_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0104110_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── 0201010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25.xbrl
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25.xsd
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_cal.xml
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_def.xml
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_lab-en.xml
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_lab.xml
          ├── jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_pre.xml
          └── manifest_PublicDoc.xml
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot12 = () => {
  const test = `
  import glob

  filepath = docid + '/XBRL/PublicDoc/'
  
  files = glob.glob(filepath+'*.htm') #htmファイルの取得
  files = sorted(files) #ファイルを並び替えているだけ
  target_file = files[1]
  print(target_file)
  
  >> S100FOJX/XBRL/PublicDoc/0101010_honbun_jpcrp040300-q2r-001_E05072-000_2019-03-31_01_2019-04-25_ixbrl.htm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Bot13 = () => {
  const test = `
  with open(target_file , encoding='utf-8') as f:
  html = f.read()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot14 = () => {
  const test = `
  from bs4 import BeautifulSoup
  soup = BeautifulSoup(html, 'html.parser')
  
  tag_p = soup.find_all('p') #pタグの要素を取得
  
  #pタグのテキストを表示
  for p in tag_p:
      print(p.text)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Bot15 = () => {
  const test = `
  回次
  第21期
  第２四半期
  連結累計期間
  第22期
  第２四半期
  連結累計期間
  第21期
  会計期間
  自  2017年10月１日
  至  2018年３月31日
  自  2018年10月１日
  至  2019年３月31日
  自  2017年10月１日
  至  2018年９月30日
  売上高
  （百万円）
  207,495
  228,184
  419,512
  経常利益
  （百万円）
  18,574
  13,729
  28,565
  --- 以下省略 ---
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};