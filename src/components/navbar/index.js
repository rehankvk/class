"use client"


import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";


export default function Navbar() {
    return (
        <NavigationMenu className="py-4 shadow-md w-full mx-auto flex justify-center items-center">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href={'/'}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/profiles'}>Profile</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'/gallery'}>Gallery</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}