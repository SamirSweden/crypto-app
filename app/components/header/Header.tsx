'use client'

import Link from "next/link";
import {useState , useRef , useEffect} from "react";
import {usePathname} from "next/navigation";
import { Equal, X} from "lucide-react";
import Image from "next/image";
const logoDeveloper = "https://companieslogo.com/img/orig/kraken_BIG.D-7509e204.png?t=1720244494"


const links = [
    {
        path:'/docs',
        label: "Next.js старт"
    },
    {
        path:'/oauth',
        label: "oauth"
    },
    {
        path:'https://kraken-umber.vercel.app/',
        label: "kraken"
    },
];

export default function  Header () {
    const pathname = usePathname()
    const [open , setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        function handleMouse(event: MouseEvent) {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleMouse )

        return () => {
            document.removeEventListener("mousedown" , handleMouse)
        }
    }, [])

    return (
        <>
            <header className="relative max-w-5xl mx-auto px-4">

                <div className="flex justify-between items-center p-4 bg-black text-white">
                    <Link href={'/'}>
                        <Image src={logoDeveloper} width={150} height={150} alt={'kraken'} />
                    </Link>

                    <button onClick={() => setOpen(!open)} className={'z-50 outline-none border-none'}>
                        {open ? <X size={30} /> : <Equal size={30} />}
                    </button>
                </div>

                {/* Выпадающее меню */}
                <div
                    ref={menuRef}
                    className={`
          absolute top-0 left-0 w-full
           text-black
          transition-all duration-300
          ${open ? "h-[700px] p-6" : "h-0 overflow-hidden"}
          rounded-b-5xl shadow-lg bg-transparent backdrop-blur-lg
        `}
                >
                    <nav className="flex flex-col gap-4 mt-12">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={pathname === link.path ? "font-bold text-gray-400" : "text-white"}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

            </header>
        </>
    )
}