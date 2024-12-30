import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getPostList } from '../../lib/posts'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import Mypage from '../../components/layout/mypage/mypage'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Index = ({ staticPosts }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state) => state.auth.user)

  const { data: posts, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/post_list/`,
    fetcher,
    {
      fallbackData: staticPosts,
    }
  )

  useEffect(() => {
    mutate()
  }, [mutate])

  if (router.isFallback || !posts) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <Mypage>
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">人生の究極の目標</h1>
          </div>
          <div className="flex justify-around space-x-4">
            <div className="text-2xl max-w-sm">
              <p>君が想像したことはすべて実現できる。</p>
            </div>
            <div className="text-2xl max-w-sm">
              <p>仕事は人生のすべてではないけれど</p>
              <p>たくさんの誰かとの出逢いが喜びに</p>
              <p>かわり、時に苦しみ、とことん自分</p>
              <p>と向き合うことでほかの誰のもので</p>
              <p>もない君だけの生き方になる。</p>
            </div>
            <div className="text-2xl max-w-sm">
              <p>夢あるところに行動がある</p>
              <p>行動は習慣をつくり</p>
              <p>習慣は人格をつくり</p>
              <p>人格は運命をつくる</p>
            </div>
          </div>
        </div>

        {posts && posts.length > 0 && (
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((data) => (
                <div className="border rounded-lg overflow-hidden" key={data.id}>
                  <Link href={`/post/${data.id}`}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Mypage>
  )
}

export async function getStaticProps() {
  try {
    const staticPosts = await getPostList()
    return {
      props: { 
        staticPosts: staticPosts || [] 
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: { 
        staticPosts: [] 
      },
      revalidate: 1,
    }
  }
}

export default Index