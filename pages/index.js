import Layout from '../components/Layout';
import Link from 'next/link';

import React from 'react';
import News from "../components/news/news";
import { getAllPostsData } from '../lib/newss' 


export default function Home({newss}) {
  return (
    <Layout>
      <div className="bg-gray-200">
        <div className="">
          <div className="overflow-hidden mt-10 mr-52 ml-52 w-3/5 mx-auto">
            <video autoPlay muted src="/videos/Skyscrapers.mp4"></video>
          </div>
          <div className="md:inline-flex mx-auto justify-center w-full">
            <div className="text-center md:w-1/2 h-96 mx-8">
              <div className="text-3xl m-4">
                お知らせ
              </div>い
              <div className="border-2 border-black">
                {newss && newss.map((news) => <News key={news.id} news={news} />)}
              </div>

            </div>
            <div className="md:w-1/2 mx-8 h-80">
              <div className="text-3xl m-4 text-center">
                イベント
              </div>
              <div className="border-2 border-black h-full">
                2006年から2009年の間に約75000店が新規参入しそれを上回る約164000店がつぶれている

                どこで儲けを出すのか
              </div>

            </div>

          </div>
        
        </div>
      </div>

    </Layout>
  )
}


export async function getStaticProps() {
  const newss = await  getAllPostsData();

  return {
    props: { newss },
    revalidate: 3,
  };
}