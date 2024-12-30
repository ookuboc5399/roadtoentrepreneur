import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {Sidebusiness} from '../../components/layout/sidebusiness/sidebusiness';



export default function Home() {
  return (
      <Sidebusiness>
        <div className="text-center w-2/4">
          <div className="text-3xl m-4">
            Youtube
          </div>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>
    </Sidebusiness>
  )
}
