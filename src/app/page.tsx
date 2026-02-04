import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />

        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span>🚀 Elevate your digital presence</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Marketing that <br />
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Ignites Growth</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            We build data-driven strategies that convert. From SEO to social media, we turn your audience into loyal customers using cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="rounded-full h-12 px-8 text-base">
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base backdrop-blur-sm bg-background/50 hover:bg-background/80">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">Comprehensive marketing solutions tailored to your business goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Data Analytics",
                description: "Turn numbers into actionable insights. We track every click to optimize your ROI."
              },
              {
                icon: Globe,
                title: "Global SEO",
                description: "Rank higher and reach further. Our SEO strategies put your brand on the map."
              },
              {
                icon: Zap,
                title: "Viral Content",
                description: "Create content that resonates. We craft stories that engage and convert."
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border bg-background/50 p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted by Industry Leaders</h2>
              <p className="text-lg text-muted-foreground">
                We've helped hundreds of innovative companies scale their digital presence and achieve record-breaking growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {["rOar", "NEXUS", "Vertex", "Lumina"].map((brand) => (
                  <div key={brand} className="flex items-center justify-center h-16 rounded-lg border bg-secondary/20">
                    <span className="font-bold text-xl text-muted-foreground/70">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl border bg-background/60 p-8 backdrop-blur-md shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium leading-relaxed mb-6">
                  "Working with Nexus was the best decision for our growth. Their data-driven approach increased our leads by 300% in just 6 months."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-500" />
                  <div>
                    <div className="font-bold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CMO at TechFlow</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl">Ready to scale your business?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Join the ranks of successful brands that trust Nexus for their digital marketing needs.</p>
          <Button size="lg" className="rounded-full h-14 px-10 text-lg">
            Get Your Free Audit
          </Button>
        </div>
      </section>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
