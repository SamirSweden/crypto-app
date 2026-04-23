


const datas = [
    {
        id:1,
        label: "Since 2011",
        text: "Powering secure markets"
    },
    {
        id:2,
        label: "$2T+",
        text: "Powering secure markets"
    },
    {
        id:3,
        label: "Forbes",
        text: "Best crypto exchange 2026"
    },
];


export default  function Card(){
    return <>
        {datas.map((data) => (
            <div key={data.id} className={'flex flex-col items-center  py-7 px-6  max-[842px]:px-1 max-[440px]:py-3 bg-transparent  '}>
                <h2 className={'text-white font-mono max-[500px]:text-lg'}>{data.label}</h2>
                <p className={'text-gray-500 text-sm text-center animate-pulse text-wrap'}>{data.text}</p>
            </div>
        ))}
    </>
}



