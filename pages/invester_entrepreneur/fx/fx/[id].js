import { useRouter } from 'next/router'
import React from 'react';
import { Child } from '../../../../components/layout/invester/mind/mind';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "fx_detail" ? (
          <Fx>
          <div className="text-center w-2/4">
            <div className="text-3xl m-4">
              FXとは
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
    
            </div>
    
          </div>
        </Fx>
        ) : id == "bank" ? (
          <Fx>
          <div className="text-center w-2/4">
            <div className="text-3xl m-4">
              取引口座開設
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  
          </div>
  
          <div className="w-1/4">
            <div className="text-3xl m-4">
              <Link href="https://perpetualtravelerchoja.com/%e3%81%8a%e3%81%99%e3%81%99%e3%82%81fx%e4%bc%9a%e7%a4%be/494/">
              おすすめのFX会社
              </Link>
            </div>
            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
              <iframe src="https://perpetualtravelerchoja.com/%e3%81%8a%e3%81%99%e3%81%99%e3%82%81fx%e4%bc%9a%e7%a4%be/494/" width="750" height="300" frameboader="0"></iframe>
            </div>
          </div>
   </Fx>
        ) : id == "mt4" ? (
          <Fx>
          <div className="text-center w-2/4">
            <div className="text-3xl m-4">
              MT4の準備
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  
          </div>
   </Fx>
        ) : id == "risk" ? (
          <Fx>
          <div className="text-center w-2/4">
            <div className="text-3xl m-4">
              資金管理とリスクリワード
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  
          </div>
   </Fx>
        ) : id == "turningpointtrader" ? (
          <Fx>
          <div className="text-center w-2/4">
            <div className="text-3xl m-4">
              TURNING POINT TRADERについて 
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  
          </div>
   </Fx>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
