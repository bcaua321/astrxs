import Link from "next/link";

type NavLinkProps = {
    theme?: string,
    title: string,
    href: string
}

export default function NavLink({ theme, title, href }: NavLinkProps) {
    if(theme === "light") 
        return (
            <Link className="transition font-medium text-foreground/70 hover:text-primary/80 hover:bg-slate-300/70 hover:p-2 p-2 rounded-full" href={href}>
                {title}
            </Link>
        )


    return (
        <Link className="transition font-medium hover:text-primary/80 hover:bg-gray-300/15 hover:p-2 p-2 rounded-full" href={href}>
            {title}
        </Link>
    )  
}