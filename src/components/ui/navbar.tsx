import Link from "next/link";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Nexus
                    </span>
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
                    <Link href="/#services" className="transition-colors hover:text-primary">Services</Link>
                    <Link href="/#contact" className="hidden md:block px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}
