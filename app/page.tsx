import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { InViewOnce } from "@/components/motion/in-view-once";
import AnimatedGrid from "@/components/animated-grid";
import Wordmark from "@/components/brand/wordmark";
import TrustLogos from "@/components/trust-logos";
import FeatureCard from "@/components/feature-card";
import ContactCTA from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Sparkles,
  Rocket,
  Blocks,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <AnimatedGrid />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-4 py-2 text-sm font-medium text-teal-700">
              <Sparkles className="h-4 w-4" />
              <span className="shimmer animate-shimmer">
                from idea to production
              </span>
            </div>
          </FadeIn>

          <Wordmark />

          <SlideUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
              We design, build, and launch high-polish web apps for founders and
              teams.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="group">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                See our work
              </Button>
            </div>
          </SlideUp>
        </div>
      </Section>

      {/* Trust Logos */}
      <Section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <InViewOnce>
          <TrustLogos />
        </InViewOnce>
      </Section>

      {/* What We Do */}
      <Section className="py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What we do
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                End-to-end product development for startups and growing
                companies.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="Build"
              description="Modern web apps with React, Next.js, TypeScript, and best-in-class tooling."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Scale"
              description="Infrastructure and architecture that grows with your business needs."
            />
            <FeatureCard
              icon={<Blocks className="h-6 w-6" />}
              title="Integrate"
              description="Seamless API integrations, third-party services, and custom solutions."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Design systems"
              description="Component libraries and design systems that maintain consistency."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Audits"
              description="Performance, security, and accessibility reviews for existing apps."
            />
            <FeatureCard
              icon={<Rocket className="h-6 w-6" />}
              title="Launch"
              description="Deploy with confidence using CI/CD, monitoring, and analytics."
            />
          </StaggerChildren>
        </InViewOnce>
      </Section>

      {/* Process */}
      <Section className="bg-slate-50 py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our process
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                A proven workflow from concept to deployment.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Scope",
                description:
                  "Define requirements, goals, and technical architecture together.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Create wireframes, prototypes, and high-fidelity designs.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Develop features iteratively with regular check-ins and demos.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Deploy, test, and hand off with documentation and training.",
              },
            ].map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-bold text-mint/20">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </InViewOnce>
      </Section>

      {/* Work Preview */}
      <Section className="py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Recent work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Projects we're proud of.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SaaS Dashboard",
                description: "Analytics platform for B2B customers",
                tags: ["Next.js", "TypeScript", "Tailwind"],
              },
              {
                title: "E-commerce Store",
                description: "High-converting Shopify storefront",
                tags: ["React", "Shopify", "Framer"],
              },
              {
                title: "Mobile App MVP",
                description: "React Native fitness tracking app",
                tags: ["React Native", "Firebase", "Expo"],
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden border-slate-200 transition-all hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-mint-50" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </StaggerChildren>
        </InViewOnce>
      </Section>

      {/* Testimonials */}
      <Section className="bg-slate-50 py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What clients say
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Blank Slate delivered our MVP in record time. Their attention to detail and code quality is outstanding.",
                author: "Sarah Chen",
                role: "Founder, TechStart",
              },
              {
                quote:
                  "Working with them felt like having a senior engineering team on demand. Highly recommended.",
                author: "Michael Rodriguez",
                role: "CTO, Growth Co",
              },
              {
                quote:
                  "They transformed our design mockups into a production-ready app that exceeded our expectations.",
                author: "Emily Watson",
                role: "Product Lead, ScaleUp",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-slate-200 p-8">
                <p className="text-slate-700">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </StaggerChildren>
        </InViewOnce>
      </Section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
}
