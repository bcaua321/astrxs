"use client"

import { usePathname } from 'next/navigation';

export default function Footer() {
    const currentPath = usePathname();

    if(currentPath !== '/') {
        return;
    }

    return (
        <footer className="w-full flex items-center justify-center py-3 mt-10">
            <p className="text-sm font-medium">Made with &#10084;&#65039; by Breno Prestes.</p>
        </footer>
    )
}