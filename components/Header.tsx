import Image from 'next/image'
import Fwywd from '../public/introduction/logo.png'

const ITEMS = ["about", "skills", "values", "future"];

export default function Header() {
    return (
        <>
        {/*--------header---------*/}
        <header className="desktop:flex desktop:h-[90px]">
        <div className="mobile:text-center">
        <Image
        src={Fwywd}
        width={200}
        height={100}
        />
        </div>
        <nav className="desktop:ml-auto desktop:leading-[90px] desktop:flex-nowrap mobile:mt-[-20px] mobile:pb-[15px]">
        <ul className="flex mobile:justify-center">
            {ITEMS.map((item) => {
            return (
            <li key={item} className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">
                <a href={`#${item}`} className="uppercase">
                    {item}
                </a>
            </li>
                );
            })}  
        </ul>
        </nav>
    </header>
    </>
    )
}

