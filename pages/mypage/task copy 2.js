import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinePlot from '../../components/LinePlot';
import Dashboard from '../../components/chapter/mypage/dashboard';
import LinePlot_invester from '../../components/LinePlot_invester';
import LinePlot_buppan from '../../components/LinePlot_buppan';
import Doughnutchart from '../../components/Doughnut';
import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Chapterlifehabit from '../../components/chapter/wisdom_library/life/chapter_life_detail_habit';
import Header_wisdom from '../../components/header/header_wisdom';

const engineer_detail = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <Header_wisdom />
        <div className="flex ">
          <div className="w-1/4">
            <Chapterlifehabit />

          </div>
          <div class="">
            <div class="language-show__header text-center">
              <h1>生き方</h1>
            </div>
            <div className="flex">
              <div className="flex-1 min-w-5xl m-auto">
                <div className="pt-40">
                  <div className="block">
                    <div className="box-border">
                      <div className="inline-block bg-white">
                        <div className="float-left bg-green-300 h-full items-center">
                          <div>
                            <Image
                              src="/svg/20.svg"
                              alt="01:Pythonとは？"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="relative float-right m-10">
                          <div></div>
                          <span className="border-r-2 p-4 text-2xl">習慣を変える</span>
                          <span className="pl-4">
                            <Image
                              src="/svg/time.svg"
                              alt="01:Pythonとは？"
                              width={20}
                              height={20}

                            />
                            <span>目安時間　3h50m</span>
                          </span>
                          <div>
                            <div>
                              <div>

                              </div>
                              <p></p>
                            </div>
                            <div class="p-4">
                              FXについてよく使われる用語や取引方法について学んでいきます。
                            </div>
                            <div className="float-right">
                              <div className="text-green-300">
                                <Link href="./life_detail">
                                  <div>
                                    <button className="w-36 bg-green-300 text-white">
                                      レッスン詳細へ
                                    </button>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-2.5 h-10 bg-gray-300 rounded ml-12 mt-10"></div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      )
}

      export default engineer_detail











// const people = [
//   { id: 1, name: 'プロ', unavailable: false },
//   { id: 2, name: 'Ken', unavailable: false },
//   { id: 3, name: 'The', unavailable: false },
//   { id: 4, name: 'Ben', unavailable: true },
//   { id: 5, name: 'Kat', unavailable: false },
// ]

// export default function Home() {
//   const [selectedPerson, setSelectedPerson] = useState(people[0])
//   return (
//     <Layout>
//       <div className="">
//         <div className="float-left m-auto">
//           <Dashboard />
//         </div>

//         <div className="float-left w-2/6 m-20 ">
//           <div className='text-4xl m-4'>週間スケジュール</div>

//           <div>
//             <table class="table-auto">
//               <thead>
//                 <tr>
//                   <th class="px-4 py-4">時間帯</th>
//                   <th class="px-4 py-2">月</th>
//                   <th class="px-4 py-2">火</th>
//                   <th class="px-4 py-2">水</th>
//                   <th class="px-4 py-2">木</th>
//                   <th class="px-4 py-2">金</th>
//                   <th class="px-4 py-2">土</th>
//                   <th class="px-4 py-2">日</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">
//                     <Listbox value={selectedPerson} onChange={setSelectedPerson}>
//                       <Listbox.Button>{selectedPerson.name}</Listbox.Button>
//                       <Listbox.Options>
//                         {people.map((person) => (
//                           <Listbox.Option
//                             key={person.id}
//                             value={person}
//                             disabled={person.unavailable}
//                           >
//                             {person.name}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Listbox>
//                   </td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                   <td class="border px-4 py-2 text-center">7:00</td>
//                 </tr>
//                 <tr class="bg-gray-100">
//                   <td class="border px-4 py-2 text-center">8:00</td>
//                   <td class="border px-4 py-2">Adam</td>
//                   <td class="border px-4 py-2">112</td>
//                   <td class="border px-4 py-2">112</td>
//                   <td class="border px-4 py-2">112</td>
//                   <td class="border px-4 py-2">112</td>
//                   <td class="border px-4 py-2">112</td>
//                   <td class="border px-4 py-2">112</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">9:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">10:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">11:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">12:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">13:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">14:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">15:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">16:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">17:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">18:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">19:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">20:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">21:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">22:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">23:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">0:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">1:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">2:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">3:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">4:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">5:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//                 <tr>
//                   <td class="border px-4 py-2 text-center">6:00</td>
//                   <td class="border px-4 py-2">Chris</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                   <td class="border px-4 py-2">1,280</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>

//     </Layout>
//   )
// }



<Mypage>


      {/* <div className="pt-20">
        <div className="inline-block bg-white">
          <div className="float-left bg-green-300 h-full items-center">
            <div>
              <Image
                src="/images/asana.jpg"
                alt="01:Pythonとは？"
                width={200}
                height={120}
              />
            </div>
          </div>
          <div className="relative float-right m-10">
            <div></div>
            <span className="border-r-2 p-4 text-2xl">asana</span>
            <div>
              <div class="p-4">
                プロジェクトとタスクを一元管理できる、究極のワークマネジメントツール
              </div>
              <div className="float-right">
                <div className="text-green-300">
                  <Link href="https://app.asana.com/">
                    <div>
                      <button className="w-36 bg-green-300 text-white">
                        サイトへ
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div> */}
    </div>
    <div className="">
      <div className="min-w-5xl m-auto">
        <div className="pt-20">
          <div className="inline-block bg-white">
            <div className="float-left bg-green-300 h-full items-center">
              <div>
                <Image
                  src="/images/trello.jpg"
                  alt="01:Pythonとは？"
                  width={200}
                  height={120}
                />
              </div>
            </div>
            <div className="relative float-right m-10">
              <div></div>
              <span className="border-r-2 p-4 text-2xl">Trello</span>
              <div>
                <div class="p-4">
                  タスクのあらゆる作業を管理、追跡してチームメイトと共有できる、業務管理ポータル
                </div>
                <div className="float-right">
                  <div className="text-green-300">
                    <Link href="https://trello.com/">
                      <div>
                        <button className="w-36 bg-green-300 text-white">
                          サイトへ
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Mypage>