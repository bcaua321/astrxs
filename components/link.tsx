import Link from "next/link";

type NavLinkProps = {
    theme?: string,
    title: string,
    href: string
}

export default function NavLink({ theme, title, href }: NavLinkProps) {
    // passa para verificar se eh dark theme ou nao
    // depois faz uma condicional para retornar de acordo com o theme
    console.log(theme)
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