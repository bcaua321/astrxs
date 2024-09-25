import Link from "next/link";

export default function NavLink({ title, href }: {title: string, href: string}) {
    return (
        <Link color="foreground" className="font-medium" href={href}>
            {title}
        </Link>
    )
}