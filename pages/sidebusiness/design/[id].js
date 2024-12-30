import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { Design } from '../../../components/layout/sidebusiness/sidebusiness';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "design" ? (
          <Design>
            d
          </Design>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
