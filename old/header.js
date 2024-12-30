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
          <div>
            <div className="text-center border-t-4 border-red-500 mt-4 z-1 cursor-pointer">
              <Image
                src="/svg/1.svg"
                alt="top"
                width={50}
                height={50}
              />
              <div>
                <button class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Contents
                  <svg aria-hidden="true" class="ml-1 w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                  <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul class="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
                      <li>
                        <Link
                          href="./engineer/engineer">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only"> プログラミング</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                          プログラミング
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="./english/english">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only"> 英語講座</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            英語講座
                          </div>
                        </Link>
                      </li>
                      <li >
                        <Link
                          href="./invester_entrepreneur/invester_entrepreneur">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only">投資・起業</span>
                            <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            投資・起業
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul class="space-y-4">
                      <li>
                        <Link
                          href="./future_world/future_world">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only">未来の世界</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                            未来の世界
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="./sidebusiness/sidebusiness">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only">サイドビジネス</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                          サイドビジネス
                          </div>
                        </Link>
                      </li>
                      <li>
                      <Link
                          href="./wisdom_library/wisdom_library">
                          <div className='flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group'>
                          <span class="sr-only">知識の図書館</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                          知識の図書館
                          </div>
                        </Link>
                      </li>
                      <li>
                        <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                          <span class="sr-only">License</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4 text-gray-900 dark:text-white">
                    <ul class="space-y-4">
                      <li>
                        <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                          <span class="sr-only">Contact Us</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                          <span class="sr-only">Support Center</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                          <span class="sr-only">Terms</span>
                          <svg class="mr-2 w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
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
            <li className="font-medium text-gray-700">{"Mypage"}</li>
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
            <li className="font-medium text-gray-700">{"Slack"}</li>
          </div>
        </Link>
      </nav>
    </div>

  )
}

export function Header_invester() {
  return (
    <div>
      <nav className="flex justify-between items-center h-full pr-4 bg-gray-900 text-xl mb-2">
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
          <div className="box-border list-item list-none text-center  mt-4 z-1">
             <FontAwesomeIcon icon={faWagonCovered} size="2x" style={{ color: 'white' }} />
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
          <div className="box-border list-item list-none text-center mt-4">
          <FontAwesomeIcon icon={faUser} size="2x" style={{ color: 'white' }} />
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
        <Link href="/invester_entrepreneur/invester_entrepreneur_road">
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