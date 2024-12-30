import { useRouter } from 'next/router'
import {Excel} from '../../../components/layout/sidebusiness/sidebusiness';



export default function Home() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
    {
      id == "excel" ? (
        <Excel>
        資金管理とリスクリワード
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Excel>
      ) : (
        <></>
      )}
  </div>


  )
}