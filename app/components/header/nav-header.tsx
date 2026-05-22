const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre Mim", href: "#sobre-mim" },
    { label: "Contato", href: "#contact" },
]

export default function NavHeader() {
    return (
        <nav>
            <ul className="flex gap-8">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href}
                            className="text-foreground hover:text-muted duration-200">
                            {item.label}
                        </a>
                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}