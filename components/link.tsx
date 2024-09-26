import Link from "next/link";

export default function NavLink({ title, href }: {title: string, href: string}) {
    return (
        <Link color="foreground" className="p-0 m-0" href={href}>
            {title}
        </Link>
    )
}