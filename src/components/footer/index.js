import Image from "next/image"
import Link from "next/link"


export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="w-full p-8 bg-white">
            <div
                className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
                <Image width={40} height={40} src={'/next.svg'} alt="logo-footer" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/profiles'}>Profiles</Link>
                    </li>
                    <li>
                        <Link href={'/gallery'}>Gallery</Link>
                    </li>
                </ul>
            </div>
            <span className="block my-8 border-t border-blue-gray-50" />
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
                © {year} 12 TKJ 3.
            </p>
        </footer>
    )
}