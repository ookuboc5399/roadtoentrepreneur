import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Header_only } from '../../components/header/header';
import { AI, Future , Tecnology } from '../../components/future_world';

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const back_future = "/future_world/future_world"

    const ais = [
        { id: 1, name: "AIについて", title: "", href: "./AI_VR/ai_detail" },
        { id: 2, name: "Web3", title: "", href: "./AI_VR/web3_detail" },
        { id: 3, name: "モビリティ革命", title: "", href: "./child_detail" },
        { id: 4, name: "EdTech", title: "", href: "./edtech_detail" },
    ];

    const futures = [
        { id: 1, name: "日本の未来・アフリカの未来・中国の未来", title: "", href: "./future/japan/detail" },
        { id: 4, name: "過去から未来へ", title: "", href: "./future/future" },
    ];

    const tecnologies = [
        { id: 1, name: "IOWN・クラウド・eアクスル", title: "", href: "./cloud/cloud_detail" },
        { id: 2, name: "Saas・Maas・CASEについて", title: "", href: "./Saas/saas_detail" },
        { id: 3, name: "Fintech・Edtech・Mobility", title: "", href: "./Fintech/fintech_detail" },
    ];


    return (
        <div>
            {
                id == "ai" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back_future}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1></h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {ais && ais.map((ai) => <AI key={ai.id} ai={ai} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "future" ? (
                    <div>
                    <Header_only />
                    <div className='flex justify-start'>
                        <Link href={back_future}>
                            <div className="text-4xl pl-10 pt-4">
                                <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-1/2 m-10 ">
                            <div className='text-center'>
                                <h1>未来予測</h1>
                                <p>Django+React+Nextjs</p>
                            </div>
                            <div className="flex flex-col mb-5">
                                {futures && futures.map((future) => <Future key={future.id} future={future} />)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : id == "new_tecnology" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back_future}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>New Tecnology</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {tecnologies && tecnologies.map((tecnology) => <Tecnology key={tecnology.id} tecnology={tecnology} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_javascript_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href={back_future}>
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>JavaScript</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {javascripts && javascripts.map((javascript) => <JavaScript key={javascript.id} javascript={javascript} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == 5 ? (
                    j
                ) : id == 6 ? (
                    h
                ) : id == 7 ? (
                    f
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
