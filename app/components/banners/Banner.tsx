'use client'


import {useRouter} from "next/navigation"
import Card from "@/app/UI/cards/Card";
import Link from "next/link";


const data = {
    title: "Own the power of your money",
    desc: "Crypto, stocks, futures, and more — trusted by millions worldwide",
}


const Banner = () => {
    const router = useRouter()

    return (
        <>
            <section className="bg-black banner h-[70vh] px-0 py-10">
                <div className="container">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-white  mb-11 font-mono text-3xl md:text-6xl lg:text-6xl  wrap-break-word">
                            {data.title}
                        </h1>
                        <p className={'max-[375px]:text-justify font-bold text-gray-400 text-xl font-mono text-wrap text-center '}>
                            {data.desc}
                        </p>
                        <div className={'grid grid-cols-3 max-[440px]:grid-cols-2 max-[390px]:w-full max-[390px]:grid-cols-1 max-[440px]:gap-3 rounded-4xl animate-pulse transition ' +
                            'duration-300 hover:shadow-[inset_4px_4px_30px_0_hsla(0,0%,100%,.15)] shadow-gray-700 ' +
                            ' gap-10 shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] mt-10'}>
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Banner