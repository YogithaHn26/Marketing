import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLOG_POSTS = [
    {
        id: 1,
        slug: "future-of-digital-marketing-2025",
        title: "The Future of Digital Marketing in 2025",
        description: "Discover the emerging trends that will shape the marketing landscape in the coming years. AI, Voice Search, and more.",
        date: "Feb 4, 2026",
        category: "Trends"
    },
    {
        id: 2,
        slug: "seo-strategies-for-startups",
        title: "Essential SEO Strategies for Startups",
        description: "Learn how to build a strong organic presence from day one with these proven SEO techniques.",
        date: "Jan 28, 2026",
        category: "SEO"
    },
    {
        id: 3,
        slug: "content-marketing-roi",
        title: "Maximizing ROI with Content Marketing",
        description: "How to measure and improve the return on investment of your content marketing efforts.",
        date: "Jan 15, 2026",
        category: "Analytics"
    },
    {
        id: 4,
        slug: "social-media-algorithms-explained",
        title: "Social Media Algorithms Explained",
        description: "Deep dive into how Instagram, TikTok, and LinkedIn algorithms prioritize content in 2026.",
        date: "Jan 05, 2026",
        category: "Social Media"
    },
    {
        id: 5,
        slug: "email-marketing-automation",
        title: "Email Marketing Automation: A Guide",
        description: "Set up powerful email workflows that nurture leads and drive sales 24/7.",
        date: "Dec 12, 2025",
        category: "Email"
    },
    {
        id: 6,
        slug: "branding-in-digital-age",
        title: "Building a Brand in the Digital Age",
        description: "Why brand identity matters more than ever and how to create a lasting impression online.",
        date: "Nov 30, 2025",
        category: "Branding"
    }
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                    Insights & Resources
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Expert articles, guides, and news to help you stay ahead in the fast-paced world of digital marketing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                        <Card className="h-full border-muted/40 hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm bg-card/50">
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3 text-base">
                                    {post.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
