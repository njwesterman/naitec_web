import Link from "next/link";
import Image from "next/image";
import { getRecentPosts } from "@/lib/blog-data";
import HeroAnimation from "@/components/HeroAnimation";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  TiltCard,
} from "@/components/motion";

const whatWeDo = [
  {
    title: "Build the right thing",
    description:
      "We work with you to define what's needed, avoid over-engineering, and deliver solutions that support real business goals.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Find what's not working",
    description:
      "We review existing systems, processes, and workflows to identify bottlenecks, risks, and areas for improvement.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Simplify and automate",
    description:
      "We reduce manual effort through AI-powered automation, smart integrations, and intelligent workflows that learn and adapt.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Make work easier",
    description:
      "We design tools and workflows your team can actually use, improving efficiency without adding friction.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const expertise = [
  {
    title: "Custom web applications",
    description:
      "Built with React, Angular, and Drupal — the right framework for the right problem.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "AI & intelligent automation",
    description:
      "AI agents, chatbots, predictive analytics, and LLM integrations that streamline operations and reduce costs.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Workflow automation",
    description:
      "Simplify processes and boost productivity with AI-driven automated solutions.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Targeted digital experiences",
    description:
      "High-converting digital experiences built on React and Angular to drive growth and maximise ad-spend.",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
  },
  {
    title: "Digital transformation",
    description:
      "Seamless re-platforming across Drupal, React and Angular with data-driven optimisation.",
    icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
  },
  {
    title: "Marketing and SEO",
    description:
      "AI-enhanced strategies that improve visibility, personalise content, and drive measurable growth.",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

const difference = [
  {
    title: "AI-first thinking",
    description:
      "We identify where AI can have real impact — from automating repetitive tasks to building intelligent customer experiences with LLMs, chatbots, and predictive models.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Modern tech stack",
    description:
      "We build with React, Angular, Next.js, and Drupal — choosing the right tool for each project, not a one-size-fits-all approach.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Customer problem-driven strategies",
    description:
      "We leverage analytics, behavioural science, and AI insights to craft strategies that resonate with your audience.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Integrated experiences",
    description:
      "Our team excels at building customer-facing experiences that work seamlessly with complex backend systems, APIs, and AI services.",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
];

export default function Home() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary md:min-h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

        {/* Animated particle network */}
        <HeroAnimation />

        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] animate-[float_10s_ease-in-out_infinite_reverse] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 animate-[float_12s_ease-in-out_infinite_2s] rounded-full bg-blue-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 pt-32 md:py-28 md:pt-36">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-7xl animate-[fadeSlideUp_0.8s_ease-out_both]">
            You Know Your Business.
            <br />
            <span className="text-accent animate-[fadeSlideUp_0.8s_ease-out_0.3s_both] inline-block">We Know Digital.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]">
            Based in Newcastle NSW, we help businesses
            design, build, and improve digital systems — from AI-powered automation
            and custom web applications to full-scale digital transformation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-[fadeSlideUp_0.8s_ease-out_0.7s_both]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Book Your Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/40"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">What we do</h2>
            <p className="mt-4 max-w-2xl text-text-muted">
              We work with teams to fix, modernise, and build digital systems that
              support how they actually work.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {whatWeDo.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-surface-alt hover:border-accent/30 hover:shadow-md"
              >
                View All Services
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Our Expertise */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <FadeIn direction="left">
              <h3 className="text-2xl font-bold text-primary md:text-3xl">
                Our Expertise At A Glance
              </h3>
              <p className="mt-4 text-text-muted">
                At NAITEC Digital, we bring a unique blend of creativity, technical
                expertise and data-driven insights to deliver impactful digital
                solutions.
              </p>
              <div className="mt-8 h-[500px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/nd_landing_hero_1.jpg"
                  alt="NAITEC Digital"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
            <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.08}>
              {expertise.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group h-full rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:rotate-6">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              What sets us apart
            </h3>
            <p className="mt-4 max-w-3xl text-white/60">
              With decades of experience, we&apos;ve perfected the art of creating
              seamless digital experiences that drive results.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2" staggerDelay={0.12}>
            {difference.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10 hover:-translate-y-1">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Blog Previews */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute left-1/3 bottom-10 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Insights &amp; Updates
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {recentPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-primary-light">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-primary transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                      Read More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center rounded-full border border-border px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-surface-alt hover:border-accent/30 hover:shadow-md"
              >
                View All Posts
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <ScaleIn>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Get started today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Start your journey towards smarter business solutions with a free,
              no-obligation consultation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}

