import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Header_only } from '../../components/header/header';
import { Blog, Buppan, Excel, Marketing, Real_estate, Movie, Design } from '../../components/sidebusiness';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const back= "/sidebusiness/sidebusiness"


    const blogs = [
        { id: 1, name: "ライティング", title: "", href: "./blog/blog_detail" },
        { id: 2, name: "アウトプットを関数で加速", title: "", href: "./output" },
    ];

    const buppans = [
        { id: 1, name: "ebay輸出", title: "", href: "./buppan/ebay" },
        { id: 2, name: "国内転売", title: "", href: "./buppan/domestic_resale" },
        { id: 3, name: "AmazonOEM", title: "", href: "./buppan/amazon" },
        { id: 4, name: "日本輸入", title: "", href: "./buppan/japan_import" },
        { id: 5, name: "検索", title: "", href: "./buppan/search" },
        { id: 6, name: "Shopify", title: "", href: "./buppan/shopify" }
    ];

    const designs = [
        { id: 1, name: " Adobe", title: "", href: "./design/design" },
        { id: 2, name: "blender", title: "", href: "" },
    ];

    const excels = [
        { id: 1, name: "インプットの速度を上げる", title: "", href: "./excel/input" },
        { id: 2, name: "アウトプットを関数で加速", title: "Djangoブログ新機能追加", href: "./excel/output" },
        { id: 3, name: "VLOOKUP関数を極める", title: "ポートフォリオ構築", href: "" },
    ];

    const marketings = [
        { id: 1, name: "マーケティング", title: "Djangoブログシステム構築", href: "./marketing/marketing" },
    ];

    const movies = [
        { id: 1, name: "動画", title: "", href: "./movie/movie" },
    ];

    const real_estates = [
        { id: 1, name: "借金をしないで不動産ビジネスを始める", title: "", href: "./real_estate/real_estate_detail" },
    ];


    return (
        <div>
            {
                id == "blog_chapter" ? (
                    <div className='min-h-screen'>
                    <Header_only />
                    <div className='flex justify-start'>
                        <Link href={back}>
                            <div className="text-4xl pl-10 pt-4">
                                <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-1/2 m-10 ">
                            <div className='text-center'>
                                <h1>Blog</h1>
                                <p>Django+React+Nextjs</p>
                            </div>
                            <div className="flex flex-col mb-5">
                                {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : id == "design_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>デザイン</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {designs && designs.map((design) => <Design key={design.id} design={design} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "excel_chapter" ? (
                    <div className='min-h-screen'>
                    <Header_only />
                    <div className='flex justify-start'>
                        <Link href={back}>
                            <div className="text-4xl pl-10 pt-4">
                                <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-1/2 m-10 ">
                            <div className='text-center'>
                                <h1>Excel</h1>
                                <p>Django+React+Nextjs</p>
                            </div>
                            <div className="flex flex-col mb-5">
                                {excels && excels.map((excel) => <Excel key={excel.id} excel={excel} />)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : id == "marketing_chapter" ? (
                    <div className='min-h-screen'>
                    <Header_only />
                    <div className='flex justify-start'>
                        <Link href={back}>
                            <div className="text-4xl pl-10 pt-4">
                                <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-1/2 m-10 ">
                            <div className='text-center'>
                                <h1>マーケティング</h1>
                                <p></p>
                            </div>
                            <div className="flex flex-col mb-5">
                                {marketings && marketings.map((marketing) => <Marketing key={marketing.id} marketing={marketing} />)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : id == "real_estate_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>不動産投資</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {real_estates && real_estates.map((real_estate) => <Real_estate key={real_estate.id} real_estate={real_estate} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "buppan_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>物販</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {buppans && buppans.map((buppan) => <Buppan key={buppan.id} buppan={buppan} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "movie_chapter" ? (
                    <div className='min-h-screen'>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>動画</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {movies && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
