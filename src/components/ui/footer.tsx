import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold">Nexus</span>
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            Elevating brands through digital excellence.
                        </p>
                    </div>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground">Privacy</Link>
                        <Link href="#" className="hover:text-foreground">Terms</Link>
                        <Link href="#" className="hover:text-foreground">Twitter</Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Nexus Marketing. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
