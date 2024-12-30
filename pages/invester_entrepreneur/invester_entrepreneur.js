import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Invester } from '../../components/layout/invester/invester';


export default function Home() {
  return (
    <Invester>
      <div>
        <Link href="./plusultra">
          <div>
            <Image
              className="relative w-1/4 mt-1"
              src="/images/perpetualtraveler.png"
              alt="top"
              width={760}
              height={428}
            />
          </div>
        </Link>
      </div>
    </Invester>





  )
}