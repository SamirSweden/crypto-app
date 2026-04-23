
const data = {
    title: "Own the power of your money",
    desc: "Crypto, stocks, futures, and more — trusted by millions worldwide",

}


const Banner = () => {
    return (
        <>
            <section className="bg-black banner h-screen py-20">
                <div className="container">
                    <div className="flex flex-col items-center justify-center h-[50%]">
                        <h1 className="text-white mb-11 font-mono text-3xl md:text-6xl lg:text-6xl  wrap-break-word">
                            {data.title}
                        </h1>
                        <p className={'text-gray-400 text-xl font-mono text-wrap text-center '}>
                            {data.desc}
                        </p>
                        <div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default Banner