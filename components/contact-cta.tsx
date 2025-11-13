"use client";

import { useState } from "react";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    setIsOpen(false);
  };

  return (
    <Section className="py-24 lg:py-32">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal to-teal-700 px-8 py-16 text-center sm:px-16 lg:px-24 lg:py-24">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-mint-100">
              Let's talk about your idea and how we can bring it to life.
            </p>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group mt-8 bg-white text-teal hover:bg-mint-50"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start a project</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
      </FadeIn>
    </Section>
  );
}