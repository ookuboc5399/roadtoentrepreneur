import Link from 'next/link';
import {Header_sidebusiness} from '../../header/header';
import {ChapterReal, Chaptersidebusiness, ChapterMarketing, ChapterDesign, Chapterebay, ChapterDomestic_resale, Chapteramazon, Chapterjapan,ChapterShopify, ChapterMovie,Chapterblog} from '../../chapter/sidebusiness/chapter_sidebusiness';

const back_buppan= "/sidebusiness/buppan_chapter"

export function Amazon(props) {
  return (
    <div class="min-h-screen">
     <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chapteramazon />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Sidebusiness(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chaptersidebusiness />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Excel(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chapterexcel />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Writting(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWrittinhg/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Domestic_resale(props) {
  return (
    <div class="min-h-screen">
    <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDomestic_resale/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Japan(props) {
  return (
    <div class="min-h-screen">
    <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chapterjapan />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Ebay(props) {
  return (
    <div class="min-h-screen">
     <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chapterebay/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Design(props) {
  return (
    <div class="min-h-screen">
     <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Search(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="">
      <Link href={back_buppan}>
                <div className="text-4xl">
                  <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" style={{ color: 'white' }} />
                </div>
              </Link>
          <div className="">
            {props.children}
          </div>
      </div>
    </div>
  )
}

export function Shopify(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterShopify/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Marketing(props) {
  return (
    <div class="">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterMarketing />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Movie(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterMovie />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Blog(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <Chapterblog/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Real(props) {
  return (
    <div class="min-h-screen">
      <Header_sidebusiness/>
      <div className="flex ">
        <div className="w-1/4">
          <ChapterReal />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}