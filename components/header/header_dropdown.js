import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { Dropdown } from 'react-bootstrap';



export function Header() {
  return (
    <div className='h-28'>
      <nav className="flex justify-between h-full pr-4 items-center space-x-4 bg-white text-xl">
        <div className="">
          <Link href="/">
            <Image
            className="cursor-pointer"
              src="/svg/road to entrepreneur.svg"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1 cursor-pointer">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Contents
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="./engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="./english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="./invester_entrepreneur/invester_entrepreneur">
                    投資・起業
                  </Link>
                </div>
                <div>
                  <Link href="./future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="./sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="./wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage/dream_image">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 cursor-pointer">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base ">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 cursor-pointer">
            <Image
              src="/svg/slack.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base ">{"Slack"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_invester() {
  return (
    <div>
      <nav className="flex justify-between items-start h-full pr-4 bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div>
                  <Link href="/engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="/english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="/invester/invester">
                    投資
                  </Link>
                </div>
                <div>
                  <Link href="/buppan/buppan">
                    物販
                  </Link>
                </div>
                <div>
                  <Link href="/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="/movie">
                    動画
                  </Link>
                </div>
                <div>
                  <Link href="/marketing">
                    マーケティング
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage/mypage_Dashboard">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">サイト</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://www.binance.com/ja">
                    Binance
                  </Link>
                </div>
                <div>
                  <Link href="https://www.sbisec.co.jp/ETGate/?_ControlID=WPLEThmR001Control&_PageID=DefaultPID&_DataStoreID=DSWPLEThmR001Control&_ActionID=DefaultAID&getFlg=on">
                    SBI証券
                  </Link>
                </div>
                <div>
                  <Link href="https://imm.gradefour.net/">
                    シカゴ投機筋IMMポジション推移
                  </Link>
                </div>
                <div>
                  <Link href="https://secure.bitwallet.com/signin/">
                    bitwallet
                  </Link>
                </div>
                <div>
                  <Link href="https://coinpost.jp/">
                    CoinPost
                  </Link>
                </div>
                <div>
                  <Link href="https://coinmarketcap.com/ja/">
                    CoinMarketCap
                  </Link>
                </div>
                <div>
                  <Link href="https://coinmarketcal.com/en/">
                    CoinMarketCal
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 text-white">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">ブログ</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://perpetualtravelerchoja.com/">
                    FXで人生を変える～好きなことで生きていく～
                  </Link>
                </div>
                <div>
                  <Link href="https://zakki.perpetualtravelerchoja.com/">
                    PERPETUALCHOJAのつぶやき
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Link>
        <Link href="/invester/invester_road">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/images/book.png"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"決算予定"}</li>
          </div>
        </Link>
        <Link href="/invester/invester_road">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/images/book.png"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"投資家への道"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_engineer() {
  return (
    <div>
      <nav className="flex justify-between items-center h-32 pr-4 bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="/">
            <Image
            className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="/engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="/english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="/invester_entrepreneur/invester_entrepreneur">
                    投資・起業
                  </Link>
                </div>
                <div>
                  <Link href="/future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="/sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="/wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">ブログ</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="http://www.agile-software.site/">
                    Agile育成ブログ
                  </Link>
                </div>
                <div>
                  <Link href="https://saruwakakun.com/">
                    サルワカ
                  </Link>
                </div>
                <div>
                  <Link href="https://code-kitchen.dev/">
                    CODE KITCHEN
                  </Link>
                </div>
                <div>
                  <Link href="https://stock.pulpxstyle.com/">
                    STOCK
                  </Link>
                </div>
                <div>
                  <Link href="https://cssgrid-generator.netlify.app/">
                    CSS Grid Generator
                  </Link>
                </div>
                <div>
                  <Link href="https://neumorphism.io/#e0e0e0">
                    Neumorphism.io
                  </Link>
                </div>
                <div>
                  <Link href="https://cssbuttons.io/">
                    cssbuttons.io
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">マニュアル</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://www.chartjs.org/">
                    Chart.js
                  </Link>
                </div>
                <div>
                  <Link href="https://material-ui.com/">
                    MATERIAL-UI
                  </Link>
                </div>
                <div>
                  <Link href="https://reactjs.org/">
                    React
                  </Link>
                </div>
                <div>
                  <Link href="https://nerdcave.com/tailwind-cheat-sheet">
                    Tailwind-cheat-sheet
                  </Link>
                </div>
                <div>
                  <Link href="https://getbootstrap.jp/">
                    Bootstrap
                  </Link>
                </div>
                <div>
                  <Link href="https://react-bootstrap.github.io/">
                    React Bootstrap
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage/dream_image">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 cursor-pointer">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="/engineer/engineer_road">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 cursor-pointer">
            <Image
              src="/images/book.png"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Engineerへの道"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_engineer2() {
  return (
    <div>
      <nav className="flex justify-between h-32 z-20 mr-4 items-center space-x-4 bg-gray-900 text-xl">
        <div className="">
          <Link href="">
            <Image
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div>
          <Dropdownblog />
        </div>
        <div>
          <Dropdownmanual />
        </div>
        {/* <Link href="/mypage">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link> */}

        <Dropdownmanual />
        <Link href="/engineer/engineer_road">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/images/book.png"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Engineerへの道"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_english() {
  return (
    <div>
      <nav className="flex justify-between items-start h-full pr-4 bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="../../">
            <Image
            className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="./engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="./english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="./invester/invester">
                    投資
                  </Link>
                </div>
                <div>
                  <Link href="./entrepreneur/entrepreneur">
                    起業
                  </Link>
                </div>
                <div>
                  <Link href="./buppan/buppan">
                    物販
                  </Link>
                </div>
                <div>
                  <Link href="./future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="./movie">
                    動画
                  </Link>
                </div>
                <div>
                  <Link href="./sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="./wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">ブログ</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://language-worldwide.com/">
                    言語に壁はない～英語・韓国語～
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage/dream_image">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="/engineer_text">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/book.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"海外への道"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_futureworld() {
  return (
    <div>
      <nav className="flex justify-between items-center h-32 pr-4 bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="/">
            <Image
            className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="./engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="./english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="./invester/invester">
                    投資
                  </Link>
                </div>
                <div>
                  <Link href="./entrepreneur/entrepreneur">
                    起業
                  </Link>
                </div>
                <div>
                  <Link href="./buppan/buppan">
                    物販
                  </Link>
                </div>
                <div>
                  <Link href="./future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="./movie">
                    動画
                  </Link>
                </div>
                <div>
                  <Link href="./sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="./wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">ブログ</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://language-worldwide.com/">
                    VR-rev
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_sidebusiness() {
  return (
    <div>
      <nav className="flex justify-between items-center h-32 pr-4 bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="/">
            <Image
            className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="/engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="/english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="/invester_entrepreneur/invester_entrepreneur">
                    投資・起業
                  </Link>
                </div>
                <div>
                  <Link href="/future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="/sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="/wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">ブログ</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="http://buppan-worldwide.com/">
                    物販で世界を駆ける
                  </Link>
                </div>
                <div>
                  <Link href="http://www.agile-software.site/">
                    Agile育成ブログ
                  </Link>
                </div>
                <div>
                  <Link href="https://perpetualtravelerchoja.com/">
                    FXで人生を変える～好きなことで生きていく～
                  </Link>
                </div>
                <div>
                  <Link href="https://zakki.perpetualtravelerchoja.com/">
                    PERPETUALCHOJAのつぶやき
                  </Link>
                </div>
                <div>
                  <Link href="https://language-worldwide.com/">
                    言語に壁はない～英語・韓国語～
                  </Link>
                </div>
                <div>
                  <Link href="https://buppan-worldwide.com/">
                    物販で世界を駆ける
                  </Link>
                </div>
                <div>
                  <Link href="http://nba-atp-fifa.com/">
                    SPORT in Life~
                  </Link>
                </div>
                <div>
                  <Link href="https://umuco.jp/">
                    umuco digital
                  </Link>
                </div>
                <div>
                  <Link href="https://saruwakakun.com/">
                    サルワカ
                  </Link>
                </div>
                <div>
                  <Link href="https://code-kitchen.dev/">
                    CODE KITCHEN
                  </Link>
                </div>

              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">サイト</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="https://aucfan.com/">
                    aucfan
                  </Link>
                </div>
                <div>
                  <Link href="https://www.amazon.co.jp/">
                    Amazon
                  </Link>
                </div>
                <div>
                  <Link href="https://accounts.shopify.com/store-login">
                    Shopify
                  </Link>
                </div>
                <div>
                  <Link href="https://admin.thebase.in/dashboard">
                    BASE
                  </Link>
                </div>
                <div>
                  <Link href="https://www.ebay.com/">
                    ebay
                  </Link>
                </div>
                <div>
                  <Link href="https://www.sellersprite.com/jp">
                    セラースプライト
                  </Link>
                </div>
                <div>
                  <Link href="https://sellersket.com/">
                    セラースケット
                  </Link>
                </div>
                <div>
                  <Link href="https://www.chartjs.org/">
                    ABCオンライン
                  </Link>
                </div>
                <div>
                  <Link href="https://getbootstrap.jp/">
                    Bootstrap
                  </Link>
                </div>
                <div>
                  <Link href="https://react-bootstrap.github.io/">
                    React Bootstrap
                  </Link>
                </div>
                <div>
                  <Link href="https://www.canva.com/">
                    Canva
                  </Link>
                </div>
                <div>
                  <Link href="https://www.pinterest.jp/">
                    pinterest
                  </Link>
                </div>
                <div>
                  <Link href="https://code-kitchen.dev/">
                    CODE KITCHEN
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage/dream_image">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="/sidebusiness/buppan/buppan_road">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/book.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"ビジネスへの道"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_wisdom() {
  return (
    <div>
      <nav className="flex justify-between h-32 pr-4  bg-gray-900 text-xl mb-2">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={140}
              height={130}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="./engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="./english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="./invester/invester">
                    投資
                  </Link>
                </div>
                <div>
                  <Link href="./entrepreneur/entrepreneur">
                    起業
                  </Link>
                </div>
                <div>
                  <Link href="./buppan/buppan">
                    物販
                  </Link>
                </div>
                <div>
                  <Link href="./future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="./movie">
                    動画
                  </Link>
                </div>
                <div>
                  <Link href="./blog/blog">
                    ブログ
                  </Link>
                </div>
                <div>
                  <Link href="./sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="./wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/slack.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Slack"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_only() {
  return (
    <div className="sticky top-0 z-10">
      <nav className="flex items-center h-32 pr-4  bg-gray-900 text-xl mb-2">
        <div  className="">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </nav>
    </div>

  )
}

export function Header_mypage() {
  return (
    <div>
      <nav className="flex justify-between h-32 pr-4  bg-gray-900 text-xl mb-2">
        <div className="">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/road to entrepreneur_white.png"
              alt="top"
              width={140}
              height={130}
            />
          </Link>
        </div>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4 z-1">
            <Image
              src="/svg/1.svg"
              alt="top"
              width={50}
              height={50}
            />
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <div className=" text-white">Contents</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Link href="/engineer/engineer">
                    プログラミング
                  </Link>
                </div>
                <div>
                  <Link href="/english/english">
                    英語講座
                  </Link>
                </div>
                <div>
                  <Link href="/invester_entrepreneur/invester_entrepreneur">
                    投資・起業
                  </Link>
                </div>
                <div>
                  <Link href="/future_world/future_world">
                    未来の世界
                  </Link>
                </div>
                <div>
                  <Link href="/sidebusiness/sidebusiness">
                    サイドビジネス
                  </Link>
                </div>
                <div>
                  <Link href="/wisdom_library/wisdom_library">
                    知識の図書館
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>


          </div>
        </Link>
        <Link href="/mypage">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/mypage.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Mypage"}</li>
          </div>
        </Link>
        <Link href="">
          <div className="box-border list-item list-none text-center border-t-4 border-red-500 mt-4">
            <Image
              src="/svg/slack.svg"
              alt="top"
              width={50}
              height={50}
            />
            <li className="text-base text-white">{"Slack"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}