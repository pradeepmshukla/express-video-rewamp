import Image from "next/image"
import Link from "next/link"

const Header = () =>{
    return <div className="wrapper">
        <div className="container-fluid px-[70px] py-4 mx-auto flex items-center justify-between  uppercase font-semibold">
            <div className="logo-text-wrapper flex gap-4 items-center justify-center">
                <Image width="179" height="64" alt="logo" src="/header_logo.png" />
            </div>
            <div className="quick-links flex gap-10">
                <Link href="/">home</Link>
                <Link href="/">services</Link>
                <Link href="/">our process</Link>
                <Link href="/">blog</Link>
                <Link href="/">contact us</Link>
            </div>
        </div>
    </div>
}

export default Header