import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Simulating a database fetch
const getPost = (slug: string) => {
    const posts: Record<string, any> = {
        "future-of-digital-marketing-2025": {
            title: "The Future of Digital Marketing in 2025",
            content: `
        <p class="mb-4">The digital marketing landscape is evolving at an unprecedented pace. As we approach 2025, several key trends are emerging that will redefine how businesses connect with their audiences.</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">1. AI-Driven Personalization</h2>
        <p class="mb-4">Artificial Intelligence is no longer just a buzzword; it's the backbone of modern marketing. In 2025, we'll see AI not just analyzing data, but actively creating personalized experiences for each user.</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">2. Voice Search Optimization</h2>
        <p class="mb-4">With smart speakers becoming ubiquitous, optimizing for voice search is crucial. It's about conversational keywords and providing direct answers.</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">3. Interactive Content</h2>
        <p class="mb-4">Static content is losing its charm. Interactive quizzes, polls, and augmented reality ads are increasingly effective at capturing attention.</p>
        <p class="mb-4">Stay ahead of the curve by adopting these strategies early and watching your engagement soar.</p>
      `,
            date: "Feb 4, 2026",
            author: "Alex Rivera",
            category: "Trends"
        },
        "seo-strategies-for-startups": {
            title: "Essential SEO Strategies for Startups",
            content: "<p>Coming soon...</p>",
            date: "Jan 28, 2026",
            author: "Sarah Jones",
            category: "SEO"
        }
    };
    return posts[slug] || null;
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="container mx-auto px-4 py-16 max-w-4xl">
            <Link href="/blog">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Button>
            </Link>

            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</div>
                    <div className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</div>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
            </div>

            <div className="relative aspect-video w-full bg-muted rounded-xl mb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-6xl font-bold">
                    Cover Image
                </div>
            </div>

            <div
                className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr className="my-12 border-muted" />

            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Share this article</h3>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </article>
    );
}
