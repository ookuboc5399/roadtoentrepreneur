import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../../../components/Sidebar';
import { Overview } from '../../../../components/layout/invester/invester';
import { LinePlot_revenue, LinePlot_investingcf, LinePlot_operatingcf, LinePlot_pretaxmargin, LinePlot_totalassets, LinePlot_capitalratio } from '../../../../components/chart/LinePlot';
import { useRouter } from "next/router";



export default function StockData({ searchData }) {

  const router = useRouter();
  const { id } = router.query

  return (

    <div>
      {
        id == "overview" ? (
          <Overview>
            <div className="bg-gray-200">
              <div className="text-3xl m-4">メルカリ</div>
              <div className="grid">
                <div className='col-span-2'>
                  <Sidebar />
                </div>
                <div className="text-center col-span-7">

                </div>
              </div>
            </div>
          </Overview>
        ) : id == "stock" ? (
          <Overview>
    <div className="bg-gray-200">
      <div className="text-3xl m-4">stock</div>
      <div className="flex">
        <div className='flex'>
          <Sidebar />
        </div>
       
      </div>
    </div>
          </Overview>
        ) : id == "financial" ? (
          <Overview>
            <div className="bg-gray-200">
              <div className="text-3xl m-4">メルカリ</div>
              <div className="flex">
                <div className='flex'>
                  <Sidebar />
                </div>
                <div className="text-center grow">
                  <div className='flex m-8 justify-center'>
                    <div className='m-8'>
                      <LinePlot_revenue />
                      <div className='flex items-center justify-between mt-8'>
                        <div>
                          <FontAwesomeIcon icon={faPersonRunning} size="5x" style={{ color: 'red' }} />
                        </div>
                        <div>
                          <p className='text-xl'>前期から</p>
                          <p className='text-3xl font-bold'>7.4%</p>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUp} size="5x" />
                        </div>
                      </div>
                    </div>
                    <div className='m-8'>
                      <LinePlot_pretaxmargin />
                      <div>
                        <div className='flex items-center justify-between mt-8'>
                          <div>
                            <FontAwesomeIcon icon={faRankingStar} size="5x" style={{ color: 'red' }} />
                          </div>
                          <div>
                            <p className='text-xl'>前期から</p>
                            <p className='text-3xl font-bold'>7.4%</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={faUp} size="5x" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='m-8'>
                      <LinePlot_totalassets />
                      <div>
                        <div className='flex items-center justify-between mt-8'>
                          <div>
                            <FontAwesomeIcon icon={faRankingStar} size="5x" style={{ color: 'red' }} />
                          </div>
                          <div>
                            <p className='text-xl'>前期から</p>
                            <p className='text-3xl font-bold'>7.4%</p>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={faUp} size="5x" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex m-8 justify-center'>
                    <div className='m-8'>
                      <LinePlot_capitalratio />

                      <div className='flex items-center justify-between mt-8'>
                        <div>
                          <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                        </div>
                        <div>
                          <p className='text-xl'>前期から</p>
                          <p className='text-3xl font-bold'>7.4%</p>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUp} size="5x" />
                        </div>
                      </div>
                    </div>
                    <div className='m-8'>
                      <LinePlot_operatingcf />

                      <div className='flex items-center justify-between mt-8'>
                        <div>
                          <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                        </div>
                        <div>
                          <p className='text-xl'>前期から</p>
                          <p className='text-3xl font-bold'>7.4%</p>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUp} size="5x" />
                        </div>
                      </div>
                    </div>
                    <div className='m-8'>
                      <LinePlot_investingcf />

                      <div className='flex items-center justify-between mt-8'>
                        <div>
                          <FontAwesomeIcon icon={faBone} size="5x" style={{ color: 'red' }} />
                        </div>
                        <div>
                          <p className='text-xl'>前期から</p>
                          <p className='text-3xl font-bold'>7.4%</p>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faUp} size="5x" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Overview>
        ) : (
          <></>
        )}
    </div>


  )
}
